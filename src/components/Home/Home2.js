import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming at a very young age of barely 9yo and I had been surfing through it for the next 5 years, till I gained conciousness about my goal and true passion. Since the last 2 years, I feel like I have learnt a lot, or atleast a little bit, I suppose... 🤷‍♂️
              <br />
              <br />I am not so fluent, yet I'm clear of the basics at least in classics like
              <i>
                <b className="purple"> C, C++, JavaScript, Python, Java, Rust, Dart and Go. </b>
              </i>
              <br />
              <br />
              My field of interests are building new&nbsp;
              <i>
                <b className="purple">AI Solutions, Web Applications, Desktop Applications, Mobile Applications, </b> and
                also in areas related to{" "}
                <b className="purple">
                  Automation.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my skills for developing products
              with <b className="purple">Python, Node.js, Electron.js, Dart</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Libraries and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Flutter, React.js, Vite and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>SOCIALS</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/bipash25"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/lost_bipro"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/gli.tc_h.ed"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
