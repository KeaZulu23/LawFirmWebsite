import React from 'react';

const About = () => {
  return (
    <div className="overflow-y-hidden">
      <div className="pb-16" style={{ fontFamily: '"Lato", sans-serif' }}>
        {/* Code block starts */}
        <dh-component>
          <div className="pt-16">
            <div className="py-12 bg-gray-100">
              <div className="max-w-8xl mx-auto container">
                <div tabIndex={0} aria-label="group of cards" className="focus:outline-none flex flex-wrap items-center justify-center sm:justify-between">
                  <div tabIndex={0} aria-label="card 1" className="focus:outline-none flex flex-col items-center py-6 md:py-0 px-6 w-full sm:w-1/2 md:w-1/4">
                    <div className="w-20 h-20 relative ml-6">
                    <div className="absolute top-0 right-0 bg-black rounded w-16 h-16 mt-2 mr-1" />
                      <div className="text-white absolute bottom-0 left-0 bg-amber-400 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <img src="https://www.svgrepo.com/show/413180/collaborate.svg" alt="drawer" />
                      </div>
                    </div>
                    <h4 tabIndex={0} className="focus:outline-none text-lg font-medium leading-6 text-gray-800 text-center pt-5">
                    ESTATE PLANNING
                    </h4>
                  </div>
                  <div tabIndex={0} aria-label="card 2" className="focus:outline-none flex flex-col items-center py-6 md:py-0 px-6 w-full sm:w-1/2 md:w-1/4">
                    <div className="w-20 h-20 relative ml-6">
                      <div className="absolute top-0 right-0 bg-black rounded w-16 h-16 mt-2 mr-1" />
                      <div className="text-white absolute bottom-0 left-0 bg-amber-400 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <img src="https://www.svgrepo.com/show/413139/balance.svg" alt="check" />
                      </div>
                    </div>
                    <h4 tabIndex={0} className="focus:outline-none text-lg font-medium leading-6 text-gray-800 text-center pt-5">
                    CIVIL & COMMERCIAL
                    </h4>
                  </div>
                  <div tabIndex={0} aria-label="card 3" className="focus:outline-none flex flex-col items-center py-6 md:py-0 px-6 w-full sm:w-1/2 md:w-1/4">
                    <div className="w-20 h-20 relative ml-6">
                    <div className="absolute top-0 right-0 bg-black rounded w-16 h-16 mt-2 mr-1" />
                      <div className="text-white absolute bottom-0 left-0 bg-amber-400 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <img src="https://www.svgrepo.com/show/413179/commit.svg" alt="html tag" />
                      </div>
                    </div>
                    <h4 tabIndex={0} className="focus:outline-none text-lg font-medium leading-6 text-gray-800 text-center pt-5">
                    CRIMINAL LAW
                    </h4>
                  </div>
                  <div tabIndex={0} aria-label="card 4" className="focus:outline-none flex flex-col items-center py-6 md:py-0 px-6 w-full sm:w-1/2 md:w-1/4">
                    <div className="w-20 h-20 relative ml-6">
                    <div className="absolute top-0 right-0 bg-black rounded w-16 h-16 mt-2 mr-1" />
                      <div className="text-white absolute bottom-0 left-0 bg-amber-400 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <img src="https://www.svgrepo.com/show/413154/broadcast.svg" alt="monitor" />
                      </div>
                    </div>
                    <h4 tabIndex={0} className="focus:outline-none text-lg font-medium leading-6 text-gray-800 text-center pt-5">
                    PROPERTY DISPUTES
                    </h4>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </dh-component>
        {/* Code block ends */}
      </div>
    </div>
  );
};

export default About;
