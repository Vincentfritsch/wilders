
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello WOurl ");
});

app.listen(3000, () => console.log("Server started on localhost:3000"));