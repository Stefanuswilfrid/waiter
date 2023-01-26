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
exports.id = "pages/api/recipe";
exports.ids = ["pages/api/recipe"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/recipe.js":
/*!*****************************!*\
  !*** ./pages/api/recipe.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.NEXT_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\nasync function handler(req, res) {\n    const { ingredients , duration , isOven , isBlender , isMicrowave , isStove  } = req.body;\n    const prompt = `write a complete meal recipe including cooking steps, meal name and ingredients . \n    For a chef with these ingredients : ${ingredients} , duration should be less than ${duration} minutes,\n    and achievable using these  cooking tools :  ${isOven ? \"oven,\" : \"\"} ${isBlender ? \"blender,\" : \"\"} \n    ${isMicrowave ? \"microwave,\" : \"\"} ${isStove ? \"stove\" : \"\"}. return in HTML format `;\n    const response = await openai.createCompletion({\n        model: \"text-davinci-003\",\n        prompt: prompt,\n        temperature: 0.95,\n        max_tokens: 3000\n    });\n    const output = response.data.choices.pop();\n    return res.status(200).json({\n        data: output\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVjaXBlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrRDtBQUVsRCxNQUFNRSxnQkFBZ0IsSUFBSUYsaURBQWFBLENBQUM7SUFDcENHLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWTtBQUNsQztBQUVBLE1BQU1DLFNBQVMsSUFBSU4sNkNBQVNBLENBQUNDO0FBRWhCLGVBQWVNLFFBQVFDLEdBQUcsRUFBQ0MsR0FBRyxFQUFDO0lBQzFDLE1BQU0sRUFBQ0MsWUFBVyxFQUFDQyxTQUFRLEVBQUNDLE9BQU0sRUFBQ0MsVUFBUyxFQUFDQyxZQUFXLEVBQUNDLFFBQU8sRUFBQyxHQUFHUCxJQUFJUSxJQUFJO0lBRTVFLE1BQU1DLFNBQVMsQ0FBQzt3Q0FDb0IsRUFBRVAsWUFBWSxnQ0FBZ0MsRUFBRUMsU0FBUztpREFDaEQsRUFBRUMsU0FBUyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUVDLFlBQVksYUFBYSxFQUFFLENBQUM7SUFDcEcsRUFBRUMsY0FBYyxlQUFlLEVBQUUsQ0FBQyxDQUFDLEVBQUVDLFVBQVUsVUFBVSxFQUFFLENBQUMsd0JBQXdCLENBQUM7SUFHckYsTUFBTUcsV0FBVyxNQUFNWixPQUFPYSxnQkFBZ0IsQ0FBQztRQUM3Q0MsT0FBTztRQUNQSCxRQUFRQTtRQUNSSSxhQUFhO1FBQ2JDLFlBQVk7SUFFZDtJQUVBLE1BQU1DLFNBQVNMLFNBQVNNLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHO0lBRXhDLE9BQU9qQixJQUFJa0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFSixNQUFNRDtJQUFPO0FBQy9DLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93cmFpdC8uL3BhZ2VzL2FwaS9yZWNpcGUuanM/NWZmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWd1cmF0aW9uLCBPcGVuQUlBcGkgfSBmcm9tIFwib3BlbmFpXCI7XG5cbmNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbih7XG4gICAgYXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX0FQSV9LRVksXG4gIH0pO1xuXG4gIGNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUlBcGkoY29uZmlndXJhdGlvbik7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLHJlcyl7XG4gICAgY29uc3Qge2luZ3JlZGllbnRzLGR1cmF0aW9uLGlzT3Zlbixpc0JsZW5kZXIsaXNNaWNyb3dhdmUsaXNTdG92ZX0gPSByZXEuYm9keSA7XG4gICAgXG4gICAgY29uc3QgcHJvbXB0ID0gYHdyaXRlIGEgY29tcGxldGUgbWVhbCByZWNpcGUgaW5jbHVkaW5nIGNvb2tpbmcgc3RlcHMsIG1lYWwgbmFtZSBhbmQgaW5ncmVkaWVudHMgLiBcbiAgICBGb3IgYSBjaGVmIHdpdGggdGhlc2UgaW5ncmVkaWVudHMgOiAke2luZ3JlZGllbnRzfSAsIGR1cmF0aW9uIHNob3VsZCBiZSBsZXNzIHRoYW4gJHtkdXJhdGlvbn0gbWludXRlcyxcbiAgICBhbmQgYWNoaWV2YWJsZSB1c2luZyB0aGVzZSAgY29va2luZyB0b29scyA6ICAke2lzT3ZlbiA/IFwib3ZlbixcIiA6IFwiXCJ9ICR7aXNCbGVuZGVyID8gXCJibGVuZGVyLFwiIDogXCJcIn0gXG4gICAgJHtpc01pY3Jvd2F2ZSA/IFwibWljcm93YXZlLFwiIDogXCJcIn0gJHtpc1N0b3ZlID8gXCJzdG92ZVwiIDogXCJcIn0uIHJldHVybiBpbiBIVE1MIGZvcm1hdCBgO1xuXG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG9wZW5haS5jcmVhdGVDb21wbGV0aW9uKHtcbiAgICAgIG1vZGVsOiBcInRleHQtZGF2aW5jaS0wMDNcIiwgXG4gICAgICBwcm9tcHQ6IHByb21wdCxcbiAgICAgIHRlbXBlcmF0dXJlOiAwLjk1ICxcbiAgICAgIG1heF90b2tlbnM6IDMwMDAsXG5cbiAgICB9KVxuXG4gICAgY29uc3Qgb3V0cHV0ID0gcmVzcG9uc2UuZGF0YS5jaG9pY2VzLnBvcCgpO1xuIFxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IG91dHB1dCB9KVxufSJdLCJuYW1lcyI6WyJDb25maWd1cmF0aW9uIiwiT3BlbkFJQXBpIiwiY29uZmlndXJhdGlvbiIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX0FQSV9LRVkiLCJvcGVuYWkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiaW5ncmVkaWVudHMiLCJkdXJhdGlvbiIsImlzT3ZlbiIsImlzQmxlbmRlciIsImlzTWljcm93YXZlIiwiaXNTdG92ZSIsImJvZHkiLCJwcm9tcHQiLCJyZXNwb25zZSIsImNyZWF0ZUNvbXBsZXRpb24iLCJtb2RlbCIsInRlbXBlcmF0dXJlIiwibWF4X3Rva2VucyIsIm91dHB1dCIsImRhdGEiLCJjaG9pY2VzIiwicG9wIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/recipe.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/recipe.js"));
module.exports = __webpack_exports__;

})();