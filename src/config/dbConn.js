import nano from "nano";

export default async function () {
  try {
    const user = process.env.DB_USER;
    const pass = process.env.DB_PASS;

    const nanoDB = nano({
      url: process.env.DB_HOST,
    });

    await nanoDB.auth(user, pass);

    return nanoDB;
  } catch(err) {
    console.log(err);
    throw new Error("Error on connection with the database.");
  }
}