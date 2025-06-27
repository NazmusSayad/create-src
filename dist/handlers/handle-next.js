"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleNext = handleNext;
const prompts_1 = require("@inquirer/prompts");
const fs_1 = __importDefault(require("fs"));
const kleur_1 = __importDefault(require("kleur"));
const path_1 = __importDefault(require("path"));
const get_template_1 = require("../download/get-template");
const shell_1 = require("../helpers/shell");
async function handleNext(cwd) {
    const files = await (0, get_template_1.getTemplate)('next');
    if (!files.length) {
        throw new Error('Failed to download Next.js template files.');
    }
    for (const file of files) {
        const filePath = path_1.default.join(cwd, file.path);
        const dir = path_1.default.dirname(filePath);
        if (!fs_1.default.existsSync(dir)) {
            fs_1.default.mkdirSync(dir, { recursive: true });
        }
        const buffer = Buffer.from(await file.blob.arrayBuffer());
        fs_1.default.writeFileSync(filePath, buffer);
    }
    console.log('');
    await installShadcnUI(cwd);
}
async function installShadcnUI(cwd) {
    const shouldInstallShadcn = await (0, prompts_1.confirm)({
        message: 'Do you want to install shadcn/ui with all components?',
        default: true,
    });
    if (!shouldInstallShadcn)
        return;
    console.log(kleur_1.default.blue('Installing shadcn/ui...'));
    try {
        await (0, shell_1.execShellCommand)(cwd, 'npx', 'shadcn@latest', 'init', '--force');
        console.log(kleur_1.default.blue('Adding all shadcn/ui components...'));
        await (0, shell_1.execShellCommand)(cwd, 'npx', 'shadcn@latest', 'add', '--all');
        console.log(kleur_1.default.green('✅ shadcn/ui installed successfully with all components!'));
    }
    catch (error) {
        console.warn(kleur_1.default.yellow('⚠️  Failed to install shadcn/ui. You can install it manually later.'));
        if (error instanceof Error) {
            console.warn(kleur_1.default.dim(error.message));
        }
    }
}
