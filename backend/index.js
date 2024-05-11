// import express and cors
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// Post Endpoint
app.post("/authenticate", async (req, res) => {
  const { username } = req.body; // expects a username object in the request body
  
  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      { username: username, secret: username, first_name: username },
      { headers: {"Private-Key": "7ab3393c-3da7-4b0a-870d-bc16870615e2"} }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);