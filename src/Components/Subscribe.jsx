import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email validation
    if (!email) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid email!',
      });
      return;
    }

    // Display success message
    Swal.fire({
      icon: 'success',
      title: 'Subscribed!',
      text: `You have successfully subscribed with ${email}.`,
      confirmButtonColor: '#06b6d4',
      confirmButtonText: 'Okay!',
    });

    // Reset email field after submission
    setEmail('');
  };

  return (
    <div className="w-10/12 mx-auto mt-12">
      <h2 className="text-3xl font-bold text-center text-cyan-700 mb-4">
        Subscribe to Our Newsletter
      </h2>
      <form onSubmit={handleSubmit} className="text-center">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 border-cyan-500 rounded px-4 py-2 mr-4"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 hover:bg-white hover:text-black border border-cyan-500 bg-cyan-500 text-white rounded-full"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
