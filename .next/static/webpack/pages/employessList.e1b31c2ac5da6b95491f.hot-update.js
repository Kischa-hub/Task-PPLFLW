webpackHotUpdate_N_E("pages/employessList",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: Nav, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nav_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.module.css */ "./components/nav.module.css");
/* harmony import */ var _nav_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nav_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config.json */ "./config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config.json */ "./config.json", 1);

var _jsxFileName = "D:\\React-pro\\Projects\\Task_pplflw\\task_pplflw\\components\\nav.js";




function Nav(_ref) {
  var empstatus = _ref.empstatus,
      empid = _ref.empid;
  var added = "";
  var incheck = "";
  var approved = "";
  var active = "";
  var inactive = "";
  var apiEndPoint = _config_json__WEBPACK_IMPORTED_MODULE_4__["apiUrl"];

  switch (empstatus) {
    case "ADDED":
      {
        added = "";
        incheck = "hidden";
        approved = "hidden";
        active = "hidden";
        inactive = "hidden";
        break;
      }

    case "IN-CHECK":
      {
        added = "hidden";
        incheck = "";
        approved = "hidden";
        active = "hidden";
        inactive = "hidden";
        break;
      }

    case "APPROVED":
      {
        added = "hidden";
        incheck = "hidden";
        approved = "";
        active = "hidden";
        inactive = "hidden";
        break;
      }

    case "ACTIVE":
      {
        added = "hidden";
        incheck = "hidden";
        approved = "hidden";
        active = "";
        inactive = "hidden";
        break;
      }

    case "INACTIVE":
      {
        added = "hidden";
        incheck = "hidden";
        approved = "hidden";
        active = "hidden";
        inactive = "";
        break;
      }
  }

  function handleClick(e) {
    e.preventDefault();
    console.log("Employee id is", empid);
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.patch(apiEndPoint + "/" + "empid", {
      Status: "ADDED"
    }).then(function (response) {
      console.log(response);
    })["catch"](function (error) {
      console.log(error);
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex bg-grey-bg justify-center align-middle items-center",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: _nav_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.breadcrumb,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          onClick: handleClick,
          children: ["ADDED", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/like.svg",
            className: "".concat(added, " h-4 inline-block ml-2")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: ["In-check", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/like.svg",
            className: "".concat(incheck, " h-4 inline-block")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: ["approved", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/like.svg",
            className: "".concat(approved, " h-4 inline-block")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: ["Active", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/like.svg",
            className: "".concat(active, " h-4 inline-block")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: ["Inactive ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/like.svg",
            className: "".concat(inactive, " h-4 inline-block")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 5
  }, this);
}
_c = Nav;
/* harmony default export */ __webpack_exports__["default"] = (Nav);

var _c;

$RefreshReg$(_c, "Nav");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwiZW1wc3RhdHVzIiwiZW1waWQiLCJhZGRlZCIsImluY2hlY2siLCJhcHByb3ZlZCIsImFjdGl2ZSIsImluYWN0aXZlIiwiYXBpRW5kUG9pbnQiLCJhcGlVcmwiLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsInBhdGNoIiwiU3RhdHVzIiwidGhlbiIsInJlc3BvbnNlIiwiZXJyb3IiLCJzdHlsZXMiLCJicmVhZGNydW1iIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLEdBQVQsT0FBbUM7QUFBQSxNQUFwQkMsU0FBb0IsUUFBcEJBLFNBQW9CO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQ3hDLE1BQUlDLEtBQUssR0FBRyxFQUFaO0FBQ0EsTUFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFDQSxNQUFJQyxRQUFRLEdBQUcsRUFBZjtBQUNBLE1BQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0EsTUFBSUMsUUFBUSxHQUFHLEVBQWY7QUFDQSxNQUFNQyxXQUFXLEdBQUdDLG1EQUFwQjs7QUFFQSxVQUFRUixTQUFSO0FBQ0UsU0FBSyxPQUFMO0FBQWM7QUFDWkUsYUFBSyxHQUFHLEVBQVI7QUFDQUMsZUFBTyxHQUFHLFFBQVY7QUFDQUMsZ0JBQVEsR0FBRyxRQUFYO0FBQ0FDLGNBQU0sR0FBRyxRQUFUO0FBQ0FDLGdCQUFRLEdBQUcsUUFBWDtBQUNBO0FBQ0Q7O0FBQ0QsU0FBSyxVQUFMO0FBQWlCO0FBQ2ZKLGFBQUssR0FBRyxRQUFSO0FBQ0FDLGVBQU8sR0FBRyxFQUFWO0FBQ0FDLGdCQUFRLEdBQUcsUUFBWDtBQUNBQyxjQUFNLEdBQUcsUUFBVDtBQUNBQyxnQkFBUSxHQUFHLFFBQVg7QUFDQTtBQUNEOztBQUNELFNBQUssVUFBTDtB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QUEsK0JBQ0U7QUFBRyxjQUFJLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQS9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1Q0Q7S0F2R2VQLEc7QUF5R0RBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VtcGxveWVzc0xpc3QuZTFiMzFjMmFjNWRhNmI5NTQ5MWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9uYXYubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGFwaVVybCB9IGZyb20gXCIuLi9jb25maWcuanNvblwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5hdih7IGVtcHN0YXR1cywgZW1waWQgfSkge1xyXG4gIGxldCBhZGRlZCA9IFwiXCI7XHJcbiAgbGV0IGluY2hlY2sgPSBcIlwiO1xyXG4gIGxldCBhcHByb3ZlZCA9IFwiXCI7XHJcbiAgbGV0IGFjdGl2ZSA9IFwiXCI7XHJcbiAgbGV0IGluYWN0aXZlID0gXCJcIjtcclxuICBjb25zdCBhcGlFbmRQb2ludCA9IGFwaVVybDtcclxuXHJcbiAgc3dpdGNoIChlbXBzdGF0dXMpIHtcclxuICAgIGNhc2UgXCJBRERFRFwiOiB7XHJcbiAgICAgIGFkZGVkID0gXCJcIjtcclxuICAgICAgaW5jaGVjayA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGFwcHJvdmVkID0gXCJoaWRkZW5cIjtcclxuICAgICAgYWN0aXZlID0gXCJoaWRkZW5cIjtcclxuICAgICAgaW5hY3RpdmUgPSBcImhpZGRlblwiO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgXCJJTi1DSEVDS1wiOiB7XHJcbiAgICAgIGFkZGVkID0gXCJoaWRkZW5cIjtcclxuICAgICAgaW5jaGVjayA9IFwiXCI7XHJcbiAgICAgIGFwcHJvdmVkID0gXCJoaWRkZW5cIjtcclxuICAgICAgYWN0aXZlID0gXCJoaWRkZW5cIjtcclxuICAgICAgaW5hY3RpdmUgPSBcImhpZGRlblwiO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgXCJBUFBST1ZFRFwiOiB7XHJcbiAgICAgIGFkZGVkID0gXCJoaWRkZW5cIjtcclxuICAgICAgaW5jaGVjayA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGFwcHJvdmVkID0gXCJcIjtcclxuICAgICAgYWN0aXZlID0gXCJoaWRkZW5cIjtcclxuICAgICAgaW5hY3RpdmUgPSBcImhpZGRlblwiO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgXCJBQ1RJVkVcIjoge1xyXG4gICAgICBhZGRlZCA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGluY2hlY2sgPSBcImhpZGRlblwiO1xyXG4gICAgICBhcHByb3ZlZCA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGFjdGl2ZSA9IFwiXCI7XHJcbiAgICAgIGluYWN0aXZlID0gXCJoaWRkZW5cIjtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFwiSU5BQ1RJVkVcIjoge1xyXG4gICAgICBhZGRlZCA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGluY2hlY2sgPSBcImhpZGRlblwiO1xyXG4gICAgICBhcHByb3ZlZCA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGFjdGl2ZSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGluYWN0aXZlID0gXCJcIjtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkVtcGxveWVlIGlkIGlzXCIsIGVtcGlkKTtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wYXRjaChhcGlFbmRQb2ludCArIFwiL1wiICsgXCJlbXBpZFwiLCB7IFN0YXR1czogXCJBRERFRFwiIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGJnLWdyZXktYmcganVzdGlmeS1jZW50ZXIgYWxpZ24tbWlkZGxlIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuYnJlYWRjcnVtYn0+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgIHtcIkFEREVEXCJ9XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xpa2Uuc3ZnXCIgY2xhc3NOYW1lPXtgJHthZGRlZH0gaC00IGlubGluZS1ibG9jayBtbC0yYH0gLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIHtcIkluLWNoZWNrXCJ9XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xpa2Uuc3ZnXCIgY2xhc3NOYW1lPXtgJHtpbmNoZWNrfSBoLTQgaW5saW5lLWJsb2NrYH0gLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIHtcImFwcHJvdmVkXCJ9XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xpa2Uuc3ZnXCIgY2xhc3NOYW1lPXtgJHthcHByb3ZlZH0gaC00IGlubGluZS1ibG9ja2B9IC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICB7XCJBY3RpdmVcIn1cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvbGlrZS5zdmdcIiBjbGFzc05hbWU9e2Ake2FjdGl2ZX0gaC00IGlubGluZS1ibG9ja2B9IC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICB7XCJJbmFjdGl2ZSBcIn1cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvbGlrZS5zdmdcIiBjbGFzc05hbWU9e2Ake2luYWN0aXZlfSBoLTQgaW5saW5lLWJsb2NrYH0gLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=