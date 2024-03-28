import React from "react";
import {
  AboutContainer,
  SocialMediaIcons,
  SocialMediaIcon,
  Description,
} from "./AboutStyle";
import "@fortawesome/fontawesome-free/css/all.css";
import { Title } from "../Skills";
import { Bio } from "../../data/constants";

const About = () => {
  return (
    <AboutContainer id="about">
      <Title style={{ marginBottom: "20px" }}>About</Title>
      <Description>
        Greetings! I'm Ashish Thotwe, a bioinformatics graduate who ventured
        into the dynamic realm of software development. Armed with a Bachelor's
        degree in Bioinformatics and driven by a passion for technology, I
        undertook a rigorous full-stack development course with Coding Ninjas to
        expand my skill set. During this transformative journey, I mastered the
        intricacies of the MERN stack, specializing in MongoDB, Express.js,
        React.js, and Node.js. Additionally, I honed my expertise in Redux for
        efficient state management, enabling me to craft scalable and
        user-friendly web applications. Beyond technical proficiency, my solid
        grasp of fundamental concepts such as data structures, algorithms, and
        system design equips me to tackle complex challenges with precision and
        confidence. I approach every project with a blend of creativity and
        diligence, striving to deliver high-quality solutions that exceed
        expectations. Outside of work, I indulge in reading and sports to unwind
        and recharge. As I continue to seek opportunities for growth and
        collaboration, my ultimate goal is to leverage my skills and passion for
        technology to make a meaningful impact in the software development
        industry. I'm currently exploring new professional opportunities and
        partnerships. If you're interested in connecting or discussing potential
        collaborations, I'd love to hear from you. Let's embark on a journey of
        innovation and success together.
      </Description>
      <SocialMediaIcons>
        <SocialMediaIcon href={Bio.linkedin}>
          <i className="fab fa-linkedin"></i>
        </SocialMediaIcon>
        <SocialMediaIcon href={Bio.twitter}>
          <i className="fab fa-twitter"></i>
        </SocialMediaIcon>
        <SocialMediaIcon href={Bio.insta}>
          <i className="fab fa-instagram"></i>
        </SocialMediaIcon>
      </SocialMediaIcons>
    </AboutContainer>
  );
};

export default About;
