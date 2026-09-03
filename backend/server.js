const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;
const dataPath = path.join(__dirname, "data");
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req, res) => {

    res.send("Portfolio Backend is Running!");

});


app.get("/api/projects", (req, res) => {
    const data = fs.readFileSync(
        path.join(dataPath, "projects.json"),
        "utf-8"
    );

    const projects = JSON.parse(data);

    res.json(projects);

});

app.get("/api/about", (req, res) => {

    const data = fs.readFileSync(
        path.join(dataPath, "about.json"),
        "utf-8"
    );

    const about = JSON.parse(data);

    res.json(about);

});

app.get("/api/skills", (req, res) => {

    const data = fs.readFileSync(
        path.join(dataPath, "skills.json"),
        "utf-8"
    );

    const skills = JSON.parse(data);

    res.json(skills);

});

app.post("/api/contact", (req, res) => {

    const data = fs.readFileSync(
        path.join(dataPath, "messages.json"),
        "utf-8"
    );

    const messages = JSON.parse(data);

    const newMessage = {
        id: Date.now(),
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    };

    messages.push(newMessage);

    fs.writeFileSync(
        path.join(dataPath, "messages.json"),
        JSON.stringify(messages, null, 4)
    );

    res.json({
        message: "Your message has been received successfully!"
    });

});

app.listen(PORT, () => {

    console.log(`Server running at http://localhost:${PORT}`);

});