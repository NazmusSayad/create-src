"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finalizeFolder = finalizeFolder;
const shell_1 = require("../helpers/shell");
async function finalizeFolder(cwd) {
    await (0, shell_1.execShellCommand)(cwd, 'git', 'init');
    await (0, shell_1.execShellCommand)(cwd, 'npm', 'install');
}
