const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3100;

// Middleware parsing.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku).
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// ***This was copy and pasted. I do no understand how to use this. ASK PHIL.

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/employee_data"); // Changed server to employee_data

// Start the API server
app.listen(PORT, function() {
  console.log(`Listening on: ${PORT}!`);
});
