"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[userUrl]/layout",{

/***/ "(app-pages-browser)/./app/[userUrl]/layout.tsx":
/*!**********************************!*\
  !*** ./app/[userUrl]/layout.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Navbar */ \"(app-pages-browser)/./components/Navbar.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Footer */ \"(app-pages-browser)/./components/Footer.tsx\");\n/* harmony import */ var _contexts_userContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/userContext */ \"(app-pages-browser)/./contexts/userContext.ts\");\n/* harmony import */ var _hooks_useFecth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useFecth */ \"(app-pages-browser)/./hooks/useFecth.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction UserLayout(param) {\n    let { children, params } = param;\n    _s();\n    // @ts-ignore \n    const { userInfo, setUserInfo } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_userContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    const { data } = (0,_hooks_useFecth__WEBPACK_IMPORTED_MODULE_5__.useFetch)(params.userUrl);\n    setUserInfo(data === null || data === void 0 ? void 0 : data.data[0]);\n    console.log(data === null || data === void 0 ? void 0 : data.data[0]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                routeBase: params.userUrl\n            }, void 0, false, {\n                fileName: \"/home/paulo/sft-v2/app/[userUrl]/layout.tsx\",\n                lineNumber: 23,\n                columnNumber: 11\n            }, this),\n            children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                email: userInfo === null || userInfo === void 0 ? void 0 : userInfo.MG_Email,\n                whatsapp: userInfo.Phone,\n                instagram: userInfo === null || userInfo === void 0 ? void 0 : userInfo.Instagram_URL\n            }, void 0, false, {\n                fileName: \"/home/paulo/sft-v2/app/[userUrl]/layout.tsx\",\n                lineNumber: 25,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/paulo/sft-v2/app/[userUrl]/layout.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n_s(UserLayout, \"L++1yqsfnq+yGCOhFsqQu+PCVTg=\", false, function() {\n    return [\n        _hooks_useFecth__WEBPACK_IMPORTED_MODULE_5__.useFetch\n    ];\n});\n_c = UserLayout;\nvar _c;\n$RefreshReg$(_c, \"UserLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bdXNlclVybF0vbGF5b3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBWU1BO0FBWG1DO0FBRUQ7QUFDQTtBQUNRO0FBQ0w7QUFPNUIsU0FBU08sV0FBVyxLQUErRDtRQUEvRCxFQUFDQyxRQUFRLEVBQUVDLE1BQU0sRUFBOEMsR0FBL0Q7O0lBQ2pDLGNBQWM7SUFDZCxNQUFNLEVBQUVDLFFBQVEsRUFBR0MsV0FBVyxFQUFDLEdBQUdULGlEQUFVQSxDQUFDRyw2REFBV0E7SUFDeEQsTUFBTSxFQUFDTyxJQUFJLEVBQUMsR0FBR04seURBQVFBLENBQUNHLE9BQU9JLE9BQU87SUFDdENGLFlBQVlDLGlCQUFBQSwyQkFBQUEsS0FBTUEsSUFBSSxDQUFDLEVBQUU7SUFDekJFLFFBQVFDLEdBQUcsQ0FBQ0gsaUJBQUFBLDJCQUFBQSxLQUFNQSxJQUFJLENBQUMsRUFBRTtJQUN2QixxQkFFSSw4REFBQ0k7OzBCQUNDLDhEQUFDYiwwREFBTUE7Z0JBQUNjLFdBQVdSLE9BQU9JLE9BQU87Ozs7OztZQUM5Qkw7MEJBQ0gsOERBQUNKLDBEQUFNQTtnQkFBQ2MsS0FBSyxFQUFFUixxQkFBQUEsK0JBQUFBLFNBQVVTLFFBQVE7Z0JBQUVDLFVBQVVWLFNBQVNXLEtBQUs7Z0JBQUVDLFNBQVMsRUFBRVoscUJBQUFBLCtCQUFBQSxTQUFVYSxhQUFhOzs7Ozs7Ozs7Ozs7QUFHdkc7R0Fkc0JoQjs7UUFHUEQscURBQVFBOzs7S0FIREMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1t1c2VyVXJsXS9sYXlvdXQudHN4PzY4NDYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IE1vbnRzZXJyYXQgfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiQC9jb21wb25lbnRzL05hdmJhclwiXG5pbXBvcnQgRm9vdGVyIGZyb20gXCJAL2NvbXBvbmVudHMvRm9vdGVyXCJcbmltcG9ydCB1c2VyQ29udGV4dCBmcm9tIFwiQC9jb250ZXh0cy91c2VyQ29udGV4dFwiXG5pbXBvcnQgeyB1c2VGZXRjaCB9IGZyb20gJ0AvaG9va3MvdXNlRmVjdGgnXG5pbXBvcnQgeyBQYXJhbXMgfSBmcm9tIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXJcIlxuXG5cblxuXG5jb25zdCBtb250c2VycmF0ID0gTW9udHNlcnJhdCh7IHN1YnNldHM6IFsnbGF0aW4nXSB9KVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckxheW91dCh7Y2hpbGRyZW4sIHBhcmFtc306IHtjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlLCBwYXJhbXM6IFBhcmFtc30pIHtcbiAgLy8gQHRzLWlnbm9yZSBcbiAgY29uc3QgeyB1c2VySW5mbyAsIHNldFVzZXJJbmZvfSA9IHVzZUNvbnRleHQodXNlckNvbnRleHQpXG4gIGNvbnN0IHtkYXRhfSA9IHVzZUZldGNoKHBhcmFtcy51c2VyVXJsKVxuICBzZXRVc2VySW5mbyhkYXRhPy5kYXRhWzBdKVxuICBjb25zb2xlLmxvZyhkYXRhPy5kYXRhWzBdKVxuICAgIHJldHVybiAoXG4gICAgIFxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8TmF2YmFyIHJvdXRlQmFzZT17cGFyYW1zLnVzZXJVcmx9Lz5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8Rm9vdGVyIGVtYWlsPXt1c2VySW5mbz8uTUdfRW1haWx9IHdoYXRzYXBwPXt1c2VySW5mby5QaG9uZX0gaW5zdGFncmFtPXt1c2VySW5mbz8uSW5zdGFncmFtX1VSTH0vPlxuICAgICAgICA8L2JvZHk+XG4gICAgKVxuICB9XG4gICJdLCJuYW1lcyI6WyJtb250c2VycmF0IiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwiTmF2YmFyIiwiRm9vdGVyIiwidXNlckNvbnRleHQiLCJ1c2VGZXRjaCIsIlVzZXJMYXlvdXQiLCJjaGlsZHJlbiIsInBhcmFtcyIsInVzZXJJbmZvIiwic2V0VXNlckluZm8iLCJkYXRhIiwidXNlclVybCIsImNvbnNvbGUiLCJsb2ciLCJib2R5Iiwicm91dGVCYXNlIiwiZW1haWwiLCJNR19FbWFpbCIsIndoYXRzYXBwIiwiUGhvbmUiLCJpbnN0YWdyYW0iLCJJbnN0YWdyYW1fVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[userUrl]/layout.tsx\n"));

/***/ })

});