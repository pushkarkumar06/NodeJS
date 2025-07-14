const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const mongoose = require("mongoose");
const { error } = require("console");
const { type } = require("os");

const app = express();

app.use(express.json());

// Connection with mongoose :-> 
mongoose.connect("mongodb://127.0.0.1:27017/mydatabase")
    .then(() => console.log("Mongose Connected"))
    .catch((err) => console.log("Mongoose Error occured", err));



//  Schema 
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    job_title: {
        type: String,
    },
    gender: {
        type: String,
    },
});

// creating mongoose model :)
const user = mongoose.model("user", userSchema);

//middleware : plugin       (which put the data from frontend to body)
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log("hello from middleware 1");
    next();
});

// app.use((req , res , next) => {
//     console.log("Hello from middleware 2");
//     return res.send("it is pushkar Kumar");
//     next();
// });


app.get("/api/users", async(req, res) => {
    const allDbusers = await UserActivation.find({});

    res.setHeader("X-MyName" , "Piyush Garg");      // Custom header 
    // Always add X to custom header 
    return res.json(allDbusers);
});

app.get("/api/users/:id", async(req, res) => {
    const user = user.findbyId(req.params.id);
    user = users.find((user) => user.id === id);
    return res.json(user);
});

app.post("/api/users", async (req, res) => {
    // ToDo -> create new users
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({ msg: "All fields should be entered....." });
    }

    // users.push({ ...body, id: users.length + 1 });
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (error, data) => {
    //     return res.json({ status: "success", id: users.length + 1 });
    // });

    const result = await user.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        job_title: body.job_title,
    });

    return res.status(201).json({ msg: "User created Successfully" });
});

app.patch("/api/users/:id", (req, res) => {
    // ToDo -> edit the user with id 
    const id = (req.params.id);
    const userindex = users.findIndex(user => user.id === id);

    if (userindex === -1) {
        return res.status(404).json({ error: "user not found" });
    }

    // update the user with new fields from req.body
    users[userindex] = { ...users[userindex], ...req.body };
    // save updated user array to file :-> 
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
        if (err) {
            return res.status(500).json({ error: "Failed to update user" });
        }
        return res.json({ status: "success", updatedUser: users[userindex] });
    });
});

app.delete("/api/users/:id", (req, res) => {
    // ToDo -> delete the existing user with their id number :-> 
    return res.json({ status: "pending" });
});

app.listen(8080, () => {
    console.log("Server is listining at port no -> 8080");
});



