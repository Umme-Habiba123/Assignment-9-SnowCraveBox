import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import ReviewSection from '../Components/ReviewSection';

const BoxCardDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const boxCardDetails = data.find((singleCard) => singleCard.id == id);
        if (boxCardDetails) {
            setItem(boxCardDetails);
        }
    }, [data, id]);

    const handleAddToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert("Item added to cart!");
    };

    return (
        <div className="max-w-6xl mx-auto p-6">
            {item ? (
                <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
                    {/* Image Section */}
                    <div className="md:w-1/2">
                        <img
                            src={item.banner}
                            alt={item.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Details Section */}
                    <div className="md:w-1/2 p-6">
                        <h1 className="text-3xl font-bold text-gray-800">{item.name}</h1>
                        <p className="text-gray-600 mt-2">{item.description}</p>

                        <div className="mt-4">
                            <span className="text-xl font-semibold">${item.price}</span>
                            <span className="text-sm text-gray-500 ml-2">{item.frequency}</span>
                        </div>

                        <div className="mt-4">
                            <h3 className="font-semibold text-gray-800">Features:</h3>
                            <p className="text-gray-600">{item.features.join(', ')}</p>
                        </div>

                        <div className="mt-4">
                            <h3 className="font-semibold text-gray-800">Subscription Benefits:</h3>
                            <ul className="list-disc pl-5">
                                {item.subscription_benefits.map((benefit, index) => (
                                    <li key={index} className="text-gray-600">{benefit}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-4 flex items-center text-yellow-500 text-sm">
                            <span className="mr-1">{item.rating}</span>
                            <span className="text-gray-400">({item.number_of_reviews} reviews)</span>
                        </div>

                        <button
                            onClick={handleAddToCart}
                            className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded shadow"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}

            <ReviewSection></ReviewSection>
        </div>
    );
};

export default BoxCardDetails;
