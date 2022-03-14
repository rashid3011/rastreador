const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    port: process.env.PORT,
    mongodb: {
        url: process.env.MONGODB_URL,
        options: {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
    }
}