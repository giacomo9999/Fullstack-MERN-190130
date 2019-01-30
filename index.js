const express = require("express");
const path = require("path");
const generatePassword = require("password-generator");

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

let reqCount = 1;
// Put all API endpoints under '/api'
app.get("/api/passwords", (req, res) => {
  const count = 5;

  // Generate some "passwords"
  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
  );

  // Return the "passwords" as a JSON object
  res.json(passwords);

  console.log(`Request ${reqCount} -- Sent ${count} passwords`);
  reqCount += 1;
});

// The 'catchall' handler: for any request that doesn't match
// one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);
