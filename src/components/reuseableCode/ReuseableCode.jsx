import React from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

function ReuseableCode({
  image,
  title,
  subtitle,
  description,
  buttoncontent,
  flexdirection,
  listing1,
  listing2,
  undertitle,
  undersubtitle,
}) {
  const navigate = useNavigate();

  const contactUs = () => {
    navigate('/contact-us');
  };

  return (
    <>
      {flexdirection ? (
        <div
          className='flex lg:justify-between md:justify-end items-center xl:px-[100px] px-[32px] flex-wrap lg:flex-nowrap'
          style={{ flexDirection: 'row-reverse' }}
        >
          <div className='w-[full] lg:w-[40%]'>
            {title ? (
              <h1 className='text-[48px] text-[#CEFFCE] leading-[40.6px] md:leading-[57.6px]'>
                {title}
              </h1>
            ) : null}
            {subtitle ? (
              <h3 className='text-[32px] leading-[38.4px] text-[#CEFFCE]'>
                {subtitle}
              </h3>
            ) : null}
            <p className='text-[16px] py-[15px]'>{description}</p>
            {buttoncontent ? <Button name={buttoncontent} /> : null}
          </div>
          <div className=''>
            <img src={image} alt='image' />
          </div>
        </div>
      ) : (
        <div className='flex lg:justify-between md:justify-start items-center xl:px-[100px] px-[30px] flex-wrap lg:flex-nowrap'>
          <div className='w-full lg:w-[40%]'>
            {title ? (
              <h1 className='md:text-[48px] xs:text-[28px] text-[#CEFFCE] leading-[40.6px] md:leading-[57.6px]'>
                {title}
                <br />
                {undertitle}
              </h1>
            ) : null}
            {subtitle ? (
              <h3 className='md:text-[32px] xs:text-[24px] leading-[38.4px] text-[#CEFFCE]'>
                {subtitle}
                <br />
                {undersubtitle}
              </h3>
            ) : null}
            <p className='text-[16px] py-[15px]'>{description}</p>
            {listing1 || listing2 ? (
              <ul className='pb-5'>
                <li>• {listing1}</li>
                <li>• {listing2}</li>
              </ul>
            ) : null}
            <div className='my-3'>
              {buttoncontent ? (
                <Button name={buttoncontent} onClick={contactUs} />
              ) : null}
            </div>
          </div>
          <div className=''>
            <img src={image} alt='image' />
          </div>
        </div>
      )}
    </>
  );
}

export default ReuseableCode;
