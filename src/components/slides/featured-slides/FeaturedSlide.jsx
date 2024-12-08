import React from 'react';
import { useNavigate } from 'react-router-dom';

function FeaturedSlide({
  title,
  subtitle,
  description,
  image,
  height,
  align,
  photo,
  mercedesGear,
}) {
  const navigate = useNavigate();
  const gear = () => {
    navigate('/mercedes-gear');
  };
  return (
    <div
      className={`bg-[#EEF1F2] rounded-lg p-[24px] text-[#000000] overflow-x-auto  w-full md:w-[273px] lg:w-[400px] x:w-[340px] ${
        window.innerWidth >= 1280 ? `h-[${height}px]` : ''
      }`}
      onClick={mercedesGear ? gear : null}
    >
      <h1
        className='font-[500] xs:text-[20px] text-[22px]'
        style={{ textAlign: align }}
      >
        {photo ? (
          <div className='flex gap-5 items-center'>
            <img src={photo} alt='photo' className=' md:w-[29%]' />
            {title}
          </div>
        ) : null}
        {photo ? null : title}
        <br />
        {subtitle}
      </h1>
      <p className='font-[400] xs:text-[12px] text-[16px]'>{description}</p>
      {image ? <img src={image} alt='image' className='w-full' /> : null}
    </div>
  );
}

export default FeaturedSlide;
