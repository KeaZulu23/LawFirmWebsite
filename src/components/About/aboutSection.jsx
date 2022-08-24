import React from "react";

import Logo from '../../assets/Logo_Black BG.png'

const aboutSection = () => {
    return (
        <div style={{paddingLeft: "30px", paddingRight: "30px", paddingTop: "100px"}}>
            <div className="2xl:mx-auto 2xl:container 2xl:px-20 px-6 ">
                <div className="flex md:flex-row flex-col-reverse md:items-stretch items-center justify-center">
                    <div className="md:py-20 xl:w-1/2 sm:w-1/2 lg:mr-20 md:mr-6 flex flex-col md:items-end items-center justify-center xl:mr-28">
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="md:text-5xl text-3xl font-bold text-center text-gray-800">About Us</h1>
                            <p className="sm:w-96 w-full mt-6 text-base leading-6 text-center text-gray-600">Your intense legal solutions.</p>
                            <div className="md:mt-14 mt-12 flex flex-col items-center">
                                <div className="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center" role="img" aria-label="money">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" stroke="#4338CA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M16.7333 8.99994C16.4918 8.58096 16.1409 8.23555 15.7181 8.00068C15.2954 7.76582 14.8167 7.65034 14.3333 7.66661H11.6667C10.9594 7.66661 10.2811 7.94756 9.78105 8.44766C9.28095 8.94776 9 9.62603 9 10.3333C9 11.0405 9.28095 11.7188 9.78105 12.2189C10.2811 12.719 10.9594 12.9999 11.6667 12.9999H14.3333C15.0406 12.9999 15.7189 13.2809 16.219 13.781C16.719 14.2811 17 14.9594 17 15.6666C17 16.3739 16.719 17.0521 16.219 17.5522C15.7189 18.0523 15.0406 18.3333 14.3333 18.3333H11.6667C11.1833 18.3495 10.7046 18.2341 10.2819 17.9992C9.85913 17.7643 9.5082 17.4189 9.26667 16.9999"
                                            stroke="#4338CA"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div> 
                                <p className="text-base font-medium leading-6 mt-6 text-center text-gray-600 sm:w-96 w-full">N.F Maleka Attorneys Inc. is a firm of attorneys who are passionate about serving its clients.</p>
                            </div>
                            <div className="mt-7 flex flex-col items-center">
                                <div className="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center" role="img" aria-label="phone">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.66667 2.33331H9L11.6667 8.99998L8.33333 11C9.76128 13.8954 12.1046 16.2387 15 17.6666L17 14.3333L23.6667 17V22.3333C23.6667 23.0406 23.3857 23.7188 22.8856 24.2189C22.3855 24.719 21.7072 25 21 25C15.799 24.6839 10.8935 22.4753 7.20911 18.7909C3.52467 15.1064 1.31607 10.201 1 4.99998C1 4.29274 1.28095 3.61446 1.78105 3.11436C2.28115 2.61426 2.95942 2.33331 3.66667 2.33331Z" stroke="#4338CA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17 6.33331C17.7072 6.33331 18.3855 6.61426 18.8856 7.11436C19.3857 7.61446 19.6667 8.29274 19.6667 8.99998" stroke="#4338CA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17 1C19.1217 1 21.1566 1.84286 22.6569 3.34315C24.1571 4.84344 25 6.87827 25 9" stroke="#4338CA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <p className="text-base font-medium leading-6 mt-6 text-center text-gray-600 sm:w-96 w-full">We believe, that to give real service, you will need to bring something which can never be measured with money and that is sincerity and integrity. </p>
                            </div>
                            <div className="mt-7 flex flex-col items-center">
                                <div className="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center" role="img" aria-label="ideas">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.99967 1.33331H2.66634C1.92996 1.33331 1.33301 1.93027 1.33301 2.66665V7.99998C1.33301 8.73636 1.92996 9.33331 2.66634 9.33331H7.99967C8.73605 9.33331 9.33301 8.73636 9.33301 7.99998V2.66665C9.33301 1.93027 8.73605 1.33331 7.99967 1.33331Z" stroke="#4338CA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.99967 14.6667H2.66634C1.92996 14.6667 1.33301 15.2636 1.33301 16V21.3334C1.33301 22.0697 1.92996 22.6667 2.66634 22.6667H7.99967C8.73605 22.6667 9.33301 22.0697 9.33301 21.3334V16C9.33301 15.2636 8.73605 14.6667 7.99967 14.6667Z" stroke="#4338CA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M21.3337 14.6667H16.0003C15.2639 14.6667 14.667 15.2636 14.667 16V21.3334C14.667 22.0697 15.2639 22.6667 16.0003 22.6667H21.3337C22.07 22.6667 22.667 22.0697 22.667 21.3334V16C22.667 15.2636 22.07 14.6667 21.3337 14.6667Z" stroke="#4338CA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.667 5.33331H22.667" stroke="#4338CA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M18.667 1.33331V9.33331" stroke="#4338CA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <p className="text-base font-medium leading-6 mt-6 text-center text-gray-600 sm:w-96 w-full">The firm is founded upon strong values such as sincerity, humanity and integrity with the strong belief that every client deserves the best tailor made legal support and solutions to meet and handle their legal affairs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-12 xl:w-1/2 lg:w-1/3 sm:w-1/2">
                        <img src={Logo} alt="image ow a woman studying" className="h-full rounded-md object-cover object-center md:block hidden" />
                        <img src={Logo} alt="image ow a woman studying" className="h-auto w-auto md:hidden block" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default aboutSection