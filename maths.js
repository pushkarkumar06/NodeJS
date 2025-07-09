function add(a , b){
    return a + b;
}

function sub(a , b){
    return a - b;
}

// module.exports = {       // one way to exports multiple function
//     add ,
//     sub,
// };

// another way to exports something  by using arrow function
exports.add = (a , b) => a+b;
exports.sub = (a , b) => a-b;