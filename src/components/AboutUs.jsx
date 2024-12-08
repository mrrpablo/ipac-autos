import React from 'react';
import ReuseableCode from './ReuseableCode/ReuseableCode';
import AboutCar from './../images/about-us_car.png';
import Mercedes from './../images/mercedes_gear3.png';

function AboutUs() {
  return (
    <div className='pt-10 pb-[100px]'>
      {/* who we are  */}
      <div className='mb-[100px]'>
        <ReuseableCode
          title='Who we are'
          description='iPAC Autos is a premier car dealership located in Benin City, Nigeria. We specialize in providing a wide range of high-quality vehicles, from affordable sedans to luxury SUVs, to meet the diverse needs of our customers. With a passion for excellence and a commitment to customer satisfaction, we make buying a car simple, convenient, and trustworthy.'
          image={AboutCar}
        />
      </div>
      {/* Our mission */}
      <div className='my-[100px]'>
        <ReuseableCode
          title='Our mission'
          description='At iPAC Autos, our mission is to transform the car-buying experience for Nigerians by delivering top-tier vehicles and exceptional service. We aim to empower individuals and families with reliable transportation solutions while maintaining transparency, affordability, and trust in every transaction.'
          image={AboutCar}
          flexdirection={true}
        />
      </div>
      {/* Our Values */}
      <div className='my-[100px]'>
        <ReuseableCode
          title='Our Values'
          description='iPAC Autos is a premier car dealership located in Benin City, Nigeria. We specialize in providing a wide range of high-quality vehicles, from affordable sedans to luxury SUVs, to meet the diverse needs of our customers. With a passion for excellence and a commitment to customer satisfaction, we make buying a car simple, convenient, and trustworthy.'
          image={AboutCar}
        />
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
  );
}

export default AboutUs;
