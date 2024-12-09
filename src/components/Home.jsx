import landingmotor from './../images/landing_motor.png';
import passphoto from './../images/testimonial_image.png';
import slideImage from './../images/sliding_motor.png';
import Button from './Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
// import 'swiper/css/navigation'; // Optional: if you're using navigation buttons
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules'; // Import modules if needed

import React from 'react';
import FeaturedSlide from './slides/featured-slides/FeaturedSlide';
import ReuseableCode from './reuseableCode/ReuseableCode';
import Mercedes from './../images/mercedes_gear3.png';
import OriginalFeaturedSlide from './slides/featured-slides/OriginalFeaturedSlide';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const featuredcars = () => {
    navigate('/featured-cars');
  };
  return (
    <div className='pt-10 pb-24'>
      {/* iPAC Autos */}
      <ReuseableCode
        title='iPAC Autos,'
        undertitle='the standout brand.'
        image={landingmotor}
        description='Discover a wide range of quality cars at unbeatable prices in Benin City. With IPAC Autos, you get reliability, affordability, and an easy car-buying experience.'
        buttoncontent='Contact Us'
      />
      {/* About us */}
      <div className='mt-[100px] mb-20 xl:px-[100px] px-[32px]'>
        <h3 className='text-[32px] text-[#CEFFCE] py-2'>About us</h3>
        <p className='text-[16px] font-[400]'>
          At IPAC Autos, we pride ourselves on connecting buyers with top-notch
          vehicles in Benin City. Our commitment to quality and customer
          satisfaction makes us the go-to car dealership in the region. Whether
          you're looking for foreign-used or Nigerian-used cars, we've got you
          covered.
        </p>
      </div>
      {/* Featured cars */}
      <div className='mt-5 overflow-x-auto'>
        <div className='flex justify-between xl:px-[100px] px-[32px]'>
          <h3 className='xs:text-[20px] text-[32px] font-[500] text-[#CEFFCE]'>
            Featured cars
          </h3>
          <Button name='See More' onClick={featuredcars} />
        </div>
        {/* small screens */}
        <div className='flex justify-between  pl-[30px] my-4 md:hidden'>
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={false}
            className='xs:h-[450px] h-[500px]'
          >
            <SwiperSlide>
              <OriginalFeaturedSlide
                title='Mercedes Benz GLE6s'
                description='Experience luxury and performance like never before with the Mercedes Benz GLE 63.'
                image={slideImage}
              />
            </SwiperSlide>
            <SwiperSlide>
              <OriginalFeaturedSlide
                title='Toyota Highlander 2020'
                description='Step into comfort and style with the Toyota Highlander.'
                image={slideImage}
              />
            </SwiperSlide>
            <SwiperSlide>
              <OriginalFeaturedSlide
                title='Mercedes Benz GLE6s'
                description='Experience luxury and performance like never before with the Mercedes Benz GLE 63.'
                image={slideImage}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* medium screens */}
        <div className='relative w-full'>
          <div className='pagination-container flex justify-center mt-4'></div>
          <div className='md:flex justify-between w-full my-4 hidden gap-[20px] xl:pl-[100px] pl-[32px]'>
            <Swiper
              modules={[Pagination]}
              pagination={{
                clickable: true,
              }}
              navigation
              spaceBetween={20}
              slidesPerView={2.5}
              centeredSlides={false}
              className='h-[400px] lg:h-[500px]'
            >
              <SwiperSlide>
                <OriginalFeaturedSlide
                  title='Mercedes Benz GLE6s'
                  description='Experience luxury and performance like never before with the Mercedes Benz GLE 63.'
                  image={slideImage}
                  height={'536'}
                />
              </SwiperSlide>
              <SwiperSlide>
                <OriginalFeaturedSlide
                  title='Toyota Highlander 2020'
                  description='Step into comfort and style with the Toyota Highlander.'
                  image={slideImage}
                  height={'536'}
                />
              </SwiperSlide>
              <SwiperSlide>
                <OriginalFeaturedSlide
                  title='Mercedes Benz GLE6s'
                  description='Experience luxury and performance like never before with the Mercedes Benz GLE 63.'
                  image={slideImage}
                  height={'536'}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/* How it Works */}
      <div className='pl-[32px] xl:pl-[100px] my-3'>
        <h3 className='text-[32px] text-[#CEFFCE] mb-2'>How it Works</h3>
        <div className='md:flex justify-between hidden'>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            navigation
            spaceBetween={20}
            slidesPerView={2.5}
            centeredSlides={false}
            style={{ height: '200px' }}
          >
            <SwiperSlide>
              <OriginalFeaturedSlide
                title='Step 1 '
                subtitle='Browse Our Inventory'
                align='center'
                description='Browse our collection of high-quality vehicles online or visit us in Benin City to find your perfect match.'
              />
            </SwiperSlide>
            <SwiperSlide>
              <OriginalFeaturedSlide
                title='Step 2'
                subtitle='Book a Viewing'
                align='center'
                description='Contact us to arrange a convenient time to inspect the car with our friendly team and finalize the details.'
              />
            </SwiperSlide>
            <SwiperSlide>
              <OriginalFeaturedSlide
                title='Step 3'
                subtitle='Complete your Purchase'
                align='center'
                description='Complete your purchase and drive away with peace of mind, knowing you’ve made the best choice.'
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* small screens */}
      <div className='flex flex-col md:hidden gap-5 px-[30px]'>
        <OriginalFeaturedSlide
          title='Step 1 '
          subtitle='Browse Our Inventory'
          align='center'
          description='Browse our collection of high-quality vehicles online or visit us in Benin City to find your perfect match.'
        />
        <OriginalFeaturedSlide
          title='Step 2'
          subtitle='Book a Viewing'
          align='center'
          description='Contact us to arrange a convenient time to inspect the car with our friendly team and finalize the details.'
        />
        <OriginalFeaturedSlide
          title='Step 3'
          subtitle='Complete your Purchase'
          align='center'
          description='Complete your purchase and drive away with peace of mind, knowing you’ve made the best choice.'
        />
      </div>
      {/* Why choose us */}
      <div className='xl:px-[100px] px-[32px] my-[100px]'>
        <h3 className='text-[32px] text-[#CEFFCE] my-5'>Why choose us</h3>
        <div className='flex flex-col lg:flex-row items-center  lg:justify-evenly justify-center flex-wrap gap-5'>
          <div className='w-full md:w-[75%] lg:w-[45%]'>
            <h5 className='text-[#CFFFCE] text-[22px]'>
              Wide selection of vehicles
            </h5>
            <p className='text-[16px] my-2'>
              From family cars to luxury SUVs, we have a car for every <br />
              purpose and pocket
            </p>
          </div>
          <div className='w-full md:w-[75%] lg:w-[45%]'>
            <h5 className='text-[#CFFFCE] text-[22px]'>Trusted Service</h5>
            <p className='text-[16px] my-2'>
              Our cars are thoroughly inspected, ensuring you always
              <br /> get value for your money.
            </p>
          </div>
          <div className='w-full md:w-[75%] lg:w-[45%]'>
            <h5 className='text-[#CFFFCE] text-[22px]'>Flexible Financing</h5>
            <p className='text-[16px] my-2'>
              Own your car today and pay at your convienience with our flexible
              payment plans
            </p>
          </div>
        </div>
      </div>
      {/* Testimonial */}
      <div className='my-[100px] px-[32px] xl:px-[100px]'>
        <h3 className='text-[32px] text-[#CEFFCE] my-5'>Testimonial</h3>
        <div className='flex justify-center lg:justify-between gap-5 flex-wrap lg:flex-nowrap'>
          <FeaturedSlide
            title='Ed Woodward'
            photo={passphoto}
            description='My experience with iPAC Autos was nothing short of amazing. From the moment I walked in, the staff treated me with such professionalism and friendliness. They guided me through the car-buying process with great care, and I ended up with the perfect vehicle. If you’re in Benin City and need a new car, iPAC Autos is the place to go!'
          />
          <FeaturedSlide
            title='Ed Woodward'
            photo={passphoto}
            description='iPAC Autos truly impressed me with their customer care. The staff were very professional and took the time to answer all my questions. The transparency in their pricing and the thorough inspections they perform on their vehicles gave me confidence in my purchase. If you’re looking for a reliable car dealer in Benin City, look no further!'
          />
          <FeaturedSlide
            title='Ed Woodward'
            photo={passphoto}
            description='I was in the market for an SUV and found just what I needed at iPAC Autos. Their team provided excellent service and offered a deal that fit my budget perfectly. The staff were knowledgeable and genuinely interested in helping me find the right car. I’m very happy with my purchase and the overall experience!
'
          />
        </div>
      </div>
      {/* Contact-us */}
      <div className='my-[100]'>
        <ReuseableCode
          subtitle='Contact us today to get your dream car!'
          description='Ready to make your dream car a reality? Reach out to us today and let’s help you find the perfect vehicle. With iPAC Autos, you’re guaranteed a seamless and stress-free car-buying experience.'
          buttoncontent='Contact Us'
          image={Mercedes}
        />
      </div>
    </div>
  );
}

export default Home;
