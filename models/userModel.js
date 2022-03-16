const httpStatus = require("http-status");
const mongoose = require("mongoose");
const ApiError = require("../utils/ApiError");

const userSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if(!(value.match(/^R[0-9]{1,10}$/))) {
                const errorMessage = "User Id must starts with R along with some number as digits";
                throw new ApiError(httpStatus.NOT_ACCEPTABLE, errorMessage);
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
});

const User = mongoose.model("users", userSchema);

module.exports = User;