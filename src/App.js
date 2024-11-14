// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';
import './App.css';  // Import custom global styles


const App = () => {
  const [reviews, setReviews] = useState([]);

  // Fetch reviews from the backend
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('https://book-review-backend-9pyt.onrender.com/reviews');
        setReviews(response.data);
      } catch (err) {
        console.error('Error fetching reviews:', err);
      }
    };

    fetchReviews();
  }, []);

  // Handle a new review submission
  const handleReviewSubmit = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  // Handle review deletion
  const handleReviewDelete = (id) => {
    setReviews(reviews.filter(review => review._id !== id));
  };

  return (
    <div className="App">
      {/* Navbar with heading */}
      <nav className="navbar">
        <h1 className="navbar-heading">Book Review App</h1>
      </nav>

      {/* Review Form */}
      <ReviewForm onReviewSubmit={handleReviewSubmit} />

      {/* Review List */}
      <ReviewList reviews={reviews} onReviewDelete={handleReviewDelete} />
    </div>
  );
};

export default App;
