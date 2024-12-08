import React from 'react';
import ReuseableCode from './reuseableCode/ReuseableCode';
import LandingMotor from './../images/landing_motor.png';
import FeaturedSlide from './slides/featured-slides/FeaturedSlide';
import FeaturedImage from './../images/featuredcars_image.png';
import Mercedes from './../images/mercedes_gear3.png';

function FeaturedCars() {
  return (
    <div className='pt-10 pb-[100px]'>
      {/* featured cars */}
      <div>
        <ReuseableCode
          title='Featured cars'
          description="Explore our premium collection of vehicles designed to match your style and budget. Whether you're looking for luxury, performance, or affordability, IPAC Autos in Benin City offers you the perfect car to fit your lifestyle. Check out some of our top models below and find your dream ride today."
          image={LandingMotor}
        />
      </div>
      {/* mercedes section */}
      <div className='my-[100px] md:px-[100px] px-[30px]'>
        <div className='flex gap-5 justify-between flex-wrap'>
          <FeaturedSlide
            title='Mercedes Benz GLE6s'
            description='Experience luxury and performance like never before with the Mercedes Benz GLE 63.'
            image={FeaturedImage}
            mercedesGear={true}
          />
          <FeaturedSlide
            title='Mercedes Benz GLE6s'
            description='Experience luxury and performance like never before with the Mercedes Benz GLE 63.'
            image={FeaturedImage}
            mercedesGear={true}
          />
          <FeaturedSlide
            title='Mercedes Benz GLE6s'
            description='Experience luxury and performance like never before with the Mercedes Benz GLE 63.'
            image={FeaturedImage}
            mercedesGear={true}
          />
          <div className='xl:hidden'>
            <FeaturedSlide
              title='Mercedes Benz GLE6s'
              description='Experience luxury and performance like never before with the Mercedes Benz GLE 63.'
              image={FeaturedImage}
              mercedesGear={true}
            />
          </div>
        </div>
      </div>
      {/* mercedes section */}
      <div className='my-[100px] md:px-[100px] px-[30px]'>
        <div className='flex gap-5 justify-between flex-wrap'>
          <div>
            <FeaturedSlide
              title='Mercedes Benz GLE6s'
              description='Experience luxury and performance like never before with the Mercedes Benz GLE 63.'
              image={FeaturedImage}
              mercedesGear={true}
            />
          </div>
          <div>
            <FeaturedSlide
              title='Mercedes Benz GLE6s'
              description='Experience luxury and performance like never before with the Mercedes Benz GLE 63.'
              image={FeaturedImage}
              mercedesGear={true}
            />
          </div>
          <div>
            <FeaturedSlide
              title='Mercedes Benz GLE6s'
              description='Experience luxury and performance like never before with the Mercedes Benz GLE 63.'
              image={FeaturedImage}
              mercedesGear={true}
            />
          </div>
          <div className='xl:hidden'>
            <FeaturedSlide
              title='Mercedes Benz GLE6s'
              description='Experience luxury and performance like never before with the Mercedes Benz GLE 63.'
              image={FeaturedImage}
              mercedesGear={true}
            />
          </div>
        </div>
      </div>
      {/* mercedes section */}
      <div className='my-[100px] md:px-[100px] px-[30px]'>
        <div className='flex gap-5 justify-between flex-wrap'>
          <div>
            <FeaturedSlide
              title='Mercedes Benz GLE6s'
              description='Experience luxury and performance like never before with the Mercedes Benz GLE 63.'
              image={FeaturedImage}
              mercedesGear={true}
            />
          </div>
          <div>
            <FeaturedSlide
              title='Mercedes Benz GLE6s'
              description='Experience luxury and performance like never before with the Mercedes Benz GLE 63.'
              image={FeaturedImage}
              mercedesGear={true}
            />
          </div>
          <div>
            <FeaturedSlide
              title='Mercedes Benz GLE6s'
              description='Experience luxury and performance like never before with the Mercedes Benz GLE 63.'
              image={FeaturedImage}
              mercedesGear={true}
            />
          </div>
          <div className='xl:hidden'>
            <FeaturedSlide
              title='Mercedes Benz GLE6s'
              description='Experience luxury and performance like never before with the Mercedes Benz GLE 63.'
              image={FeaturedImage}
              mercedesGear={true}
            />
          </div>
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
  );
}

export default FeaturedCars;
