const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

mongoose.connect(config.mongodb.url, config.mongodb.options).then(() => {
    console.log("Connected to Database...");
    const port = config.port || 3000;
    app.listen(port, () => {
        console.log(`Running on port ${port}`);
    })
}).catch((error) => {
    console.log(error);
})