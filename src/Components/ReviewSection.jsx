import React, { useState } from 'react';

const ReviewSection = () => {
  const [reviewInput, setReviewInput] = useState('');
  const [ratingInput, setRatingInput] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = () => {
    if (reviewInput.trim() && ratingInput >= 1 && ratingInput <= 5) {
      const newReview = {
        text: reviewInput,
        rating: ratingInput,
        date: new Date().toLocaleString()
      };

      setReviews([newReview, ...reviews]);
      setReviewInput('');
      setRatingInput('');
    } else {
      alert('Please enter a review and a valid rating (1-5)');
    }
  };

  return (
    <div className="mt-10 p-5 bg-gray-50 border border-gray-300  rounded-lg gloria-hallelujah-font">
      <h2 className="text-xl font-semibold mb-4">Leave a Review</h2>

      <textarea
        value={reviewInput}
        onChange={(e) => setReviewInput(e.target.value)}
        placeholder="Write your review..."
        className="w-full border border-gray-300 rounded p-2 mb-3"
      ></textarea>

      <input
        type="number"
        min="1"
        max="5"
        value={ratingInput}
        onChange={(e) => setRatingInput(e.target.value)}
        placeholder="Rating ★ ★ ★..."
        className="w-full border border-gray-300 rounded p-2 mb-3"
      />

      <button
        onClick={handleReviewSubmit}
        className="bg-cyan-500 text-white py-2 px-4 rounded hover:bg-white hover:text-black border-1 border-cyan-500"
      >
        Submit Review
      </button>

      <div className="mt-6">
        <h3 className="text-lg font-bold mb-2">Reviews:</h3>
        {reviews.length === 0 && <p className="text-gray-500">No reviews yet.</p>}
        {reviews.map((rev, index) => (
          <div key={index} className="border-t border-gray-200 pt-3 mt-3">
            <p className="text-gray-800">{rev.text}</p>
            <p className="text-sm text-green-600 ">Rating: {rev.rating} ★</p>
            <p className="text-xs text-gray-500">Date : {rev.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
