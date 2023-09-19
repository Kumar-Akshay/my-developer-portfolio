import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import {BsDownload} from 'react-icons/bs';
import TextChanger from './TextChanger';
import Profile from '../assets/logo.jpg';
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className="flex">
        {/* Column 1 */}
        <div className='max-w-[600px] my-[100px] mx-[150px]  flex flex-col justify-between h-full'>
            <h1 className='text-6xl text-pink-600'>Hi, </h1>
            <h1 className='text-2xl sm:text-7xl font-bold text-[#ccd6f6]'>
            <TextChanger  textChangeStop = {true} texts = {["Akshay Kumar"]} speed={100} />
            </h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
            <TextChanger textChangeStop = {false} title = {"I'm a"} texts={[ "Full Stack Developer",".NET Developer","Penetration Tester",]} speed={70}/>
            </h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
            I’m a full-stack developer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused on
            building responsive full-stack web applications.
            </p>
            <div className='flex'>
            <button className='text-white group border-2 px-6 py-3 my-2 mx-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                View Work.
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
                </span>
            </button>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                Download Resume.
                <span>
                <BsDownload className='ml-3 ' />
                </span>
            </button>
            </div>
        </div>
        {/* Column 2 */}
        <div className="w-1/2 my-[100px] mx-[50px]">
            <img src={Profile} alt="Your Image" className="w-50 h-50 rounded-full" />
        </div>
      </div>
      

    </div>
  );
};

export default Home;