const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
app.use(express.urlencoded({ extended: true }));
const routes = require("./routes/route");
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use("/api/v1", routes);
require("./config/database").connectToDatabase();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
