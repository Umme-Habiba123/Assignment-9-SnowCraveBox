import React from 'react';

const Blog = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <section className="bg-gradient-to-br from-white via-cyan-50 to-white py-20 px-4 md:px-10 text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-cyan-700 mb-4 drop-shadow-sm ">💙 Support Local Heroes</h2>
        <p className="text-2xl mb-12 max-w-3xl mx-auto text-gray-600 satisfy-font">
          Your purchase fuels dreams. Each item in our box is proudly sourced from local artisans and small businesses—crafted with love, purpose, and passion.
        </p>

  
        <div className="grid gap-10 md:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white border border-cyan-100 shadow-md p-6 rounded-xl hover:shadow-xl transition duration-300 hover:scale-105">
            <img src="https://i.ibb.co.com/dsQDvW9w/1.jpg" alt="Mila's Pet Bakery" className="rounded-lg mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-bold text-cyan-600">Mila's Pet Bakery</h3>
            <p className="text-sm text-gray-500 mt-1">Wholesome treats baked with wagging tails in mind 🐾</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-cyan-100 shadow-md p-6 rounded-xl hover:shadow-xl transition duration-300 hover:scale-105">
            <img src="https://i.ibb.co.com/wZF2kxSC/4.webp" alt="WhiskerWorks" className="rounded-lg mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-bold text-cyan-600">WhiskerWorks</h3>
            <p className="text-sm text-gray-500 mt-1">Eco-conscious toys made with care by local hands 🧶</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-cyan-100 shadow-md p-6 rounded-xl hover:shadow-xl transition duration-300 hover:scale-105">
            <img src="https://i.ibb.co.com/JRppWs9j/3.jpg" alt="SnowFur Knits" className="rounded-lg mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-bold text-cyan-600">SnowFur Knits</h3>
            <p className="text-sm text-gray-500 mt-1">Warm, cozy, handcrafted wear for your winter-loving pets ❄️</p>
          </div>
        </div>

 
        <div className="mt-14">
          <a target='_blank'
            href="https://mentalhealth-uk.org/support-and-services/find-local-support/"
            className="inline-block bg-cyan-500 text-white px-8 py-3 rounded-full text-xl font-medium shadow-md hover:bg-white border border-cyan-500 hover:text-black  transition duration-200"
          >
            🧵 Meet More Local Makers
          </a>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Blog;