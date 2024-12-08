import React from 'react';
import Gear1 from './../images/mercedes_gear2.png';
import Gear2 from './../images/mercedes_gear1.png';
import Gear3 from './../images/featuredcars_image.png';
import Gear4 from './../images/mercedes_gear.png';
import InteriorGear from './../images/interior_gear.png';
import ReuseableCode from './reuseableCode/ReuseableCode';
import Mercedes from './../images/mercedes_gear3.png';
import LeftArrow from './../images/leftArrow.png';
import { useNavigate } from 'react-router-dom';

function MercedesGear() {
  const navigate = useNavigate();
  const featuredCars = () => {
    navigate('/featured-cars');
  };
  return (
    <>
      <button className='lg:px-[100px] px-[32px]' onClick={featuredCars}>
        <img src={LeftArrow} alt='left-arrow' />
      </button>

      <div className='md:pt-5 pb-[100px]'>
        {/* mercedes Gear */}

        <div className='lg:px-[100px] px-[32px]'>
          <h3 className='text-[32px] text-[#CEFFCE]'>
            Mercedes Benz GLE Coupe
          </h3>
          <div className='flex justify-center flex-wrap gap-[40px] lg:gap-[70px]'>
            <img
              src={Gear4}
              alt='gear4'
              className='w-[330px] xl:w-[330px] xxl:w-[365px]'
            />
            <img
              src={Gear2}
              alt='gear2'
              className='w-[330px] xl:w-[330px] xxl:w-[365px]'
            />
            <img
              src={Gear3}
              alt='gear3'
              className='w-[330px] xl:w-[330px] xxl:w-[365px]'
            />
            <img
              src={Gear1}
              alt='gear1'
              className='w-full md:w-[330px] xl:w-[600px]'
            />
          </div>
        </div>
        {/* gear parts */}
        <div className='lg:px-[100px] md:px-[32px]'>
          <div className='flex p-[24px] flex-col md:flex-row md:items-center gap-5 md:bg-[#EEF1F2] rounded-md my-4 md:text-[#000000] text-[white] h-[700px] md:h-[459px] lg:w-[858px] xxl:920px md:w-[700px]'>
            <div className=''>
              <img
                src={InteriorGear}
                alt='gear2'
                className='w-[397px] h-[411px] object-contain'
              />
            </div>
            <ul>
              <p className='text-[#CEFFCE] md:text-[black] font-bold'>
                Features
              </p>
              <li>• Engine: v8 turbo</li>
              <li>• Fuel: Petrol</li>
              <li>• Transmission: 9-Speed Automatic</li>
              <li>• Mileage: 30,000km</li>
              <li>• Helpful voice command system</li>
              <li>• Condition: Foreign Used</li>
              <li>• Location: Benin City</li>
              <li>• Panoramic roof</li>
              <li>• Advanced safety systems</li>
              <li>• Leather interiors</li>
            </ul>
          </div>
        </div>
        {/* contact us today */}
        <div className='my-[100px]'>
          <ReuseableCode
            subtitle='Contact us today to get your dream car!'
            description='Ready to drive your dream car? Let’s make it happen!'
            listing1='Call/WhatsApp: 080X XXX XXXX'
            listing2='Email: info@ipacautos.ng'
            buttoncontent='Contact Us'
            image={Mercedes}
          />
        </div>
      </div>
    </>
  );
}

export default MercedesGear;
