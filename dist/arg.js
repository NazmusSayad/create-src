"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const kleur_1 = __importDefault(require("kleur"));
const noarg_1 = require("noarg");
const path_1 = __importDefault(require("path"));
const handlers_1 = require("./handlers");
const finalize_folder_1 = require("./handlers/finalize-folder");
const setup_folder_1 = require("./handlers/setup-folder");
const BASE_DIR = process.cwd();
exports.app = noarg_1.NoArg.create('create-src', {
    arguments: [
        {
            name: 'Template',
            description: 'The template to use for creating the source code.',
            type: noarg_1.NoArg.string(...Object.keys(handlers_1.handlers)).ask('Please enter the template name:'),
        },
        {
            name: 'Project Name',
            description: 'The name of the project.',
            type: noarg_1.NoArg.string()
                .default(BASE_DIR)
                .ask('Please enter the project name:'),
        },
    ],
});
exports.app.on(async ([templateName, projectName]) => {
    console.log('');
    const folder = path_1.default.resolve(BASE_DIR, projectName);
    console.log(kleur_1.default.bold(kleur_1.default.yellow(`Creating a ${kleur_1.default.red(templateName)} project in folder: ${kleur_1.default.blue(folder)}`)));
    try {
        await (0, setup_folder_1.setupFolder)(folder);
        console.log('');
        const handler = handlers_1.handlers[templateName];
        if (!handler)
            throw new Error(`Template "${templateName}" is not supported.`);
        await handler(folder);
        console.log('');
        await (0, finalize_folder_1.finalizeFolder)(folder);
        console.log('');
        console.log(kleur_1.default.green(`Project created successfully in ${kleur_1.default.blue(folder)}!`));
    }
    catch (err) {
        console.log('');
        if (err instanceof Error) {
            console.error(kleur_1.default.red(`Error: ${err.message}`));
        }
        else {
            console.error(kleur_1.default.red('An unexpected error occurred'));
        }
    }
});
