"use client";
import React, { useRef, useEffect } from "react";
import {} from 'react-icons'
import SplitType from "split-type";
import Image from "next/image";
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
        className="min-h-[100vh] relative flex items-center justify-center"
      >
        <Image
          alt="Cotion"
          width={0}
          sizes="100vw"
          height={0}
          loading="lazy"
          src={"/wallpaper_1.png"}
          className="image w-full absolute z-10 h-full"
        />
        <div className="w-full absolute h-full z-20 bg-[rgba(0,0,0,.7)]"></div>
        {/* <div className="w-[90%] md:w-[80%] mx-auto max-w-custom_1"></div> */}
        <div className="w-full z-30 h-full flex items-center justify-center">
          <div className="flex flex-col gap-8 items-center justify-center">
            <h3 className="text-2xl text-center uppercase text-white">
              <span className="block text-xl"> ENTER THE</span> NEW MEME WORLD
              ORDER
            </h3>
            <div className="p-8 bg-white text-5xl uppercase text-dark">
              LAUNCH DAPP
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
