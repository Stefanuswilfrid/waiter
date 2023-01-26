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
exports.id = "pages/api/email";
exports.ids = ["pages/api/email"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/email.js":
/*!****************************!*\
  !*** ./pages/api/email.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.NEXT_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\nasync function handler(req, res) {\n    const { messageType , warmOrCold , personReceiving , messageReason  } = req.body;\n    const prompt = `write a ${warmOrCold} ${messageType} to the person for the specified reason below. \n    Make sure the message is tailored toward the person's experience & skillset . Person: ${personReceiving}\n    Reason : ${messageReason}. Return in HTML format, no img.`;\n    const response = await openai.createCompletion({\n        model: \"text-davinci-003\",\n        prompt: prompt,\n        temperature: 0.95,\n        max_tokens: 3000\n    });\n    const output = response.data.choices.pop();\n    return res.status(200).json({\n        data: output\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZW1haWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUNwQ0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxZQUFZO0FBQ2xDO0FBRUEsTUFBTUMsU0FBUyxJQUFJTiw2Q0FBU0EsQ0FBQ0M7QUFFaEIsZUFBZU0sUUFBUUMsR0FBRyxFQUFDQyxHQUFHLEVBQUM7SUFDMUMsTUFBTSxFQUFDQyxZQUFXLEVBQUNDLFdBQVUsRUFBQ0MsZ0JBQWUsRUFBQ0MsY0FBYSxFQUFDLEdBQUdMLElBQUlNLElBQUk7SUFDdkUsTUFBTUMsU0FBUyxDQUFDLFFBQVEsRUFBRUosV0FBVyxDQUFDLEVBQUVELFlBQVk7MEZBQ2tDLEVBQUVFLGdCQUFnQjthQUMvRixFQUFFQyxjQUFjLGdDQUFnQyxDQUFDO0lBRTFELE1BQU1HLFdBQVcsTUFBTVYsT0FBT1csZ0JBQWdCLENBQUM7UUFDN0NDLE9BQU87UUFDUEgsUUFBUUE7UUFDUkksYUFBYTtRQUNiQyxZQUFZO0lBRWQ7SUFFQSxNQUFNQyxTQUFTTCxTQUFTTSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRztJQUV4QyxPQUFPZixJQUFJZ0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFSixNQUFNRDtJQUFPO0FBQy9DLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93cmFpdC8uL3BhZ2VzL2FwaS9lbWFpbC5qcz84OTIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZ3VyYXRpb24sIE9wZW5BSUFwaSB9IGZyb20gXCJvcGVuYWlcIjtcblxuY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHtcbiAgICBhcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfQVBJX0tFWSxcbiAgfSk7XG5cbiAgY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEscmVzKXtcbiAgICBjb25zdCB7bWVzc2FnZVR5cGUsd2FybU9yQ29sZCxwZXJzb25SZWNlaXZpbmcsbWVzc2FnZVJlYXNvbn0gPSByZXEuYm9keSA7XG4gICAgY29uc3QgcHJvbXB0ID0gYHdyaXRlIGEgJHt3YXJtT3JDb2xkfSAke21lc3NhZ2VUeXBlfSB0byB0aGUgcGVyc29uIGZvciB0aGUgc3BlY2lmaWVkIHJlYXNvbiBiZWxvdy4gXG4gICAgTWFrZSBzdXJlIHRoZSBtZXNzYWdlIGlzIHRhaWxvcmVkIHRvd2FyZCB0aGUgcGVyc29uJ3MgZXhwZXJpZW5jZSAmIHNraWxsc2V0IC4gUGVyc29uOiAke3BlcnNvblJlY2VpdmluZ31cbiAgICBSZWFzb24gOiAke21lc3NhZ2VSZWFzb259LiBSZXR1cm4gaW4gSFRNTCBmb3JtYXQsIG5vIGltZy5gO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBvcGVuYWkuY3JlYXRlQ29tcGxldGlvbih7XG4gICAgICBtb2RlbDogXCJ0ZXh0LWRhdmluY2ktMDAzXCIsIFxuICAgICAgcHJvbXB0OiBwcm9tcHQsXG4gICAgICB0ZW1wZXJhdHVyZTogMC45NSAsXG4gICAgICBtYXhfdG9rZW5zOiAzMDAwLFxuXG4gICAgfSlcblxuICAgIGNvbnN0IG91dHB1dCA9IHJlc3BvbnNlLmRhdGEuY2hvaWNlcy5wb3AoKTtcbiBcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhOiBvdXRwdXQgfSlcbn0iXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9BUElfS0VZIiwib3BlbmFpIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1lc3NhZ2VUeXBlIiwid2FybU9yQ29sZCIsInBlcnNvblJlY2VpdmluZyIsIm1lc3NhZ2VSZWFzb24iLCJib2R5IiwicHJvbXB0IiwicmVzcG9uc2UiLCJjcmVhdGVDb21wbGV0aW9uIiwibW9kZWwiLCJ0ZW1wZXJhdHVyZSIsIm1heF90b2tlbnMiLCJvdXRwdXQiLCJkYXRhIiwiY2hvaWNlcyIsInBvcCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/email.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/email.js"));
module.exports = __webpack_exports__;

})();