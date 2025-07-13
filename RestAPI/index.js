const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const { error } = require("console");

const app = express();

//middleware : plugin       (which put the data from frontend to body)
app.use(express.urlencoded({ extended: false }));       

app.use((req , res , next) => {
    console.log("hello from middleware 1");
    next();
});

app.use((req , res , next) => {
    console.log("Hello from middleware 2");
    return res.send("it is pushkar Kumar");
    // next();
});


app.get("/api/users", (req, res) => {
    return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

app.post("/api/users", (req, res) => {
    // ToDo -> create new users
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (error, data) => {
        return res.json({ status: "success", id: users.length + 1 });
    });
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



