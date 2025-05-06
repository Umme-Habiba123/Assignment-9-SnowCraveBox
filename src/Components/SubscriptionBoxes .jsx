import React from 'react';
import { motion } from 'framer-motion';

const boxData = [
  {
    title: 'Wish Box',
    description: 'A handpicked box full of pet wishes.',
    image: 'https://i.ibb.co.com/PZgd44VZ/l-2.jpg',
    animation: { x: -100 },
  },
  {
    title: 'Look Book',
    description: 'Trendy styles & accessories for pets.',
    image: 'https://i.ibb.co.com/TMBtpdbS/c.jpg',
    animation: { y: 100 },
  },
  {
    title: 'Surprise Box',
    description: 'A mystery treat every month!',
    image: 'https://i.ibb.co.com/FbmTSvqr/r.webp',
    animation: { x: 100 },
  },
];

const SubscriptionBoxes = () => {
  return (
    <div className="w-11/12 mx-auto my-16">
      <h2 className="text-4xl font-bold text-center mb-10 satisfy-font text-cyan-700">
        Explore Our Subscription Boxes
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {boxData.map((box, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, ...box.animation }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1, 
              rotate: 0,
            }}
            whileHover={{
              scale: 1.05, 
              rotate: 5, 
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              type: 'spring',
              stiffness: 120,
            }}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={box.image}
              alt={box.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{box.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{box.description}</p>
              <button className="mt-4 bg-cyan-500 text-white px-4 py-2 rounded hover:bg-white hover:text-black border border-cyan-500">
                Subscribe Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionBoxes;
