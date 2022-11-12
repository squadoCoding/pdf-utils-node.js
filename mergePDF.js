const PDFMerger = require("pdf-merger-js");
const path = require("path");

const merger = new PDFMerger();

const mergePDFs = async (pdf, filename) => {
  await merger.add(path.join(__dirname, pdf));
  await merger.save("pdfs/" + filename); //save under given name and reset the internal document
};

module.exports = mergePDFs;
