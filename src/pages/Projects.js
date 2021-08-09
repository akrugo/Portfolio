import React from "react";
import styled from "styled-components";
//Images
import movies from "../img/movies.PNG";
import mnk from "../img/mnk.PNG";
import tesla from "../img/tesla.png";
//Animation
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import {
  pageAnimation,
  fade,
  lineAnim,
  photoAnim,
  sliderContainer,
  movieContainer,
  slider,
} from "../animation";
import ScrollTop from "../components/ScrollTop";

const Projects = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work
      style={{ background: "#fff" }}
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <ScrollTop />
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie variants={movieContainer}>
        <div className="split">
          <motion.h2 variants={fade}>Movies App</motion.h2>
          <p>HTML | CSS | Javascript</p>
        </div>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <div>
          <Hide>
            <motion.img variants={photoAnim} src={movies} alt="athlete" />
          </Hide>
        </div>
        <div>
          <button className="btn">
            <a
              className="code"
              href={"https://github.com/akrugo/movie-app"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </button>
          <button>
            <a
              className="code"
              href={"https://movies-appo.netlify.app/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              En Direct
            </a>
          </button>
        </div>
      </Movie>
      <Movie
        transition={{ duration: 0.5 }}
        ref={element}
        variants={movieContainer}
        animate={controls}
        initial="hidden"
      >
        <h2>MNK Garage</h2>
        <p>HTML | CSS | Javascript | PHP</p>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <div>
          <img src={mnk} alt="the-race" />
        </div>
        <div>
          <button className="btn">
            <a
              className="code"
              href={"https://github.com/akrugo/MNK-Garage"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </button>
          <button>
            <a
              className="code"
              href={"https://github.com/akrugo/MNK-Garage"}
              target="_blank"
              rel="noopener noreferrer"
            >
              En Direct
            </a>
          </button>
        </div>
      </Movie>
      <Movie
        transition={{ duration: 0.5 }}
        ref={element2}
        variants={movieContainer}
        animate={controls2}
        initial="hidden"
      >
        <h2>Testa Clone</h2>
        <p>React | Redux | Firebase</p>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <div>
          <img src={tesla} alt="good-times" />
        </div>
        <div>
          <button className="btn">
            <a
              className="code"
              href={"https://github.com/akrugo/tesla-clone"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </button>
          <button>
            <a
              className="code"
              href={"https://teslawebsite-clone.netlify.app/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              En Direct
            </a>
          </button>
        </div>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 2rem 10rem;

  @media (max-width: 1500px) {
    padding: 2rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
  @media (max-width: 1500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: 60vh;
      object-fit: cover;
    }
  }
  .btn {
    margin-top: 2.5rem;
    background: #23d997;
    padding: 1rem 3rem;
    &:hover {
      background: #23d997;
      color: black;
    }
  }
  .btn:hover {
    border: 3px solid #23d997;
    background: transparent;
  }
  a,
  p {
    color: black;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default Projects;
