import React from 'react'

import logo from '../assets/logoBlack.png';

const Footer = () => {
  return (
    <div className=" bg-linear-pink-invert pb-12" >
                <div className="mx-auto container pt-20 lg:pt-72 flex flex-col items-center justify-center">
                    <div>
                        <img src={logo} />
                    </div>
                    <div className="text-black flex flex-col md:items-center f-f-l pt-3">
                        <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">Your Intense Legal Solutions.</h1>
                        <div className="text-base font-medium leading-6 mt-4 text-gray-600">
                            <ul className="md:flex items-center">
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0"><a href='/about'>About</a></li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0"><a href="/practice-area">Practice Area</a></li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0"><a href="/attorney">Attorneys</a></li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0"><a href="/contact">Contact</a></li>
                                <li className="cursor-pointer pt-4 lg:py-0">Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="text-base font-medium leading-6 mt-4 text-gray-600">
                            <p> © 2022 N.F MALEKA ATTORNEYS. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Footer