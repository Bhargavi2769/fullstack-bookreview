import React, { useState } from 'react';
import axios from 'axios';
import './ReviewForm.css'; // Import the CSS file for styling

const ReviewForm = ({ onReviewSubmit }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [review, setReview] = useState('');
  const [reviewer, setReviewer] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReview = { title, author, review, reviewer, rating };

    try {
      const response = await axios.post('https://book-review-backend-9pyt.onrender.com/reviews', newReview);
      onReviewSubmit(response.data);
      setTitle('');
      setAuthor('');
      setReview('');
      setReviewer('');
      setRating(0);
    } catch (err) {
      console.error('Error submitting review:', err);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="review-form">
        <input 
          type="text" 
          placeholder="Book Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          className="form-input"
        />
        <input 
          type="text" 
          placeholder="Author" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
          className="form-input"
        />
        <textarea 
          placeholder="Your review" 
          value={review} 
          onChange={(e) => setReview(e.target.value)} 
          className="form-textarea"
        />
        <input 
          type="text" 
          placeholder="Your name" 
          value={reviewer} 
          onChange={(e) => setReviewer(e.target.value)} 
          className="form-input"
        />
        <input 
          type="number" 
          value={rating} 
          min="1" 
          max="5" 
          onChange={(e) => setRating(e.target.value)} 
          className="form-input"
        />
        <button type="submit" className="form-button">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
