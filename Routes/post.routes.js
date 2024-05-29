const express = require("express");
const post = require("../model/post.schema.js");

const postsroutes = express.Router();

postsroutes.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const data = await post.create({ ...req.body, likes: 0 });
    return res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ data: error.message });
  }
});
postsroutes.get("/", async (req, res) => {
  try {
    console.log("get");
    const data = await post.find();
    return res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ data: error.message });
  }
});
postsroutes.get("/:id", async (req, res) => {
  try {
    console.log("get");
    const data = await post.find({ user_id: req.params.id });
    console.log(data);
    return res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ data: error.message });
  }
});

postsroutes.put("/:id", async (req, res) => {
  try {
    console.log("update");
    await post.findByIdAndUpdate(req.params.id, req.body);
    res.send({ data: "updated" });
  } catch (error) {
    res.status(500).send({ data: error.message });
  }
});
postsroutes.delete("/:id", async (req, res) => {
  try {
    await post.findByIdAndDelete(req.params.id);
    return res.status(200).send({ data: "deleted" });
  } catch (error) {
    res.status(500).send({ data: error.message });
  }
});

// like start
postsroutes.post("/:id/like", async (req, res) => {
  try {
    console.log("like");
    console.log(req.params.id);
    const data = await post.findById(req.params.id);
    await post.findByIdAndUpdate(req.params.id, { likes: data.likes + 1 });
    return res.status(200).send({ data: "liked" });
  } catch (error) {
    res.status(500).send({ data: error.message });
  }
});
postsroutes.post("/:id/unlike", async (req, res) => {
  try {
    console.log("unlike");
    const data = await post.findById(req.params.id);
    await post.findByIdAndUpdate(req.params.id, { likes: data.likes - 1 });
    return res.status(200).send({ data: "unliked" });
  } catch (error) {
    res.status(500).send({ data: error.message });
  }
});

// like end

module.exports = postsroutes;
