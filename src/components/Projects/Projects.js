import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./styles";
import ProjectCards from "../Cards/ProjectCard";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Explore my varied projects: from sleek e-commerce platforms to
          efficient task managers, each reflecting my passion for innovation and
          problem-solving
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Frontend app" ? (
            <ToggleButton
              active
              value="Frontend app"
              onClick={() => setToggle("Frontend app")}
            >
              Frontend APP'S
            </ToggleButton>
          ) : (
            <ToggleButton
              value="Frontend app"
              onClick={() => setToggle("Frontend app")}
            >
              Frontend APP'S
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Backend app" ? (
            <ToggleButton
              active
              value="Backend app"
              onClick={() => setToggle("Backend app")}
            >
              Backend APP'S
            </ToggleButton>
          ) : (
            <ToggleButton
              value="Backend app"
              onClick={() => setToggle("Backend app")}
            >
              Backend APP'S
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Full Stack Apps" ? (
            <ToggleButton
              active
              value="Full Stack Apps"
              onClick={() => setToggle("Full Stack Apps")}
            >
              Full Stack Apps
            </ToggleButton>
          ) : (
            <ToggleButton
              value="Full Stack Apps"
              onClick={() => setToggle("Full Stack Apps")}
            >
              Full Stack Apps
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project, index) => (
              <ProjectCards
                project={project}
                key={index}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCards
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
