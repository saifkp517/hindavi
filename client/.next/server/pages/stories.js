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
exports.id = "pages/stories";
exports.ids = ["pages/stories"];
exports.modules = {

/***/ "./pages/stories.tsx":
/*!***************************!*\
  !*** ./pages/stories.tsx ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Container */ \"@mui/material/Container\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Grid */ \"@mui/material/Grid\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Link */ \"@mui/material/Link\");\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Card */ \"@mui/material/Card\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/CardMedia */ \"@mui/material/CardMedia\");\n/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_4__]);\naxios__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\nconst StoriesPage = ()=>{\n    const { 0: posters , 1: setPosters  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (async ()=>{\n            const result = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://52.23.195.42:8000/api/collections/stories/records\").then((res)=>res.data);\n            const poster = await getPosters(result.items);\n            setPosters(poster);\n        })();\n    }, []);\n    const getPosters = async (posterArr)=>{\n        const posters = await Promise.all(posterArr.map(async (el)=>{\n            try {\n                const posterData = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(`http://52.23.195.42:8000/api/collections/posters/records/${el.posterId}`).then((res)=>res.data);\n                return posterData;\n            } catch (error) {\n                console.log(error.message);\n            }\n        }));\n        return posters;\n    };\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_1___default()), {\n        maxWidth: \"xl\",\n        children: [\n            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {\n                variant: \"h6\",\n                sx: {\n                    marginY: 2\n                },\n                children: \"Stories\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Github\\\\hindavi\\\\client\\\\pages\\\\stories.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {\n                container: true,\n                spacing: 2,\n                sx: {\n                    paddingY: 1\n                },\n                children: posters.map((el, i)=>{\n                    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        item: true,\n                        md: 3,\n                        xs: 6,\n                        sx: {\n                            display: i > 1 ? {\n                                xs: \"none\",\n                                md: \"block\"\n                            } : null\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                href: `/posteredit/${el.id}`,\n                                underline: \"none\",\n                                children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                    elevation: 2,\n                                    children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                        src: `http://52.23.195.42:8000/api/files/posters/${el.id}/${el.image}`,\n                                        component: \"img\",\n                                        alt: \"image\",\n                                        sx: {\n                                            width: \"100%\",\n                                            height: \"100%\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Github\\\\hindavi\\\\client\\\\pages\\\\stories.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Github\\\\hindavi\\\\client\\\\pages\\\\stories.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Github\\\\hindavi\\\\client\\\\pages\\\\stories.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                variant: \"body1\",\n                                component: \"p\",\n                                sx: {\n                                    marginTop: 1,\n                                    fontSize: {\n                                        md: \"1.2rem\",\n                                        xs: \"1rem\"\n                                    },\n                                    color: \"gray\"\n                                },\n                                children: el.title\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Github\\\\hindavi\\\\client\\\\pages\\\\stories.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                variant: \"subtitle2\",\n                                component: \"p\",\n                                sx: {\n                                    fontSize: {\n                                        md: \"0.7rem\",\n                                        xs: \"0.6rem\"\n                                    }\n                                },\n                                children: el.designation\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Github\\\\hindavi\\\\client\\\\pages\\\\stories.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, i, true, {\n                        fileName: \"D:\\\\Github\\\\hindavi\\\\client\\\\pages\\\\stories.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\Github\\\\hindavi\\\\client\\\\pages\\\\stories.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Github\\\\hindavi\\\\client\\\\pages\\\\stories.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StoriesPage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxNQUFNOzRDQUFFQyxNQUFNLEVBQUUsTUFBTTt5Q0FBRTs7Ozs7aURBQ3JDOzs7Ozs2Q0FDRzs7Ozs7eUNBQ0Y7MENBQ1AsdUVBQUNuRCxpRUFBVTtnQ0FDVCtCLE9BQU8sRUFBQyxPQUFPO2dDQUNmaUIsU0FBUyxFQUFDLEdBQUc7Z0NBQ2JoQixFQUFFLEVBQUU7b0NBQ0ZvQixTQUFTLEVBQUUsQ0FBQztvQ0FDWkMsUUFBUSxFQUFFO3dDQUFFZCxFQUFFLEVBQUUsUUFBUTt3Q0FBRUMsRUFBRSxFQUFFLE1BQU07cUNBQUU7b0NBQ3RDYyxLQUFLLEVBQUUsTUFBTTtpQ0FDZDswQ0FFQS9CLEVBQUUsQ0FBQ2dDLEtBQUs7Ozs7O3lDQUNFOzBDQUNiLHVFQUFDdkQsaUVBQVU7Z0NBQ1QrQixPQUFPLEVBQUMsV0FBVztnQ0FDbkJpQixTQUFTLEVBQUMsR0FBRztnQ0FDYmhCLEVBQUUsRUFBRTtvQ0FBRXFCLFFBQVEsRUFBRTt3Q0FBRWQsRUFBRSxFQUFFLFFBQVE7d0NBQUVDLEVBQUUsRUFBRSxRQUFRO3FDQUFFO2lDQUFFOzBDQUUvQ2pCLEVBQUUsQ0FBQ2lDLFdBQVc7Ozs7O3lDQUNKOzt1QkFsQ1JuQixDQUFDOzs7O2lDQW1DRCxDQUNQO2lCQUNILENBQUM7Ozs7O3lCQUNHOzs7Ozs7aUJBQ0csQ0FDWjtDQUNIO0FBRUQsaUVBQWU3QixXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtd2l0aC10eXBlc2NyaXB0Ly4vcGFnZXMvc3Rvcmllcy50c3g/MDNmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUG9zdGVyVHlwZSB9IGZyb20gJy4vaG9tZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvR3JpZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGluayc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZCc7XHJcblxyXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZE1lZGlhJztcclxuXHJcbmNvbnN0IFN0b3JpZXNQYWdlOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbcG9zdGVycywgc2V0UG9zdGVyc10gPSB1c2VTdGF0ZTxQb3N0ZXJUeXBlW10+KFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zXHJcbiAgICAgICAgLmdldCgnaHR0cDovLzUyLjIzLjE5NS40Mjo4MDAwL2FwaS9jb2xsZWN0aW9ucy9zdG9yaWVzL3JlY29yZHMnKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5kYXRhKTtcclxuICAgICAgY29uc3QgcG9zdGVyID0gYXdhaXQgZ2V0UG9zdGVycyhyZXN1bHQuaXRlbXMpO1xyXG4gICAgICBzZXRQb3N0ZXJzKHBvc3Rlcik7XHJcbiAgICB9KSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0UG9zdGVycyA9IGFzeW5jIChwb3N0ZXJBcnI6IFBvc3RlclR5cGVbXSkgPT4ge1xyXG4gICAgY29uc3QgcG9zdGVycyA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICBwb3N0ZXJBcnIubWFwKGFzeW5jIChlbDogYW55KSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHBvc3RlckRhdGEgPSBhd2FpdCBheGlvc1xyXG4gICAgICAgICAgICAuZ2V0KFxyXG4gICAgICAgICAgICAgIGBodHRwOi8vNTIuMjMuMTk1LjQyOjgwMDAvYXBpL2NvbGxlY3Rpb25zL3Bvc3RlcnMvcmVjb3Jkcy8ke2VsLnBvc3RlcklkfWBcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuZGF0YSk7XHJcbiAgICAgICAgICByZXR1cm4gcG9zdGVyRGF0YTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHBvc3RlcnM7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgbWF4V2lkdGg9J3hsJz5cclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnIHN4PXt7IG1hcmdpblk6IDIgfX0+XHJcbiAgICAgICAgU3Rvcmllc1xyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzeD17eyBwYWRkaW5nWTogMSB9fT5cclxuICAgICAgICB7cG9zdGVycy5tYXAoKGVsLCBpKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgbWQ9ezN9XHJcbiAgICAgICAgICAgICAgeHM9ezZ9XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGkgPiAxID8geyB4czogJ25vbmUnLCBtZDogJ2Jsb2NrJyB9IDogbnVsbCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0ZXJlZGl0LyR7ZWwuaWR9YH0gdW5kZXJsaW5lPSdub25lJz5cclxuICAgICAgICAgICAgICAgIDxDYXJkIGVsZXZhdGlvbj17Mn0+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwOi8vNTIuMjMuMTk1LjQyOjgwMDAvYXBpL2ZpbGVzL3Bvc3RlcnMvJHtlbC5pZH0vJHtlbC5pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD0naW1nJ1xyXG4gICAgICAgICAgICAgICAgICAgIGFsdD0naW1hZ2UnXHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2JvZHkxJ1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PSdwJ1xyXG4gICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxLFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogeyBtZDogJzEuMnJlbScsIHhzOiAnMXJlbScgfSxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2VsLnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD0nc3VidGl0bGUyJ1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PSdwJ1xyXG4gICAgICAgICAgICAgICAgc3g9e3sgZm9udFNpemU6IHsgbWQ6ICcwLjdyZW0nLCB4czogJzAuNnJlbScgfSB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtlbC5kZXNpZ25hdGlvbn1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yaWVzUGFnZTtcclxuIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsIlR5cG9ncmFwaHkiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiR3JpZCIsIkxpbmsiLCJDYXJkIiwiQ2FyZE1lZGlhIiwiU3Rvcmllc1BhZ2UiLCJwb3N0ZXJzIiwic2V0UG9zdGVycyIsInJlc3VsdCIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwicG9zdGVyIiwiZ2V0UG9zdGVycyIsIml0ZW1zIiwicG9zdGVyQXJyIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsImVsIiwicG9zdGVyRGF0YSIsInBvc3RlcklkIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsIm1heFdpZHRoIiwidmFyaWFudCIsInN4IiwibWFyZ2luWSIsImNvbnRhaW5lciIsInNwYWNpbmciLCJwYWRkaW5nWSIsImkiLCJpdGVtIiwibWQiLCJ4cyIsImRpc3BsYXkiLCJocmVmIiwiaWQiLCJ1bmRlcmxpbmUiLCJlbGV2YXRpb24iLCJzcmMiLCJpbWFnZSIsImNvbXBvbmVudCIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luVG9wIiwiZm9udFNpemUiLCJjb2xvciIsInRpdGxlIiwiZGVzaWduYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/stories.tsx\n");

/***/ }),

/***/ "@emotion/react/jsx-dev-runtime":
/*!*************************************************!*\
  !*** external "@emotion/react/jsx-dev-runtime" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@emotion/react/jsx-dev-runtime");

/***/ }),

/***/ "@mui/material/Card":
/*!*************************************!*\
  !*** external "@mui/material/Card" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Card");

/***/ }),

/***/ "@mui/material/CardMedia":
/*!******************************************!*\
  !*** external "@mui/material/CardMedia" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/CardMedia");

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
var __webpack_exports__ = (__webpack_exec__("./pages/stories.tsx"));
module.exports = __webpack_exports__;

})();