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

  function handle_added_Click(e) {
    e.preventDefault();
    console.log("Employee id is", apiEndPoint + "/" + empid);
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.patch(apiEndPoint + "/" + empid, {
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
          onClick: handle_added_Click,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwiZW1wc3RhdHVzIiwiZW1waWQiLCJhZGRlZCIsImluY2hlY2siLCJhcHByb3ZlZCIsImFjdGl2ZSIsImluYWN0aXZlIiwiYXBpRW5kUG9pbnQiLCJhcGlVcmwiLCJoYW5kbGVfYWRkZWRfQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJwYXRjaCIsIlN0YXR1cyIsInRoZW4iLCJyZXNwb25zZSIsImVycm9yIiwic3R5bGVzIiwiYnJlYWRjcnVtYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxHQUFULE9BQW1DO0FBQUEsTUFBcEJDLFNBQW9CLFFBQXBCQSxTQUFvQjtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUN4QyxNQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUNBLE1BQUlDLE9BQU8sR0FBRyxFQUFkO0FBQ0EsTUFBSUMsUUFBUSxHQUFHLEVBQWY7QUFDQSxNQUFJQyxNQUFNLEdBQUcsRUFBYjtBQUNBLE1BQUlDLFFBQVEsR0FBRyxFQUFmO0FBQ0EsTUFBTUMsV0FBVyxHQUFHQyxtREFBcEI7O0FBRUEsVUFBUVIsU0FBUjtBQUNFLFNBQUssT0FBTDtBQUFjO0FBQ1pFLGFBQUssR0FBRyxFQUFSO0FBQ0FDLGVBQU8sR0FBRyxRQUFWO0FBQ0FDLGdCQUFRLEdBQUcsUUFBWDtBQUNBQyxjQUFNLEdBQUcsUUFBVDtBQUNBQyxnQkFBUSxHQUFHLFFBQVg7QUFDQTtBQUNEOztBQUNELFNBQUssVUFBTDtBQUFpQjtBQUNmSixhQUFLLEdBQUcsUUFBUjtBQUNBQyxlQUFPLEdBQUcsRUFBVjtBQUNBQyxnQkFBUSxHQUFHLFFBQVg7QUFDQUMsY0FBTSxHQUFHLFFBQVQ7QUFDQUMsZ0JBQVEsR0FBRyxRQUFYO0FBQ0E7QUFDRDs7QUFDRCxTQUFL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QUE7QUFBQTtBQUFBO0FBQUEsY0F6QkYsZUErQkU7QUFBQSwrQkFDRTtBQUFHLGNBQUksRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVDRDtLQXZHZVAsRztBQXlHREEsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZW1wbG95ZXNzTGlzdC43YzY3OTc4Nzc4ODM3Yzc3NzY1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL25hdi5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgYXBpVXJsIH0gZnJvbSBcIi4uL2NvbmZpZy5qc29uXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTmF2KHsgZW1wc3RhdHVzLCBlbXBpZCB9KSB7XHJcbiAgbGV0IGFkZGVkID0gXCJcIjtcclxuICBsZXQgaW5jaGVjayA9IFwiXCI7XHJcbiAgbGV0IGFwcHJvdmVkID0gXCJcIjtcclxuICBsZXQgYWN0aXZlID0gXCJcIjtcclxuICBsZXQgaW5hY3RpdmUgPSBcIlwiO1xyXG4gIGNvbnN0IGFwaUVuZFBvaW50ID0gYXBpVXJsO1xyXG5cclxuICBzd2l0Y2ggKGVtcHN0YXR1cykge1xyXG4gICAgY2FzZSBcIkFEREVEXCI6IHtcclxuICAgICAgYWRkZWQgPSBcIlwiO1xyXG4gICAgICBpbmNoZWNrID0gXCJoaWRkZW5cIjtcclxuICAgICAgYXBwcm92ZWQgPSBcImhpZGRlblwiO1xyXG4gICAgICBhY3RpdmUgPSBcImhpZGRlblwiO1xyXG4gICAgICBpbmFjdGl2ZSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBcIklOLUNIRUNLXCI6IHtcclxuICAgICAgYWRkZWQgPSBcImhpZGRlblwiO1xyXG4gICAgICBpbmNoZWNrID0gXCJcIjtcclxuICAgICAgYXBwcm92ZWQgPSBcImhpZGRlblwiO1xyXG4gICAgICBhY3RpdmUgPSBcImhpZGRlblwiO1xyXG4gICAgICBpbmFjdGl2ZSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBcIkFQUFJPVkVEXCI6IHtcclxuICAgICAgYWRkZWQgPSBcImhpZGRlblwiO1xyXG4gICAgICBpbmNoZWNrID0gXCJoaWRkZW5cIjtcclxuICAgICAgYXBwcm92ZWQgPSBcIlwiO1xyXG4gICAgICBhY3RpdmUgPSBcImhpZGRlblwiO1xyXG4gICAgICBpbmFjdGl2ZSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBcIkFDVElWRVwiOiB7XHJcbiAgICAgIGFkZGVkID0gXCJoaWRkZW5cIjtcclxuICAgICAgaW5jaGVjayA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGFwcHJvdmVkID0gXCJoaWRkZW5cIjtcclxuICAgICAgYWN0aXZlID0gXCJcIjtcclxuICAgICAgaW5hY3RpdmUgPSBcImhpZGRlblwiO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgXCJJTkFDVElWRVwiOiB7XHJcbiAgICAgIGFkZGVkID0gXCJoaWRkZW5cIjtcclxuICAgICAgaW5jaGVjayA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGFwcHJvdmVkID0gXCJoaWRkZW5cIjtcclxuICAgICAgYWN0aXZlID0gXCJoaWRkZW5cIjtcclxuICAgICAgaW5hY3RpdmUgPSBcIlwiO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZV9hZGRlZF9DbGljayhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkVtcGxveWVlIGlkIGlzXCIsIGFwaUVuZFBvaW50ICsgXCIvXCIgKyBlbXBpZCk7XHJcbiAgICBheGlvc1xyXG4gICAgICAucGF0Y2goYXBpRW5kUG9pbnQgKyBcIi9cIiArIGVtcGlkLCB7IFN0YXR1czogXCJBRERFRFwiIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGJnLWdyZXktYmcganVzdGlmeS1jZW50ZXIgYWxpZ24tbWlkZGxlIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuYnJlYWRjcnVtYn0+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXtoYW5kbGVfYWRkZWRfQ2xpY2t9PlxyXG4gICAgICAgICAgICB7XCJBRERFRFwifVxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9saWtlLnN2Z1wiIGNsYXNzTmFtZT17YCR7YWRkZWR9IGgtNCBpbmxpbmUtYmxvY2sgbWwtMmB9IC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICB7XCJJbi1jaGVja1wifVxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9saWtlLnN2Z1wiIGNsYXNzTmFtZT17YCR7aW5jaGVja30gaC00IGlubGluZS1ibG9ja2B9IC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICB7XCJhcHByb3ZlZFwifVxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9saWtlLnN2Z1wiIGNsYXNzTmFtZT17YCR7YXBwcm92ZWR9IGgtNCBpbmxpbmUtYmxvY2tgfSAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAge1wiQWN0aXZlXCJ9XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xpa2Uuc3ZnXCIgY2xhc3NOYW1lPXtgJHthY3RpdmV9IGgtNCBpbmxpbmUtYmxvY2tgfSAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAge1wiSW5hY3RpdmUgXCJ9XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xpa2Uuc3ZnXCIgY2xhc3NOYW1lPXtgJHtpbmFjdGl2ZX0gaC00IGlubGluZS1ibG9ja2B9IC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPjwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9