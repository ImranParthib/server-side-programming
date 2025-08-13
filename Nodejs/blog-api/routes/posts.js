const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Get all posts
router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// Get single post
router.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
});

// Create a post
router.post("/", async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.status(201).json(post);
});

// Update a post
router.put("/:id", async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(post);
});

// Delete a post
router.delete("/:id", async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: "Post deleted" });
});

module.exports = router;
