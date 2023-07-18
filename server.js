const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const sequelize = require("./config/database");
require('dotenv').config({path: path.resolve(__dirname, './.env')});

const app = express();

app.use('/', (req, res) => {
    res.send("Backend Connected");
});

sequelize.sync()
.then(() => {
console.log("DB Successfully synced");
})
.catch((err) => {
    console.log(`DB failed to sync. Err: ${err.message}`);
})

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
