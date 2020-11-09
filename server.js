
const express = require("express");
const mongoose = require("mongoose");
const WilderModel = require("./models/Wilder");
const app = express();
const wilderController = require("./controllers/wilders")

mongoose
    .connect("mongodb://127.0.0.1:27017/wilders", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        autoIndex: true,
    })
    .then( () => console.log("Connected to database"))
    .catch( (err) => console.log(err));

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello WOurl ");
   /* WilderModel.init().then( () => {
    const SecondWilder = new WilderModel({
        name: "Second Wilder",
        city: "San Francisco",
        skills: [
            {title: "HTML5", votes:10 },
            { title: "React", votes: 5},
        ],
    });
    SecondWilder
        .save()
        .then( (result) => {
            console.log("success:", result);
        })
        .catch( (err) => {
            console.log("error:", err);
        });
    })*/
});
app.post("/api/wilder/create", wilderController.create);
app.get("/api/wilder/read", wilderController.read);
app.put("/api/wilder/update", wilderController.update);
app.delete("/api/wilder/delete", wilderController.delete);

app.listen(3000, () => console.log("Server started on http://localhost:3000"));