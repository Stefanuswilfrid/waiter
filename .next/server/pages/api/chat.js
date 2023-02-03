"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/chat";
exports.ids = ["pages/api/chat"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/chat.js":
/*!***************************!*\
  !*** ./pages/api/chat.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.NEXT_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\nconst generateAction = async (req, res)=>{\n    const { userInput  } = req.body;\n    const baseCompletion = await openai.createCompletion({\n        model: \"text-davinci-003\",\n        prompt: userInput + \",  reply in english\",\n        temperature: 0.8,\n        max_tokens: 250\n    });\n    const basePromptOutput = baseCompletion.data.choices.pop();\n    res.status(200).json({\n        output: basePromptOutput\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateAction);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hhdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBa0Q7QUFFbEQsTUFBTUUsZ0JBQWdCLElBQUlGLGlEQUFhQSxDQUFDO0lBQ3RDRyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLFlBQVk7QUFDbEM7QUFDQSxNQUFNQyxTQUFTLElBQUlOLDZDQUFTQSxDQUFDQztBQUU3QixNQUFNTSxpQkFBaUIsT0FBT0MsS0FBS0MsTUFBUTtJQUN6QyxNQUFNLEVBQUVDLFVBQVMsRUFBRSxHQUFHRixJQUFJRyxJQUFJO0lBQzlCLE1BQU1DLGlCQUFpQixNQUFNTixPQUFPTyxnQkFBZ0IsQ0FBQztRQUNuREMsT0FBTztRQUNQQyxRQUFRTCxZQUFZO1FBQ3BCTSxhQUFhO1FBQ2JDLFlBQVk7SUFDZDtJQUVBLE1BQU1DLG1CQUFtQk4sZUFBZU8sSUFBSSxDQUFDQyxPQUFPLENBQUNDLEdBQUc7SUFFeERaLElBQUlhLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRUMsUUFBUU47SUFBaUI7QUFDbEQ7QUFFQSxpRUFBZVgsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dyYWl0Ly4vcGFnZXMvYXBpL2NoYXQuanM/MWM0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWd1cmF0aW9uLCBPcGVuQUlBcGkgfSBmcm9tIFwib3BlbmFpXCI7XG5cbmNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbih7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9BUElfS0VZLFxufSk7XG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJQXBpKGNvbmZpZ3VyYXRpb24pO1xuXG5jb25zdCBnZW5lcmF0ZUFjdGlvbiA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB7IHVzZXJJbnB1dCB9ID0gcmVxLmJvZHk7XG4gIGNvbnN0IGJhc2VDb21wbGV0aW9uID0gYXdhaXQgb3BlbmFpLmNyZWF0ZUNvbXBsZXRpb24oe1xuICAgIG1vZGVsOiBcInRleHQtZGF2aW5jaS0wMDNcIixcbiAgICBwcm9tcHQ6IHVzZXJJbnB1dCArIFwiLCAgcmVwbHkgaW4gZW5nbGlzaFwiLFxuICAgIHRlbXBlcmF0dXJlOiAwLjgsXG4gICAgbWF4X3Rva2VuczogMjUwLFxuICB9KTtcblxuICBjb25zdCBiYXNlUHJvbXB0T3V0cHV0ID0gYmFzZUNvbXBsZXRpb24uZGF0YS5jaG9pY2VzLnBvcCgpO1xuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgb3V0cHV0OiBiYXNlUHJvbXB0T3V0cHV0IH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVBY3Rpb247XG4iXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9BUElfS0VZIiwib3BlbmFpIiwiZ2VuZXJhdGVBY3Rpb24iLCJyZXEiLCJyZXMiLCJ1c2VySW5wdXQiLCJib2R5IiwiYmFzZUNvbXBsZXRpb24iLCJjcmVhdGVDb21wbGV0aW9uIiwibW9kZWwiLCJwcm9tcHQiLCJ0ZW1wZXJhdHVyZSIsIm1heF90b2tlbnMiLCJiYXNlUHJvbXB0T3V0cHV0IiwiZGF0YSIsImNob2ljZXMiLCJwb3AiLCJzdGF0dXMiLCJqc29uIiwib3V0cHV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/chat.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/chat.js"));
module.exports = __webpack_exports__;

})();