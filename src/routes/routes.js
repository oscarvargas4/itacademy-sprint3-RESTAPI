const express = require("express");
const { setCache, auth } = require("../middlewares/middleware");
const router = express.Router();
const { upload } = require("../multer/multer");

// Applying middlewares for endpoint path: '/time'
router.use("/time", setCache);
router.use("/time", auth);

// Endpoints
router.get("/", (req, res) => {
  res.status(200).json({ "Home Page": "Sprint 4 - IT Academy" });
});

router.get("/user", (req, res) => {
  const port = process.env.PORT || 3000;
  res.status(200).json({
    name: "Oscar",
    age: 27,
    url: `http://localhost:${port}/user`,
  });
});

// !This router is for upload documents from the page (It has frontend)
router.get("/upload", (req, res) => {
  res.render("index");
});

router.post("/upload", upload.single("image"), (req, res, next) => {
  if (req.body == undefined) {
    res
      .status(400)
      .json({
        Error:
          "Image not selected or wrong image format (Only .png .jpg and .gif format allowed!)",
      });
  } else {
    res.status(201).json({ Status: "Image Uploaded" });
  }
});

router.post("/time", express.json(), (req, res) => {
  console.log("Input from requester: ", req.body);
  const addZero = (i) => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  };
  const date = new Date();
  const month = date.getMonth() + 1; // Format 0 - 11 months
  res.json({
    time: addZero(date.getHours()) + ":" + addZero(date.getMinutes()),
    date: date.getDate() + "-" + month + "-" + date.getFullYear(),
  });
});

module.exports = router;
