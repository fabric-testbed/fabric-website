import React from "react"
import Img from "gatsby-image"
import { Link } from 'gatsby'
import { AnimateOnMount } from "../components/anim"
import styled from "styled-components"
import { SEO } from "../components/seo"
import { Paragraph } from "../components/typography"
import { Card, CardHeader, CardBody } from "../components/card"
import { Module } from "../components/layout"
import { useNSFLogo, useWindowWidth } from "../hooks"
import {
  CapabilitiesModule,
  ContributorsModule,
  MapModule,
  NewsFeedModule,
  PartnersModule,
  TimelineModule,
  TwitterFeedModule,
} from "../components/modules"
import { Container, Row, Col, Visible } from "react-grid-system"

const Blurb = styled(Paragraph)`
  font-family: var(--font-heading);
  color: var(--color-grey);
  line-height: ${(props) => (props.compact ? "1.5" : "1.25")};
  font-size: ${(props) => (props.compact ? "6vw" : "275%")};
  text-align: right;
  margin: 1rem;
  color: var(--color-primary-dark);
`

const HomePage = (props) => {
  const { isCompact } = useWindowWidth()
  const nsfLogo = useNSFLogo()

  return (
    <AnimateOnMount>
      <SEO
        title="Home"
        description="FABRIC is a unique national research infrastructure to enable cutting-edge and exploratory research at-scale in networking, cybersecurity, distributed computing and storage systems, machine learning, and science applications."
      />

      <Module>
        <Container>
          <Row>
            <Col
              xs={12}
              lg={6}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <AnimateOnMount slide="right">
                <Blurb compact={isCompact}>
                  <strong>FABRIC</strong> is Adaptive Programmable Research
                  Infrastructure for Computer Science and Science Applications
                </Blurb>
              </AnimateOnMount>
              <Visible xs sm md>
                <br />
              </Visible>
            </Col>
            <Col
              xs={12}
              lg={6}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <AnimateOnMount slide="left">
                <Paragraph style={{ fontSize: "90%" }}>
                  FABRIC (FABRIC is Adaptive ProgrammaBle Research Infrastructure
                  for Computer Science and Science Applications) is an International
                  infrastructure that enables cutting-edge experimentation and research
                  at-scale in the areas of networking, cybersecurity, distributed
                  computing, storage, virtual reality, 5G, machine learning, and science
                  applications.
                </Paragraph>
                <Paragraph style={{ fontSize: "90%" }}>
                  The FABRIC infrastructure is a distributed set of equipment at commercial 
                  collocation spaces, national labs and campuses. Each of the 29 FABRIC 
                  sites has large amounts of compute and storage, interconnected by high 
                  speed, dedicated optical links. It also connects to specialized testbeds 
                  (5G/IoT PAWR, NSF Clouds), the Internet and high-performance computing 
                  facilities to create a rich environment for a wide variety of experimental 
                  activities.
                </Paragraph>
                <Paragraph style={{ fontSize: '90%' }}>
                  <Link to="/about/fab" secondary>FABRIC Across Borders (FAB)</Link> extends the
                  network to 4 additional nodes in Asia and Europe.
                </Paragraph>
              </AnimateOnMount>
            </Col>
          </Row>
        </Container>
      </Module>

      <AnimateOnMount slide="up">
        <CapabilitiesModule />
      </AnimateOnMount>

      <Module>
        <Container>
          <Row>
            <Col xs={12} lg={8} style={{ marginBottom: "2rem" }}>
              <Card style={{ height: "calc(100% - 2rem)" }}>
                <CardHeader center>Recent News</CardHeader>
                <CardBody>
                  <NewsFeedModule />
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} lg={4} style={{ marginBottom: "2rem" }}>
              <Card style={{ height: "calc(100% - 2rem)" }}>
                <CardHeader center>Twitter Feed</CardHeader>
                <CardBody
                  style={{
                    maxHeight: "500px",
                    overflowY: "scroll",
                    textAlign: "center",
                  }}
                >
                  <TwitterFeedModule count={5} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Module>

      <MapModule />

      <TimelineModule />

      <ContributorsModule />

      <PartnersModule />

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: isCompact ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            padding: "1rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Img fixed={nsfLogo.childImageSharp.fixed} />
        </div>
        <Paragraph noMargin>
          FABRIC is supported in part by a Mid-Scale RI-1 NSF award under Grant
          No. 1935966.
        </Paragraph>
      </div>
    </AnimateOnMount>
  )
}

export default HomePage
