"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
// EXTERNAL MODULE: ./src/theme.ts
var theme = __webpack_require__(668);
// EXTERNAL MODULE: ./src/createEmotionCache.ts
var createEmotionCache = __webpack_require__(3221);
// EXTERNAL MODULE: external "@mui/icons-material/AccountCircle"
var AccountCircle_ = __webpack_require__(1883);
var AccountCircle_default = /*#__PURE__*/__webpack_require__.n(AccountCircle_);
// EXTERNAL MODULE: external "@mui/icons-material/Home"
var Home_ = __webpack_require__(3467);
var Home_default = /*#__PURE__*/__webpack_require__.n(Home_);
;// CONCATENATED MODULE: external "@mui/icons-material/CurrencyRupee"
const CurrencyRupee_namespaceObject = require("@mui/icons-material/CurrencyRupee");
var CurrencyRupee_default = /*#__PURE__*/__webpack_require__.n(CurrencyRupee_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Menu"
const Menu_namespaceObject = require("@mui/icons-material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Notifications"
const Notifications_namespaceObject = require("@mui/icons-material/Notifications");
var Notifications_default = /*#__PURE__*/__webpack_require__.n(Notifications_namespaceObject);
// EXTERNAL MODULE: external "@mui/icons-material/Share"
var Share_ = __webpack_require__(8234);
var Share_default = /*#__PURE__*/__webpack_require__.n(Share_);
;// CONCATENATED MODULE: external "@mui/material/AppBar"
const AppBar_namespaceObject = require("@mui/material/AppBar");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/BottomNavigation"
const BottomNavigation_namespaceObject = require("@mui/material/BottomNavigation");
var BottomNavigation_default = /*#__PURE__*/__webpack_require__.n(BottomNavigation_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/BottomNavigationAction"
const BottomNavigationAction_namespaceObject = require("@mui/material/BottomNavigationAction");
var BottomNavigationAction_default = /*#__PURE__*/__webpack_require__.n(BottomNavigationAction_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/system/Box"
var Box_ = __webpack_require__(6526);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Link"
var Link_ = __webpack_require__(5246);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1598);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
;// CONCATENATED MODULE: external "@mui/material/Toolbar"
const Toolbar_namespaceObject = require("@mui/material/Toolbar");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.a0849067.png","height":326,"width":792,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAZUlEQVR42mOAgP9M0pb9gVpW/bF61n1JZjZ9nQxq01XBUh+qzRW+1eqYLIouDVoYVRYyLawqdXZERfKrCkfdLzUG+gyfakyCPlab1v6sV6780yCV9rdBLO1HnXrJ5xqjko/VppkANPQl6zeZ0wYAAAAASUVORK5CYII="});
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
;// CONCATENATED MODULE: external "@mui/icons-material/Search"
const Search_namespaceObject = require("@mui/icons-material/Search");
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/InputAdornment"
var InputAdornment_ = __webpack_require__(3103);
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Navbar/Navbar.tsx














const Navbar = ()=>{
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)("");
    const { 0: coins , 1: setCoins  } = (0,external_react_.useState)(0);
    const { 0: name , 1: setName  } = (0,external_react_.useState)("");
    const { 0: id , 1: setId  } = (0,external_react_.useState)("");
    const UserInfo = async (id)=>{
        if (id !== "") {
            console.log("sa");
            external_axios_default().post("http://localhost:4000/userinfo", {
                id: id
            }).then((res)=>{
                setEmail("Saif Khan");
                setName(res.data.username);
                setCoins(res.data.coins);
            }).catch((err)=>console.log(err));
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
        position: "static",
        color: "inherit",
        sx: {
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
            sx: {
                paddingY: 2,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "logo",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: logo,
                        alt: "logo",
                        layout: "responsive"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                    id: "search",
                    className: "search",
                    placeholder: "Search",
                    InputProps: {
                        startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                            position: "start",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Search_default()), {
                                color: "primary"
                            })
                        })
                    },
                    sx: {
                        marginX: "auto",
                        paddingY: 0
                    },
                    variant: "outlined"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                    variant: "h6",
                    component: "p",
                    color: "secondary",
                    className: "balance",
                    sx: {
                        textAlign: "center",
                        lineHeight: 1
                    },
                    children: [
                        "Balance",
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                            variant: "body1",
                            component: "span",
                            sx: {
                                flexGrow: 1,
                                display: "block"
                            },
                            children: [
                                coins,
                                " coins"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                    href: "/user",
                    underline: "none",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                        className: "user",
                        size: "large",
                        "aria-label": "account",
                        sx: {
                            marginLeft: 2
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((AccountCircle_default()), {
                            color: "primary",
                            fontSize: "large"
                        })
                    })
                })
            ]
        })
    });
};

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Layout/Layoutl.tsx


















const Layout = ({ children  })=>{
    const router = (0,router_.useRouter)();
    const { 0: value , 1: setValue  } = (0,external_react_.useState)("Home");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
                position: "static",
                color: "primary",
                className: "menu",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                    sx: {
                        display: "flex",
                        gap: 6,
                        justifyContent: "flex-start",
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                            sx: {
                                color: "#fff"
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 2
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Home_default()), {
                                    sx: {
                                        color: "#fff"
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    component: "p",
                                    sx: {
                                        textAlign: "center",
                                        marginRight: 2,
                                        lineHeight: 1,
                                        fontSize: 21
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                        href: "/home",
                                        sx: {
                                            color: "#fff",
                                            textDecoration: "none"
                                        },
                                        children: "Home"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 2
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((CurrencyRupee_default()), {
                                    sx: {
                                        color: "#fff"
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    component: "p",
                                    sx: {
                                        textAlign: "center",
                                        marginRight: 2,
                                        lineHeight: 1,
                                        fontSize: 21
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                        href: "/recharge",
                                        sx: {
                                            color: "#fff",
                                            textDecoration: "none"
                                        },
                                        children: "Recharge"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 2
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Share_default()), {
                                    sx: {
                                        color: "#fff"
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    component: "p",
                                    sx: {
                                        textAlign: "center",
                                        marginRight: 2,
                                        lineHeight: 1,
                                        fontSize: 21
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                        href: "/refer/userno",
                                        sx: {
                                            color: "#fff",
                                            textDecoration: "none"
                                        },
                                        children: "Refer and Earn"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 2
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Notifications_default()), {
                                    sx: {
                                        color: "#fff"
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    component: "p",
                                    sx: {
                                        textAlign: "center",
                                        marginRight: 2,
                                        lineHeight: 1,
                                        fontSize: 21
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                        href: "#",
                                        sx: {
                                            color: "#fff",
                                            textDecoration: "none"
                                        },
                                        children: "Notifications"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Paper_default()), {
                sx: {
                    width: "100%",
                    position: "fixed",
                    bottom: 0,
                    boxShadow: "0 -1px 2px rgba(0, 0, 0, 0.2)",
                    zIndex: 100
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((BottomNavigation_default()), {
                    className: "bottomNav",
                    showLabels: false,
                    value: value,
                    onChange: (_, newValue)=>{
                        setValue(newValue);
                    },
                    sx: {
                        paddingY: "1.6rem"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((BottomNavigationAction_default()), {
                            label: "Home",
                            value: "Home",
                            icon: /*#__PURE__*/ jsx_runtime_.jsx((Home_default()), {}),
                            onClick: ()=>router.push("/123")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((BottomNavigationAction_default()), {
                            label: "Recharge",
                            value: "Recharge",
                            onClick: ()=>router.push("/recharge"),
                            icon: /*#__PURE__*/ jsx_runtime_.jsx((CurrencyRupee_default()), {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((BottomNavigationAction_default()), {
                            label: "Refer",
                            value: "Refer",
                            icon: /*#__PURE__*/ jsx_runtime_.jsx((Share_default()), {}),
                            onClick: ()=>router.push("/refer/userno")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((BottomNavigationAction_default()), {
                            label: "Notifications",
                            value: "Notifications",
                            onClick: ()=>router.push("/notifications"),
                            icon: /*#__PURE__*/ jsx_runtime_.jsx((Notifications_default()), {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((BottomNavigationAction_default()), {
                            label: "User",
                            value: "User",
                            onClick: ()=>router.push("/user"),
                            icon: /*#__PURE__*/ jsx_runtime_.jsx((AccountCircle_default()), {})
                        })
                    ]
                })
            }),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    height: {
                        xs: "3rem",
                        md: 0
                    }
                }
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/_app.tsx









// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = (0,createEmotionCache/* default */.Z)();
function MyApp(props) {
    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;
    const allowLayout = ()=>{
        if ([
            "/",
            "/signup",
            "/emailverify",
            "/forgotpassword"
        ].includes(props.router.pathname)) {
            return /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            });
        } else {
            return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.CacheProvider, {
        value: emotionCache,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "viewport",
                    content: "initial-scale=1, width=device-width"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
                theme: theme/* default */.Z,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {}),
                    allowLayout()
                ]
            })
        ]
    });
};


/***/ }),

/***/ 1913:
/***/ ((module) => {

module.exports = require("@emotion/cache");

/***/ }),

/***/ 5193:
/***/ ((module) => {

module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 1883:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AccountCircle");

/***/ }),

/***/ 3467:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Home");

/***/ }),

/***/ 8234:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Share");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 3103:
/***/ ((module) => {

module.exports = require("@mui/material/InputAdornment");

/***/ }),

/***/ 5246:
/***/ ((module) => {

module.exports = require("@mui/material/Link");

/***/ }),

/***/ 1598:
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 5574:
/***/ ((module) => {

module.exports = require("@mui/material/colors");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 6526:
/***/ ((module) => {

module.exports = require("@mui/system/Box");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [311,675,886], () => (__webpack_exec__(980)));
module.exports = __webpack_exports__;

})();