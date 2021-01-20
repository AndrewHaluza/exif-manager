const { spawn } = require("child_process");
const {resolve} = require('path');

module.exports = class {
  static async set(path, data, flags) {
    return this.prototype._bash(path, data, flags);
  }

  static async get(path, flags) {
    return this.prototype._bash(path, {}, flags);
  }

  _objToArray(object) {
    return Object.keys(object).map((key) => `-${key}=${object[key]}`);
  }

  _bash(path, data = {}, flags = []) {
    return new Promise((res, rej) => {
      const params = [...flags, path, ...this._objToArray(data)];
      const proc = spawn(resolve('node_modules/exif-manager/bin/exiftool'), params);

      proc.stdout.on("data", (data) => {
        res(data.toString());
      });
      proc.on("error", rej);
    });
  }
};
