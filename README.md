# Tool Management Application

This is a full-stack **Tool Management Application** built with **React** for the frontend, **Node.js** with **Express** for the backend, and **MongoDB** as the database. The application allows users to add, delete, and search for tools.

---

## Features

- **Add a Tool:** Users can add a new tool with details like designation, serial number, part number, etc.
- **Delete a Tool:** Users can delete a tool by clicking the delete button.
- **Search Tools:** Users can search for tools by their designation.
- **List All Tools:** All tools are displayed in a table format.

---

## Technologies Used

- **Frontend:** React, Axios, CSS
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Database:** MongoDB (hosted on MongoDB Atlas or locally)
- **Deployment:** 
  - Frontend: Vercel
  - Backend: Render or Heroku

---

## Prerequisites

Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- [Git](https://git-scm.com/) (optional, for cloning the repository)

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/tool-management-app.git
cd tool-management-app
2. Set Up the Backend
Navigate to the tool-management-backend folder:

bash
Copy
cd tool-management-backend
Install dependencies:

bash
Copy
npm install
Set up the environment variables:

Create a .env file in the tool-management-backend folder.

Add your MongoDB connection string:

env
Copy
MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/toolDB
Start the backend server:

bash
Copy
node server.js
The backend will run on http://localhost:5000.

3. Set Up the Frontend
Navigate to the tool-management-frontend folder:

bash
Copy
cd ../tool-management-frontend
Install dependencies:

bash
Copy
npm install
Update the backend API URL:

Open src/services/toolService.js.

Replace http://localhost:5000/tools with your hosted backend URL (if applicable).

Start the frontend development server:

bash
Copy
npm start
The frontend will run on http://localhost:3000
