"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var baseURI = "https://api.aicevote.com";
exports.default = axios_1.default.create({
    baseURL: baseURI,
    headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
    },
    responseType: "json"
});
//# sourceMappingURL=axios.js.map