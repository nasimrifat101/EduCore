import React from 'react'
import Banner from '../Banner/Banner'
import Vision from '../Vision/Vision'
import Cursor from '../utils/Cursor'
import FeaturesSection from '../features/FeaturesSection'
import WhyChooseEduCore from '../whyChose/WhyChooseEduCore'
import Testimonials from '../Testimonials/Testimonials'
import Pricing from '../Pricing/Pricing'
import Contact from '../contact/Contact'
import HowItWorks from '../HowItWorks/HowItWorks'


const Home = () => {
  return (
    <div className='relative'>
       <Banner />
       <Vision />
       <FeaturesSection />
       <WhyChooseEduCore/>
       <Testimonials/>
       <Pricing/>
       <HowItWorks/>
       <Contact/>
       <div className='absolute opacity-50'>
        <Cursor />
       </div>
      
    </div>
  )
}

export default Home