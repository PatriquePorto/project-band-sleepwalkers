'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const VideoComponent = ({ videoId }) => {
  const videoUrl1 = `https://www.youtube.com/embed/Yi5OksqNols?si=IDQgfFoK9rsXdZXv"`;
  const videoUrl2 = `https://www.youtube.com/embed/XgpdQkNUOyc?si=4-zotY20SHdYQ032`;

  return (
    <section id='videos' className='w-full h-[60vh] xs:h-[800px] md:h-[90vh] ms:h-[850px] top-0 flex items-center justify-center mt-10 bg-slate-700'>
        <div className='w-full items-center justify-center mx-auto'>
            <div className="container  mx-auto h-full  flex items-center justify-center xl:justify-start">
    
             <div className='w-full items-center justify-center mx-auto  xs:-mt-16  '>  

                        <div className="xl:-ml-0 ms:-ml-16 sm:ml-8 md:ml-6">
                    <h1 className="uppercase xl:text-[2.5rem] md:text-[2rem] sm:text-[2rem]  font-bold pb-2">Vídeos</h1>
                        <hr className="w-[1263px] h-[3.5px] xl:w-[1263px] ms:w-[24rem] md:w-[45rem] bg-white" />
                    </div>   
            </div>

            </div>
            <motion.div 
                variants={fadeIn('left', 0.4)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className='items-center justify-center flex gap-8 xl:flex-row xs:flex-col ms:flex-col ms:w-[97%] ms:h-[750px] ms:mt-10 ms:ml-[1.5%]  md:flex-col md:w-full md:h-full md:ml-0 xl:w-[1270px] xl:mt-16 xl:ml-[15.5%] xs:w-[50px] xs:h-[30%] xs:ml-[50%]'>
                <iframe
                    width="100%"
                    height="315"
                    src={videoUrl1}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
                <iframe
                    width="100%"
                    height="315"
                    src={videoUrl2}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                        
                </iframe>
            </motion.div>

  
        </div>

    </section>
  );
};

export default VideoComponent;