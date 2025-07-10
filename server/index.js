// we are going to create our first http server :) 
// 1. firs we need to require the http (built in) package :)
const http = require("http");
const fs = require("fs");


// here we have created our own server 
const my_server = http.createServer((req , res) => {
    const log = `${Date.now()}: ${req.url} New request received \n`
    fs.appendFile("log.txt" , log , (err , data) => {
        switch (req.url){
            case "/":
                res.end("You are on the home page ");
                break;
            case "/about":
                res.end("Hey , Im pushkar kumar");
                break;
            default:
                res.end("404 , error occured");
        }
    })
    console.log("New request received :)");
});


// and here we have created our port number on which my server will wait for my request :) 
my_server.listen(3030 , () => {
    console.log("server is listining :)");
})
