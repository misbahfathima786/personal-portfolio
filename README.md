# Personal Portfolio Website

A responsive personal portfolio website built to showcase my skills, projects, education, internship experience, resume, and professional profiles.

## 🌐 Live Website

https://personal-portfolio-a3hn.onrender.com/#home

## ✨ Features

- Responsive portfolio design
- Home, About, Skills, Projects, Experience, and Contact sections
- Dynamic project, skills, and about information using REST APIs
- Contact form with MongoDB storage
- Dark/Light mode
- Responsive mobile navigation
- Resume access
- GitHub, LinkedIn, and LeetCode profile links
- Favicon
- Mobile, tablet, and desktop support
- Deployed using Render

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- MongoDB Atlas
- Git
- GitHub
- Render
- Visual Studio Code

## 🔌 REST API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Retrieves project information |
| GET | `/api/about` | Retrieves About section information |
| GET | `/api/skills` | Retrieves skills information |
| POST | `/api/contact` | Submits contact form messages |

## 📂 Project Structure

```text
personal-portfolio/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── favicon.svg
│   └── resume/
│       └── resume.pdf
│
├── backend/
│   ├── server.js
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
```

## 🔄 Application Flow

```text
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
          ├── Projects API
          ├── About API
          ├── Skills API
          └── Contact API
                    │
                    ▼
              MongoDB Atlas
```

## 🚀 Run Locally

### Clone the repository

```bash
git clone https://github.com/misbahfathima786/personal-portfolio.git
```

### Navigate to the project

```bash
cd personal-portfolio
```

### Install dependencies

```bash
npm install
```

### Configure MongoDB

Create a `.env` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string
```

### Start the server

```bash
npm start
```

Open:

```text
http://localhost:3000
```

## ☁️ Deployment

The website is deployed using Render.

```text
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
```

## 📄 Resume

The resume is available at:

```text
frontend/resume/resume.pdf
```

## 👩‍💻 Author

**Misbah Fathima**

Computer Science Engineering Student

- GitHub: https://github.com/misbahfathima786
- LinkedIn: https://www.linkedin.com/in/Misbah-Fathima-01a755397
- LeetCode: https://leetcode.com/u/Misbah_Fathima

## 📜 License

This project is created for personal portfolio and educational purposes.
