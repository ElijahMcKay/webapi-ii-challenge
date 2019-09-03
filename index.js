// API HERE
const express = require('express')

const server = express(); 

const posts = require('./data/db');

server.use(express.json()); 


// ======== Request Handlers =========

// --- GET Requests ---

server.get("/api/posts", (req, res) => {
    users.find()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(() => {
        res.status(500).json({
          message: "Cannot access users data"
        });
      });
  });

  server.get("/api/posts/:id", (req, res) => {
    users.find()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(() => {
        res.status(500).json({
          message: "Cannot access users data"
        });
      });
  });

  server.get("/api/posts/:id/comments", (req, res) => {
    users.find()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(() => {
        res.status(500).json({
          message: "Cannot access users data"
        });
      });
  });



  // ----- POST Requests -----
  

