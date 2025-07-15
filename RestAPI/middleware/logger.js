// Logger middleware example
module.exports = (req, res, next) => {
    console.log("Hello from middleware 1");
    next();
};
