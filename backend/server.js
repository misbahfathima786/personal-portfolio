require("dotenv").config();
const { MongoClient } = require("mongodb");

const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const app = express();
const client = new MongoClient(process.env.MONGODB_URI);

let messagesCollection;

async function connectToDatabase() {
    await client.connect();

    const database = client.db("portfolio");

    messagesCollection = database.collection("messages");

    console.log("Connected to MongoDB");
}
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

app.post("/api/contact", async (req, res) => {

    try {

        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                message: "All fields are required."
            });
        }

        await messagesCollection.insertOne({
            name: name,
            email: email,
            message: message,
            createdAt: new Date()
        });

        res.json({
            message: "Your message has been received successfully!"
        });

    } catch (error) {

        console.error("Error saving contact message:", error);

        res.status(500).json({
            message: "Unable to send your message right now."
        });

    }

});
connectToDatabase()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    })
    .catch(error => {
        console.error("Database connection failed:", error);
        process.exit(1);
    });