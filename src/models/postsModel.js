import dbConn from "../config/dbConn.js";

// const _dbConn = await dbConn();
// await dbConn.db.create("instabytes_posts");

export async function getAll() {
  const _dbConn = await dbConn();
  const dbPosts = _dbConn.db.use("instabytes_posts");
  const posts = await dbPosts.list({ include_docs: true });
  return posts.rows;
}

export async function create(post) {
  const _dbConn = await dbConn();
  const dbPosts = _dbConn.db.use("instabytes_posts");
  const res = await dbPosts.insert({
    imgUrl: post.imgUrl,
    description: post.description,
    alt: post.alt
  });
  return res;
}

export async function update(id, post) {
  const _dbConn = await dbConn();
  const dbPosts = _dbConn.db.use("instabytes_posts");
  const doc = await dbPosts.get(id);
  const res = await dbPosts.insert({
    _id: id,
    _rev: doc._rev,
    ...post
  });
  return res;
}