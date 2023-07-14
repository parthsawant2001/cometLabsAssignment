import React from 'react';
import edit from '../icons/pencil_3179424.png';
import testing from '../icons/survey_3261674.png';
import analysis from '../icons/growth-chart_2787642.png';
// import Features from './Features';
import Image from 'next/image';

const Features = () => {
  const features = [
    {
      icon: edit,
      title: 'Drag-and-drop editing',
      description:
        'landing page builder makes it easy to create landing pages without any coding knowledge. You can simply drag and drop elements to create your landing page.',
    },
    {
      icon: testing,
      title: 'A/B testing',
      description:
        'allows you to A/B test different versions of your landing pages to see which one performs better. This can help you improve your conversion rates.',
    },
    {
      icon: analysis,
      title: 'Analytics',
      description:
        "provides analytics data on your landing pages so you can see how they're performing. This data can help you identify areas where you can improve your landing pages.",
    },
  ];

  return (
    <div className='flex my-[40px] justify-around gap-10 w-[80%] bg-gradient-to-br from-[#a3f9f9] via-[#6ce2fa ] to-[#00d5ff] rounded-3xl p-[30px]'>
      <div className='flex flex-row gap-6 justify-between '>
        {features.map((feature) => (
          <div className='flex flex-col items-center justify-between p-[10px] w-[35%]'>
            <Image
              className='w-[50px] p-[10px] bg-white rounded-lg h-[50px] mx-[5px] my-[10px]'
              src={feature.icon}
            />
            <h3 className='mb-3 text-xl font-bold leading-5'>
              {feature.title}
            </h3>
            <p className='mb-3 text-sm text-gray-900'>{feature.description}</p>
            <button className='items-center justify-center h-12 px-6 font-medium  bg-black text-white rounded shadow-md '>
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
