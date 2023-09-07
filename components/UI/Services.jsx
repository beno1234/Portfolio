import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="App Development" icon="ri-apps-line" />

                <ServicesItem title="Web Development" icon="ri-computer-line" />
              </div>

              <ServicesItem
                title="Full-Stack Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Better Design,</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>
              I&apos;m Beno Lopes Dias, a FullStack developer, DevOps
              practitioner, and experienced in cloud architecture. My focus is
              on delivering better design and an exceptional user experience. By
              combining aesthetics, functionality, and usability, I create
              visually appealing and intuitive interfaces. I prioritize factors
              like navigability, performance, accessibility, and responsiveness
              to ensure a high-quality user experience. Let&apos;s collaborate
              to elevate your projects with innovative and impactful solutions.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
