const express = require('express');
const path = require('path');
const parser = require('body-parser');
const db = require('../db/connection');
const Property = require('../db/model')

const app = express();
const port = 3002;

const publicPath = path.join(__dirname, '..', 'client', 'dist');
app.use(express.static(publicPath));

app.get('/api/listings/:id', (req, res) => {
  console.log(`GET /api/listings/${req.params.id}`);
  Property.findOneById(req.params.id, (err, docs) => {
        if (err) {
          console.log(`Error: failed to find document with listing_id = ${req.params.id}`);
          res.sendStatus(404);
        } else {
          console.log("Successful response...");
          res.json(docs.scheduleATour);
        }
  });
});

app.post('/api/listings/:id', (req, res) => {
  console.log(`GET /api/listings/${req.params.id}`);
  Property.insertOne(req.params.id, (err, docs) => {
        if (err) {
          console.log(`Error: failed to find document with listing_id = ${req.params.id}`);
          res.sendStatus(404);
        } else {
          console.log("Successful response...");
          res.json(docs.scheduleATour);
        }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
