import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Takudzwa Neil Bvungidzire </span>
            from <span className="purple">Harare, Zimbabwe.</span>
            <br />
            I am currently a <span className="purple">Senior Lead Software Engineer at AfriSight BV</span>.
            <br />
            <br />
            I am an accomplished Senior Lead Software Engineer with extensive experience in:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Driving innovation and delivering software solutions
            </li>
            <li className="about-activity">
              <ImPointRight /> Leading cross-functional teams and mentoring junior developers
            </li>
            <li className="about-activity">
              <ImPointRight /> Optimizing system functionality for enhanced user experience
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            <br />
            <span className="purple">Education: </span>
            <br />
            Bachelor of Technology Honours Degree in Software Engineering
            <br />
            Harare Institute of Technology (2015 - 2019)
            <br />
            <br />
            <span className="purple">Contact: </span>
            <br />
            📧 takudzwaneilbvungidzire@gmail.com
            <br />
            📱 (+263) 783 441 993
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A forward-thinking professional, committed to leveraging technical knowledge and leadership to achieve ambitious project goals in dynamic environments."{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
