import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import atiusHub from "../../Assets/Projects/atiushub.jpg";
import byd from "../../Assets/Projects/byd.jpg";
import cfp from "../../Assets/Projects/cfp.png";
import chineseparts from "../../Assets/Projects/chineseparts.png";
import ctrack from "../../Assets/Projects/ctrack.jpg";
import eTicket from "../../Assets/Projects/e-ticket.png";
import grandauto from "../../Assets/Projects/grandauto.jpg";
import lindezi from "../../Assets/Projects/lindezi.jpg";
import primeMarketing from "../../Assets/Projects/primeMarketing.png";
import remitcall from "../../Assets/Projects/remitcall.jpg";
import supreme from "../../Assets/Projects/supreme.png";
import symnet from "../../Assets/Projects/symnet.jpg";
import tce from "../../Assets/Projects/tce.jpg";
import tsapoAgro from "../../Assets/Projects/tsapoAgro.png";
import tsapoGroup from "../../Assets/Projects/tsapoGroup.jpg";
import afrisight from "../../Assets/Projects/afrisight.png";
import afrisightPanel from "../../Assets/Projects/diy.png";
import sirfarai from "../../Assets/Projects/sirfarai.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          I have succeeded in developing digital solutions for Zimbabwe's governmental and corporate sectors as well as for international markets.
        </p>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={atiusHub}
              isBlog={false}
              title="Atius Hub"
              description="Custom Software Development for the world - Information Driven Efficiency"
              demoLink="https://www.atiushub.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={byd}
              isBlog={false}
              title="BYD Zimbabwe"
              description="100% Electric - Supporting a sustainable future through electrification"
              demoLink="https://evcafrica.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cfp}
              isBlog={false}
              title="Chitanda Fresh Produce"
              description="Fresh from the farm - Veggies and fruits under one roof"
              demoLink="https://www.cfp.co.zw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chineseparts}
              isBlog={false}
              title="Chinese Parts Solutions"
              description="Full service kits for Shacman, Faw SINOTRUK, Shantuni, XCMG & LiuGong"
              demoLink="https://www.chineseparts.co.zw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ctrack}
              isBlog={false}
              title="Ctrack Zimbabwe"
              description="Always Visible - Keep your vehicle visible and your family safe"
              demoLink="https://ctrackzimbabwe.co.zw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eTicket}
              isBlog={false}
              title="E-Ticket"
              description="A lifetime of discounts? It's Genius - Events ticketing platform"
              demoLink="https://e-ticket.co.zw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grandauto}
              isBlog={false}
              title="Grand Auto"
              description="You Define It, We Make It - Premier auto body repair services"
              demoLink="https://www.grandauto.co.zw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lindezi}
              isBlog={false}
              title="Lindezi Travel & Tours"
              description="Looking for a car to rent? Professional travel and tour services"
              demoLink="https://www.lindezi.co.zw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={primeMarketing}
              isBlog={false}
              title="Prime Marketing"
              description="Vision Drivers & Our Formula is Very Simple - Marketing solutions"
              demoLink="https://primemarketing.co.zw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={remitcall}
              isBlog={false}
              title="Remitcall"
              description="International airtime top-up and money transfer platform"
              demoLink="https://www.remitcall.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={supreme}
              isBlog={false}
              title="Supreme Panel Beaters"
              description="Professional auto body repair and paint services"
              demoLink="https://www.supreme.co.zw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={symnet}
              isBlog={false}
              title="Symmetry Networks"
              description="Multi-national telecommunication solutions provider"
              demoLink="https://www.sym-net.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tce}
              isBlog={false}
              title="Tsapo Commercial Equipment"
              description="Commercial vehicle and equipment sales platform"
              demoLink="https://www.tsapocommercialequipment.co.zw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tsapoAgro}
              isBlog={false}
              title="Tsapo Agro"
              description="Agricultural machinery and equipment solutions"
              demoLink="https://tsapoagro.co.zw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tsapoGroup}
              isBlog={false}
              title="Tsapo Group"
              description="Multi-industry business conglomerate corporate website"
              demoLink="https://www.tsapogroup.co.zw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={afrisight}
              isBlog={false}
              title="Afrisight"
              description="Africa's leading online research platform - Connecting businesses with African consumers"
              demoLink="https://www.afrisight.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={afrisightPanel}
              isBlog={false}
              title="Afrisight Panel"
              description="DIY research platform - Create and manage your own surveys across Africa"
              demoLink="https://panel.afrisight.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sirfarai}
              isBlog={false}
              title="Sir Farai"
              description="Personal portfolio and blog showcasing software development expertise"
              demoLink="https://www.sirfarai.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
