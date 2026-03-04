export interface Stat {
  value:  string;
  label:  string;
  detail?: string;
}

export const stats: Stat[] = [
  { value: "43,808", label: "Total Slices",         detail: "Network slices created since launch" },
  { value: "2,267",  label: "Total Users",           detail: "The number of individuals signed up as FABRIC users" },
  { value: "52",     label: "FABRIC User Publications", detail: "Peer-reviewed papers and reports using FABRIC" },
  { value: "147",    label: "Active Slices",         detail: "Slices currently running on the testbed" },
  { value: "248",    label: "Total Projects",        detail: "Research projects that have used FABRIC" },
];
