const bcrypt = require("bcrypt");
const httpStatus = require("http-status");
const User = require("../models/userModel");
const ApiError = require("../utils/ApiError");

const createUser = async(userBody) => {
    if(!userBody.userId){
        const errorMessage = "User Id should not be empty";
        throw new ApiError(httpStatus.BAD_REQUEST, errorMessage);
    }
    if(!userBody.password){
        const errorMessage = "User password should not be empty";
        throw new ApiError(httpStatus.BAD_REQUEST, errorMessage);
    }
    const existedUser = await getUserById(userBody.userId);
    if(existedUser) {
        const errorMessage = "User is already registered";
        throw new ApiError(httpStatus.NOT_ACCEPTABLE, errorMessage);
    }
    userBody.password = await bcrypt.hash(userBody.password, 10);
    const user = await User.create(userBody);
    return user;
}

const getUserById = async(userId) => {
    const user = await User.findOne({userId});
    return user;
}

module.exports = {
    createUser
}