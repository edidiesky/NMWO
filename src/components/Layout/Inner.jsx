import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub, BsTwitter } from "react-icons/bs";
import Link from "next/link";
import { slide, opacity, perspective } from "./anim";
import Navbar from "../common/Navbar";

const anim = (variants) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};

const opacityVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 1,
  },
};

export default function Layout({ children }) {
  return (
    <LayOutStyles>
      <motion.div
        variants={slide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="slide"
      ></motion.div>
      <motion.div
        variants={perspective}
        initial="initial"
        animate="enter"
        exit="exit"
        className="page"
      >
        <motion.div
          variants={opacityVariants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {/* <Navbar /> */}
          {children}
        </motion.div>
      </motion.div>
    </LayOutStyles>
  );
}

const LayOutStyles = styled.div`
  background-color: black;
  .page {
    background-color: white;
  }
  .slide {
    height: 100vh;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: white;
    z-index: 1;
  }
  .wrapperlink {
    position: fixed;
    bottom: 10%;
    left: 3%;
    z-index: 30000;
    height: 50vh;
    @media (max-width: 780px) {
      left: 1%;
      bottom: 0;
      display: none;
    }
    .arrow {
      height: 300px;
      width: 0.2px;
      background-color: #000;
    }
  }
`;
