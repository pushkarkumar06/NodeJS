// 404 Not Found middleware
module.exports = (req, res, next) => {
    res.status(404).json({ message: "Resource not found" });
};
