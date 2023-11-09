import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import { IoMenu, iomenu } from 'react-icons/io5';

function App() {

  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className="flex w-screen h-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">

      {/* nav bar */}
      <nav className="w-full px-6 z-50 fixed inset-x-0 top-4 flex justify-center items-center">
        <div className="w-full md:w-11/12 bg-navBar p-4 rounded-2xl flex items-center" >
          <p className="text-lg text-slate-200 font-medium">Hasitha</p>

          <div className='hidden md:flex items-end justify-end gap-6 ml-6 flex-1'>
            <a href='#home' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
              Home
            </a>
            <a href='#home' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
              Project
            </a>
            <a href='#home' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
              About
            </a>
            <a href='#home' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
              Contact
            </a>
          </div>

          <div className='block md:hidden ml-auto cursor-pointer'
            onClick={() => setIsNavOpen(!isNavOpen)}>
            <IoMenu className='text-2xl text-textBase' />
          </div>

          {isNavOpen && (
            <div className='p-4 w-275 bg-navBar rounded-xl fixed top-24 right-16 flex flex-col items-center justify-center gap-6' >
              <a href='#home' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
              onClick={()=> setIsNavOpen(false)}>
                Home
              </a> 
              <a href='#home' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
              onClick={()=> setIsNavOpen(false)}>
                Project
              </a>
              <a href='#home' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
              onClick={()=> setIsNavOpen(false)}>
                About
              </a>
              <a href='#home' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
              onClick={()=> setIsNavOpen(false)}>
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      <div className="relative" id="home" >
        <Spline scene="https://prod.spline.design/ouhif6qbh2Drl6fB/scene.splinecode" />
      </div>
    </div>
  );
}

export default App;
