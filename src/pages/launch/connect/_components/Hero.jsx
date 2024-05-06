"use client";
import React, { useRef, useEffect, useState } from "react";
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
  const [tab, setTab] = useState(null);

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
        {/* <div className="w-[90%] md:w-[80%] mx-auto max-w-custom_1"></div> */}
        <div className="w-full z-30 h-full flex-col gap-8 flex items-start ">
          <div className="flex flex-col gap-4 lg:flex-row items-end  md:items-center lg:border-b-2 lg:p-8 w-full lg:border-[rgba(255,255,255,.8)] justify-between">
            <h3 className="text-4xl border-b p-6 w-full border-[rgba(255,255,255,.8)]  md:text-6xl flex-1 text-center uppercase text-white">
              $NMWO LAUNCH PAD V1.0
            </h3>
            <span className="block px-4 text-2xl md:text-3xl cursor-pointer text-grey">
              {" "}
              REFRESH
            </span>
          </div>
          <div className="w-[95%] py-12 pb-20 mx-auto max-w-custom">
            <div className="w-full flex flex-col-reverse  md:grid grid-cols-1 gap-20 md:grid-cols-custom">
              <div className="w-full flex flex-col gap-16">
                <div className="w-[90%] mx-auto md:w-full justify-between flex gap-4 md:gap-6 items-center text-xl md:text-3xl text-white">
                  <h4 className="cursor-pointer">CURRENT QUEST</h4>
                  <h4 className="text-grey cursor-pointer">RAIDS</h4>
                  <h4 className="text-green cursor-pointer">UPCOMING</h4>
                </div>
                <div className="w-full flex flex-col gap-8">
                  {new Array(3).fill("").map((task, index) => {
                    return (
                      <div
                        key={index}
                        className="w-[90%] mx-auto md:w-full flex gap-4 items-center justify-between"
                      >
                        {tab === index ? (
                          <div className="w-full">
                            <input
                              type="text"
                              placeholder="Paste REPOST LINK"
                              className="text-xl w-full md:text-4xl border-2 border-[rgba(255,255,255,.3)] uppercase bg-transparent h-[65px] md:h-[80px] px-8 text-white"
                            />
                          </div>
                        ) : (
                          <h4 className="text-xl md:text-4xl text-white">
                            THE REVOLUTION IS NOW 42069 TOKENS
                          </h4>
                        )}

                        <div className="flex items-center justify-end">
                          <div
                            onClick={() => setTab(index)}
                            style={{ transition: "all .4s" }}
                            className={`px-4 md:px-8 py-4 border-2 hover:shadow-2xl ${
                              tab === index
                                ? "bg-[#DB00FF57]"
                                : "bg-transparent"
                            } hover:bg-[#DB00FF57] font-extrabold cursor-pointer text-xl md:text-3xl uppercase text-[#fff] border-[rgba(255,255,255,1)]`}
                          >
                            {tab === index ? "Claim" : "Start"}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-[90%] mx-auto h-full md:w-[300px] flex flex-col gap-16 md:gap-24">
                <div className="w-full flex flex-col gap-4 md:gap-8 text-grey  font-extrabold text-3xl md:text-4xl">
                  <div className="flex gap-2 items-center justify-between w-full">
                    <h4 style={{ fontStyle: "italic" }}>WALLET</h4>
                    <h5
                      className="text-2xl"
                      style={{ fontStyle: "italic", color: "#F8F8F8" }}
                    >
                      3wdh...34Y
                    </h5>
                  </div>

                  <div className="flex gap-2 items-center justify-between w-full">
                    <h4 style={{ fontStyle: "italic" }}>TOKENS</h4>
                    <h5
                      className="text-2xl"
                      style={{ fontStyle: "italic", color: "#F8F8F8" }}
                    >
                      54637
                    </h5>
                  </div>

                  <div className="flex gap-2 items-center justify-between w-full">
                    <h4 style={{ fontStyle: "italic" }}>RANK</h4>
                    <h5
                      className="text-2xl"
                      style={{ fontStyle: "italic", color: "#F8F8F8" }}
                    >
                      243
                    </h5>
                  </div>
                </div>
                <div className="w-full flex items-start justify-end">
                  <div
                    style={{ transition: "all .4s" }}
                    className="px-8 py-4 border-2 hover:shadow-2xl font-extrabold hover:opacity-[.6] cursor-pointer text-xl md:text-2xl uppercase text-[#A44545] border-[rgba(255,255,255,1)]"
                  >
                    DISCONNECT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[90%] mx-auto max-w-custom z-40 py-4 items-center gap-4 justify-center md:justify-start">
          <span className="cursor-pointer">
            <Image
              alt="Cotion"
              width={0}
              sizes="100vw"
              height={0}
              loading="lazy"
              src={"/telegram.png"}
              className=" w-10 md:w-auto"
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
              className=" w-10 md:w-auto"
            />
          </span>
        </div>
      </div>
    </>
  );
}
