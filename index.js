import "dotenv/config";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}.`);
});

app.get("/api", (req, res) => {
    res.status(200).json({ message: "Hello World!" });
});