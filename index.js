const express = require('express');
const connectDB = require("./config/db.js");
const userRoute = require("./routes/userRoute.js");
const app = express();


app.use(express.json());

app.get("/", (req,res) => {
    try {
        res.send("Hello world");
        console.log("My first test API is working");
    }catch (error) {
        res.status(500).send("server error");
    }
});


app.use("/api/user",userRoute);

app.listen (8000, async() => {
    try {
        await connectDB ();
        console.log("listening on port 8000");

    } catch (error) {
        console.error(error.message);
    }
})