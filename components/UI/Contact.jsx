import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Contact with me</h3>
            <p>
              If you have any questions or would like to discuss a project,
              please don&apos;t hesitate to reach out to me. You can contact me
              through the provided contact information or send me an email. I
              look forward to hearing from you and exploring how we can work
              together to achieve your goals!
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Auckland- New Zealand</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>benolopesdias@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+640273327439</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link href="https://github.com/beno1234" target="_blank">
                <i className="ri-github-line"></i>
              </Link>

              <Link
                href="https://www.linkedin.com/in/beno-dias-5b5a45211/"
                target="_blank"
              >
                <i className="ri-linkedin-line"></i>
              </Link>
              <Link
                href="https://www.instagram.com/benolopes123/"
                target="_blank"
              >
                <i className="ri-instagram-line"></i>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
