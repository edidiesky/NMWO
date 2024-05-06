"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
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
      <div data-scroll className="min-h-[100vh] relative flex flex-col">
        <Image
          alt="Cotion"
          width={0}
          sizes="100vw"
          height={0}
          loading="lazy"
          src={"/wallpaper_2.png"}
          className="image w-full absolute object-cover z-10 h-full"
        />
        <div className="w-full absolute h-full z-20 bg-[rgba(0,0,0,.8)]"></div>
        {/* <div className="w-[90%] lg:w-[80%] mx-auto max-w-custom_1"></div> */}
        <div className="w-full z-30 h-full flex-col gap-8 flex items-start ">
          <div className="flex flex-col gap-4 lg:flex-row items-end  lg:items-center lg:border-b-2 lg:p-8 w-full lg:border-[rgba(255,255,255,.8)] justify-between">
            <h3 className="text-4xl border-b p-6 w-full border-[rgba(255,255,255,.8)]  lg:text-6xl flex-1 text-center uppercase text-white">
              $NMWO LAUNCH PAD V1.0
            </h3>
            <span className="block px-4 text-2xl lg:text-3xl cursor-pointer text-grey">
              {" "}
              REFRESH
            </span>
          </div>
          <div className="w-[95%] py-12 pb-20 mx-auto max-w-custom">
            <div className="w-full flex flex-col-reverse  lg:grid grid-cols-1 gap-12 lg:grid-cols-custom">
              <div className="w-full flex flex-col gap-16">
                <div className="w-[90%] mx-auto lg:w-full justify-between flex gap-4 lg:gap-6 items-center text-xl lg:text-3xl text-white">
                  <h4 className="cursor-pointer">CURRENT QUEST</h4>
                  <h4 className="text-grey cursor-pointer">RAIDS</h4>
                  <h4 className="text-green cursor-pointer">UPCOMING</h4>
                </div>
                <div className="w-full flex flex-col gap-8"></div>
              </div>
              <div className="w-[90%] mx-auto h-full lg:w-[300px] flex flex-col gap-16 lg:gap-24">
                <div className="w-full flex flex-col gap-6 lg:gap-8 text-grey  font-extrabold text-3xl lg:text-4xl">
                  <div className="flex items-center justify-between w-full">
                    <h4 style={{ fontStyle: "italic" }}>WALLET</h4>
                    <h4 style={{ fontStyle: "italic", color: "#F8F8F8" }}>
                      ####
                    </h4>
                  </div>

                  <div className="flex items-center justify-between w-full">
                    <h4 style={{ fontStyle: "italic" }}>TOKENS</h4>
                    <h4 style={{ fontStyle: "italic", color: "#F8F8F8" }}>
                      ###
                    </h4>
                  </div>

                  <div className="flex items-center justify-between w-full">
                    <h4 style={{ fontStyle: "italic" }}>RANK</h4>
                    <h4 style={{ fontStyle: "italic", color: "#F8F8F8" }}>
                      ##
                    </h4>
                  </div>
                </div>
                <div className="w-full flex items-start justify-end">
                  <Link
                    href={"/launch/connect"}
                    style={{ transition: "all .4s" }}
                    className="px-8 py-4 border-2 hover:shadow-2xl hover:opacity-[.6] cursor-pointer text-2xl lg:text-3xl uppercase text-[#C6C085] border-[rgba(255,255,255,1)]"
                  >
                    CONNECT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[90%] mx-auto max-w-custom z-40 py-4 items-center gap-4 justify-center lg:justify-start">
          <span className="cursor-pointer">
            <Image
              alt="Cotion"
              width={0}
              sizes="100vw"
              height={0}
              loading="lazy"
              src={"/telegram.png"}
              className=" w-10 lg:w-auto"
            />
          </span>
          <span className="cursor-pointer">
            <Image
              alt="Cotion"
              width={0}
              sizes="100vw"
              height={0}
              loading="lazy"
              src={"/twitter.png"}
              className=" w-10 lg:w-auto"
            />
          </span>
        </div>
      </div>
    </>
  );
}
