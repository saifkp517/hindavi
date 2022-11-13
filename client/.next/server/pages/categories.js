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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Container */ \"@mui/material/Container\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Grid */ \"@mui/material/Grid\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Link */ \"@mui/material/Link\");\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Paper */ \"@mui/material/Paper\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_4__]);\naxios__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\nconst Categories = ()=>{\n    const { 0: categories , 1: setCategories  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (async ()=>{\n            try {\n                const result = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"https://hindavi-pocketbase.herokuapp.com/api/collections/categories/records\").then((res)=>res.data);\n                setCategories(result.items);\n            } catch (error) {\n                console.log(error);\n            }\n        })();\n    }, []);\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_1___default()), {\n        maxWidth: \"xl\",\n        children: [\n            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {\n                variant: \"h6\",\n                sx: {\n                    marginY: 2\n                },\n                children: \"Categories\"\n            }, void 0, false, {\n                fileName: \"/home/saif/hindavi/client/pages/categories/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {\n                container: true,\n                spacing: 2,\n                sx: {\n                    marginBottom: 2\n                },\n                children: categories.map((el, i)=>/*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        item: true,\n                        md: 2,\n                        xs: 3,\n                        sx: {\n                            display: i > 3 ? {\n                                xs: \"none\",\n                                md: \"block\"\n                            } : null\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                sx: {\n                                    marginTop: 2,\n                                    marginBottom: 1\n                                },\n                                children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                    href: `/posteredit/${i}`,\n                                    underline: \"none\",\n                                    children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                        elevation: 2,\n                                        sx: {\n                                            width: {\n                                                md: \"6rem\",\n                                                xs: \"3.5rem\"\n                                            },\n                                            height: {\n                                                md: \"6rem\",\n                                                xs: \"3.5rem\"\n                                            },\n                                            borderRadius: \"50%\",\n                                            padding: {\n                                                md: 3,\n                                                xs: 2\n                                            },\n                                            marginX: \"auto\",\n                                            fill: \"white\",\n                                            backgroundColor: \"grey\"\n                                        },\n                                        children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: `https://hindavi-pocketbase.herokuapp.com/api/files/categories/${el.id}/${el.icon}`,\n                                            alt: \"category image\",\n                                            style: {\n                                                width: \"100%\",\n                                                height: \"100%\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/home/saif/hindavi/client/pages/categories/index.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/saif/hindavi/client/pages/categories/index.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/saif/hindavi/client/pages/categories/index.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/saif/hindavi/client/pages/categories/index.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                variant: \"body1\",\n                                component: \"p\",\n                                sx: {\n                                    textAlign: \"center\",\n                                    fontSize: {\n                                        md: \"1.2rem\",\n                                        xs: \"1rem\"\n                                    },\n                                    color: \"gray\"\n                                },\n                                children: el.title\n                            }, void 0, false, {\n                                fileName: \"/home/saif/hindavi/client/pages/categories/index.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, el.id, true, {\n                        fileName: \"/home/saif/hindavi/client/pages/categories/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/saif/hindavi/client/pages/categories/index.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/saif/hindavi/client/pages/categories/index.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Categories);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU07NkNBQUU7Ozs7O3FEQUN4Qzs7Ozs7aURBQ0k7Ozs7OzZDQUNIOzs7Ozt5Q0FDSDswQ0FDTix1RUFBQ3ZDLGlFQUFVO2dDQUNUcUIsT0FBTyxFQUFDLE9BQU87Z0NBQ2Y4QixTQUFTLEVBQUMsR0FBRztnQ0FDYjdCLEVBQUUsRUFBRTtvQ0FDRjhCLFNBQVMsRUFBRSxRQUFRO29DQUNuQkMsUUFBUSxFQUFFO3dDQUFFdEIsRUFBRSxFQUFFLFFBQVE7d0NBQUVDLEVBQUUsRUFBRSxNQUFNO3FDQUFFO29DQUN0Q3NCLEtBQUssRUFBRSxNQUFNO2lDQUNkOzBDQUVBMUIsRUFBRSxDQUFDMkIsS0FBSzs7Ozs7eUNBQ0U7O3VCQXZDUjNCLEVBQUUsQ0FBQ21CLEVBQUU7Ozs7aUNBd0NMLENBQ1A7Ozs7O3lCQUNHOzs7Ozs7aUJBQ0csQ0FDWjtDQUNIO0FBRUQsaUVBQWV2QyxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtd2l0aC10eXBlc2NyaXB0Ly4vcGFnZXMvY2F0ZWdvcmllcy9pbmRleC50c3g/MjVjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhdGVnb3J5VHlwZSB9IGZyb20gJy4uL2hvbWUnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvR3JpZCc7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCBMaW5rIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGluayc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9QYXBlcic7XG5cbmNvbnN0IENhdGVnb3JpZXM6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZTxDYXRlZ29yeVR5cGVbXT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zXG4gICAgICAgICAgLmdldChcbiAgICAgICAgICAgICdodHRwczovL2hpbmRhdmktcG9ja2V0YmFzZS5oZXJva3VhcHAuY29tL2FwaS9jb2xsZWN0aW9ucy9jYXRlZ29yaWVzL3JlY29yZHMnXG4gICAgICAgICAgKVxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5kYXRhKTtcbiAgICAgICAgc2V0Q2F0ZWdvcmllcyhyZXN1bHQuaXRlbXMpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgIH0pKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgbWF4V2lkdGg9J3hsJz5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2JyBzeD17eyBtYXJnaW5ZOiAyIH19PlxuICAgICAgICBDYXRlZ29yaWVzXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3g9e3sgbWFyZ2luQm90dG9tOiAyIH19PlxuICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGVsLCBpKSA9PiAoXG4gICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgIGtleT17ZWwuaWR9XG4gICAgICAgICAgICBtZD17Mn1cbiAgICAgICAgICAgIHhzPXszfVxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogaSA+IDMgPyB7IHhzOiAnbm9uZScsIG1kOiAnYmxvY2snIH0gOiBudWxsLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94IHN4PXt7IG1hcmdpblRvcDogMiwgbWFyZ2luQm90dG9tOiAxIH19PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3RlcmVkaXQvJHtpfWB9IHVuZGVybGluZT0nbm9uZSc+XG4gICAgICAgICAgICAgICAgPFBhcGVyXG4gICAgICAgICAgICAgICAgICBlbGV2YXRpb249ezJ9XG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogeyBtZDogJzZyZW0nLCB4czogJzMuNXJlbScgfSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB7IG1kOiAnNnJlbScsIHhzOiAnMy41cmVtJyB9LFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB7IG1kOiAzLCB4czogMiB9LFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5YOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyZXknLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vaGluZGF2aS1wb2NrZXRiYXNlLmhlcm9rdWFwcC5jb20vYXBpL2ZpbGVzL2NhdGVnb3JpZXMvJHtlbC5pZH0vJHtlbC5pY29ufWB9XG4gICAgICAgICAgICAgICAgICAgIGFsdD0nY2F0ZWdvcnkgaW1hZ2UnXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgdmFyaWFudD0nYm9keTEnXG4gICAgICAgICAgICAgIGNvbXBvbmVudD0ncCdcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiB7IG1kOiAnMS4ycmVtJywgeHM6ICcxcmVtJyB9LFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtlbC50aXRsZX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICkpfVxuICAgICAgPC9HcmlkPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcmllcztcbiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJUeXBvZ3JhcGh5IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkdyaWQiLCJCb3giLCJMaW5rIiwiUGFwZXIiLCJDYXRlZ29yaWVzIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJyZXN1bHQiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsIml0ZW1zIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWF4V2lkdGgiLCJ2YXJpYW50Iiwic3giLCJtYXJnaW5ZIiwiY29udGFpbmVyIiwic3BhY2luZyIsIm1hcmdpbkJvdHRvbSIsIm1hcCIsImVsIiwiaSIsIml0ZW0iLCJtZCIsInhzIiwiZGlzcGxheSIsIm1hcmdpblRvcCIsImhyZWYiLCJ1bmRlcmxpbmUiLCJlbGV2YXRpb24iLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJtYXJnaW5YIiwiZmlsbCIsImJhY2tncm91bmRDb2xvciIsImltZyIsInNyYyIsImlkIiwiaWNvbiIsImFsdCIsInN0eWxlIiwiY29tcG9uZW50IiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJjb2xvciIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/categories/index.tsx\n");

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