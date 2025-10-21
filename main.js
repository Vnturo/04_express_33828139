// Create a new router
const express = require("express");
const router = express.Router();
const path = require("path");

// Handle the main routes

router.get("/", (req, res) => res.send("Hello World!")); // Homepage route
router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>")); // About page route
router.get("/contact", (req, res) => res.send ("<h1>This is the contact page</h1>")); // Contact page route
router.get("/help", (req, res) => res.send ("<h1>This is the help page</h1>")); // Help page route

// Name Route
router.get("/welcome/:name", (req, res) => {
    const name = req.params.name; // Extract the 'name' parameter from the URL
    res.send(`<h1>Welcome, ${name}!</h1>`); // Send a personalized welcome message
});

// Date Route (Lab 4, Task 7)
router.get("/date", (req, res) => {
    const today = new Date();
    res.send(`<h1>Today's date is: ${today.toLocaleString()}</h1>`);
});

// Chain Route (Lab 4, Task 8)
router.get("/chain",
    (req, res, next) => {
        req.chainMessage = "First handler executed. ";
        next(); // pass control to the next handler
    },
    (req, res) => {
        res.send(`<h1>${req.chainMessage}Second handler responding.</h1>`); // Send the accumulated message
    }
);
// File Route (Lab 4, Task 9)
router.get("/file", (req, res) => {
    res.sendFile(path.join(__dirname, "a.html")); // Send the a.html file as a response
});

// Export the router object so index.js can access it
module.exports = router;
