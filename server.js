require("dotenv").config();
const express = require("express");
const loaders = require("./loaders");

const app = express();
app.use(express.json());

loaders(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));