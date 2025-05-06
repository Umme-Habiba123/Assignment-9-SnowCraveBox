import React from 'react';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Dummy 5 pets
const pets = [
  {
    name: 'Luna',
    image: 'https://i.ibb.co.com/Y413pxMY/depositphotos-40186401-xl.jpg',
    description: 'Luna loves calm evenings and cozy blankets.'
  },
  {
    name: 'Max',
    image: 'https://i.ibb.co.com/KcL7msGz/2.jpg',
    description: 'Max is a loyal buddy who loves the outdoors.'
  },
  {
    name: 'Chloe',
    image: 'https://i.ibb.co.com/vCr5Ybnw/birdwatching.jpg',
    description: 'Chloe enjoys birdwatching and purring softly.'
  },
  {
    name: 'Charlie',
    image: 'https://i.ibb.co.com/RGfdgPFm/4.jpg',
    description: 'Charlie is full of energy and loves to play.'
  },
  {
    name: 'Bella',
    image: 'https://i.ibb.co.com/7xFFZhNz/5.jpg',
    description: 'Bella prefers long naps and gentle petting.'
  }
];

const MySwiper = () => {
  return (
    <div className="w-10/12 mx-auto rounded-none md:w-3/4 ">
      <SwiperComponent
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={40}
        slidesPerView={1}
        className="rounded-xl"
      >
        {pets.map((pet, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[550px] bg-white  overflow-hidden shadow-xl hover:scale-[1.02] transition-all duration-500 ease-in-out">
              <img
                src={pet.image}
                alt={pet.name}
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white p-6">
                <h2 className="text-3xl font-extrabold drop-shadow-md">{pet.name}</h2>
                <p className="mt-2 text-lg drop-shadow-sm">{pet.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  );
};

export default MySwiper;
