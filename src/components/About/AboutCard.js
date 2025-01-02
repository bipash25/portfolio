import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Biprodeep Nath </span>
            from <span className="purple"> Assam, India.</span>
            <br />
            I'm currently bulding my path to accomplishments.
            <br />
            I have completed multiple courses online, most of which are related to Web & App Developmemt.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li>
              <ImPointRight /> Always find a way to bring a revolution in the society over the world, or atleast my locality
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">BIPRO</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
