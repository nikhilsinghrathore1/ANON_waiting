import { useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function Flow() {
  const [loading, setLoading] = useState(true);

  return (
    <main className='w-full h-screen bg-[#09090B] relative flex items-center justify-center'>
      {loading && (
        <div className='absolute inset-0 flex items-center justify-center bg-[#09090B] z-10 transition-opacity duration-500'>
          <div className='text-white text-lg animate-pulse f3'>Experience Arweave</div>
        </div>
      )}
      <Spline
      className='w-full h-full object-contain '
        scene="https://prod.spline.design/6hLLFaIKg0bSUUFF/scene.splinecode"
        onLoad={() => setLoading(false)}        
      />
      <div className='w-full h-[5%] bg-black absolute bottom-5 right-5'></div>
    </main>

    // done 
  );

}
