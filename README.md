# Personal Portfolio Website

A responsive personal portfolio website built to showcase my skills, projects, education, internship experience, resume, and professional profiles.

The website is developed using HTML, CSS, and JavaScript for the frontend, with Node.js and Express.js powering the backend. MongoDB Atlas is used to store messages submitted through the contact form.

## 🌐 Live Website

https://personal-portfolio-a3hn.onrender.com

## ✨ Features

- Responsive portfolio website
- Home section with personal introduction
- About section
- Education information
- Skills section
- Projects section
- Experience section
- Contact form
- MongoDB Atlas integration
- REST API integration
- Dark/Light mode
- Responsive mobile navigation
- Resume viewing/download option
- GitHub profile integration
- LinkedIn profile integration
- LeetCode profile integration
- Favicon
- Responsive design for desktop, tablet, and mobile
- Deployed using Render

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas

### Tools & Platforms
- Visual Studio Code
- Git
- GitHub
- Render

## 🔌 REST API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Retrieves project information |
| GET | `/api/about` | Retrieves About section information |
| GET | `/api/skills` | Retrieves skills information |
| POST | `/api/contact` | Receives and stores contact form messages |

## 🗄️ Database

MongoDB Atlas is used to store contact form submissions.

The database structure is:

```text
portfolio
└── messages

personal-portfolio/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── favicon.svg
│   │
│   └── resume/
│       └── resume.pdf
│
├── backend/
│   ├── server.js
│   │
│   └── data/
│       ├── projects.json
│       ├── about.json
│       ├── skills.json
│       └── messages.json
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

User
  │
  ▼
Portfolio Website
  │
  ├── Home
  ├── About
  ├── Skills
  ├── Projects
  ├── Experience
  └── Contact
          │
          ▼
    Node.js + Express
          │
          ├── GET /api/projects
          ├── GET /api/about
          ├── GET /api/skills
          └── POST /api/contact
                    │
                    ▼
              MongoDB Atlas
                    │
                    ▼
              messages collection

git clone https://github.com/misbahfathima786/personal-portfolio.git

cd personal-portfolio
npm install

MONGODB_URI=your_mongodb_connection_string

npm start
http://localhost:3000
GitHub Repository
       │
       ▼
     Render
       │
       ▼
Node.js + Express
       │
       ▼
 MongoDB Atlas

frontend/resume/resume.pdf


Copy **everything inside the block** into your `README.md`.

Available next action: :contentReference[oaicite:0]{index=0}
