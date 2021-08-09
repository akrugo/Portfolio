import React from "react";
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import homeImg1 from "../img/home1.png";
import { titleAnim, fade, photoAnim } from "../animation";
import { motion } from "framer-motion";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>Hello ,I am </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span>Hamza WADIE</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>Front end developer.</motion.h2>
          </Hide>
        </div>
        <motion.p variants={fade}>
          <div className="social-media-div">
            <a
              href={"https://github.com/akrugo"}
              className="icon-button github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
              <span></span>
            </a>
            <a
              href={"https://linkedin.com/in/hamza-wadie-21400813a/"}
              className="icon-button linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
              <span></span>
            </a>

            <a
              href={"https://twitter.com/akruuuuuuu"}
              className="icon-button twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
              <span></span>
            </a>
          </div>
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fade}>Contact Me</motion.button>
        </Link>

        <motion.button variants={fade}>
          <a href="/Hamza-WADIE-Front-end-developer" download>
            download CV
          </a>
        </motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          src={homeImg1}
          alt="Web Devloper guy"
        />
      </Image>
      <Wave />
    </About>
  );
};

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
