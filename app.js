const express = require("express");
const connectDB = require("./config/db");
const userRoute = require("./routes/api/user.routes");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/users", userRoute);
