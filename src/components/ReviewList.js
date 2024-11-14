import React from 'react';
import axios from 'axios';
import './ReviewList.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const ReviewList = ({ reviews, onReviewDelete }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://book-review-backend-9pyt.onrender.com/reviews/${id}`);
      onReviewDelete(id);
    } catch (err) {
      console.error('Error deleting review:', err);
    }
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Full stars
    const emptyStars = 5 - fullStars; // Empty stars
  
    let stars = [];
  
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star star" />);
    }
  
    
  
    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star star" />);
    }
  
    return stars;
  };
  

  return (
    <div className="container">
      <div className="row">
        {reviews.map((review) => (
          <div key={review._id} className="col-md-4 col-sm-12 mb-4">
            <div className="review-container">
              <h3>{review.title} by {review.author}</h3>
              
              <p>{review.review}</p>
              <p><strong>Reviewed by:</strong> {review.reviewer}</p>
              <div className="rating">
                {renderStars(review.rating)}
              </div>
              <button onClick={() => handleDelete(review._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;



