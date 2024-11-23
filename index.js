import "dotenv/config";
import express from "express";
import routes from "./src/routes/postsRouter.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("uploads"));
routes(app);

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}.`);
});