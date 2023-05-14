import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Vimmme from './vimme.jpeg'
import Vogm from './vimmeogaron.jpeg'


const Slideshow = () => {
   

    return  (
     
           
            <div className="h-screen w-screen">
                <div className='h-screen w-screen ' >
                    <span className='text-white'> <img src={Vogm} alt="" />  </span>
                </div>
            </div>
     
        
    );
};

export default Slideshow;