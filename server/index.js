/* eslint no-console: ["error", { allow: ["log", "error"] }] */
const express = require('express');
const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const parser = require('body-parser');
const db = require('../db/model');

const app = express();
const port = 3002;

const publicPath = path.join(__dirname, '..', 'client', 'dist');
app.use(express.static(publicPath));
app.use(parser.json());

app.get('/api/ScheduleTour/:id', (req, res) => {
  console.log(`GET /api/ScheduleTour/${req.params.id}`);
  db.findOneById(req.params.id, (err, docs) => {
    if (err) {
      console.log(`Error: failed to find document with listing_id = ${req.params.id}`);
      res.sendStatus(404);
    } else {
      console.log('Successful response...');
      if (docs !== null) {
        res.json(docs.scheduleATour);
      } else {
        console.log(`No appointment for listing_id = ${req.params.id}`);
      }
    }
  });
});

app.post('/api/listings', (req, res) => {
  console.log('Created 1 appointment');
  db.insertOne(req.params.id, (err, docs) => {
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
  console.log(`listening at http://localhost:${port}`);
});
