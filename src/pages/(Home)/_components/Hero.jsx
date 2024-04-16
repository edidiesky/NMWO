"use client";
import React, { useRef, useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import {
  opacity,
  slideup,
  slideup2,
  smallslideup,
} from "@/constants/utils/framer";
import { motion, useInView } from "framer-motion";
export default function Hero() {
  const container = useRef(null);
  const imageRef = useRef(null);
  const inView = useInView(container);

  const container2 = useRef(null);
  const inView2 = useInView(container2, {
    margin: "0px 100px -50px 0px",
  });
  const heroWords1 =
    "A Software Developer who crafts captivating digital experiences.";

  return (
    <>
      <div
        data-scroll
        className="min-h-[100vh] py-16 relative flex items-center justify-center"
      >
        <div className="w-[90%] md:w-[80%] mx-auto max-w-custom_1">
        </div>
      </div>
    </>
  );
}
