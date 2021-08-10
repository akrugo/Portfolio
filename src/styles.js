//Styled
import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 10rem;
  color: white;
  @media (max-width: 1024px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;
export const Description = styled(motion.div)`
  flex: 1;
  z-index: 2;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    button {
      margin-bottom: 1rem;
    }
  }

  .social-media-div {
    font-size: 2em;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 50%;
  }
  @media (max-width: 1024px) {
    .social-media-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      text-align: center;
      gap: 1rem;
    }
  }
  @media (max-width: 768px) {
    .social-media-div {
      text-align: center;
    }
  }

  .icon-button i {
    color: white;
  }
  .icon-button {
    margin-bottom: 10px;
  }

  .icon-button i {
    border-radius: 2.6rem;
    cursor: pointer;
    display: inline-block;
    font-size: 1.3rem;
    height: 2.6rem;
    line-height: 2.6rem;
    margin: 0 5px;
    position: relative;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 2.6rem;
    margin-bottom: 10px;
  }

  .linkedin i {
    background-color: #0e76a8;
    transition: all 0.2s ease-in-out;
  }

  .linkedin i:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px #0e76a8;
  }

  .github i {
    background-color: #333;
    transition: all 0.2s ease-in-out;
  }

  .github i:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px #333;
  }

  .twitter i {
    background-color: #1da1f2;
    transition: all 0.2s ease-in-out;
  }

  .twitter i:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px #1da1f2;
  }
`;

export const Image = styled(motion.div)`
  flex: 1;
  z-index: 2;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
  @media (max-width: 1024px) {
    img {
      width: 60%;
      object-fit: cover;
      height: 50vh;
      margin: 2rem 0;
    }
  }
`;
