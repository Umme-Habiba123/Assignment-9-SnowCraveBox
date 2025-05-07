import React, { useState } from 'react';
import Swal from 'sweetalert2';
import DynamicTitle from '../Components/DynamicTitle';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Submitted Data:', formData);
        Swal.fire({
            icon: 'success',
            title: 'Thanks for contacting!',
            text: 'We’ll get back to you soon.',
            confirmButtonColor: '#06b6d4',
            confirmButtonText: 'Okay!'
        });
        setFormData({ name: '', email: '', message: '' });
    };

    return (
      
        
        <div className="max-w-xl mx-auto mt-10 p-6 shadow-lg rounded-lg bg-white">
           
              <DynamicTitle  title={'Contact'}/>
              
            <h2 className="text-2xl font-bold mb-4 text-center text-cyan-600">Contact Us for Subscription</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    required
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="4"
                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    required
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-cyan-500 text-white font-semibold py-2 px-4 rounded hover:bg-cyan-600"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
