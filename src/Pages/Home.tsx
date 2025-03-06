import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from '../components/Navbar';
import Second from '../components/Second';
import { IoArrowForwardSharp } from 'react-icons/io5';
import { useGSAP } from '@gsap/react';
import gsap, { ScrollTrigger } from 'gsap/all';

// in a fresh project 
const Home = () => {

const thirdPin = useRef(null)
const firstimg = useRef(null)
const secondimg = useRef(null)
const thirdimg = useRef(null)
const fourthimg = useRef(null)
const fifthimg = useRef(null)
const loaderRef = useRef<HTMLDivElement>(null);



// fixing the responsive designs now 

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    locomotiveScroll

    gsap.to(loaderRef.current, {
      opacity: 0,
      duration: 2,
      delay: 2,
      onComplete: () => {
        if (loaderRef.current) {
          loaderRef.current.style.display = "none";
        }
      }
    });
  }, [])
  
  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger) 
    gsap.set(firstimg.current,{y:"100%" , opacity:0})
    gsap.set(secondimg.current,{y:"100%" , opacity:0})
    gsap.set(thirdimg.current,{y:"100%" , opacity:0})
    gsap.set(fourthimg.current,{y:"100%" , opacity:0})
    gsap.set(fifthimg.current,{y:"100%" , opacity:0})

    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:thirdPin.current,
        start : "200px 0" , 
        end : "4000px 0",
        pin:true,
        scrub:1,
      }
    })
    tl.to(firstimg.current,{y:'0%' , opacity:100})
    tl.to(secondimg.current,{y:'0%' , opacity:100})
    tl.to(thirdimg.current,{y:'0%' , opacity:100})
    tl.to(fourthimg.current,{y:'0%' , opacity:100})
    tl.to(fifthimg.current,{y:'0%' , opacity:100})
    tl.to(fifthimg.current,{delay:0.5})


    
  },[])

// first done 

  return (

    

    <div className='bg-[#FFEAD7] h-fit relative'>

<div ref={loaderRef} className='absolute z-[300] w-full h-screen  flex items-center justify-center bg-[#09090B]  transition-opacity duration-500'>
          <div className='text-white text-lg animate-pulse f3'>Experience Arweave</div>
        </div>
      {/* the absolute navbar */}
          <Navbar/>
      {/* this is the main hero screen */}

      <div className='w-full h-[83vh] md:min-h-[120vh] p-6 md:p-10 relative'>
  {/* the main text area  */}

 
  <div
    className='w-full mt-20 md:mt-0 uppercase text-[3rem] md:text-[6.8rem] leading-[0.9] font-[500] tracking-tighter text-center f1'
  >
    <h1>developing bridges</h1>
    <h1>To the future</h1>
  </div>

  <div className='w-full mt-10 md:mt-16 flex items-center justify-center'>
    <img className='w-[80%] md:w-[37%] h-auto' src="https://www.polecat.agency/static/images/services/machine.webp" alt="not showing" />
  </div>

  <div className='w-full text-lg md:text-2xl mt-5 f2 flex items-end gap-2 justify-center'>
    <h1>What we develop </h1>
    <span>↓</span>
  </div>
</div>




      <Second/>
      {/* third section */}

      <div ref={thirdPin} className='w-full border-b-[1px] border-black relative min-h-[100vh]'>
  {/* the Services section  */}
  <div className='absolute top-3 w-full  flex justify-center'>
    <div className="w-fit px-5 py-1 rounded-3xl font-medium cursor-pointer text-black bg-[#FFEAD7] border-[1px] uppercase border-black f2 text-[18px] sm:text-[20px] md:text-[23px] tracking-tight">
      Services
    </div>
  </div>

  {/* the main text */}
  <div className='w-full uppercase pt-16 md:pt-0 text-[3rem] sm:text-[4rem] md:text-[6.8rem] tracking-tighter f1 text-center'>
    <h1>what is our job</h1>
  </div>

  {/* From Insight to Implementation  */}
  <div className='w-full mt-6 sm:mt-10 md:mt-14 text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] opacity-70 tracking-tight f2 flex justify-center'>
    <p>From Insight to Implementation</p>
  </div>

  <div className='w-full h-[50vh] md:h-[100vh]  flex flex-col items-center'>
    <div className='w-full h-[80%] relative'>
      <img ref={firstimg} className='w-full h-full absolute' src="https://www.polecat.agency/static/images/services/map-piece-1.svg" alt="not showing" />
      <img ref={secondimg} className='w-full h-full absolute' src="https://www.polecat.agency/static/images/services/map-piece-2.svg" alt="not showing" />
      <img ref={thirdimg} className='w-full h-full absolute' src="https://www.polecat.agency/static/images/services/map-piece-3.svg" alt="not showing" />
      <img ref={fourthimg} className='w-full h-full absolute' src="https://www.polecat.agency/static/images/services/map-piece-4.svg" alt="not showing" />
      <img ref={fifthimg} className='w-full h-full absolute' src="https://www.polecat.agency/static/images/services/map-piece-5.svg" alt="not showing" />
    </div>

    <div className='w-full absolute bottom-3 f2 text-sm sm:text-base md:text-lg text-center'>
      <p>Our Most used stack ↓</p>
    </div>
  </div>
</div>
    
      {/* fourth section */}
      <div className='w-full py-10'>
  <div className='w-full flex justify-center'>
    <div className="w-fit px-5 py-1 rounded-3xl font-medium cursor-pointer text-black bg-[#FFEAD7] border-[1px] uppercase border-black f2 text-[18px] sm:text-[20px] md:text-[23px] tracking-tight">
      Technologies
    </div>       
  </div>
{/* loading screen done now have to add the loading animation for the initial prompt loading  */}

  <div className='w-full flex mt-12 sm:mt-16 md:mt-24 flex-col items-center gap-2'>
    {["flutter", "swift", "kotlin", "java", "dart", "object-c", "typescript", "python", "django", "node.js"].map((e, i) => (
      <h1 key={i} className='text-[3rem] sm:text-[4rem] md:text-[6rem] f1 uppercase tracking-tight leading-[3.5rem] sm:leading-[4.5rem] md:leading-[5.3rem]'>
        {e}
      </h1>
    ))}

    <div className='mt-20 sm:mt-24 md:mt-28 f2 font-semibold text-lg sm:text-xl md:text-2xl gap-1 w-[90%] sm:w-[60%] md:w-[35%] py-5 rounded-xl border-[1px] flex items-center flex-col border-black bg-white'>
      <p>we can scale it according</p>
      <p>to your task</p>
    </div>


    <div className='mt-10 w-full h-[50vh] sm:h-[60vh] md:h-[80vh]'>
      <img className='w-full h-full object-contain' src="https://www.polecat.agency/static/images/services/snowmobile.webp" alt="not showing" />
    </div>
  </div>
</div>


      {/* footer section  */}

      <div className='w-full relative h-screen px-4 sm:px-6 md:px-8'>
  <div className='w-full h-full border-t-[1px] border-black/50 py-5'>
    <div className='w-full flex items-center justify-between'>
      <div>
        <h1 className='text-[1.4rem] sm:text-[1.6rem] md:text-[1.7rem] w-[85%] sm:w-[75%] md:w-[65%] f2'>
          Engineering Tomorrow's Landscape We are ANON Agency
        </h1>
      </div>
    </div>

    <div className='w-full absolute left-0 bottom-10 sm:bottom-16 md:bottom-20 flex flex-wrap gap-4 justify-center'>
      <div className='w-[90%] sm:w-[48%] h-[40vh] sm:h-[45vh] md:h-[50vh] relative rounded-xl bg-black'>
        <div className='w-full h-full px-5 pt-5 pb-2 rounded-xl flex flex-col justify-between bg-white border-[1px] border-black absolute top-0 hover:-top-1 ease-in transition-all duration-200'>
          <div className='w-full flex justify-between'>
            <div>
              <h1 className='text-[1.8rem] sm:text-[2rem] md:text-[2.2rem] f2'>Let's work together</h1>
            </div>
            <div className='w-20 sm:w-24 py-4 sm:py-5 text-lg sm:text-xl rounded-xl border-[1px] border-black flex items-center justify-center'>
              <IoArrowForwardSharp/>
            </div>
          </div>
          <div>
            <h1 className='text-[3.5rem] sm:text-[5rem] md:text-[6rem] f1 uppercase'>Contacts</h1>
          </div>
        </div>
      </div>
      <div className='w-[90%] sm:w-[48%] h-[40vh] sm:h-[45vh] md:h-[50vh] relative rounded-xl bg-black'>
        <div className='w-full h-full px-5 pt-5 pb-2 rounded-xl flex flex-col justify-between bg-white border-[1px] border-black absolute top-0 hover:-top-1 ease-in transition-all duration-200'>
          <div className='w-full flex justify-between'>
            <div>
              <h1 className='text-[1.8rem] sm:text-[2rem] md:text-[2.2rem] f2'>Meet the team</h1>
            </div>
            <div className='w-20 sm:w-24 py-4 sm:py-5 text-lg sm:text-xl rounded-xl border-[1px] border-black flex items-center justify-center'>
              <IoArrowForwardSharp/>
              
            </div>
          </div>
          <div>
            <h1 className='text-[4rem] sm:text-[5rem] md:text-[6rem] f1 uppercase'>Works</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  ); 
};

export default Home;


// have to increase the size of the images 





// what we'll show frontend waitlist page, then we'll show our product then we'll drop a hint we are also doing the mobile app generation vybe coding pe focus karna hai like there will be music and stuff and 