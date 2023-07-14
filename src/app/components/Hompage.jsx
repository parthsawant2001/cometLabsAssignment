import React from 'react';
import laptop from '../images/laptopLandingpage.png';
import Image from 'next/image';
import ui from '../images/ui.png';
import Features from './Features';
import Testimonials from './Testimonials';
import Subscribe from './Subscribe';

const Hompage = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex px-[150px] pt-[150px] mb-[50px] flex-row items-center justify-center '>
        <div className='items-start justify-center'>
          <h1 className=' mb-2 font-sans text-7xl font-bold leading-none  text-gray-900 sm:text-4xl md:mx-auto'>
            Smart marketing tools to maximize conversions
          </h1>
          <p className='text-base mb-2 whitespace-normal text-gray-700 md:text-lg'>
            Turn more of your visitors into customers. Unbounce is the
            AI-powered landing page builder with smart features that let you
            create beautiful, high-performing marketing campaigns in just a few
            minutes.
          </p>
          <button className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white bg-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'>
            Get Started
          </button>
        </div>
        {/* <div className=''> */}
        {/* <div className=''> */}
        <Image src={ui} className=' w-[50%]' />
        {/* </div> */}
        {/* </div> */}
      </div>
      <Features />
      <Testimonials />
      <Subscribe />
    </div>
  );
};

export default Hompage;

// background-image: radial-gradient( circle 311px at 8.6% 27.9%,  #3e93fc91 12.9%, #efb7c070 91.2% );
