import logo from './../images/logo.png';
import { Navigate, useNavigate } from 'react-router-dom';
import BurgerIcon from './../images/burger_icon.png';
import { useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';

function Navbar() {
  const [showBurger, setShowBurger] = useState(false);
  const navigate = useNavigate();
  const homepage = () => {
    navigate('/');
  };
  const aboutuspage = () => {
    navigate('/about-us');
  };
  const featuredcars = () => {
    navigate('/featured-cars');
  };
  const contactus = () => {
    navigate('/contact-us');
  };
  return (
    <div className='flex py-[24px] items-center justify-between xl:px-[100px] px-[30px]'>
      {/* Logo (Hidden when Burger Menu is Open) */}
      {!showBurger && (
        <div>
          <img
            src={logo}
            alt='logo'
            className='cursor-pointer'
            onClick={homepage}
          />
        </div>
      )}

      {/* Hamburger Menu */}
      <div className='lg:hidden' onClick={() => setShowBurger(!showBurger)}>
        {!showBurger ? (
          <img src={BurgerIcon} alt='burger menu icon' />
        ) : (
          <div className='fixed inset-0 bg-[#EEF1F2] p-[24px] text-[#000000] z-50'>
            {/* Close Button and Header */}
            <div className='flex justify-between items-center py-5'>
              <h5 className='font-[500] text-[22px]' onClick={homepage}>
                Company Logo
              </h5>
              <button
                onClick={() => setShowBurger(false)}
                className='text-[24px]'
                aria-label='Close menu'
              >
                <VscChromeClose />
              </button>
            </div>

            {/* Menu Items */}
            <ul className='flex flex-col gap-[24px] text-[16px]'>
              <li
                onClick={homepage}
                className='hover:cursor-pointer hover:text-[#CEFFCE]'
              >
                Home
              </li>
              <li
                onClick={aboutuspage}
                className='hover:cursor-pointer hover:text-[#CEFFCE]'
              >
                About Us
              </li>
              <li
                onClick={featuredcars}
                className='hover:cursor-pointer hover:text-[#CEFFCE]'
              >
                Featured Cars
              </li>
              <li
                onClick={contactus}
                className='hover:cursor-pointer hover:text-[#CEFFCE]'
              >
                Contact Us
              </li>
            </ul>
          </div>
        )}
      </div>
      <ul className='lg:flex justify-evenly w-[40%] text-[#EEF1F2] text-base hidden'>
        <li
          className='hover:text-[#CEFFCE] hover:cursor-pointer'
          onClick={homepage}
        >
          Home
        </li>
        <li
          className='hover:text-[#CEFFCE] hover:cursor-pointer'
          onClick={aboutuspage}
        >
          About Us
        </li>
        <li
          className='hover:text-[#CEFFCE] hover:cursor-pointer'
          onClick={featuredcars}
        >
          Featured Cars
        </li>
        <li
          className='hover:text-[#CEFFCE] hover:cursor-pointer'
          onClick={contactus}
        >
          Contact Us
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
