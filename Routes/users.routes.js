const express = require("express");
const user = require("../model/user.schema.js");

const usersroutes = express.Router();
usersroutes.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const data = await user.create(req.body);
    return res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ data: error.message });
  }
});
usersroutes.get("/", async (req, res) => {
  try {
    console.log("get");
    const data = await user.find();
    return res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ data: error.message });
  }
});
usersroutes.get("/:id", async (req, res) => {
  try {
    console.log("get");
    const data = await user.findById(req.params.id);
    console.log(data);
    return res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ data: error.message });
  }
});
usersroutes.put("/:id", async (req, res) => {
  try {
    console.log("update", req.body);
    const { name, bio } = req.body;
    await user.findByIdAndUpdate(req.params.id, {
      name: name,
      bio: bio,
    });
    res.send({ data: "updated" });
  } catch (error) {
    res.status(500).send({ data: error.message });
  }
});
usersroutes.delete("/:id", async (req, res) => {
  try {
    console.log("delete");
    const data = await user.findByIdAndDelete(req.params.id);
    console.log(data);
    return res.status(200).send({ data: "deleted" });
  } catch (error) {
    res.status(500).send({ data: error.message });
  }
});

module.exports = usersroutes;
