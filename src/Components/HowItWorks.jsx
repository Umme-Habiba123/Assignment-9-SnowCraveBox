import React from 'react';

const HowItWorks = () => {
  return (
    <div
      className='gloria-hallelujah-font'>
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center md:px-3 px-3">
          <h2 className="text-4xl font-bold text-cyan-500 mb-8 satisfy-font">WHAT CAN I HELP YOU WITH?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">


            <div className="p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Step 1: Choose</h3>
              <p className="text-gray-600">Browse our subscription box options and choose the one that suits your pet’s needs.</p>
            </div>


            <div className="p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Step 2: Customize</h3>
              <p className="text-gray-600">Personalize the box by selecting your pet's size, preferences, and seasonal flavors.</p>
            </div>

            <div className="p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Step 3: Receive</h3>
              <p className="text-gray-600">Your box will be delivered to your doorstep, packed with love and care for your pet!</p>
            </div>

            <div className="p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Step 4: Enjoy</h3>
              <p className="text-gray-600">Let your pet enjoy the treats, toys, and cozy items specially designed for them!</p>
            </div>


          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;