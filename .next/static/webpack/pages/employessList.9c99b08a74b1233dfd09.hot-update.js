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

var _jsxFileName = "D:\\React-pro\\Projects\\Task_pplflw\\task_pplflw\\components\\nav.js";


function Nav(_ref) {
  var empstatus = _ref.empstatus;
  var added = "";
  var incheck = "";
  var approved = "";
  var active = "";
  var inactive = "";

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
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex bg-grey-bg justify-center align-middle items-center",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: _nav_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.breadcrumb,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: ["ADDED", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/like.svg",
            alt: "My Account",
            className: "h-4 inline-block hidden"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: ["In-check", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/like.svg",
            alt: "My Account",
            className: "h-4 inline-block hidden"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: ["approved", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/like.svg",
            alt: "My Account",
            className: "h-4 inline-block hidden"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: ["Active", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/like.svg",
            alt: "My Account",
            className: "h-4 inline-block hidden"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: ["Inactive ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/like.svg",
            alt: "My Account",
            className: "h-4 inline-block hidden"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwiZW1wc3RhdHVzIiwiYWRkZWQiLCJpbmNoZWNrIiwiYXBwcm92ZWQiLCJhY3RpdmUiLCJpbmFjdGl2ZSIsInN0eWxlcyIsImJyZWFkY3J1bWIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLFNBQVNBLEdBQVQsT0FBNEI7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDakMsTUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQSxNQUFJQyxPQUFPLEdBQUcsRUFBZDtBQUNBLE1BQUlDLFFBQVEsR0FBRyxFQUFmO0FBQ0EsTUFBSUMsTUFBTSxHQUFHLEVBQWI7QUFDQSxNQUFJQyxRQUFRLEdBQUcsRUFBZjs7QUFFQSxVQUFRTCxTQUFSO0FBQ0UsU0FBSyxPQUFMO0FBQWM7QUFDWkMsYUFBSyxHQUFHLEVBQVI7QUFDQUMsZUFBTyxHQUFHLFFBQVY7QUFDQUMsZ0JBQVEsR0FBRyxRQUFYO0FBQ0FDLGNBQU0sR0FBRyxRQUFUO0FBQ0FDLGdCQUFRLEdBQUcsUUFBWDtBQUNBO0FBQ0Q7O0FBQ0QsU0FBSyxVQUFMO0FBQWlCO0FBQ2ZKLGFBQUssR0FBRyxRQUFSO0FBQ0FDLGVBQU8sR0FBRyxFQUFWO0FBQ0FDLGdCQUFRLEdBQUcsUUFBWDtBQUNBQyxjQUFNLEdBQUcsUUFBVDtBQUNBQyxnQkFBUSxHQUFHLFFBQVg7QUFDQTtBQUNEOztBQUNELFNBQUssVUFBTDtBQUFpQjtBQUNmSixhQUFLLEdBQUcsUUFBUjtBQUNBQyxlQUFPLEdBQUcsUUFBVjtBQUNBQyxnQkFBUSxHQUFHLEVBQVg7QUFDQUMsY0FBTSxHQUFHLFFBQVQ7QUFDQUMsZ0JBQVEsR0FBRyxRQUFYO0FBQ0E7QUFDRDs7QUFDRCxTQUFLLFFBQUw7QUFBZTtBQUNiSixhQUFLLEdBQUcsUUFBUjtBQUNBQyxlQUFPLEdBQUcsUUFBVjtBQUNBQyxnQkFBUSxHQUFHLFFBQVg7QUFDQUMsY0FBTSxHQUFHLEVBQVQ7QUFDQUMsZ0JBQVEsR0FBRyxRQUFYO0FBQ0E7QUFDRDtBQWhDSDs7QUFrQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsMERBQWY7QUFBQSwyQkFDRTtBQUFJLGVBQVMsRUFBRUMsc0RBQU0sQ0FBQ0MsVUFBdEI7QUFBQSw4QkFDRTtBQUFBLCtCQUNFO0FBQUcsY0FBSSxFQUFDLEdBQVI7QUFBQSxxQkFDRyxPQURILGVBRUU7QUFDRSxlQUFHLEVBQUMsV0FETjtBQUVFLGVBQUcsRUFBQyxZQUZOO0FBR0UscUJBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBV0U7QUFBQSwrQkFDRTtBQUFHLGNBQUksRUFBQyxHQUFSO0FBQUEscUJBQ0csVUFESCxlQUVFO0FBQ0UsZUFBRyxFQUFDLFdBRE47QUFFRSxlQUFHLEVBQUMsWUFGTjtBQUdFLHFCQUFTLEVBQUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRixlQXFCRTtBQUFBLCtCQUNFO0FBQUcsY0FBSSxFQUFDLEdBQVI7QUFBQSxxQkFDRyxVQURILGVBRUU7QUFDRSxlQUFHLEVBQUMsV0FETjtBQUVFLGVBQUcsRUFBQyxZQUZOO0FBR0UscUJBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJCRixlQStCRTtBQUFBLCtCQUNFO0FBQUcsY0FBSSxFQUFDLEdBQVI7QUFBQSxxQkFDRyxRQURILGVBRUU7QUFDRSxlQUFHLEVBQUMsV0FETjtBQUVFLGVBQUcsRUFBQyxZQUZOO0FBR0UscUJBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQS9CRixlQXlDRTtBQUFBLCtCQUNFO0FBQUcsY0FBSSxFQUFDLEdBQVI7QUFBQSxxQkFDRyxXQURILGVBRUU7QUFDRSxlQUFHLEVBQUMsV0FETjtBQUVFLGVBQUcsRUFBQyxZQUZOO0FBR0UscUJBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXpDRixlQW1ERTtBQUFBLCtCQUNFO0FBQUcsY0FBSSxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMkREO0tBcEdlUixHO0FBc0dEQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lbXBsb3llc3NMaXN0LjljOTliMDhhNzRiMTIzM2RmZDA5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbmF2Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOYXYoeyBlbXBzdGF0dXMgfSkge1xyXG4gIGxldCBhZGRlZCA9IFwiXCI7XHJcbiAgbGV0IGluY2hlY2sgPSBcIlwiO1xyXG4gIGxldCBhcHByb3ZlZCA9IFwiXCI7XHJcbiAgbGV0IGFjdGl2ZSA9IFwiXCI7XHJcbiAgbGV0IGluYWN0aXZlID0gXCJcIjtcclxuXHJcbiAgc3dpdGNoIChlbXBzdGF0dXMpIHtcclxuICAgIGNhc2UgXCJBRERFRFwiOiB7XHJcbiAgICAgIGFkZGVkID0gXCJcIjtcclxuICAgICAgaW5jaGVjayA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGFwcHJvdmVkID0gXCJoaWRkZW5cIjtcclxuICAgICAgYWN0aXZlID0gXCJoaWRkZW5cIjtcclxuICAgICAgaW5hY3RpdmUgPSBcImhpZGRlblwiO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgXCJJTi1DSEVDS1wiOiB7XHJcbiAgICAgIGFkZGVkID0gXCJoaWRkZW5cIjtcclxuICAgICAgaW5jaGVjayA9IFwiXCI7XHJcbiAgICAgIGFwcHJvdmVkID0gXCJoaWRkZW5cIjtcclxuICAgICAgYWN0aXZlID0gXCJoaWRkZW5cIjtcclxuICAgICAgaW5hY3RpdmUgPSBcImhpZGRlblwiO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgXCJBUFBST1ZFRFwiOiB7XHJcbiAgICAgIGFkZGVkID0gXCJoaWRkZW5cIjtcclxuICAgICAgaW5jaGVjayA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGFwcHJvdmVkID0gXCJcIjtcclxuICAgICAgYWN0aXZlID0gXCJoaWRkZW5cIjtcclxuICAgICAgaW5hY3RpdmUgPSBcImhpZGRlblwiO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgXCJBQ1RJVkVcIjoge1xyXG4gICAgICBhZGRlZCA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGluY2hlY2sgPSBcImhpZGRlblwiO1xyXG4gICAgICBhcHByb3ZlZCA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGFjdGl2ZSA9IFwiXCI7XHJcbiAgICAgIGluYWN0aXZlID0gXCJoaWRkZW5cIjtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYmctZ3JleS1iZyBqdXN0aWZ5LWNlbnRlciBhbGlnbi1taWRkbGUgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5icmVhZGNydW1ifT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICB7XCJBRERFRFwifVxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiL2xpa2Uuc3ZnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJNeSBBY2NvdW50XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgaW5saW5lLWJsb2NrIGhpZGRlblwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICB7XCJJbi1jaGVja1wifVxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiL2xpa2Uuc3ZnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJNeSBBY2NvdW50XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgaW5saW5lLWJsb2NrIGhpZGRlblwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICB7XCJhcHByb3ZlZFwifVxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiL2xpa2Uuc3ZnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJNeSBBY2NvdW50XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgaW5saW5lLWJsb2NrIGhpZGRlblwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICB7XCJBY3RpdmVcIn1cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cIi9saWtlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiTXkgQWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IGlubGluZS1ibG9jayBoaWRkZW5cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAge1wiSW5hY3RpdmUgXCJ9XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCIvbGlrZS5zdmdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIk15IEFjY291bnRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNCBpbmxpbmUtYmxvY2sgaGlkZGVuXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=