const ExifTool = require("../");

(async () => {
  const imagePath = "*someImagePath*.png";
  const setExample = await ExifTool.set(imagePath, { artist: "Ryan R." });
  const getExample = await ExifTool.get(imagePath, ["-h"]);

  console.log(setExample, getExample);
})();
