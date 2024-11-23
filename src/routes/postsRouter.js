import express from "express";
import multer from "multer";
import { list, createPost, uploadImg, updatePost } from "../controllers/postsController.js";
import cors from "cors";

const corsOptions = {
  origin: process.env.FRONT_URL,
  optionsSuccessStatus: 200
}

// WINDOWS ONLY
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   }
// });
// const upload = multer({ storage: storage });

const upload = multer();

const routes = (app) => {
  app.use(express.json());
  app.use(cors(corsOptions))
  app.get("/posts", list)
  app.post("/posts", createPost);
  app.put("/update/:id", updatePost)
  app.post("/upload", upload.single("img"), uploadImg);
};

export default routes;