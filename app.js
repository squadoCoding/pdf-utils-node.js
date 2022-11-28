const { json } = require("express");
const express = require("express");
const exphbs = require("express-handlebars");
// I want to uninstall multer later
// const multer = require("multer");
// const upload = multer({ dest: "pdfs/" });
const mergePDFs = require("./mergePDF");

const app = express();

let myDate = new Date();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./static"));
app.use(express.static("./pdfs"));

const port = 8000;

app.get("/", (req, res) => {
  res.render("index");
});

// app.post("/merge", pdfs.array("pdfs", 10), (req, res, next) => {
//   console.log(req);
//   uniqueName = myDate.getTime();
//   req.files.forEach(async (file, index) => {
//     let fileName = await mergePDFs("/pdfs/" + file.filename);
//     if (index == req.files.length - 1) {
//       res.redirect("/" + fileName + ".pdf");
//     }
//   });
// });

app.listen(port, () => {
  console.log("Listening on http://localhost:8000");
});
