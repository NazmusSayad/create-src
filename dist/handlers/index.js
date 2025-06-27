"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlers = void 0;
const handle_next_1 = require("./handle-next");
exports.handlers = {
    next: handle_next_1.handleNext,
    async vite(cwd) {
        console.log('cwd:', cwd);
        console.log('Vite is not supported yet.');
    },
};
