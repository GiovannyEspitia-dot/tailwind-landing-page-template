'use client';

import React, { useState } from 'react';
import Image from "next/image";

const HeroCheckpoint = () => {
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
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-9" data-aos="zoom-y-out">CheckPoint<span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500"></span></h1>
            <h4 className="text-5xl md:text-1l font-extrabold leading-tighter tracking-tighter mb-9" data-aos="zoom-y-out"><span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-900">User Research</span></h4>
            <div className="flex justify-center">
            <div
              className="image-container mt-9 mb-9"
              
            >
              <Image
                src="https://www.kimmy-kim.com/uploads/1/4/2/9/142913591/editor/frame-11-5.png?1675919031"
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
              <p className="text-xl text-gray-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">50% of diagnosed mental illness cases go untreated. And after a mental health-related hospitalization,  less than half of all patients receive follow-up care within 7 days. Those suffering from mental illness can initiate the care process but can struggle to close the gap between discharge and following through with their treatment.</p>
            </div>
            <div className="max-w-3xl mx-auto mt-9 items-left">
              <p className="text-1xl text-black-600 " data-aos="zoom-y-out" data-aos-delay="150"><b>My Role:</b> UX Researcher, UI/UX Design</p>
            </div>
            <div className="max-w-3xl mx-auto mt-2 items-left">
              <p className="text-1xl text-black-600 " data-aos="zoom-y-out" data-aos-delay="150"><b>Skills:</b> User Research, Literature Review, Interface Prototyping</p>
            </div>
            <div className="max-w-3xl mx-auto mt-2 items-left">
              <p className="text-1xl text-black-600 " data-aos="zoom-y-out" data-aos-delay="150"><b>Tools:</b> Figma, Miro, Excel, Teams</p>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-2xl text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">Problem</p>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-xl text-gray-600 mb-4 text-left" data-aos="zoom-y-out" data-aos-delay="150">There are existing mobile apps and technology platforms for discharge processes, such as Epic’s MyChart, which are typically capable of recording treatment instructions and other patient data. However:</p>
              <ol className="text-l text-black-600 mb-1 text-left" data-aos="zoom-y-out" data-aos-delay="150" style={{ listStyleType: 'decimal' }}>
                    <li>They rarely enable patients to continue their care process by connecting them to the next stages of their care.</li>
                    <li>They often lack a friendly, engaging experience that is tailored to the specific needs of the patient. </li>
                </ol>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-2xl text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">Research Question</p>
            </div>
            <div className="max-w-3xl mx-auto mt-2">
              <p className="text-xl text-gray-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">What evidence-based features can elevate the continuum of care that patients receive?</p>
            </div>
            <div className="max-w-3xl mx-auto mt-9 mb-4">
              <p className="text-2xl text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">Challenges</p>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-xl text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">Limitation 1: Sample Size</p>
              <ul className="text-l text-black-600 mt-8 text-left" data-aos="zoom-y-out" data-aos-delay="150" style={{ listStyleType: 'decimal' }}>
                    <li>The sample size for the project was limited due to the nature of the course and the difficulty in accessing actual MBH stakeholders.</li>
                </ul>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-xl text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">Limitation 2: Sample Selection</p>
              <ul className="text-l text-black-600 mt-8 text-left" data-aos="zoom-y-out" data-aos-delay="150" style={{ listStyleType: 'decimal' }}>
                    <li>The perspectives of the experts may not accurately reflect the experiences and perspectives of actual MBH patients and their caregivers.</li>
                </ul>
            </div>
            <div className="max-w-3xl mx-auto mt-9 mb-4">
              <p className="text-2xl text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">Procedure and Methodology</p>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-xl text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">Target Demographic</p>
              <ul className="text-l text-black-600 mt-8 text-left" data-aos="zoom-y-out" data-aos-delay="150" style={{ listStyleType: 'decimal' }}>
                    <li>The perspectives of the experts may not accurately reflect the experiences and perspectives of actual MBH patients and their caregivers.</li>
                </ul>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-xl text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">Recruiting Methods</p>
              <ul className="text-l text-black-600 mb-1 text-left" style={{ listStyleType: 'disc' }} data-aos="zoom-y-out" data-aos-delay="150">
                    <li>For our interview participants, it was not feasible to recruit actual patients or their caregivers. Thus, we sought to find individuals who have interacted with mental and behavioral health (MBH) patients to gain a closer perspective of their experiences. We consulted with our professor to inquire about possible resources and were able to recruit experts from a Mental Health Institute.</li>
                    
                </ul>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-xl text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">Summary of Participants</p>
              <ul className="text-l text-black-600 mb-1 text-left" style={{ listStyleType: 'disc' }} data-aos="zoom-y-out" data-aos-delay="150">
                    <li>A total of 2 individuals were interviewed. Both of them work at the Mental Health Institute and have close experiences with mental and behavioral health (MBH) patients.</li>
                    
                </ul>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-xl text-black-600 mb-4 text-left" data-aos="zoom-y-out" data-aos-delay="150">Instruments</p>
              <p className="text-l text-black-600 mb-4 text-left" data-aos="zoom-y-out" data-aos-delay="150"><b>Interview Question Types:</b></p>
              <ul className="text-l text-black-600 mb-4 text-left pl-9" style={{ listStyleType: 'disc' }} data-aos="zoom-y-out" data-aos-delay="150">
                    <li>Interviewee's experience with MBH patients</li>
                    <li>MBH patient needs and barriers</li>
                    <li>Current Role of technology in MBH patient care</li>
                </ul>
            <p className="text-ll text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">All interviews were conducted through email.</p>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-xl text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">Analysis Methods</p>
              <p className="text-l text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">After conducting the interviews, we analyzed each interview and compared the two interviews. All answers were uploaded to the group’s shared folder on Google Drive. We noted any significant similarities, differences, and findings. The results of the analysis helped us to understand patients' problems and current technological problem  within MBH patient care, and to develop our evidence-based design recommendation.</p>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-xl text-black-600 mb-4 text-left" data-aos="zoom-y-out" data-aos-delay="150">Insights from the Interview</p>
              
              <ul className="text-l text-black-600 mb-4 text-left pl-9" style={{ listStyleType: 'disc' }} data-aos="zoom-y-out" data-aos-delay="150">
                    <li>When patients exit a treatment facility or crisis center, their next steps are often recorded on a piece of paper that can be easily lost or destroyed.</li>
                    <li>Doctors may struggle to contact patients after they leave, and patients may struggle to communicate with past care providers to clarify next steps.</li>
                    <li>With little follow-up, patients may feel alone after leaving a treatment facility and the barriers to accessing further care resources can leave them stranded.​</li>
                </ul>
            </div>
            <div className="text-center pb-12 md:pb-16">
            
            <div className="flex justify-center">
                <div
                className="image-container mt-9 mb-9"
                
                >
                <Image
                    src="https://www.kimmy-kim.com/uploads/1/4/2/9/142913591/editor/1.png?1675476740"
                    width={700}
                    height={350}
                    alt=""
                
                />
                </div>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-xl text-black-600 mb-4 text-left" data-aos="zoom-y-out" data-aos-delay="150"> Literature review to develop an evidence-based design</p>
              <div
                className="image-container mt-9 mb-9 pl-5"
                
                >
                <Image
                    src="https://www.kimmy-kim.com/uploads/1/4/2/9/142913591/screen-shot-2023-02-09-at-4-02-14-pm_orig.png"
                    width={700}
                    height={350}
                    alt=""
                
                />
                </div>
              <ul className="text-l text-black-600 mb-4 text-left pl-9" style={{ listStyleType: 'disc' }} data-aos="zoom-y-out" data-aos-delay="150">
                    <li>Many studies have indicated that people prefer interaction with human agents over AI or any automated machines (CGS survey, 2019).</li>
                    <li>Inadequate communication between either party can lead to misunderstanding and miscommunication of a clinician’s instructions or medications which can result in relapse (HIPAA, n.d.).</li>
                    <li>Since the 1990s, the concept of “peer support” has been acknowledged to be a crucial element for a supportive network among patients with mental health issues (Miyamoto & Sono, 2012).​</li>
                    <li>A study done by Naslund reports that patients find it helpful when they share their stories and ways to cope with their challenges because this kind of social interaction gives them social connectedness and a sense of belonging. (Naslund et al., 2016).</li>
                </ul>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <p className="text-xl text-black-600 mb-4 text-left" data-aos="zoom-y-out" data-aos-delay="150">Design Recommendations based on qualitative data and literature review</p>
              
              <ul className="text-l text-black-600 mb-4 text-left pl-9" style={{ listStyleType: 'decimal' }} data-aos="zoom-y-out" data-aos-delay="150">
                    <li><b>Sentiment:</b> Human-friendly features to increase patient interaction and engagement.</li>
                    <li><b>Follow up:</b> ​Effective communication channels with doctors to minimize misunderstandings</li>
                    <li><b>Support:</b> ​Supportive features that foster a sense of belongingness for patients.</li>
                </ul>
            </div>
            <div className="max-w-3xl mx-auto mt-9 mb-4">
              <p className="text-2xl text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">Prototype Development</p>
            </div>
            <div className="max-w-3xl mx-auto mt-9 mb-4">
            <div
                className="image-container mt-9 mb-9 pl-5"
                >
                <Image
                    src="https://www.kimmy-kim.com/uploads/1/4/2/9/142913591/published/2.png?1675480174"
                    width={700}
                    height={350}
                    alt=""
                
                />
            </div>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <ul className="text-l text-black-600 mb-4 text-left pl-9" style={{ listStyleType: 'disc' }} data-aos="zoom-y-out" data-aos-delay="150">
                    <li>Live recordings by doctors for personalized instructions​</li>
                    <li>Allow doctors to capture these next steps in live recordings in order to facilitate more personable, human, friendly interactions with patients.</li>
                    <li>Open lines of communication with patients and doctors</li>
                    <li>Patients can comfortably reach out if they have questions or just want to follow up.</li>
                </ul>
            </div>
            <div className="max-w-3xl mx-auto mt-9 mb-4">
            <div
                className="image-container mt-9 mb-9 pl-5"
                >
                <Image
                    src="https://www.kimmy-kim.com/uploads/1/4/2/9/142913591/published/3.png?1675480154"
                    width={700}
                    height={350}
                    alt=""
                
                />
            </div>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <ul className="text-l text-black-600 mb-4 text-left pl-9" style={{ listStyleType: 'disc' }} data-aos="zoom-y-out" data-aos-delay="150">
                    <li>Identifies nearby community MBH resources.​</li>
                    <li>Enable patients to be connected to further treatment steps. Navigating the network of support options that surrounds patients as easy as possible to help patients feel like there is someone looking out for them.</li>
                    <li>Recommendation engine based on care continuity​</li>
                    <li>Option for streamlined appointment booking</li>
                </ul>
            </div>
            <div className="max-w-3xl mx-auto mt-9 mb-4">
            <div
                className="image-container mt-9 mb-9 pl-5"
                >
                <Image
                    src="https://www.kimmy-kim.com/uploads/1/4/2/9/142913591/published/4.png?1675480262"
                    width={700}
                    height={350}
                    alt=""
                
                />
            </div>
            </div>
            <div className="max-w-3xl mx-auto mt-9">
              <ul className="text-l text-black-600 mb-4 text-left pl-9" style={{ listStyleType: 'disc' }} data-aos="zoom-y-out" data-aos-delay="150">
                    <li>Peer support and helpful notifications​</li>
                    <li>Help patients feel supported by giving helpful and friendly notifications to make sure they are staying on top of their treatment journey in order to supplement follow-up and next step messages from care providers.</li>
                    <li>Reminders for daily tasks for mental wellness.​</li>
                  
                </ul>
            </div>
            <div className="max-w-3xl mx-auto mt-9 mb-4">
              <p className="text-2xl text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">Feedback on Findings</p>
              <ul className="text-l text-black-600 mb-4 text-left pl-9" style={{ listStyleType: 'disc' }} data-aos="zoom-y-out" data-aos-delay="150">
                    <li><b>Message handling to avoid overloading doctors:</b> To avoid overloading doctors, treatment facilities can opt in to designate one worker to handle incoming messages, reply to simple requests, and forward important/urgent messages to doctors.​</li>
                    <li><b>Limitation of app requiring phone and wifi:</b> The limitation of the app requiring phone and wifi for messaging and nearby resource function was criticized during the open house. This makes it hard to use for homeless and those without stable access to wifi or cellular service. A potential solution is to focus on laptop/desktop support but this still remains a weakness of the design.</li>   
                  
                </ul>
            </div>
            <div className="max-w-3xl mx-auto mt-9 mb-4">
              <p className="text-2xl text-black-600 mb-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">Conclusion</p>
              <p className="text-l text-black-600 mb-4 text-left " data-aos="zoom-y-out" data-aos-delay="150">
              Hope to gain more feedback from doctors, psychiatrists, and patients to further enhance our prototype in the future. Treatment is a journey that too often ends just when patients need it most. This application aims to be helpful for patients who are struggling through their journey by providing insights into potential future work.
                </p>
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

export default HeroCheckpoint;
