import fs from "fs";
import { create, getAll, update } from "../models/postsModel.js";

export async function list(req, res) {
  const posts = await getAll();
  return res.status(200).json(posts);
}

export async function createPost(req, res) {
  try {
    const body = req.body;
    const post = await create(body);
    return res.status(200).json(post);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ "error": "Internal error" });
  }
}

export async function updatePost(req, res) {
  try {
    const body = req.body;
    const post = await update(req.params.id, body);
    return res.status(200).json(post);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ "error": "Internal error" });
  }
}

export async function uploadImg(req, res) {
  const post = {
    description: "",
    imgUrl: req.file.originalname,
    alt: ""
  };

  try {
    const _res = await create(post);
    const imgUpdated = `uploads/${_res.id}.png`
    fs.renameSync(req.file.path, imgUpdated)
    return res.status(200).json(_res);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ "error": "Internal error" })
  }
}