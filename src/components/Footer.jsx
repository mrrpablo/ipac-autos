import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

function Footer() {
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
  const getWhatsappLink = () => {
    const phoneNumber = import.meta.env.VITE_PHONENUMBER;
    console.log(phoneNumber);
    const message = 'Hello! I would like to purchase a car from IPAC_AUTOS.';
    // const whatsApp = 'https://wa.me/2348076541289';
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    return whatsappLink;
  };

  const onClick = () => window.open(getWhatsappLink(), '_blank');

  return (
    <div className='text-[#EEF1F2] s:flex s:justify-between s:flex-row md:text-sm xl:px-[100px] px-[30px] pb-[20px] xs:flex-col xs:items-center xs:flex'>
      <p className='cursor-pointer'>Company logo</p>
      <ul>
        <li
          className='hover:text-[#CEFFCE] hover:cursor-pointer'
          onClick={homepage}
        >
          home
        </li>
        <li
          className='hover:text-[#CEFFCE] hover:cursor-pointer'
          onClick={aboutuspage}
        >
          about us
        </li>
        <li
          className='hover:text-[#CEFFCE] hover:cursor-pointer'
          onClick={featuredcars}
        >
          featured cars
        </li>
        <li
          className='hover:text-[#CEFFCE] hover:cursor-pointer'
          onClick={contactus}
        >
          contact us
        </li>
      </ul>

      <Button name='whatsapp' onClick={onClick} />
    </div>
  );
}

export default Footer;
