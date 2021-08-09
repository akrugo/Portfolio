import React from "react";
import { About } from "../styles";
import styled from "styled-components";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
//Scroll animation
import { reveal } from "../animation";
import { useScroll } from "./useScroll";

const Education = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      transition={{ duration: 0.5 }}
      ref={element}
      animate={controls}
      initial="hidden"
      variants={reveal}
    >
      <h2>
        <span>Education</span>
      </h2>

      <AnimateSharedLayout>
        <Toggle title="IT Development Techniques" className="title">
          <div className="answer">
            <p>Analyze and interpret specifications</p>
            <p>Write functional and technical specifications</p>
            <p>Carry models and prototypes</p>
            <p>Design database</p>
          </div>
        </Toggle>
        <Toggle title="Electromechanics of Automated Systems" className="title">
          <div className="answer">
            <p>Install and maintain orders at very low voltage</p>
            <p>Install, Repérer of electronic engine controls</p>
            <p>Carry out an automated system.</p>
          </div>
        </Toggle>
        <Toggle title="baccalaureate" className="title">
          <div className="answer">
            <p>bachelor's degree in physical sciences</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};
const Faq = styled(About)`
  display: block;
  span {
    display: block;
    color: #23d997;
  }
  h2 {
    font-weight: lighter;
    padding-bottom: 4rem;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default Education;
