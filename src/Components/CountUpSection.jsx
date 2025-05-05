import React from 'react';
import CountUp from 'react-countup';
import { FaBoxOpen, FaUserAlt, FaDog, FaStar } from 'react-icons/fa';

const CountUpSection = () => {
    return (
        <div className="bg-cyan-50 py-16 my-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
                <div>
                    <FaBoxOpen className="text-4xl text-cyan-400 mx-auto mb-2" />
                    <h2 className="text-3xl font-bold text-cyan-500">
                        <CountUp end={1500} duration={3} />+
                    </h2>
                    <p className="mt-2 text-gray-600">Boxes Delivered</p>
                </div>
                <div>
                    <FaUserAlt className="text-4xl text-cyan-400 mx-auto mb-2" />
                    <h2 className="text-3xl font-bold text-cyan-500">
                        <CountUp end={800} duration={3} />+
                    </h2>
                    <p className="mt-2 text-gray-600">Happy Subscribers</p>
                </div>
                <div>
                    <FaDog className="text-4xl text-cyan-400 mx-auto mb-2" />
                    <h2 className="text-3xl font-bold text-cyan-500">
                        <CountUp end={250} duration={3} />+
                    </h2>
                    <p className="mt-2 text-gray-600">Pet Products</p>
                </div>
                <div>
                    <FaStar className="text-4xl text-cyan-400 mx-auto mb-2" />
                    <h2 className="text-3xl font-bold text-cyan-500">
                        <CountUp end={1200} duration={3} />+
                    </h2>
                    <p className="mt-2 text-gray-600">5 Star Reviews</p>
                </div>
            </div>
        </div>
    );
};

export default CountUpSection;
