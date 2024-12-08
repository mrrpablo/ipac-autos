import React from 'react';

function OriginalFeaturedSlide({
  title,
  description,
  image,
  height,
  align,
  subtitle,
}) {
  return (
    <div
      className={`bg-[#EEF1F2] rounded-lg p-[24px] text-[#000000] overflow-x-auto  w-full md:w-[273px] lg:w-[352px] xl:w-[400px] ${
        window.innerWidth >= 1280 ? `h-[${height}px]` : ''
      }`}
    >
      <h1
        className='font-[500] xs:text-[20px] text-[22px]'
        style={{ textAlign: align }}
      >
        {title}
        <br />
        {subtitle}
      </h1>
      <p className='font-[400] xs:text-[12px] text-[16px]'>{description}</p>
      {image ? <img src={image} alt='image' className='w-full' /> : null}
    </div>
  );
}

export default OriginalFeaturedSlide;
