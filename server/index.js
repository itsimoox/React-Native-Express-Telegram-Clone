import express from "express";

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
	res.json("Hello Telegram Clone !!");
});

app.listen(PORT, () => console.log(`Server listening on Port: ${PORT}`));
