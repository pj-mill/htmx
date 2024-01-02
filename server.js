import express from "express";
import userApi from "./routes/user-routes.js";

const app = express();

// Set the static folder to 'public'
app.use(express.static("public"));

// Parse requests using JSON
app.use(express.json());

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Your routes and other middleware can be added here
app.use("/users", userApi);

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
