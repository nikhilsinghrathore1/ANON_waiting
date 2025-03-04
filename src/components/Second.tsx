import { useRef } from 'react'
import ChessGrid from './ChessGrid'
import { useGSAP } from '@gsap/react'
import gsap, {ScrollTrigger}from 'gsap/all';


const Second = () => {

const pin = useRef(null)
const first = useRef(null)
const second = useRef(null)
const third = useRef(null)

useGSAP(()=>{

  gsap.registerPlugin(ScrollTrigger)
  gsap.set(first.current,{y:"120%"})
  gsap.set(second.current,{y:"120%"})
  gsap.set(third.current,{y:"130%"})

  

let tl = gsap.timeline({
  scrollTrigger:{
    trigger:pin.current,
    pin:true,
    start:"0 0",
    end:"3000px 0" , 
    scrub:5,
  },
  
})
tl.to(first.current,{
  y:"0%"
})
tl.to(second.current,{
  y:"0%"
})
tl.to(third.current,{
  y:"0%"
})
tl.to(third.current,{
  delay:0.6
})

},[])

  return (
<div ref={pin} className='hidden md:block w-full h-screen relative'>
  <div className='absolute top-0 z-0'>
    <ChessGrid/>
  </div>

  <div className='w-full h-full flex relative z-1 p-5 flex-col items-center md:flex-row'>
    {/* the top level solution section  */}
    <div className='w-full flex flex-col h-full md:flex-row items-start justify-center gap-6'>
      <div className="w-fit px-4 py-1 rounded-2xl font-medium cursor-pointer text-black bg-[#FFEAD7] border-[1px] uppercase border-black f2 text-[20px] md:text-[23px] tracking-tight">
        Solutions
      </div>

      {/* this is the card div */}
      <div ref={first} className='relative flex flex-col items-center justify-between p-5 w-[90%] md:w-[30%] h-auto md:h-[75%] mt-5 md:mt-0 bg-[#FFEAD7] border-[1px] border-black rounded-3xl md:absolute md:top-[15%] md:right-[15%]'>
        <h1 className='text-[24px] md:text-[30px] text-center font-semibold'>
          AI-Generated Apps & Smart Contracts for your web3 journey!
        </h1>
        <div className='w-full h-[45%]'>
          <img className='w-full h-full object-contain' src="https://www.polecat.agency/static/images/services/card-1.webp" alt="not showing" />
        </div>
        <p className='text-[18px] md:text-[22px] w-[80%] f2 text-center leading-[1.2]'>
          Let’s engineer your next smart apps for every purpose both web2 and web3
        </p>
      </div>

      {/* this is the spider image section  */}
      <div ref={second} className='relative flex flex-col items-center justify-between p-5 w-[90%] md:w-[30%] h-auto md:h-[75%] mt-5 md:mt-0 bg-[#FFEAD7] border-[1px] border-black rounded-3xl md:absolute md:top-[10%] md:right-[35%]'>
        <h1 className='text-[24px] md:text-[30px] text-center font-semibold leading-[1.4]'>
        HIGH-LOAD WEB AND NATIVE APPS ON THE ARWEAVE CHAIN
        </h1>
        <div className='w-full h-[50%]'>
          <img className='w-full h-full object-contain' src="https://www.polecat.agency/static/images/services/card-2.webp" alt="not showing" />
        </div>
        <p className='text-[18px] md:text-[22px] w-[80%] f2 text-center leading-[1.2]'>
          We contribute apps that can change lives for web3 Developers
        </p>
      </div>

      {/* this is the penguin image section  */}
      <div ref={third} className='relative flex flex-col items-center justify-between p-5 w-[90%] md:w-[30%] h-auto md:h-[75%] mt-5 md:mt-0 bg-[#FFEAD7] border-[1px] border-black rounded-3xl md:absolute md:top-[5%] md:right-[55%]'>
        <h1 className='text-[24px] md:text-[30px] w-[90%] text-center font-semibold leading-[1.4]'>
          MOBILE RESPONSIVE APPS FOR ENTERPRISE AND STARTUPS
        </h1>
        <div className='w-full h-[50%]'>
          <img className='w-full h-full object-contain' src="https://www.polecat.agency/static/images/services/card-3.webp" alt="not showing" />
        </div>
        <p className='text-[18px] md:text-[22px] w-[80%] f2 text-center leading-[1.2]'>
          supported react, expo, and scalable mvp developed with us
        </p>
      </div>
    </div>
  </div>
</div>

  )
}

export default Second