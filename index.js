import "dotenv/config";
import express from "express";
import routes from "./src/routes/postsRouter.js";
// import https from 'node:https';
// import fs from 'node:fs';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("uploads"));
routes(app);

// const options = {
//     key: fs.readFileSync('./certs/key.pem'),
//     cert: fs.readFileSync('./certs/cert.pem'),
// };

// https.createServer(options, app).listen(PORT, () => {
//     console.log(`Servidor express.js escutando em \"::${PORT}\".`);
// });

app.listen(PORT, () => {
    console.log(`Servidor express.js escutando em \"::${PORT}\".`);
});