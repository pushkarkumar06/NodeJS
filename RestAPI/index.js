const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();

app.get("/api/users" , (req , res) => {
    return res.json(users);
});

app.get("/api/users/:id" , (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

app.post("/api/users" , (req , res) => {
    // ToDo -> create new users
    return res.json({status: "pending"});
});

app.patch("/api/users/:id" , (req , res) => {
    // ToDo -> edit the user with id 
    return res.json({status: "pending"});
});

app.delete("/api/users/:id" , (req , res) => {
    // ToDo -> delete the existing user with their id number :-> 
    return res.json({status: "pending"});
});

app.listen(8080 , () => {
    console.log("Server is listining at port no -> 8080");
});



