Kasa - Frontend Project
Kasa is a fictional property rental web application built as part of the OpenClassrooms Web Developer course. This project is designed to demonstrate proficiency with React, SCSS, React Router, and other web development best practices.

Installation

Follow these steps to set up the project locally:


Prerequisites

Node.js (v20.x recommended)

npm (Node package manager) or Yarn (optional)

Steps

Clone the repository:

git clone https://github.com/Lanseeg/oc-p5-kasa.git

cd oc-p5-kasa

Install the dependencies:

Using npm:

npm install
Or using Yarn:

yarn install

Start the development server:

Using npm:

npm start

Or using Yarn:

yarn start

The project will be available at http://localhost:3000.

Overview
Kasa is a platform where users can browse through property listings, view property details, and get information about the host. This project focuses on the frontend, and it uses React and SCSS to deliver a modular and reusable UI.

Main Pages:
Homepage: Displays a gallery of property listings.

Property Page: Shows details about a selected property, including a carousel of images, rating, tags, and description.

About Page: Information about Kasa and its values.

Error Page (404): Shown when a route does not match an existing page.

Features

React-based architecture with reusable components.

Responsive design with SCSS and Flexbox.

Dynamic routing with React Router.

Property listings fetched from local JSON data.

Carousel component for browsing property images.

Star-based rating system.

Technologies Used

React (via Create React App)
React Router

SCSS for styling

FontAwesome for icons

Node.js for running the development environment

Project Structure

The project is organized as follows:


src/

│

├── components/          # Reusable UI components (e.g., Header, Footer, Carousel, etc.)

├── data/                # JSON files for mock data (accommodations, about content)

├── pages/               # Pages for routing (Home, About, Accomodation, Error404)

├── styles/              # SCSS files organized by components, layouts, and pages

├── App.js               # Main App component

└── index.js             # Entry point for the app


Author
Pierre Gourves - GitHub: https://github.com/Lanseeg
