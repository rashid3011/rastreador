const httpStatus = require("http-status");
const userServices = require("../services/userServices");

const signup = async(req, res) => {
    const voter = await userServices.createUser(req.body);
    res.status(httpStatus.OK).send({voter});
}

const login = async(req, res) => {
    res.status(httpStatus.OK).send("Test login API");
}

module.exports = {
    signup,
    login
}