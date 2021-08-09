import React from "react";
//Page components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import Education from "../components/Education";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

const About = () => {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <ScrollTop />
      <AboutSection />
      <ServicesSection />
      <Education />
    </motion.div>
  );
};

export default About;
