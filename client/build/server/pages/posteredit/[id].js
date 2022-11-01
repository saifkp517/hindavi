"use strict";
(() => {
var exports = {};
exports.id = 297;
exports.ids = [297];
exports.modules = {

/***/ 4051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
;// CONCATENATED MODULE: external "@mui/icons-material/ChevronLeft"
const ChevronLeft_namespaceObject = require("@mui/icons-material/ChevronLeft");
var ChevronLeft_default = /*#__PURE__*/__webpack_require__.n(ChevronLeft_namespaceObject);
// EXTERNAL MODULE: external "@mui/icons-material/Share"
var Share_ = __webpack_require__(8234);
var Share_default = /*#__PURE__*/__webpack_require__.n(Share_);
;// CONCATENATED MODULE: external "@mui/material"
const material_namespaceObject = require("@mui/material");
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/system/Box"
var Box_ = __webpack_require__(6526);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/system/Container"
var Container_ = __webpack_require__(6155);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/colors"
var colors_ = __webpack_require__(5574);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./public/index.ts + 18 modules
var public_0 = __webpack_require__(8654);
;// CONCATENATED MODULE: ./public/svg/frame (1).svg
/* harmony default export */ const frame_1_ = ({"src":"/_next/static/media/frame (1).5e8d65db.svg","height":43,"width":1000});
;// CONCATENATED MODULE: ./public/svg/frame (2).svg
/* harmony default export */ const frame_2_ = ({"src":"/_next/static/media/frame (2).862407a6.svg","height":25,"width":276});
;// CONCATENATED MODULE: ./public/svg/frame (3).svg
/* harmony default export */ const frame_3_ = ({"src":"/_next/static/media/frame (3).dc395529.svg","height":221,"width":1000});
;// CONCATENATED MODULE: ./public/svg/frame (4).svg
/* harmony default export */ const frame_4_ = ({"src":"/_next/static/media/frame (4).1569c15a.svg","height":200,"width":1000});
;// CONCATENATED MODULE: ./public/svg/frame (5).svg
/* harmony default export */ const frame_5_ = ({"src":"/_next/static/media/frame (5).665bea09.svg","height":227,"width":1000});
;// CONCATENATED MODULE: ./public/svg/frame (6).svg
/* harmony default export */ const frame_6_ = ({"src":"/_next/static/media/frame (6).7f61d2b5.svg","height":227,"width":1000});
;// CONCATENATED MODULE: ./public/svg/frame (8).svg
/* harmony default export */ const frame_8_ = ({"src":"/_next/static/media/frame (8).e201d290.svg","height":236,"width":1000});
;// CONCATENATED MODULE: ./public/svg/frame (9).svg
/* harmony default export */ const frame_9_ = ({"src":"/_next/static/media/frame (9).d238098e.svg","height":50,"width":715});
;// CONCATENATED MODULE: ./public/svg/frame (10).svg
/* harmony default export */ const frame_10_ = ({"src":"/_next/static/media/frame (10).9029fe03.svg","height":1000,"width":1000});
;// CONCATENATED MODULE: ./public/svg/index.ts












// EXTERNAL MODULE: external "@mui/material/Box"
var material_Box_ = __webpack_require__(19);
var material_Box_default = /*#__PURE__*/__webpack_require__.n(material_Box_);
// EXTERNAL MODULE: external "@mui/material/FormControlLabel"
var FormControlLabel_ = __webpack_require__(8185);
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1598);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
;// CONCATENATED MODULE: external "@mui/material/Switch"
const Switch_namespaceObject = require("@mui/material/Switch");
var Switch_default = /*#__PURE__*/__webpack_require__.n(Switch_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/ChevronRight"
const ChevronRight_namespaceObject = require("@mui/icons-material/ChevronRight");
var ChevronRight_default = /*#__PURE__*/__webpack_require__.n(ChevronRight_namespaceObject);
;// CONCATENATED MODULE: ./components/EditTools/EditTools.tsx









const EditTools = ({ frameIndex , setFrameIndex , framesLength ,  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((material_Box_default()), {
                sx: {
                    width: "100%",
                    textAlign: "center",
                    marginTop: 1
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                    value: "start",
                    control: /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                        color: "primary"
                    }),
                    label: "Watermark",
                    labelPlacement: "start"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((material_Box_default()), {
                className: "Poster__container",
                sx: {
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    marginY: 2
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((material_Box_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "h6",
                                component: "h2",
                                sx: {
                                    marginBottom: 1
                                },
                                children: "Choose profile:-"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Paper_default()), {
                                variant: "outlined",
                                className: "Poster__card",
                                sx: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    gap: 2,
                                    padding: 0.5,
                                    border: "2px solid #F27C35"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                        "aria-label": "previous",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((ChevronLeft_default()), {
                                            color: "primary"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        color: "primary",
                                        variant: "body1",
                                        component: "p",
                                        children: "User Profile"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                        "aria-label": "next",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((ChevronRight_default()), {
                                            color: "primary"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((material_Box_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "h6",
                                component: "h2",
                                sx: {
                                    marginBottom: 1
                                },
                                children: "Choose frame:-"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Paper_default()), {
                                variant: "outlined",
                                className: "Poster__card",
                                sx: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    gap: 2,
                                    padding: 0.5,
                                    border: "2px solid #F27C35"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                        "aria-label": "previous",
                                        onClick: ()=>setFrameIndex(frameIndex === 0 ? framesLength - 1 : frameIndex - 1),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((ChevronLeft_default()), {
                                            color: "primary"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                        color: "primary",
                                        variant: "body1",
                                        component: "p",
                                        children: [
                                            "Frame ",
                                            frameIndex + 1
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                        "aria-label": "next",
                                        onClick: ()=>setFrameIndex(frameIndex === framesLength - 1 ? 0 : frameIndex + 1),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((ChevronRight_default()), {
                                            color: "primary"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/posteredit/[id].tsx
















const Poster = ({ id  })=>{
    const router = (0,router_.useRouter)();
    const canvasRef = (0,external_react_.useRef)(null);
    const { 0: frameIndex , 1: setFrameIndex  } = (0,external_react_.useState)(0);
    const ColorButton = (0,material_namespaceObject.styled)((IconButton_default()))(({ theme  })=>({
            color: theme.palette.getContrastText(colors_.deepOrange[500]),
            backgroundColor: "#F27C35",
            "&:hover": {
                backgroundColor: colors_.deepOrange.A200
            }
        }));
    const ImagesArr = [
        public_0/* Img1 */.Jy,
        public_0/* Img2 */.LG,
        public_0/* Img3 */.l6,
        public_0/* Img4 */.sG,
        public_0/* Img5 */.L9,
        public_0/* Img6 */.ai,
        public_0/* Img7 */.B9,
        public_0/* Img8 */.kf,
        public_0/* Img9 */.ZL,
        public_0/* Img10 */.OM,
        public_0/* Img11 */.nF,
        public_0/* Img12 */.c4,
        public_0/* Img13 */.Rp,
        public_0/* Img14 */.MZ,
        public_0/* Img15 */.gW,
        public_0/* Img16 */.ec,
        public_0/* Img17 */.ih,
        public_0/* Img18 */.p4, 
    ];
    const framesArr = [
        frame_1_,
        frame_2_,
        frame_3_,
        frame_4_,
        frame_5_,
        frame_6_,
        frame_6_,
        frame_8_,
        frame_9_,
        frame_10_, 
    ];
    const frameHeights = [
        80,
        100,
        155,
        141,
        160,
        160,
        160,
        100,
        50,
        850
    ];
    (0,external_react_.useEffect)(()=>{
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");
        if (context) {
            const image = new window.Image();
            const frame = new window.Image();
            image.src = ImagesArr[Number(id.id)].src;
            frame.src = framesArr[frameIndex].src;
            image.addEventListener("load", ()=>{
                if (canvas?.width && canvas.height) {
                    canvas.width = image.naturalWidth;
                    canvas.height = image.naturalHeight;
                    context.drawImage(image, 0, 0, canvas?.width, canvas?.height);
                }
            }, false);
            frame.addEventListener("load", ()=>{
                if (canvas?.width && canvas?.height) {
                    context.drawImage(frame, 0, canvas.height - frame.naturalHeight - frameHeights[frameIndex]);
                }
            }, false);
        }
    }, [
        frameIndex
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
        className: "Poster__main",
        maxWidth: "lg",
        sx: {
            paddingY: 2,
            minHeight: "95vh",
            overflowY: "hidden",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    width: "100%",
                    marginBottom: 1
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(ColorButton, {
                    onClick: ()=>router.back(),
                    children: /*#__PURE__*/ jsx_runtime_.jsx((ChevronLeft_default()), {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                className: "Poster__display",
                sx: {
                    height: "18rem",
                    display: "grid",
                    placeItems: "center",
                    marginY: "auto"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
                    className: "Poster__display",
                    variant: "outlined",
                    sx: {
                        height: "18rem",
                        aspectRatio: "1 / 1"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx("canvas", {
                        ref: canvasRef
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(EditTools, {
                frameIndex: frameIndex,
                setFrameIndex: setFrameIndex,
                framesLength: framesArr.length
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                variant: "contained",
                fullWidth: true,
                startIcon: /*#__PURE__*/ jsx_runtime_.jsx((Share_default()), {}),
                sx: {
                    color: "#fff",
                    paddingY: 1.5,
                    marginTop: 1.5
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    variant: "body1",
                    component: "p",
                    children: "Download / Share"
                })
            })
        ]
    });
};
/* harmony default export */ const _id_ = (Poster);
const getServerSideProps = async (context)=>{
    return {
        props: {
            id: context.params
        }
    };
};


/***/ }),

/***/ 5193:
/***/ ((module) => {

module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 8234:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Share");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 8167:
/***/ ((module) => {

module.exports = require("@mui/material/Card");

/***/ }),

/***/ 8185:
/***/ ((module) => {

module.exports = require("@mui/material/FormControlLabel");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 1598:
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 5574:
/***/ ((module) => {

module.exports = require("@mui/material/colors");

/***/ }),

/***/ 6526:
/***/ ((module) => {

module.exports = require("@mui/system/Box");

/***/ }),

/***/ 6155:
/***/ ((module) => {

module.exports = require("@mui/system/Container");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [654], () => (__webpack_exec__(4051)));
module.exports = __webpack_exports__;

})();