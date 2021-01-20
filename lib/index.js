const { spawn } = require("child_process");

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
      const toolPath = process.cwd() + "/bin/exiftool";
      const proc = spawn(toolPath, params);

      proc.stdout.on("data", (data) => {
        res(data.toString());
      });
      proc.on("error", rej);
    });
  }
};
