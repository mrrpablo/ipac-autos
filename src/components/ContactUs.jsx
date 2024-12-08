import React from 'react';
import ReuseableCode from './reuseableCode/ReuseableCode';
import LandingImage from './../images/landing_motor.png';
import Mercedes from './../images/mercedes_gear3.png';

function ContactUs() {
  return (
    <div className='pt-10 pb-[100px]'>
      {/* drive your dream car */}
      <div>
        <ReuseableCode
          subtitle='Drive your dream car, '
          undersubtitle='we are just a call away'
          description="Discover a seamless way to own your dream car. Whether you're after affordability, luxury or reliability, we've got the perfect ride for you."
          image={LandingImage}
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

export default ContactUs;
