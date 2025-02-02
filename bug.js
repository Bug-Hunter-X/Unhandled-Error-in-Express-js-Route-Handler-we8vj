const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling if userId is not a number
  const user = users.find(user => user.id === parseInt(userId));
  if (user) {
    res.json(user);
  } else {
    //This is the problematic part, error handling missing
    res.status(404).send('User not found');
  }
});

// ... rest of the code