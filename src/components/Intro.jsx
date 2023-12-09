'use client'

import Image from 'next/image'
import React from 'react'
import IntroImg from '../../public/images/bg.png'
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"	

const Intro = () => {
  return (

<div className="bg-image w-screen h-screen overflow-hidden flex flex-col justify-center items-center" id='home'>
      <Image className="inset-0  w-full h-full object-fill object-center md:w-full md:h-full 2xl:w-full 2xl:h-full lg:w-full lg:h-full sm:max-w-200 sm:max-h-100 " 
        src={IntroImg} 
        alt="Band image"
        width={300}
        height={200}
        sizes="(max-width: 768px) 100vw, (max-width: 480px) 50vw, 100hv"
        />

  <div className="xl:w-[60%] h-[700px] sm:w-[80%] sm-h-[200px] xs:w-[80%] ms:w-[80%] ms:h-[5%] md:w-[70%] md:h-[600px] md:flex md:items-center md:justify-center lg:w-[65%] lg:h-[650px] absolute flex items-center justify-center">
    {/* Parent container */}
       
    <motion.div
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
           className="xl:w-[450px] xl:h-[500px] object-fill flex-col mx-auto items-center justify-center xl:justify-start"
          >
          <Image 
            className="object-fit xl:w-full xl:h-full ms:object-fit ms:w-full ms:h-full"
            src="/images/band-intro.png"
            alt="hero"
          fill
          />
          <div className="mt-[400px] flex items-center justify-center xl:mt-[20rem] xl:w-full xl:ml-0 ms:mt-56 ms:w-[200px] ms:ml-9 sm:w-[400px] sm:ml-[2%] sm:mt-[99%]" >
              <Image 
                  className="flex xs:mt-16 ms:mt-28 object-cover z-10"
                  src="/images/logo2.png"
                  alt="hero"
                  width={600}
                  height={200}
                />
          </div>
   
      </motion.div>
       
  </div>

</div>
 
  )
}

export default Intro