
// done for now

const Navbar = () => {
  return (
    <div className='w-full h-screen z-[200] fixed  top-0'>
    {/* nav bar section  */}
    <div className="flex sticky top-0 px-5 md:px-10 py-3 w-full items-center justify-between">
      <div className="w-fit px-4 md:px-5 py-1 rounded-2xl font-medium cursor-pointer text-black bg-white border-[1px] uppercase border-black f2 text-[18px] md:text-[23px] tracking-tight">
        anon agency
      </div>
      <div onClick={() => window.open("https://forms.gle/npe2LSkhpwjkffmD9", "_blank")} className="w-fit z-[200] flex items-center gap-2 px-4 md:px-5 py-1 rounded-2xl font-medium cursor-pointer text-black bg-white border-[1px] uppercase border-black f2 text-[18px] md:text-[23px] tracking-tight">
        <h1>JOIN US</h1>
      </div>
    </div>

    {/* middle part  */}
    <div className="w-full flex sticky top-1/2 -translate-y-1/2 items-center justify-start ">
      <div className="w-[10%] md:w-[3%] f2 py-2 gap-1 flex flex-col items-center justify-start bg-[#FFFFFF]">
        <h1 className="text-sm md:text-lg font-semibold">待つ</h1>
        <h1 className="text-sm md:text-lg font-semibold">てい</h1>
        <h1 className="text-sm md:text-lg font-semibold">ます</h1>
      </div>
    </div>

    {/* bottom part */}
    <div className="w-full flex absolute bottom-5 md:bottom-10 z-10 items-center justify-center px-4">
      <div className="w-full md:w-[40%] px-5 md:px-7 border-[1px] border-black py-3 md:py-4 rounded-2xl bg-white flex flex-col md:flex-row items-center justify-between f2">
        <h1 className="w-full md:w-[84%] text-[18px] md:text-[22px] font-semibold text-center md:text-left">
          Join the waitlist and be the first to experience Anon, enhance your journey with <span className="underline">Arweave</span>
        </h1>
        <div onClick={() => window.open("https://forms.gle/npe2LSkhpwjkffmD9", "_blank")} className="w-fit mt-3 md:mt-0 px-4 py-1 rounded-2xl font-medium cursor-pointer text-black bg-white border-[2px] uppercase border-black f2 text-[18px] md:text-[23px] tracking-tight">
          JOIN
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar