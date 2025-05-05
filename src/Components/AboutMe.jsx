import React from 'react';
import myself from '../assets/myself1.jpg'
import { Link } from 'react-router';




const AboutMe = () => {
    return (
        <div className='w-10/12 mx-auto lg:flex justify-around satisfy-font my-20'>
            <div className='mr-10'>
                <h1 className=' text-4xl text-cyan-700 font-bold text-center mb-4 
              gloria-hallelujah-font '>HELLO, I'M MAHIYA</h1>
                <p className='text-2xl'>I'm the founder of Snow Crave Box, a subscription service dedicated to bringing joy to your beloved cats and dogs.

                    My journey began with a deep love for animals and the desire to provide them with the best. I noticed that pet owners often struggle to find high-quality, engaging products for their furry companions. That's when the idea of Snow Crave Box was born—a curated monthly box filled with toys, treats, and accessories that cater to both cats and dogs.

                    Each month, I personally select items that are not only fun but also beneficial for your pets' well-being. From chew toys that promote dental health to treats made with natural ingredients, every product is chosen with care and love.

                    At Snow Crave Box, we believe that pets are family. Our mission is to enhance the bond between you and your pets by delivering happiness right to your doorstep.

                    Thank you for allowing us to be a part of your pet's life. We look forward to bringing smiles and wagging tails with each box!

                </p>
               <Link to={'mydetails'}> <button className='btn btn-accent mt-5 hover:bg-white text-black '>
                LEARN MORE ABOUT ME
                </button> </Link>

            </div>
            <img className='w-60 md:w-80' src={myself} alt="" />
          
        </div>
    );
};

export default AboutMe;