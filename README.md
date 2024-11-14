Book Review App

A simple full-stack application built with the MERN (MongoDB, Express, React, Node.js) stack that allows users to submit, view, and delete book reviews. The app provides a platform to share book recommendations, reviews, and ratings, and is designed with both mobile and desktop responsiveness in mind.

Features

Submit Reviews: Users can submit reviews for books with a title, author, short review content, and rating (1-5 stars).

View Reviews: Display all submitted book reviews in a list, including title, author, review content, reviewer's name, and rating.

Delete Reviews: Each review has a "Delete" button that allows users to remove a review.

Responsive Design: The app is fully responsive, with a mobile-first approach.

Rating System: Users can rate books from 1 to 5 stars.


Frontend: React.js

Functional components, hooks (useState, useEffect), and state management to handle user interactions.

Backend: Node.js, Express.js

RESTful API to handle CRUD operations for book reviews (Create, Read, Update, Delete).

Database: MongoDB

MongoDB Atlas (cloud-based) for storing book reviews, or a local MongoDB instance.
CSS: Custom styling using CSS with Bootstrap for layout and responsiveness.


Project Setup

Prerequisites
Node.js (version 14.x or higher)
MongoDB (either a local installation or a MongoDB Atlas account)
npm (Node Package Manager) or yarn

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/Bhargavi2769/Book-review-app.git
cd book-review-app
Install dependencies for the backend (Node.js, Express):

bash
Copy code
cd backend
npm install
Or if you're using yarn:

bash
Copy code
yarn install
Install dependencies for the frontend (React.js):

bash
Copy code
cd frontend
npm install
Or if you're using yarn:

bash
Copy code
yarn install
Configure the MongoDB database:

You can either run a local instance of MongoDB or use MongoDB Atlas for cloud storage.
Set up a .env file in the backend folder with the following variable (replace the your-mongo-db-uri with your actual MongoDB URI):
bash
Copy code
MONGODB_URI=your-mongo-db-uri
Start the application:

First, run the backend:
bash
Copy code
cd backend
npm start
Then, run the frontend:
bash
Copy code
cd frontend
npm start
This will start both the frontend React app and the backend Express server. The frontend will typically run on http://localhost:3000, and the backend API will be running on http://localhost:5000.

Running the App
Open http://localhost:3000 in your browser to interact with the frontend of the Book Review App.
The app will fetch and display reviews from the backend, and you can submit or delete reviews directly from the UI.
API Endpoints
1. GET /reviews
Description: Fetch all book reviews.
Response: A list of all reviews in JSON format.
2. POST /reviews
Description: Submit a new book review.
Request Body:
json
Copy code
{
  "title": "Book Title",
  "author": "Author Name",
  "review": "Your review content here",
  "reviewer": "Your name",
  "rating": 5
}
Response: The created review in JSON format.


3. DELETE /reviews/:id
Description: Delete a book review by its ID.
Response: A success message upon deletion.

Styling and UI
CSS Framework: Bootstrap is used for responsive grid layout and styling.
Custom Styling: Additional custom CSS is applied for specific design preferences (e.g., form styles, button styles, etc.).
Mobile Responsiveness
The app is designed to be mobile-first, ensuring it looks great on both mobile and desktop devices.
Reviews are displayed in a column layout on desktop and a row layout on mobile to ensure the app adapts to screen sizes.
Screenshots
(Include screenshots of the application in action, such as a list of reviews, the review form, or any other notable UI elements.)

Contributing
Fork the repository.
Create a new branch (git checkout -b feature-name).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-name).
Open a pull request to merge your changes into the main branch.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments

React for making it easy to build interactive UIs.
Node.js and Express for the backend API.
MongoDB for the NoSQL database.
Bootstrap for styling and making the app responsive.