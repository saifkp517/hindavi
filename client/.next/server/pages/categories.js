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
exports.id = "pages/categories";
exports.ids = ["pages/categories"];
exports.modules = {

/***/ "./pages/categories/index.tsx":
/*!************************************!*\
  !*** ./pages/categories/index.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Container */ \"@mui/material/Container\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Grid */ \"@mui/material/Grid\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Link */ \"@mui/material/Link\");\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Paper */ \"@mui/material/Paper\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_4__]);\naxios__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\nconst Categories = ()=>{\n    const { 0: categories , 1: setCategories  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (async ()=>{\n            try {\n                const result = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://127.0.0.1:8090/api/collections/categories/records\").then((res)=>res.data);\n                setCategories(result.items);\n            } catch (error) {\n                console.log(error);\n            }\n        })();\n    }, []);\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_1___default()), {\n        maxWidth: \"xl\",\n        children: [\n            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {\n                variant: \"h6\",\n                sx: {\n                    marginY: 2\n                },\n                children: \"Categories\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Github\\\\hindavi\\\\client\\\\pages\\\\categories\\\\index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {\n                container: true,\n                spacing: 2,\n                sx: {\n                    marginBottom: 2\n                },\n                children: categories.map((el, i)=>/*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        item: true,\n                        md: 2,\n                        xs: 3,\n                        sx: {\n                            display: i > 3 ? {\n                                xs: \"none\",\n                                md: \"block\"\n                            } : null\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                sx: {\n                                    marginTop: 2,\n                                    marginBottom: 1\n                                },\n                                children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                    href: `/posteredit/${i}`,\n                                    underline: \"none\",\n                                    children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                        elevation: 2,\n                                        sx: {\n                                            width: {\n                                                md: \"6rem\",\n                                                xs: \"3.5rem\"\n                                            },\n                                            height: {\n                                                md: \"6rem\",\n                                                xs: \"3.5rem\"\n                                            },\n                                            borderRadius: \"50%\",\n                                            padding: {\n                                                md: 3,\n                                                xs: 2\n                                            },\n                                            marginX: \"auto\",\n                                            fill: \"white\",\n                                            backgroundColor: \"grey\"\n                                        },\n                                        children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: `http://127.0.0.1:8090/api/files/categories/${el.id}/${el.icon}`,\n                                            alt: \"category image\",\n                                            style: {\n                                                width: \"100%\",\n                                                height: \"100%\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Github\\\\hindavi\\\\client\\\\pages\\\\categories\\\\index.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Github\\\\hindavi\\\\client\\\\pages\\\\categories\\\\index.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Github\\\\hindavi\\\\client\\\\pages\\\\categories\\\\index.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Github\\\\hindavi\\\\client\\\\pages\\\\categories\\\\index.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                variant: \"body1\",\n                                component: \"p\",\n                                sx: {\n                                    textAlign: \"center\",\n                                    fontSize: {\n                                        md: \"1.2rem\",\n                                        xs: \"1rem\"\n                                    },\n                                    color: \"gray\"\n                                },\n                                children: el.title\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Github\\\\hindavi\\\\client\\\\pages\\\\categories\\\\index.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, el.id, true, {\n                        fileName: \"D:\\\\Github\\\\hindavi\\\\client\\\\pages\\\\categories\\\\index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\Github\\\\hindavi\\\\client\\\\pages\\\\categories\\\\index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Github\\\\hindavi\\\\client\\\\pages\\\\categories\\\\index.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Categories);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU07NkNBQUU7Ozs7O3FEQUN4Qzs7Ozs7aURBQ0k7Ozs7OzZDQUNIOzs7Ozt5Q0FDSDswQ0FDTix1RUFBQ3ZDLGlFQUFVO2dDQUNUcUIsT0FBTyxFQUFDLE9BQU87Z0NBQ2Y4QixTQUFTLEVBQUMsR0FBRztnQ0FDYjdCLEVBQUUsRUFBRTtvQ0FDRjhCLFNBQVMsRUFBRSxRQUFRO29DQUNuQkMsUUFBUSxFQUFFO3dDQUFFdEIsRUFBRSxFQUFFLFFBQVE7d0NBQUVDLEVBQUUsRUFBRSxNQUFNO3FDQUFFO29DQUN0Q3NCLEtBQUssRUFBRSxNQUFNO2lDQUNkOzBDQUVBMUIsRUFBRSxDQUFDMkIsS0FBSzs7Ozs7eUNBQ0U7O3VCQXZDUjNCLEVBQUUsQ0FBQ21CLEVBQUU7Ozs7aUNBd0NMLENBQ1A7Ozs7O3lCQUNHOzs7Ozs7aUJBQ0csQ0FDWjtDQUNIO0FBRUQsaUVBQWV2QyxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtd2l0aC10eXBlc2NyaXB0Ly4vcGFnZXMvY2F0ZWdvcmllcy9pbmRleC50c3g/MjVjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2F0ZWdvcnlUeXBlIH0gZnJvbSAnLi4vaG9tZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvR3JpZCc7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbXVpL21hdGVyaWFsL0xpbmsnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9QYXBlcic7XHJcblxyXG5jb25zdCBDYXRlZ29yaWVzOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZTxDYXRlZ29yeVR5cGVbXT4oW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvc1xyXG4gICAgICAgICAgLmdldCgnaHR0cDovLzEyNy4wLjAuMTo4MDkwL2FwaS9jb2xsZWN0aW9ucy9jYXRlZ29yaWVzL3JlY29yZHMnKVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpO1xyXG4gICAgICAgIHNldENhdGVnb3JpZXMocmVzdWx0Lml0ZW1zKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH0pKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD0neGwnPlxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNicgc3g9e3sgbWFyZ2luWTogMiB9fT5cclxuICAgICAgICBDYXRlZ29yaWVzXHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN4PXt7IG1hcmdpbkJvdHRvbTogMiB9fT5cclxuICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGVsLCBpKSA9PiAoXHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgIGtleT17ZWwuaWR9XHJcbiAgICAgICAgICAgIG1kPXsyfVxyXG4gICAgICAgICAgICB4cz17M31cclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpID4gMyA/IHsgeHM6ICdub25lJywgbWQ6ICdibG9jaycgfSA6IG51bGwsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3sgbWFyZ2luVG9wOiAyLCBtYXJnaW5Cb3R0b206IDEgfX0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0ZXJlZGl0LyR7aX1gfSB1bmRlcmxpbmU9J25vbmUnPlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyXHJcbiAgICAgICAgICAgICAgICAgIGVsZXZhdGlvbj17Mn1cclxuICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogeyBtZDogJzZyZW0nLCB4czogJzMuNXJlbScgfSxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHsgbWQ6ICc2cmVtJywgeHM6ICczLjVyZW0nIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB7IG1kOiAzLCB4czogMiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblg6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyZXknLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cDovLzEyNy4wLjAuMTo4MDkwL2FwaS9maWxlcy9jYXRlZ29yaWVzLyR7ZWwuaWR9LyR7ZWwuaWNvbn1gfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD0nY2F0ZWdvcnkgaW1hZ2UnXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICB2YXJpYW50PSdib2R5MSdcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9J3AnXHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogeyBtZDogJzEuMnJlbScsIHhzOiAnMXJlbScgfSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtlbC50aXRsZX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcmllcztcclxuIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsIlR5cG9ncmFwaHkiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiR3JpZCIsIkJveCIsIkxpbmsiLCJQYXBlciIsIkNhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsInJlc3VsdCIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiaXRlbXMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtYXhXaWR0aCIsInZhcmlhbnQiLCJzeCIsIm1hcmdpblkiLCJjb250YWluZXIiLCJzcGFjaW5nIiwibWFyZ2luQm90dG9tIiwibWFwIiwiZWwiLCJpIiwiaXRlbSIsIm1kIiwieHMiLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwiaHJlZiIsInVuZGVybGluZSIsImVsZXZhdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsIm1hcmdpblgiLCJmaWxsIiwiYmFja2dyb3VuZENvbG9yIiwiaW1nIiwic3JjIiwiaWQiLCJpY29uIiwiYWx0Iiwic3R5bGUiLCJjb21wb25lbnQiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImNvbG9yIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/categories/index.tsx\n");

/***/ }),

/***/ "@emotion/react/jsx-dev-runtime":
/*!*************************************************!*\
  !*** external "@emotion/react/jsx-dev-runtime" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@emotion/react/jsx-dev-runtime");

/***/ }),

/***/ "@mui/material/Box":
/*!************************************!*\
  !*** external "@mui/material/Box" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ "@mui/material/Container":
/*!******************************************!*\
  !*** external "@mui/material/Container" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Container");

/***/ }),

/***/ "@mui/material/Grid":
/*!*************************************!*\
  !*** external "@mui/material/Grid" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ "@mui/material/Link":
/*!*************************************!*\
  !*** external "@mui/material/Link" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Link");

/***/ }),

/***/ "@mui/material/Paper":
/*!**************************************!*\
  !*** external "@mui/material/Paper" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ "@mui/material/Typography":
/*!*******************************************!*\
  !*** external "@mui/material/Typography" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/categories/index.tsx"));
module.exports = __webpack_exports__;

})();