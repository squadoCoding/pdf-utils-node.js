const express = require("express");
const exphbs = require("express-handlebars");
const multer = require("multer");
const mergePDFs = require("./mergePDF");

const app = express();
const upload = multer({ dest: "pdfs/" });

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.use(express.static("./pdfs"));

const port = 8000;

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/merge", upload.array("pdfs", 10), (req, res, next) => {
  req.files.forEach(async (file, index) => {
    await mergePDFs("/pdfs/" + file.filename, "merged" + (uniqueName + 1));
    if (index == req.files.length - 1) {
      let uniqueName = new Date();
      uniqueName = uniqueName.getTime();
      res.redirect("/merged" + uniqueName);
      uniqueName;
    }
  });
});

app.listen(port, () => {
  console.log("Listening on http://localhost:8000");
});
