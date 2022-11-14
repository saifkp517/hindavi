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
exports.id = "pages/quotes";
exports.ids = ["pages/quotes"];
exports.modules = {

/***/ "./pages/quotes.tsx":
/*!**************************!*\
  !*** ./pages/quotes.tsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Container */ \"@mui/material/Container\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Grid */ \"@mui/material/Grid\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Link */ \"@mui/material/Link\");\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Card */ \"@mui/material/Card\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/CardMedia */ \"@mui/material/CardMedia\");\n/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_4__]);\naxios__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\nconst QuotesPage = ()=>{\n    const { 0: posters , 1: setPosters  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (async ()=>{\n            const result = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://52.23.195.42:8000/api/collections/quotes/records\").then((res)=>res.data);\n            const poster = await getPosters(result.items);\n            setPosters(poster);\n        })();\n    }, []);\n    const getPosters = async (posterArr)=>{\n        const posters = await Promise.all(posterArr.map(async (el)=>{\n            try {\n                const posterData = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(`http://52.23.195.42:8000/api/collections/posters/records/${el.posterId}`).then((res)=>res.data);\n                return posterData;\n            } catch (error) {\n                console.log(error.message);\n            }\n        }));\n        return posters;\n    };\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_1___default()), {\n        maxWidth: \"xl\",\n        children: [\n            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {\n                variant: \"h6\",\n                sx: {\n                    marginY: 2\n                },\n                children: \"Quotes\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Github\\\\hindavi\\\\client\\\\pages\\\\quotes.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {\n                container: true,\n                spacing: 2,\n                sx: {\n                    paddingY: 1\n                },\n                children: posters.map((el, i)=>{\n                    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        item: true,\n                        md: 3,\n                        xs: 6,\n                        sx: {\n                            display: i > 1 ? {\n                                xs: \"none\",\n                                md: \"block\"\n                            } : null\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                href: `/posteredit/${el.id}`,\n                                underline: \"none\",\n                                children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                    elevation: 2,\n                                    children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                        src: `http://52.23.195.42:8000/api/files/posters/${el.id}/${el.image}`,\n                                        component: \"img\",\n                                        alt: \"image\",\n                                        sx: {\n                                            width: \"100%\",\n                                            height: \"100%\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Github\\\\hindavi\\\\client\\\\pages\\\\quotes.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Github\\\\hindavi\\\\client\\\\pages\\\\quotes.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Github\\\\hindavi\\\\client\\\\pages\\\\quotes.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                variant: \"body1\",\n                                component: \"p\",\n                                sx: {\n                                    marginTop: 1,\n                                    fontSize: {\n                                        md: \"1.2rem\",\n                                        xs: \"1rem\"\n                                    },\n                                    color: \"gray\"\n                                },\n                                children: el.title\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Github\\\\hindavi\\\\client\\\\pages\\\\quotes.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                variant: \"subtitle2\",\n                                component: \"p\",\n                                sx: {\n                                    fontSize: {\n                                        md: \"0.7rem\",\n                                        xs: \"0.6rem\"\n                                    }\n                                },\n                                children: el.designation\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Github\\\\hindavi\\\\client\\\\pages\\\\quotes.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, i, true, {\n                        fileName: \"D:\\\\Github\\\\hindavi\\\\client\\\\pages\\\\quotes.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\Github\\\\hindavi\\\\client\\\\pages\\\\quotes.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Github\\\\hindavi\\\\client\\\\pages\\\\quotes.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuotesPage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9xdW90ZXMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2dEO0FBQ0U7QUFDTjtBQUVsQjtBQUNZO0FBQ0E7QUFDQTtBQUVVO0FBRWhELE1BQU1TLFVBQVUsR0FBYSxJQUFNO0lBQ2pDLE1BQU0sS0FBQ0MsT0FBTyxNQUFFQyxVQUFVLE1BQUlSLCtDQUFRLENBQWUsRUFBRSxDQUFDO0lBRXhERCxnREFBUyxDQUFDLElBQU07UUFDZCxDQUFDLFVBQVk7WUFDWCxNQUFNVSxNQUFNLEdBQUcsTUFBTVIsaURBQ2YsQ0FBQyx5REFBeUQsQ0FBQyxDQUM5RFUsSUFBSSxDQUFDLENBQUNDLEdBQUcsR0FBS0EsR0FBRyxDQUFDQyxJQUFJLENBQUM7WUFDMUIsTUFBTUMsTUFBTSxHQUFHLE1BQU1DLFVBQVUsQ0FBQ04sTUFBTSxDQUFDTyxLQUFLLENBQUM7WUFDN0NSLFVBQVUsQ0FBQ00sTUFBTSxDQUFDLENBQUM7U0FDcEIsQ0FBQyxFQUFFLENBQUM7S0FDTixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsTUFBTUMsVUFBVSxHQUFHLE9BQU9FLFNBQXVCLEdBQUs7UUFDcEQsTUFBTVYsT0FBTyxHQUFHLE1BQU1XLE9BQU8sQ0FBQ0MsR0FBRyxDQUMvQkYsU0FBUyxDQUFDRyxHQUFHLENBQUMsT0FBT0MsRUFBTyxHQUFLO1lBQy9CLElBQUk7Z0JBQ0YsTUFBTUMsVUFBVSxHQUFHLE1BQU1yQixpREFDbkIsQ0FDRixDQUFDLHlEQUF5RCxFQUFFb0IsRUFBRSxDQUFDRSxRQUFRLENBQUMsQ0FBQyxDQUMxRSxDQUNBWixJQUFJLENBQUMsQ0FBQ0MsR0FBRyxHQUFLQSxHQUFHLENBQUNDLElBQUksQ0FBQztnQkFDMUIsT0FBT1MsVUFBVSxDQUFDO2FBQ25CLENBQUMsT0FBT0UsS0FBSyxFQUFPO2dCQUNuQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQ0csT0FBTyxDQUFDLENBQUM7YUFDNUI7U0FDRixDQUFDLENBQ0g7UUFDRCxPQUFPcEIsT0FBTyxDQUFDO0tBQ2hCO0lBRUQscUJBQ0UsdUVBQUNWLGdFQUFTO1FBQUMrQixRQUFRLEVBQUMsSUFBSTs7MEJBQ3RCLHVFQUFDOUIsaUVBQVU7Z0JBQUMrQixPQUFPLEVBQUMsSUFBSTtnQkFBQ0MsRUFBRSxFQUFFO29CQUFFQyxPQUFPLEVBQUUsQ0FBQztpQkFBRTswQkFBRSxRQUU3Qzs7Ozs7eUJBQWE7MEJBQ2IsdUVBQUM3QiwyREFBSTtnQkFBQzhCLFNBQVM7Z0JBQUNDLE9BQU8sRUFBRSxDQUFDO2dCQUFFSCxFQUFFLEVBQUU7b0JBQUVJLFFBQVEsRUFBRSxDQUFDO2lCQUFFOzBCQUM1QzNCLE9BQU8sQ0FBQ2EsR0FBRyxDQUFDLENBQUNDLEVBQUUsRUFBRWMsQ0FBQyxHQUFLO29CQUN0QixxQkFDRSx1RUFBQ2pDLDJEQUFJO3dCQUNIa0MsSUFBSTt3QkFFSkMsRUFBRSxFQUFFLENBQUM7d0JBQ0xDLEVBQUUsRUFBRSxDQUFDO3dCQUNMUixFQUFFLEVBQUU7NEJBQ0ZTLE9BQU8sRUFBRUosQ0FBQyxHQUFHLENBQUMsR0FBRztnQ0FBRUcsRUFBRSxFQUFFLE1BQU07Z0NBQUVELEVBQUUsRUFBRSxPQUFPOzZCQUFFLEdBQUcsSUFBSTt5QkFDcEQ7OzBDQUVELHVFQUFDbEMsMkRBQUk7Z0NBQUNxQyxJQUFJLEVBQUUsQ0FBQyxZQUFZLEVBQUVuQixFQUFFLENBQUNvQixFQUFFLENBQUMsQ0FBQztnQ0FBRUMsU0FBUyxFQUFDLE1BQU07MENBQ2xELHFGQUFDdEMsMkRBQUk7b0NBQUN1QyxTQUFTLEVBQUUsQ0FBQzs4Q0FDaEIscUZBQUN0QyxnRUFBUzt3Q0FDUnVDLEdBQUcsRUFBRSxDQUFDLDJDQUEyQyxFQUFFdkIsRUFBRSxDQUFDb0IsRUFBRSxDQUFDLENBQUMsRUFBRXBCLEVBQUUsQ0FBQ3dCLEtBQUssQ0FBQyxDQUFDO3dDQUN0RUMsU0FBUyxFQUFDLEtBQUs7d0NBQ2ZDLEdBQUcsRUFBQyxPQUFPO3dDQUNYakIsRUFBRSxFQUFFOzRDQUFFa0IsS0FBSyxFQUFFLE1BQU07NENBQUVDLE1BQU0sRUFBRSxNQUFNO3lDQUFFOzs7OztpREFDckM7Ozs7OzZDQUNHOzs7Ozt5Q0FDRjswQ0FDUCx1RUFBQ25ELGlFQUFVO2dDQUNUK0IsT0FBTyxFQUFDLE9BQU87Z0NBQ2ZpQixTQUFTLEVBQUMsR0FBRztnQ0FDYmhCLEVBQUUsRUFBRTtvQ0FDRm9CLFNBQVMsRUFBRSxDQUFDO29DQUNaQyxRQUFRLEVBQUU7d0NBQUVkLEVBQUUsRUFBRSxRQUFRO3dDQUFFQyxFQUFFLEVBQUUsTUFBTTtxQ0FBRTtvQ0FDdENjLEtBQUssRUFBRSxNQUFNO2lDQUNkOzBDQUVBL0IsRUFBRSxDQUFDZ0MsS0FBSzs7Ozs7eUNBQ0U7MENBQ2IsdUVBQUN2RCxpRUFBVTtnQ0FDVCtCLE9BQU8sRUFBQyxXQUFXO2dDQUNuQmlCLFNBQVMsRUFBQyxHQUFHO2dDQUNiaEIsRUFBRSxFQUFFO29DQUFFcUIsUUFBUSxFQUFFO3dDQUFFZCxFQUFFLEVBQUUsUUFBUTt3Q0FBRUMsRUFBRSxFQUFFLFFBQVE7cUNBQUU7aUNBQUU7MENBRS9DakIsRUFBRSxDQUFDaUMsV0FBVzs7Ozs7eUNBQ0o7O3VCQWxDUm5CLENBQUM7Ozs7aUNBbUNELENBQ1A7aUJBQ0gsQ0FBQzs7Ozs7eUJBQ0c7Ozs7OztpQkFDRyxDQUNaO0NBQ0g7QUFFRCxpRUFBZTdCLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy13aXRoLXR5cGVzY3JpcHQvLi9wYWdlcy9xdW90ZXMudHN4P2VkYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFBvc3RlclR5cGUgfSBmcm9tICcuL2hvbWUnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbXVpL21hdGVyaWFsL0dyaWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbXVpL21hdGVyaWFsL0xpbmsnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmQnO1xyXG5cclxuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRNZWRpYSc7XHJcblxyXG5jb25zdCBRdW90ZXNQYWdlOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbcG9zdGVycywgc2V0UG9zdGVyc10gPSB1c2VTdGF0ZTxQb3N0ZXJUeXBlW10+KFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zXHJcbiAgICAgICAgLmdldCgnaHR0cDovLzUyLjIzLjE5NS40Mjo4MDAwL2FwaS9jb2xsZWN0aW9ucy9xdW90ZXMvcmVjb3JkcycpXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpO1xyXG4gICAgICBjb25zdCBwb3N0ZXIgPSBhd2FpdCBnZXRQb3N0ZXJzKHJlc3VsdC5pdGVtcyk7XHJcbiAgICAgIHNldFBvc3RlcnMocG9zdGVyKTtcclxuICAgIH0pKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBnZXRQb3N0ZXJzID0gYXN5bmMgKHBvc3RlckFycjogUG9zdGVyVHlwZVtdKSA9PiB7XHJcbiAgICBjb25zdCBwb3N0ZXJzID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgIHBvc3RlckFyci5tYXAoYXN5bmMgKGVsOiBhbnkpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcG9zdGVyRGF0YSA9IGF3YWl0IGF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoXHJcbiAgICAgICAgICAgICAgYGh0dHA6Ly81Mi4yMy4xOTUuNDI6ODAwMC9hcGkvY29sbGVjdGlvbnMvcG9zdGVycy9yZWNvcmRzLyR7ZWwucG9zdGVySWR9YFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5kYXRhKTtcclxuICAgICAgICAgIHJldHVybiBwb3N0ZXJEYXRhO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgICByZXR1cm4gcG9zdGVycztcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD0neGwnPlxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNicgc3g9e3sgbWFyZ2luWTogMiB9fT5cclxuICAgICAgICBRdW90ZXNcclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3g9e3sgcGFkZGluZ1k6IDEgfX0+XHJcbiAgICAgICAge3Bvc3RlcnMubWFwKChlbCwgaSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgIG1kPXszfVxyXG4gICAgICAgICAgICAgIHhzPXs2fVxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpID4gMSA/IHsgeHM6ICdub25lJywgbWQ6ICdibG9jaycgfSA6IG51bGwsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdGVyZWRpdC8ke2VsLmlkfWB9IHVuZGVybGluZT0nbm9uZSc+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBlbGV2YXRpb249ezJ9PlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cDovLzUyLjIzLjE5NS40Mjo4MDAwL2FwaS9maWxlcy9wb3N0ZXJzLyR7ZWwuaWR9LyR7ZWwuaW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9J2ltZydcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9J2ltYWdlJ1xyXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PSdib2R5MSdcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD0ncCdcclxuICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMSxcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgbWQ6ICcxLjJyZW0nLCB4czogJzFyZW0nIH0sXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtlbC50aXRsZX1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9J3N1YnRpdGxlMidcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD0ncCdcclxuICAgICAgICAgICAgICAgIHN4PXt7IGZvbnRTaXplOiB7IG1kOiAnMC43cmVtJywgeHM6ICcwLjZyZW0nIH0gfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7ZWwuZGVzaWduYXRpb259XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVvdGVzUGFnZTtcclxuIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsIlR5cG9ncmFwaHkiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiR3JpZCIsIkxpbmsiLCJDYXJkIiwiQ2FyZE1lZGlhIiwiUXVvdGVzUGFnZSIsInBvc3RlcnMiLCJzZXRQb3N0ZXJzIiwicmVzdWx0IiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJwb3N0ZXIiLCJnZXRQb3N0ZXJzIiwiaXRlbXMiLCJwb3N0ZXJBcnIiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiZWwiLCJwb3N0ZXJEYXRhIiwicG9zdGVySWQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwibWF4V2lkdGgiLCJ2YXJpYW50Iiwic3giLCJtYXJnaW5ZIiwiY29udGFpbmVyIiwic3BhY2luZyIsInBhZGRpbmdZIiwiaSIsIml0ZW0iLCJtZCIsInhzIiwiZGlzcGxheSIsImhyZWYiLCJpZCIsInVuZGVybGluZSIsImVsZXZhdGlvbiIsInNyYyIsImltYWdlIiwiY29tcG9uZW50IiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5Ub3AiLCJmb250U2l6ZSIsImNvbG9yIiwidGl0bGUiLCJkZXNpZ25hdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/quotes.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/quotes.tsx"));
module.exports = __webpack_exports__;

})();