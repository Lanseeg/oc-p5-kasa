Kasa - Frontend Project
Kasa is a fictional property rental web application built as part of the OpenClassrooms Web Developer course. This project is designed to demonstrate proficiency with React, SCSS, React Router, and other web development best practices.

Table of Contents
Overview
Features
Technologies Used
Project Structure
Installation
Scripts
Author
License
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

graphql
Copy code
src/
│
├── components/          # Reusable UI components (e.g., Header, Footer, Carousel, etc.)
├── data/                # JSON files for mock data (accommodations, about content)
├── pages/               # Pages for routing (Home, About, Accomodation, Error404)
├── styles/              # SCSS files organized by components, layouts, and pages
├── App.js               # Main App component
└── index.js             # Entry point for the app
Installation
Follow these steps to set up the project locally:

Prerequisites
Node.js (v20.x recommended)
npm (Node package manager) or Yarn (optional)
Steps
Clone the repository:
bash
Copy code
git clone https://github.com/Lanseeg/oc-p5-kasa.git
cd oc-p5-kasa
Install the dependencies:
Using npm:

bash
Copy code
npm install
Or using Yarn:

bash
Copy code
yarn install
Start the development server:
Using npm:

bash
Copy code
npm start
Or using Yarn:

bash
Copy code
yarn start
The project will be available at http://localhost:3000.

Troubleshooting
If you encounter issues related to missing babel packages, you can fix them by running the following command:

bash
Copy code
npm install --save-dev @babel/plugin-proposal-private-property-in-object
Scripts
The following scripts are available in this project:

npm start: Runs the app in development mode on http://localhost:3000.
npm run build: Builds the app for production to the build folder.
npm run test: Launches the test runner in interactive watch mode.
npm run eject: Ejects the app configuration (use with caution).
Author
Pierre Gourves - GitHub: https://github.com/Lanseeg
