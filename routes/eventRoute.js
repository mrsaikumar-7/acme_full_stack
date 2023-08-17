const express = require('express');
const router = express.Router();
const Event = require("../models/eventModel");

router.route("/create").post((req, res) => {
  const { title, topic, date, report, organizedBy } = req.body;
  
  const newEvent = new Event({
    title,
    topic,
    date,
    report,
    organizedBy
  });
  
  newEvent.save()
    .then(savedEvent => {
      res.status(200).json(savedEvent);
      console.log("The event is saved");
      console.log(savedEvent); // Sending the saved event as a response
    })
    .catch(error => {
      res.status(500).json({ error: "Failed to save event" }); // Sending an error response if there's an issue with saving
    });
});

router.route("/events").get((req, res) => {
  Event.find()
    .then(foundEvents => res.json(foundEvents));
});

router.route("/delete/:id").delete((req, res) => {
  const id = req.params.id;

  Event.findByIdAndDelete(id)
    .then(() => {
      console.log("Event was deleted");
      res.sendStatus(200); // Respond with a success status code
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500); // Respond with an error status code
    });
});



module.exports = router;
