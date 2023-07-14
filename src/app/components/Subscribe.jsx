import React from 'react';

const Subscribe = () => {
  return (
    <div className='w-full mt-10 bg-gradient-to-br from-[#a3f9f9] via-[#6ce2fa ] to-[#00d5ff]'>
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='flex flex-col items-center justify-between xl:flex-row'>
          <div className='w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12'>
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none'>
              The quick, brown fox <br className='hidden md:block' />
              jumps over a<span className='text-teal-accent-400'>lazy dog</span>
            </h2>
            <p className='max-w-xl mb-4 text-base text-black md:text-lg'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudan, totam rem aperiam, eaque ipsa quae.
            </p>
            <button
              href='/'
              aria-label=''
              className='items-center justify-center h-12 px-6 font-medium  border-2 border-black text-black rounded shadow-md '
            >
              Learn more
            </button>
          </div>
          <div className='w-full max-w-xl xl:px-8 xl:w-5/12'>
            <div className='relative'>
              <div className='relative bg-white rounded shadow-2xl p-7 sm:p-10'>
                <h3 className='mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl'>
                  Sign up for updates
                </h3>
                <form>
                  <div className='mb-1 sm:mb-2'>
                    <label
                      htmlFor='name'
                      className='inline-block mb-1 font-medium'
                    >
                      Name
                    </label>
                    <input
                      placeholder='John Doe'
                      required
                      type='text'
                      className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
                      id='name'
                      name='name'
                    />
                  </div>
                  <div className='mb-1 sm:mb-2'>
                    <label
                      htmlFor='email'
                      className='inline-block mb-1 font-medium'
                    >
                      E-mail
                    </label>
                    <input
                      placeholder='john.doe@example.org'
                      required
                      type='text'
                      className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
                      id='email'
                      name='email'
                    />
                  </div>
                  <div className='mt-4 mb-2  sm:mb-4'>
                    <button
                      type='submit'
                      className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black border-2 border-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className='text-xs text-gray-600 sm:text-sm'>
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
