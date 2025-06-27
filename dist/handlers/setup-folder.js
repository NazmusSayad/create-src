"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupFolder = setupFolder;
const prompts_1 = require("@inquirer/prompts");
const fs_1 = __importDefault(require("fs"));
const kleur_1 = __importDefault(require("kleur"));
const path_1 = __importDefault(require("path"));
async function setupFolder(cwd) {
    const shouldContinue = await (0, prompts_1.confirm)({
        message: 'Are you sure you want to continue with the folder setup?',
        default: true,
    });
    if (!shouldContinue) {
        throw new Error('Folder setup cancelled by the user.');
    }
    if (!fs_1.default.existsSync(cwd)) {
        console.log(kleur_1.default.dim(`${kleur_1.default.blue(cwd)} does not exist. Creating it...`));
        fs_1.default.mkdirSync(cwd, { recursive: true });
    }
    const existingFiles = fs_1.default.readdirSync(cwd);
    if (existingFiles.length > 0) {
        const shouldOverwrite = await (0, prompts_1.confirm)({
            message: 'The folder is not empty. Do you want to overwrite existing files?',
            default: false,
        });
        if (!shouldOverwrite) {
            throw new Error('Folder setup cancelled due to non-empty folder.');
        }
        console.log(kleur_1.default.dim(`${kleur_1.default.blue(cwd)} is not empty. Removing existing ${existingFiles.length > 1 ? 'files' : 'file'}...`));
        existingFiles.forEach((file) => {
            fs_1.default.rmSync(path_1.default.join(cwd, file), { recursive: true, force: true });
        });
    }
}
