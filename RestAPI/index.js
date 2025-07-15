const express = require("express");
const userRouter = require("./routes/user");

const app = express();

const {connectMongoDb} = require("./connection");

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// connection with mongodb 
connectMongoDb("mongodb://127.0.0.1:27017/mydatabase");

// Custom logger middleware
const logger = require("./middleware/logger");
app.use(logger);

// Mount user routes at /user
app.use("/users", userRouter);   // this is the main routes :)

// 404 Not Found middleware (should be after all routes)
const notFound = require("./middleware/notFound");
app.use(notFound);

// Central error handler middleware (should be last)
const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

// Start the server
app.listen(8080, () => {
    console.log("Server is listening at port 8080");
});

