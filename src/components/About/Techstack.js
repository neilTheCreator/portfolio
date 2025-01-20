import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiPhp,
  DiPostgresql,
} from "react-icons/di";
import {
  SiMysql,
  SiDocker,
  SiElasticsearch,
  SiLaravel,
  SiGo,
  SiJenkins,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p className="tech-label">Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
        <p className="tech-label">PHP</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel />
        <p className="tech-label">Laravel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p className="tech-label">JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGo />
        <p className="tech-label">Go</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
        <p className="tech-label">PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p className="tech-label">MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <p className="tech-label">Docker</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="tech-label">React/Native</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
        <p className="tech-label">CI/CD</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p className="tech-label">Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiElasticsearch />
        <p className="tech-label">ElasticSearch</p>
      </Col>
    </Row>
  );
}

export default Techstack;
