import Spline from '@splinetool/react-spline';

export default function Apple() {
  return (
    <main className='relative text-white w-full h-screen overflow-hidden'>
      <Spline className='md:scale-125 scale-75 absolute top-5'
        scene="https://prod.spline.design/KN5lBQ9mGQxXVF3T/scene.splinecode" 
      />
      <div className='absolute top-0 h-full w-full '>
               <div className='w-full flex flex-col items-center  h-[40%] absolute bottom-0 left-0'>
                              <div className='text-[3rem] leading-none uppercase f6 mt-5 mb-3'>
                                             <h1>Anon</h1>
                              </div>
                              <div className=' w-full text-center f4 mt-5'>
                                             <h1 className='text-xl'>Starting on February 9th, 2025</h1>
                                             <p className='text-sm opacity-50'>Unlock the future of innovation, join us at WWDC24 where code meets creativity.</p>
                              </div>

                              <div className='w-full flex items-center justify-center gap-5 mt-6'>
                                             <div className='px-8 cursor-pointer rounded-full bg-white f5 text-black py-3'>
                                                                           <h1>Join waitlist</h1>
                                             </div>
                                             <div className='px-10 rounded-full cursor-pointer border-white border-[1px] text-white  f5  py-3'>
                                                                           <h1>Explore</h1> 

                                             </div>
                              </div>
               </div>
      </div>
    </main>
  );
}
