"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadRepo = downloadRepo;
const jszip_1 = __importDefault(require("jszip"));
async function downloadRepo(owner, repo, branch, onLoading, onComplete) {
    const res = await fetch(`https://github.com/${owner}/${repo}/archive/refs/heads/${branch}.zip`);
    if (!res.ok) {
        throw new Error(`Failed to download repository: ${res.status} ${res.statusText}`);
    }
    const contentLength = res.headers.get('content-length');
    const totalSize = contentLength ? parseInt(contentLength, 10) : null;
    if (!res.body) {
        throw new Error('Response body is null');
    }
    const reader = res.body.getReader();
    const chunks = [];
    let loadedSize = 0;
    while (true) {
        const { done, value } = await reader.read();
        if (done)
            break;
        chunks.push(value);
        loadedSize += value.length;
        onLoading(loadedSize, totalSize);
    }
    onComplete?.();
    const uint8Array = new Uint8Array(loadedSize);
    let offset = 0;
    for (const chunk of chunks) {
        uint8Array.set(chunk, offset);
        offset += chunk.length;
    }
    const zip = await jszip_1.default.loadAsync(uint8Array.buffer);
    return { zip, name: `${repo}-${branch}` };
}
