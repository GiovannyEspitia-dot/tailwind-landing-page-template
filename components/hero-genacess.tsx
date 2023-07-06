'use client';

import React, { useState } from 'react';
import Image from "next/image";

const HeroGenAccess = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-9" data-aos="zoom-y-out">Generation Access<span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500"></span></h1>
            <h4 className="text-5xl md:text-1l font-extrabold leading-tighter tracking-tighter mb-9" data-aos="zoom-y-out"><span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-900">Design Thinking</span></h4>
            <div className="flex justify-center">
            <div
              className="image-container mt-9 mb-9"
              
            >
              <Image
                src="https://www.kimmy-kim.com/uploads/1/4/2/9/142913591/editor/slide-16-9-1.png?1675790921"
                width={600}
                height={300}
                alt=""
             
              />
            </div>
          </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-2xl text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">Overview</p>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-xl text-gray-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">"Based on our history of providing customized tools for our customers and our cutting edge technology, we looked for a new product to reach families with teens and young adults.  
                After extensive market and customer research, determined the need for equipping parents to teach their children about financial literacy and specifically budgeting."    </p>
            </div>
            <div className="max-w-3xl mx-auto mt-2 items-left">
              <p className="text-1xl text-black-600 " data-aos="zoom-y-out" data-aos-delay="150"><b>Skills:</b> User Persona, User Story, ​Value Proposition Canvas, Sprint, Backlog, Roadmap</p>
            </div>
            <div className="max-w-3xl mx-auto mt-2 items-left">
              <p className="text-1xl text-black-600 " data-aos="zoom-y-out" data-aos-delay="150"><b>Tools:</b> Balsamiq, Jira, Figma, Miro</p>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-2xl text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">Process</p>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              
              <ol className="text-l text-black-600 mb-1 text-left pl-4" data-aos="zoom-y-out" data-aos-delay="150" style={{ listStyleType: 'decimal' }}>
                    <li>Customer Persona and Problem Statement</li>
                    <li>Design Thinking Process - Ideation & Prototype</li>
                    <li>Roadmap</li>
                </ol>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-2xl text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">Customer Persona</p>
            </div>
            <div className="max-w-3xl mx-auto mt-9 mb-4">
            <div
                className="image-container mt-9 mb-9 pl-5"
                >
                <Image
                    src="https://www.kimmy-kim.com/uploads/1/4/2/9/142913591/ga1_orig.png"
                    width={700}
                    height={350}
                    alt=""
                
                />
            </div>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-2xl text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">Problem Statement</p>
            </div>
            <div className="max-w-3xl mx-auto mt-9 mb-4">
            <div
                className="image-container mt-9 mb-9 pl-5"
                >
                <Image
                    src="https://www.kimmy-kim.com/uploads/1/4/2/9/142913591/ga2_orig.png"
                    width={700}
                    height={350}
                    alt=""
                
                />
            </div>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-2xl text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">Product Vision Board</p>
            </div>
            <div className="max-w-3xl mx-auto mt-9 mb-4">
            <div
                className="image-container mt-9 mb-9 pl-5"
                >
                <Image
                    src="https://www.kimmy-kim.com/uploads/1/4/2/9/142913591/ga4_orig.png"
                    width={700}
                    height={350}
                    alt=""
                
                />
            </div>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-2xl text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">Value Proposition Canvas</p>
            </div>
            <div className="max-w-3xl mx-auto mt-9 mb-4">
            <div
                className="image-container mt-9 mb-9 pl-5"
                >
                <Image
                    src="https://www.kimmy-kim.com/uploads/1/4/2/9/142913591/ga3_orig.png"
                    width={700}
                    height={350}
                    alt=""
                
                />
            </div>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-2xl text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">User Story Map</p>
            </div>
            <div className="max-w-3xl mx-auto mt-9 mb-4">
            <div
                className="image-container mt-9 mb-9 pl-5"
                >
                <Image
                    src="https://www.kimmy-kim.com/uploads/1/4/2/9/142913591/ga5_orig.png"
                    width={700}
                    height={350}
                    alt=""
                
                />
            </div>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-2xl text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">Prototype Wireframe</p>
            </div>
            <div className="max-w-3xl mx-auto mt-9 mb-4">
            <div
                className="image-container mt-9 mb-9 pl-5"
                >
                <Image
                    src="https://www.kimmy-kim.com/uploads/1/4/2/9/142913591/ga9_orig.png"
                    width={700}
                    height={350}
                    alt=""
                
                />
            </div>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-2xl text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">Sprint and Backlog</p>
            </div>
            <div className="max-w-3xl mx-auto mt-9 mb-4">
            <div
                className="image-container mt-9 mb-9 pl-5"
                >
                <Image
                    src="https://www.kimmy-kim.com/uploads/1/4/2/9/142913591/ga6_orig.png"
                    width={700}
                    height={350}
                    alt=""
                
                />
            </div>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-2xl text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">Roadmap</p>
            </div>
            <div className="max-w-3xl mx-auto mt-9 mb-4">
            <div
                className="image-container mt-9 mb-9 pl-5"
                >
                <Image
                    src="https://www.kimmy-kim.com/uploads/1/4/2/9/142913591/ga7_orig.png"
                    width={700}
                    height={350}
                    alt=""
                
                />
            </div>
            </div>

          

          </div>

          {/* Hero image */}
          

          {/* ModalVideo */}
          {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          /> */}
        </div>
      </div>
    </section>
  );
};

export default HeroGenAccess;
