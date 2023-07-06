'use client';

import React, { useState } from 'react';
import Image from "next/image";

const HeroTenPeaks = () => {
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
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-9" data-aos="zoom-y-out">Ten Peak Outfitters<span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500"></span></h1>
            <h4 className="text-5xl md:text-1l font-extrabold leading-tighter tracking-tighter mb-9" data-aos="zoom-y-out"><span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-900">Data Analysis</span></h4>
            <div className="flex justify-center">
            <div
              className="image-container mt-9 mb-9"
              
            >
              <Image
                src="https://www.kimmy-kim.com/uploads/1/4/2/9/142913591/editor/frame-10.png?1675915941"
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
              <p className="text-xl text-gray-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">Ten Peaks is 10 year old company selling active wears & gears , with sales growing each year until 2019, after which we saw a decline in sales.</p>
            </div>
            
            <div className="max-w-3xl mx-auto mt-2 items-left">
              <p className="text-1xl text-black-600 " data-aos="zoom-y-out" data-aos-delay="150"><b>Skills:</b> Data Analysis, A/B Test, Prototype</p>
            </div>
            <div className="max-w-3xl mx-auto mt-2 items-left">
              <p className="text-1xl text-black-600 " data-aos="zoom-y-out" data-aos-delay="150"><b>Tools:</b> Google Analytics, Tableau, Balsamiq, Figma</p>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-2xl text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">Data Analysis</p>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-xl text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150"><b>Google Analytics</b></p>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-l text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">2019</p>
            </div>
            <div className="max-w-3xl mx-auto mt-9 mb-4">
            <div
                className="image-container mt-9 mb-9 pl-5"
                >
                <Image
                    src="https://www.kimmy-kim.com/uploads/1/4/2/9/142913591/published/tp1.png?1675525556"
                    width={700}
                    height={350}
                    alt=""
                
                />
            </div>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-l text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">2020</p>
            </div>
            <div className="max-w-3xl mx-auto mt-9 mb-4">
            <div
                className="image-container mt-9 mb-9 pl-5"
                >
                <Image
                    src="https://www.kimmy-kim.com/uploads/1/4/2/9/142913591/published/tp2.png?1675490925"
                    width={700}
                    height={350}
                    alt=""
                
                />
            </div>
            </div>
            
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-xl text-black-600 mb-4 text-left" data-aos="zoom-y-out" data-aos-delay="150">2019/2020 Sales Comparisons</p>
              <ul className="text-l text-black-600 mb-4 text-left pl-9" style={{ listStyleType: 'disc' }} data-aos="zoom-y-out" data-aos-delay="150">
                    <li>Sales data did not indicate any significant difference between 2019 and 2020.</li>
                    <li>The number of customers, total sales, and average purchases were comparable.</li>
                    
                </ul>
            </div>
            <div className="max-w-3xl mx-auto mt-9 mb-4">
            <div
                className="image-container mt-9 mb-9 pl-5"
                >
                <Image
                    src="https://www.kimmy-kim.com/uploads/1/4/2/9/142913591/published/tp3.png?1675525546"
                    width={700}
                    height={350}
                    alt=""
                
                />
            </div>
            </div>
            <div className="max-w-3xl mx-auto mt-9 mb-8">
              <p className="text-xl text-black-600 mb-8 mt-5 text-left" data-aos="zoom-y-out" data-aos-delay="150"><b>Tableau</b></p>
            </div>
            <div className="text-center pb-12 md:pb-16">
            
            <div className="flex justify-center">
                <div
                className="image-container mt-9 mb-9"
                
                >
                <Image
                    src="https://www.kimmy-kim.com/uploads/1/4/2/9/142913591/published/tp5.png?1675525562"
                    width={700}
                    height={350}
                    alt=""
                
                />
                </div>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <ul className="text-l text-black-600 mb-4 text-left pl-9" style={{ listStyleType: 'disc' }} data-aos="zoom-y-out" data-aos-delay="150">
                    <li>Based on approx. 6,000 customer IDs</li>
                    <li>Largest revenue stream - apparel </li>
                    <li>Significantly more apparel purchases from loyalty members</li>
                    
                </ul>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-xl text-black-600 mb-4 text-left" data-aos="zoom-y-out" data-aos-delay="150">TenTen Loyalty Program - Members vs. Non-Members</p>
              <p className="text-l text-black-600 mb-4 text-left" data-aos="zoom-y-out" data-aos-delay="150">Data shows notable differences between TenTen Loyalty Club members and non-members.</p>
              <ul className="text-l text-black-600 mb-4 text-left pl-9" style={{ listStyleType: 'disc' }} data-aos="zoom-y-out" data-aos-delay="150">
                    <li>Loyalty members made <b>34% of purchases</b> but <b>74% of revenue</b></li>
                    <li>Loyalty members spent, on average <b>5.5 times</b> more than non members</li>
                    <li>Only <b>3% of customers with $0 purchases</b> were loyalty members</li>
                    
                </ul>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-2xl text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">Hypothesis</p>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-xl text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150"><b>Promoting Loyalty Program</b> by allowing our members to make use of their loyalty benefits & points, will increase sales.</p>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-2xl text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">Prototype</p>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-xl text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">Wireframe</p>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-l text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">Loyalty Members SignIn and Popup</p>
            </div>
            <div className="max-w-3xl mx-auto mt-9 mb-4">
            <div
                className="image-container mt-9 mb-9 pl-5"
                >
                <Image
                    src="https://www.kimmy-kim.com/uploads/1/4/2/9/142913591/tp6_orig.png"
                    width={700}
                    height={350}
                    alt=""
                
                />
            </div>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-xl text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">High-Fidelity</p>
            </div>
            
            <div className="max-w-3xl mx-auto mt-9 mb-4">
            <div
                className="image-container mt-9 mb-9 pl-5"
                >
                <Image
                    src="https://www.kimmy-kim.com/uploads/1/4/2/9/142913591/tp7_orig.png"
                    width={700}
                    height={350}
                    alt=""
                
                />
            </div>
            </div>

            <div className="max-w-3xl mx-auto mt-9 mb-4">
            <div
                className="image-container mt-9 mb-9 pl-5"
                >
                <Image
                    src="https://www.kimmy-kim.com/uploads/1/4/2/9/142913591/tp8_orig.png"
                    width={700}
                    height={350}
                    alt=""
                
                />
            </div>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-2xl text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">A/B Test</p>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-xl text-black-600 mb-4 text-left" data-aos="zoom-y-out" data-aos-delay="150">Variants</p>
              <ul className="text-l text-black-600 mb-4 text-left pl-9" style={{ listStyleType: 'disc' }} data-aos="zoom-y-out" data-aos-delay="150">
                    <li>Control variant—the landing page as it currently appears</li>
                    <li>Test variant—the landing page in its current layout but with several new features such as login button and loyalty member page pop-up</li>  
                </ul>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-xl text-black-600 mb-4 text-left" data-aos="zoom-y-out" data-aos-delay="150">Target Audience</p>
              <ul className="text-l text-black-600 mb-4 text-left pl-9" style={{ listStyleType: 'disc' }} data-aos="zoom-y-out" data-aos-delay="150">
                    <li>Loyalty Members</li>
                </ul>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-xl text-black-600 mb-4 text-left" data-aos="zoom-y-out" data-aos-delay="150">Traffic Distribution</p>
              <ul className="text-l text-black-600 mb-4 text-left pl-9" style={{ listStyleType: 'disc' }} data-aos="zoom-y-out" data-aos-delay="150">
                    <li>Risk : Medium</li>
                    <li>50:50</li>
                </ul>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-xl text-black-600 mb-4 text-left" data-aos="zoom-y-out" data-aos-delay="150">Test length</p>
              <ul className="text-l text-black-600 mb-4 text-left pl-9" style={{ listStyleType: 'disc' }} data-aos="zoom-y-out" data-aos-delay="150">
                    <li>2 Weeks</li>     
                </ul>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-xl text-black-600 mb-4 text-left" data-aos="zoom-y-out" data-aos-delay="150">Metric</p>
              <ul className="text-l text-black-600 mb-4 text-left pl-9" style={{ listStyleType: 'disc' }} data-aos="zoom-y-out" data-aos-delay="150">
                    <li>Conversion Rate </li>     
                </ul>
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

export default HeroTenPeaks;
