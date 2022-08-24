import React, { useState } from "react";

// import heroVid from '../assets/video.mp4';

import logo from '../assets/logoBlack.png';
import hero from '../assets/hero.jpg';

const Hero = () => {
    const [menu, setMenu] = useState(false);

  return (
    <div>
        <>
        <nav className="lg:hidden relative z-50 bg-black">
            <div className="flex py-2 justify-between items-center px-4">
                <div>
                <img src={logo} alt="logo" height={50} width={100} />
                </div>
                <div className="visible flex items-center">
                <button id="open" onClick={() => setMenu(!menu)} className={` ${menu ? 'hidden' : ''} focus:outline-none focus:ring-2 focus:ring-black text-gray-900 bg-gradient-to-r from-black via-grey to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}>
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg2.svg" alt="menu" />
                </button>
                <ul id="list" className={` ${menu ? '' : 'hidden'} p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-24`}>
                    <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                    <a href="/" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                        <span className="font-bold">Home</span>
                    </a>
                    </li>
                    <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onclick="dropdownHandler(this)">
                    <a href="/about" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                        <span className="font-bold">About Us</span>
                    </a>
                    </li>
                    <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                    <a href="/practice-area" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                        <span className="font-bold">Practice Areas</span>
                    </a>
                    </li>
                    <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                    <a href="/attorney" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                        <span className="font-bold">Attorneys</span>
                    </a>
                    </li>
                    <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onclick="dropdownHandler(this)">
                    <a href="/contact" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                        <span className="font-bold">Contact</span>
                    </a>
                    </li>
                </ul>
                <div className="xl:hidden">
                    <button id="close" className={` ${menu ? '' : 'hidden'} close-m-menu focus:outline-none focus:ring-2 focus:ring-black text-gray-900 bg-gradient-to-r from-black via-grey to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`} onClick={() => setMenu(!menu)}>
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg3.svg" alt="close" />
                    </button>
                </div>
                </div>
            </div>
            </nav>
            <nav className="f-f-l relative z-10 bg-black" style={{paddingRight: "20px", paddingLeft: "50px"}}>
                <div className="relative z-10 mx-auto container hidden w-full px-4 xl:px-0 lg:flex justify-between items-center py-11">
                <div>
                    <img src={logo} alt="logo" height={50} width={100} />
                </div>
                <div className="flex items-center text-white text-base font-medium">
                    <ul className="flex items-center pr-3 xl:pr-12">
                    <li className="cursor-pointer hover:text-gray-300 ease-in">
                        <a href="/" className="focus:outline-none focus:ring-2 focus:ring-white" style={{color: "White"}}>Home</a>
                    </li>
                    <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
                        <a href="/about" className="focus:outline-none focus:ring-2 focus:ring-white" style={{color: "White"}}>About Us</a>
                    </li>
                    <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
                        <a href="/practice-area" className="focus:outline-none focus:ring-2 focus:ring-white" style={{color: "White"}}>Practice Areas</a>
                    </li>
                    <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
                        <a href="/attorney" className="focus:outline-none focus:ring-2 focus:ring-white" style={{color: "White"}}>Attorneys</a>
                    </li>
                    <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
                        <a href="/contact" className="focus:outline-none focus:ring-2 focus:ring-white" style={{color: "White"}}>Contact</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav></>
            <div className="pt-32 lg:flex items-center relative z-10 container mx-auto" style={{paddingLeft: "40px", paddingRight: "40px"}}>
                    <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
                        <img tabIndex="0" role="img" aria-label="people smiling" className="mx-auto" src={hero}  alt="people smiling"/>
                    </div>
                    <div  role="contentinfo"  className="w-full lg:w-1/2 h-full">
                        <p tabIndex="0" className="text-black uppercase text-2xl mb-4">Your Intense Legal Solutions</p>
                        <h1 tabIndex="0" className="text-yellow-500 text-4xl lg:text-6xl font-black mb-8">OUR PHILOSOPHY</h1>
                        <p tabIndex="0" className="text-gray-800 font-regular mb-8">Our philosophy is rooted in clear communication and beneficial service. We provide sound solutions to our clients' legal problems effectively. We have a dedicated team of professionals who understand your needs. <br /><br />Your needs come first.</p>
                        <div className=" ">
                            <a href="/about">
                                <button className="focus:outline-none focus:ring-2 focus:ring-black text-gray-900 bg-gradient-to-r from-black via-grey to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Learn More</button>
                            </a>
                        </div> 
                    </div>
                </div>
            </div>
        );
};

export default Hero;
