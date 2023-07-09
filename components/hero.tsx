'use client';

import React, { useState } from 'react';
import Image from "next/image";

const Hero = () => {
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
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Hello! I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">EunLim Kim</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">I am a Master's student at Georgia Tech, pursuing my passion in the field of User Research and Product Management.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="https://drive.google.com/file/d/1HLgQHldound2ruBTK0EZfRhMalbDIgY3/view?usp=sharing" target='_blank'>Resume</a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="flex justify-center">
            <div
              className="image-container"
              style={{
                boxShadow: isHovered ? '0 0 15px 15px #ead097' : '0 0 20px 10px #ead097',
                borderRadius: '10px',
                transition: 'box-shadow 0.3s ease',
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src="https://www.kimmy-kim.com/uploads/1/4/2/9/142913591/kim22-50_orig.jpg"
                width={368}
                height={152}
                alt=""
              />
            </div>
          </div>

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

export default Hero;
