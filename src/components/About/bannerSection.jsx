import React from "react";

const bannerSection = () => {
    return (
        <div className="dark:bg-white" style={{paddingLeft: "10px", paddingRight: "10px"}}>
            <div className="flex flex-col lg:flex-row items-stretch justify-between lg:px-0 px-6 lg:py-20 py-8 2xl:mx-auto 2xl:container">
                <div className="z-30 relative lg:w-1/2">
                    <div className="hidden dark:bg-amber-400 bg-black w-full lg:w-10/12 lg:h-full lg:flex justify-end items-center">
                        <div className="w-full lg:w-auto lg:-mr-32">
                            <img src="https://images.unsplash.com/photo-1568092806323-8ec13dfa9b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="image with decent chairs" className="w-full relative z-30 lg:pl-20 px-6 py-14" />
                        </div>
                    </div>
                    <div className="absolute top-0 dark:bg-black bg-black md:h-96 w-full hidden md:block lg:hidden"></div>
                    <div className="w-full h-full lg:hidden">
                        <img src="https://images.unsplash.com/photo-1568092806323-8ec13dfa9b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="image with decent chairs" className="w-full relative z-30 lg:pl-20 md:px-6 py-5 md:py-14" />
                    </div>
                </div>
                <div className="bg-black dark:bg-black lg:w-1/2 lg:ml-12 lg:p-14 p-8 flex items-center">
                    <div>
                        <h1 className="dark:text-white md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-6xl sm:text-5xl text-4xl font-semibold text-gray-800 capitalize">N.F Maleka Attorneys Inc.</h1>
                        <br />
                        <a href="/practice-area">
                        <button className="focus:outline-none focus:ring-2 focus:ring-black text-gray-900 bg-gradient-to-r from-black via-grey to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Practice Areas  
                        <div className="ml-2 mt-0.5">
                                <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.33325 8H12.6666" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 10.6667L12.6667 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 5.33301L12.6667 7.99967" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default bannerSection