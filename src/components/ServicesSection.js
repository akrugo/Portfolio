import React from "react";
import { About, Description, Image } from "../styles";
import styled from "styled-components";
//Import Icons
import homeImg2 from "../img/home2.png";
//Scroll animation
import { reveal, fade, titleAnim } from "../animation";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      transition={{ duration: 0.75 }}
      ref={element}
      variants={reveal}
      animate={controls}
      initial="hidden"
    >
      <Image>
        <img src={homeImg2} alt="camera" />
      </Image>
      <Description>
        <Cards>
          <motion.h2 variants={titleAnim}>
            <span>WHO I AM</span>
          </motion.h2>
          <motion.p variants={fade}>
            I am a 25-year-old Front End Developer based in Mohammedia, Morocco.
            I have a passion for using technologies to produce creative
            solutions to problems. I like to resolve design problems and create
            smart user interfaces, developing rich web experiences & web
            applications. The main areas of my expertise are HTML, CSS, Sass,
            JavaScript, ES6 ,React/Redux ,bootstrap. I am always looking for new
            opportunities to further develop my skillset and expand my
            knowledge. I am currently available for hire.
          </motion.p>
        </Cards>
      </Description>
    </Services>
  );
};

const Services = styled(About)`
  p {
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width: 1024px) {
    display: block;
    padding: 2rem 2rem;
  }
  span {
  }
`;

const Cards = styled.div`
  align-items: center;

  @media (max-width: 1500px) {
    justify-content: center;
  }
  h2 {
    text-align: center;
  }
`;

export default ServicesSection;
