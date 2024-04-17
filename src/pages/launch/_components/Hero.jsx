"use client";
import React, { useRef, useEffect } from "react";
import Link from 'next/link'
import {} from "react-icons";
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
      <div data-scroll className="min-h-[100vh] relative flex">
        <Image
          alt="Cotion"
          width={0}
          sizes="100vw"
          height={0}
          loading="lazy"
          src={"/wallpaper_2.png"}
          className="image w-full absolute object-cover z-10 h-full"
        />
        <div className="w-full absolute h-full z-20 bg-[rgba(0,0,0,.6)]"></div>
        {/* <div className="w-[90%] md:w-[80%] mx-auto max-w-custom_1"></div> */}
        <div className="w-full z-30 h-full flex items-start ">
          <div className="flex items-center border-b-2 p-8 w-full border-[rgba(255,255,255,.7)] justify-between">
            <h3 className="text-6xl flex-1 text-center uppercase text-white">
              $NMWO LAUNCH PAD V1.0
            </h3>
            <span className="block text-3xl text-white"> REFRESH</span>
          </div>
        </div>
      </div>
    </>
  );
}
