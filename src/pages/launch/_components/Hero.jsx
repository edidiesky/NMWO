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
        <div className="w-full absolute h-full z-20 bg-[rgba(0,0,0,.6)]"></div>
        {/* <div className="w-[90%] md:w-[80%] mx-auto max-w-custom_1"></div> */}
        <div className="w-full z-30 h-full flex-col gap-8 flex items-start ">
          <div className="flex items-center border-b-2 p-8 w-full border-[rgba(255,255,255,.7)] justify-between">
            <h3 className="text-6xl flex-1 text-center uppercase text-white">
              $NMWO LAUNCH PAD V1.0
            </h3>
            <span className="block text-3xl cursor-pointer text-grey">
              {" "}
              REFRESH
            </span>
          </div>
          <div className="w-[95%] py-12 pb-20 mx-auto max-w-custom">
            <div className="w-full grid grid-cols-1 gap-12 md:grid-cols-custom">
              <div className="w-full flex flex-col gap-16">
                <div className="w-full flex gap-6 items-center text-3xl text-white">
                  <h4 className="cursor-pointer">CURRENT QUEST</h4>
                  <h4 className="text-grey cursor-pointer">RAIDS</h4>
                  <h4 className="text-green cursor-pointer">UPCOMING</h4>
                </div>
                <div className="w-full flex flex-col gap-8">
                  {new Array(5).fill("").map((task, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full flex gap-4 items-center justify-between"
                      >
                        <h4 className="text-4xl text-white">
                          THE REVOLUTION IS NOW 42069 TOKENS
                        </h4>
                        <div className="flex items-center justify-end">
                          <div
                            style={{ transition: "all .4s" }}
                            className="px-8 py-4 border-2 hover:shadow-2xl hover:bg-[#DB00FF57] cursor-pointer text-2xl uppercase text-[#fff] border-[rgba(255,255,255,1)]"
                          >
                            Start
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-full h-full md:w-[300px] flex flex-col gap-24">
                <div className="w-full flex flex-col gap-8 text-grey  font-extrabold text-4xl">
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
                  <div
                    style={{ transition: "all .4s" }}
                    className="px-8 py-4 border-2 hover:shadow-2xl hover:opacity-[.6] cursor-pointer text-3xl uppercase text-[#C6C085] border-[rgba(255,255,255,1)]"
                  >
                    CONNECT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[90%] mx-auto max-w-custom z-40 py-4 items-center gap-4 justify-start">
          <span className="cursor-pointer">
            <Image
              alt="Cotion"
              width={0}
              sizes="100vw"
              height={0}
              loading="lazy"
              src={"/telegram.png"}
              className="w-auto"
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
              className="w-auto"
            />
          </span>
        </div>
      </div>
    </>
  );
}
