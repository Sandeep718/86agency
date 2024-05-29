const express = require("express");
const user = require("../model/user.schema.js");
const post = require("../model/post.schema.js");

const analytics = express.Router();
analytics.get("/users", async (req, res) => {
  try {
    console.log(req.body);
    const data = await user.find();
    return res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ data: error.message });
  }
});
analytics.get("/posts", async (req, res) => {
  try {
    console.log(req.body);
    const data = await post.find();
    return res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ data: error.message });
  }
});
analytics.get("/posts/top-liked", async (req, res) => {
  try {
    console.log(req.body);
    const data = await post.find().sort({ likes: -1 }).limit(5);
    return res.status(200).send(data);
    // return res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ data: error.message });
  }
});

module.exports = analytics;
