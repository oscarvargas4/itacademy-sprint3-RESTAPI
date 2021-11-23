const express = require("express");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
      const fileExtension = path.extname(file.originalname);
    if (
        fileExtension == ".png" ||
        fileExtension == ".jpg" ||
        fileExtension == ".gif"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png .jpg and .gif format allowed!"));
    }
  }
});

const app = express();
const port = 3000;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Setting middleware for Cache control
let setCache = (req, res, next) => {
    if (req.method == 'POST') {
        res.set("Cache-control", "no-cache");
    } else {
        res.set("Cache-control", "no-store");
    }

    next();
}

// Applying middleware
app.use(setCache);

// Endpoints
app.get("/", (req, res) => {
  res.send("Sprint 4 - IT Academy");
});

app.get("/user", (req, res) => {
  res.json({
    name: "Oscar",
    age: 27,
    url: `http://localhost:${port}/user`,
  });
});

app.get("/upload", (req, res) => {
  res.render("index");
});

app.post("/upload", upload.single("image"), (req, res, next) => {
  res.send("Image Uploaded");
});

app.post("/time", (req, res) => {
    const addZero = (i) => {
        if (i < 10) {
            i = "0" + i;
        }
        return i
    }
    const date = new Date();
    const month = date.getMonth() + 1 // Format 0 - 11 months
    res.json({
        time: addZero(date.getHours()) + ":" + addZero(date.getMinutes()),
        date: date.getDate() + "-" + month + "-" + date.getFullYear()
    });    
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
