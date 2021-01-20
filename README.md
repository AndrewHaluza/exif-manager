# [exif-manager](https://github.com/AndrewHaluza/node-exiftool)

A NodeJs wrapper around [https://exiftool.org/](https://exiftool.org/) - Read, Write and Edit Meta Information!

## OS dependency
Compatible only with Unix, other OS are not supported
## Install

npm install exif-manager

There full exiftool source code as a part of module, so no needed additional installation.
## Usage

```js
const ExifTool = require('exif-manager');

/**
 * @method .set()
 * @param {string} path Absolute path to file
 * @param {object} data Data object to modify
 * @param {array} [flags] Flags parameters
 */
const setExample = await ExifTool.set('/dir/image.png', { artist: "Ryan R." });
```

```js
const ExifTool = require("exif-manager");

/**
 * @method .get()
 * @param {string} path Absolute path to file
 * @param {array} [flags] Flags parameters
 */
const getExample = await ExifTool.get("/dir/image.png", ["-h"]);
```

## ExifTool docs
- [Home page](https://exiftool.org/)
- [Exiftool examples](https://exiftool.org/exiftool_pod.html#READING-EXAMPLES)
- [Example Output](https://exiftool.org/#output)
- [ExifTool Tag Names](https://exiftool.org/TagNames/index.html)
- [Supported File Types](https://exiftool.org/#supported)
- [Improving Performance](https://exiftool.org/#performance)

