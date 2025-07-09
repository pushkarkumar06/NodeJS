// 🔹 What is fs in Node.js?
// In Node.js, fs stands for File System. It is a built-in core module that allows you to interact with the file system on your machine.


const fs = require("fs");

// // sync 
// fs.writeFileSync("./test.txt" , "hello I am pushkar");
// // Async -> it need a call back function as well at the end
// fs.writeFile("./test.txt" , "hello I am pushkar" , (err) => {
//     if(err){
//         console.log("error writing file :-> " , err);
//     }
//     else{
//         console.log("file written successfully (async)");
//     }
// });

// const result = fs.readFileSync("./contacts.txt" , "utf-8");
// console.log("this is my detail -> " , result);

//ASYnc way to read the same file :)
// fs.readFile("./contacts.txt" , "utf-8" , (err , result) => {
//     if(err){
//         console.log("there is some error :(");
//     }
//     else{
//         console.log("this is my result" , result);
//     }
// });

// fs.appendFileSync("./test.txt" , new Date().getDate().toLocaleString());
// fs.appendFileSync("./test.txt" , `Hey bor iam pushkar kumar\n`);

