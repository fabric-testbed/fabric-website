---
title: Measurement Framework Timestamp Service
slug: measurement-framework-timestamp-service
date: "2023-04-20"
date_modified: "2023-04-20"
author: Pinyi Shi
status: pending
wp_id: 3550
views: 1
categories:
  - Measurement Framework API (MFlib)
---

Getting accurate timestamps of packets and events is important in computer networks and systems. The Measurement Framework Timestamp Service provides users with an approach to recording accurate timestamps of packets and events on the Fabric testbed. The service takes advantage of the Precision Time Protocol (PTP) installed by the Measurement Framework and queries the PTP clock to get accurate timestamps in nano second precision. It also provides the option for users to store the timestamp results in databases such as InfluxDB, which can be installed by the Measurement Framework as a service. Experimenters can log in to the nodes in their slices and make calls in the terminal or use Jupyter Notebooks remotely to record timestamps of both packets and events.

## How It Works

Experimenters can use the methods provided by the Measurement Framework Library, e.g, [mflib.py](https://github.com/fabric-testbed/mflib/blob/main/mflib/mflib.py) to control multiple services, and the timestamp service is one among them. The operations are implemented by the Ansible playbooks running on the measurement node. For example, when users create the timestamp service, the measurement node creates directories on experiment nodes and copies the service files there. When users start the timestamp service, a Docker container will be up and running on the experiment nodes. Users can then call the applications inside the docker container to record timestamps of both packets and events. When users decide to stop or remove the service, the Docker container will stop running and will be finally removed along with the files and images pulled.

Experimenters can choose to record or get the timestamps of packets or events by directly interacting with the timestamptool executable on experiment nodes or through notebooks on JupyterHub. To record packet timestamps, **tcpdump** will be triggered to generate a .pcap file which will be later filtered by **tshark** and written to another file called packet.json. To record events, the program will query the system **PTP** **clock** and write to a file called event.json. Both the .json files will be processed and can be dumped to **InfluxDB**(optionally). To get the timestamps, if users choose to record locally, the program just reads the timestamp results stored in local .json files. If the results have been dumped to InfluxDB, _CURL_ calls will be issued to InfluxDB which is installed on the measurement node for the queries. The following figure shows how the system works.

![](https://learn.fabric-testbed.net/wp-content/uploads/2023/02/image-1-1024x572.png) \*Timestamp service and InfluxDB service\* ![](https://learn.fabric-testbed.net/wp-content/uploads/2023/02/image-2-1024x324.png) \*The process to record/get packet timestamp\* ![](https://learn.fabric-testbed.net/wp-content/uploads/2023/02/image-4-1024x340.png) \*The process to record/get event timestamp\*

## Prerequisite

**The PTP service (LinuxPTP)** installed and running on the experiment nodes is required to get the accurate timestamp from the PTP clock.

## Usage of the Timestamp Service in the Terminal

### Check the Status of Timestamp Service and InfluxDB Service

```
meas-node:~$ sudo docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS          PORTS                    NAMES
986ad937e592   influxdb:2.0   "/entrypoint.sh infl…"   42 seconds ago   Up 41 seconds   0.0.0.0:8086->8086/tcp   influxdb
```
```
node1:~$ sudo docker ps
CONTAINER ID   IMAGE             COMMAND     CREATED          STATUS          PORTS     NAMES
3abe664685eb   timestamp:0.1.0   "python3"   13 seconds ago   Up 12 seconds             timestamp
```

### Record Timestamps for Packets

```
node1:~$ sudo docker exec -i timestamp python3 /root/services/timestamp/service_files/timestamptool.py           record packet -h

usage: timestamptool record packet [-h] -n NAME -i INTERFACE -proto {tcp,udp}
                                   -durn DURATION [-port PORT] [-host HOST]
                                   [-v]

optional arguments:
  -h, --help            show this help message and exit
  -port PORT, --port PORT
                        port of the packets
  -host HOST, --host HOST
                        ip of the host packets are sent to or come from
  -v, --verbose         verbose output

Required named arguments:
  -n NAME, --name NAME  set name for the packet dump
  -i INTERFACE, --interface INTERFACE
                        specify the interface name for tcpdump
  -proto {tcp,udp}, --protocol {tcp,udp}
                        protocol of the packets, select from tcp or udp
  -durn DURATION, --duration DURATION
                        set duration in seconds to run tcpdump
```

Experimenters need to specify the **name** to get the results back later. **The interface, the protocol,** and **the duration**, are used as filters in the tcpdump command. Furthermore, users can specify **port numbers and host IP** as the optional filters in the tcpdump command.

The tcpdump command writes packet traces in a .pcap file. Once the tcpdump process finishes, tshark is used to process the .pcap file and the results are written into another file. Currently, the tshark command uses the standard **5-tuple** (src\_ip, dst\_ip, protocol, src\_port, dst\_port) as the filters. So what the users see when they call the get timestamp function is the timestamp along with the 5-tuple for each packet. Example usage:

```
sudo docker exec -i timestamp python3 /root/services/timestamp/service_files/timestamptool.py           record packet -n test -i ens8 -proto tcp -durn 10 -host 10.0.0.1 -v
```

### Get Timestamps for Packets

When experimenters want to get back the timestamp, they just specify the name using the -n option. The value is used as the key to get the results back.

```
node1:~$ sudo docker exec -i timestamp python3 /root/services/timestamp/service_files/timestamptool.py get packet -h
usage: timestamptool get packet [-h] [-v] -n NAME

optional arguments:
  -h, --help            show this help message and exit
  -v, --verbose         verbose output

Required named arguments:
  -n NAME, --name NAME  name for the packet to query
```

Example command:

```
sudo docker exec -i timestamp python3 /root/services/timestamp/service_files/timestamptool.py get packet -n test -v
```
```
[
 {
    "name": "test0228",
    "timestamp": "2023-02-28T15:27:28.841490692Z",
    "src_ip": "10.0.0.4",
    "dst_ip": "10.0.0.1",
    "protocol": "eth:ethertype:ip:tcp",
    "src_port": 39510,
    "dst_port": 5001
  },
    ....
]
```

The example output is a list of json objects and for each packet, the name and the timestamp in nanosecond precision along with the 5-tuple values are returned.

### Record Timestamp for Event

Similar to recording packet timestamps, recording timestamps for events also requires the **name** argument and the **storage** argument. It in addition requires the **command** argument to indicate what command user used. The description is an optional argument to describe what the users are doing. Example usage:

```
node1:~$ sudo docker exec -i timestamp python3 /root/services/timestamp/service_files/timestamptool.py record event -h
usage: timestamptool record event [-h] -n NAME -event EVENT
                                  [-desc DESCRIPTION] [-v]

optional arguments:
  -h, --help            show this help message and exit
  -desc DESCRIPTION, --description DESCRIPTION
                        Text description
  -v, --verbose         verbose output

Required named arguments:
  -n NAME, --name NAME  set name for the event
  -event EVENT, --event EVENT
                        User input event
```

Example command:

```
ubuntu@085ea981-4f95-4621-8bc2-897f18d8f446-node1:~$ sudo docker exec -i timestamp python3 /root/services/timestamp/service_files/timestamptool.py record event -n test -event ls -v
```

### Get Timestamp for Event

```
node1:~$ sudo docker exec -i timestamp python3 /root/services/timestamp/service_files/timestamptool.py get event -h
usage: timestamptool get event [-h] [-v] -n NAME

optional arguments:
  -h, --help            show this help message and exit
  -v, --verbose         verbose output

Required named arguments:
  -n NAME, --name NAME  name for the event to query
```

Example command:

```
sudo docker exec -i timestamp python3 /root/services/timestamp/service_files/timestamptool.py get event -n test -v
```

The output only returns one record that the user has dumped as below:

```
[
  {
    "timestamp": "2023-02-28T15:32:02.901338899Z",
    "name": "test",
    "event": "ls",
    "description": "none"
  }
]
```

## Usage of the InfluxDB Manager to Dump/Get data

The timestamp service also has a tool that interacts with the InfluxDB service, e.g., dumping or retrieving the timestamp data to/from the InfluxDB container running on the measurement node.

When setting up the InfluxDB, the user name, password, organization name and bucket name can be specified by the user. The token is generated automatically. When dumping/retrieving data to/from InfluxDB, some of the info is required.

Users can upload/download packet/event data, and they need to provide the bucket name, the organization name and the token.

```
node1:~$ sudo docker exec -i timestamp python3 /root/services/timestamp/service_files/influxdb_manager.py upload packet_data -h
usage: influxdb_manager upload packet_data [-h] -b BUCKET -o ORG -t TOKEN

optional arguments:
  -h, --help            show this help message and exit

Required named arguments:
  -b BUCKET, --bucket BUCKET
                        which influx bucket to write to
  -o ORG, --org ORG     org name
  -t TOKEN, --token TOKEN
                        token for authorization


node1:~$ sudo docker exec -i timestamp python3 /root/services/timestamp/service_files/influxdb_manager.py download packet_data -h
usage: influxdb_manager download packet_data [-h] -b BUCKET -o ORG -t TOKEN -n
                                             NAME

optional arguments:
  -h, --help            show this help message and exit

Required named arguments:
  -b BUCKET, --bucket BUCKET
                        which influx bucket to query from
  -o ORG, --org ORG     org name
  -t TOKEN, --token TOKEN
                        token for authorization
  -n NAME, --name NAME  name for the data
```
```
node1:~$ sudo docker exec -i timestamp python3 /root/services/timestamp/service_files/influxdb_manager.py upload event_data -h
usage: influxdb_manager upload event_data [-h] -b BUCKET -o ORG -t TOKEN

optional arguments:
  -h, --help            show this help message and exit

Required named arguments:
  -b BUCKET, --bucket BUCKET
                        which influx bucket to write to
  -o ORG, --org ORG     org name
  -t TOKEN, --token TOKEN
                        token for authorization



node1:~$ sudo docker exec -i timestamp python3 /root/services/timestamp/service_files/influxdb_manager.py download event_data -h
usage: influxdb_manager download event_data [-h] -b BUCKET -o ORG -t TOKEN -n
                                            NAME

optional arguments:
  -h, --help            show this help message and exit

Required named arguments:
  -b BUCKET, --bucket BUCKET
                        which influx bucket to query from
  -o ORG, --org ORG     org name
  -t TOKEN, --token TOKEN
                        token for authorization
  -n NAME, --name NAME  name for the data
```

### Data format from InfluxDB

InfluxDB has its own data format and each row of data can be considered as a Point. As a result, when downloading the data users will also get the data of similar formats.

```
[
 {
    "result": "_result",
    "table": 0,
    "_start": "1970-01-01T00:00:00+00:00",
    "_stop": "2023-02-28T15:49:59.964949429+00:00",
    "_time": "2023-02-28T15:27:28.841490692+00:00",
    "_value": 1,
    "_field": "count",
    "_measurement": "node1-packet-timestamp",
    "dst_ip": "10.0.0.1",
    "dst_port": "5001",
    "name": "test",
    "protocol": "eth:ethertype:ip:tcp",
    "src_ip": "10.0.0.4",
    "src_port": "39510"
  },
  ...
]
```
```
[
  {
    "result": "_result",
    "table": 0,
    "_start": "1970-01-01T00:00:00+00:00",
    "_stop": "2023-02-28T15:53:33.190012185+00:00",
    "_time": "2023-02-28T15:32:02.901338899+00:00",
    "_value": 1,
    "_field": "count",
    "_measurement": "node1-event-timestamp",
    "description": "none",
    "event": "ls",
    "name": "test"
  }
]
```

## Usage of Timestamp Service on JupyterHub

Please refer to [this Jupyter Notebook](https://github.com/fabric-testbed/jupyter-examples/blob/mflib-knit6/fabric_examples/mflib/mf_timestamp_with_mflib.ipynb) for how to use the timestamp service.

The timestamp stamp docker image is also available on [dockerhub](https://hub.docker.com/r/fabrictestbed/timestamp/tags).
