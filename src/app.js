const express = require("express");
const path = require("path");
const cors = require("cors");


const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../public/views"));

// Applying middleware CORS for all endpoints
app.use(cors());

app.use("/", require("./routes/routes"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
