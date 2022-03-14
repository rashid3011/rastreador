const app = require("./app");
const config = require("./config/config");

app.listen(config.port, () => {
    console.log(`Running on port ${config.port}`);
})