import React from "react";

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const attorneySection = () => {
    return (
        <div>
            <div className="flex items-center justify-between h-full w-full absolute z-0">
                <div className="w-1/3 bg-white h-full" />
                <div className="w-4/6 ml-16 bg-gray-100 h-full" />
            </div>
            <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
                <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800">
                    Attorneys
                </h1>
                <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800">Attorneys</h1>
                <div className="flex">
                    <div className="mt-14 md:flex">
                                <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                                    <div>
                                        <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">DIRECTOR <br /> NTHABISENG MALEKA</h1>
                                        <p className="text-base font-medium leading-6 mt-4 text-gray-600">Nthabiseng Maleka is the founder and legal mind behind NF Maleka Attorneys Inc. She is highly qualified and carries intense legal experience in various aspects of the law. <br /><br /> She has served her articles in two firms where she gained vast legal experience and prior to the incorporation of the firm she held a position as a professional assistant heading up the deceased estates department at one of the leading property and conveyancing firms in South Africa. <br /><br /> LLB, University of South Africa</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
}

export default attorneySection

