const PDFMerger = require("pdf-merger-js");
const path = require("path");

const mergePDFs = async (pdf) => {
  const merger = new PDFMerger();

  let uniqueName = new Date();
  uniqueName = uniqueName.getTime();

  await merger.add(path.join(__dirname, pdf));
  await merger.save("pdfs/merged" + uniqueName + ".pdf"); //save under given name and reset the internal document
  return `merged${uniqueName}`;
};

module.exports = mergePDFs;
