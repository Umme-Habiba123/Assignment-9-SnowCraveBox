import React from 'react';
import { Link } from 'react-router';

const SubscribeItem = ({ item }) => {
    const { thumbnail, name, description, price, frequency, rating, number_of_reviews,id } = item;

    const handleCardClick = () => {
        console.log('Card clicked');
    };

    return (
        <div  className=" mb-2 p-5 fontgloria-hallelujah-font">
            <div
                className="card bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:bg-gray-100"
                
            >
                <figure>
                    <img
                        src={thumbnail}
                        alt={name}
                        className="w-full h-48 object-cover"
                    />
                </figure>
                <div className="card-body p-3">
                    <h2 className="card-title text-lg font-semibold text-gray-800 flex justify-between items-center">
                        <span>{name}</span>
                        <div className="badge badge-secondary text-sm">NEW</div>
                    </h2>
                    <p className="text-gray-600 text-sm">{description}</p>
                    <div className='flex justify-between'>
                        <div className=" text-gray-800">
                            <span className="font-semibold text-lg">${price}</span>
                            <span className="text-sm text-gray-500 ml-2">{frequency}</span>
                        </div>

                        <div className="mt-1 flex justify-between items-center text-sm">
                            <div className="flex items-center text-yellow-500">
                                <span className="mr-1">{rating}</span>
                                <span className="text-gray-400">({number_of_reviews} reviews)</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-1 flex justify-between items-center">
                        <div className="w-1/2 flex justify-between">
                            <button className="btn btn-primary text-xs bg-cyan-500 border-cyan-500 text-white hover:bg-white hover:text-black ml-10">
                                Subscribe
                            </button>
                          <Link onClick={handleCardClick} to={`/boxcarddetails/${id}`}>
                          <button className="btn ml-50 btn-secondary text-xs text-nowrap bg-gray-400 border-gray-400   text-black hover:bg-white">
                           View More
                           </button>
                          </Link>
                          
               
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SubscribeItem;
