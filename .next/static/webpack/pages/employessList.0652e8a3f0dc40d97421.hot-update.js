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
            className: "".concat(added, " h-4 inline-block")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: ["In-check", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/like.svg",
            alt: "My Account",
            className: "".concat(incheck, " h-4 inline-block")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: ["approved", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/like.svg",
            alt: "My Account",
            className: "".concat(approved, " h-4 inline-block")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: ["Active", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/like.svg",
            alt: "My Account",
            className: "".concat(active, " h-4 inline-block")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: ["Inactive ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/like.svg",
            alt: "My Account",
            className: "".concat(inactive, " h-4 inline-block")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwiZW1wc3RhdHVzIiwiYWRkZWQiLCJpbmNoZWNrIiwiYXBwcm92ZWQiLCJhY3RpdmUiLCJpbmFjdGl2ZSIsInN0eWxlcyIsImJyZWFkY3J1bWIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLFNBQVNBLEdBQVQsT0FBNEI7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDakMsTUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQSxNQUFJQyxPQUFPLEdBQUcsRUFBZDtBQUNBLE1BQUlDLFFBQVEsR0FBRyxFQUFmO0FBQ0EsTUFBSUMsTUFBTSxHQUFHLEVBQWI7QUFDQSxNQUFJQyxRQUFRLEdBQUcsRUFBZjs7QUFFQSxVQUFRTCxTQUFSO0FBQ0UsU0FBSyxPQUFMO0FBQWM7QUFDWkMsYUFBSyxHQUFHLEVBQVI7QUFDQUMsZUFBTyxHQUFHLFFBQVY7QUFDQUMsZ0JBQVEsR0FBRyxRQUFYO0FBQ0FDLGNBQU0sR0FBRyxRQUFUO0FBQ0FDLGdCQUFRLEdBQUcsUUFBWDtBQUNBO0FBQ0Q7O0FBQ0QsU0FBSyxVQUFMO0FBQWlCO0FBQ2ZKLGFBQUssR0FBRyxRQUFSO0FBQ0FDLGVBQU8sR0FBRyxFQUFWO0FBQ0FDLGdCQUFRLEdBQUcsUUFBWDtBQUNBQyxjQUFNLEdBQUcsUUFBVDtBQUNBQyxnQkFBUSxHQUFHLFFBQVg7QUFDQTtBQUNEOztBQUNELFNBQUssVUFBTDtBQUFpQjtBQUNmSixhQUFLLEdBQUcsUUFBUjtBQUNBQyxlQUFPLEdBQUcsUUFBVjtBQUNBQyxnQkFBUSxHQUFHLEVBQVg7QUFDQUMsY0FBTSxHQUFHLFFBQVQ7QUFDQUMsZ0JBQVEsR0FBRyxRQUFYO0FBQ0E7QUFDRDs7QUFDRCxTQUFLLFFBQUw7QUFBZTtBQUNiSixhQUFLLEdBQUcsUUFBUjtBQUNBQyxlQUFPLEdBQUcsUUFBVjtBQUNBQyxnQkFBUSxHQUFHLFFBQVg7QUFDQUMsY0FBTSxHQUFHLEVBQVQ7QUFDQUMsZ0JBQVEsR0FBRyxRQUFYO0FBQ0E7QUFDRDs7QUFDRCxTQUFLLFVBQUw7QUFBaUI7QUFDZkosYUFBSyxHQUFHLFFBQVI7QUFDQUMsZUFBTyxHQUFHLFFBQVY7QUFDQUMsZ0JBQVEsR0FBRyxRQUFYO0FBQ0FDLGNBQU0sR0FBRyxRQUFUO0FBQ0FDLGdCQUFRLEdBQUcsRUFBWDtBQUNBO0FBQ0Q7QUF4Q0g7O0FBMENBLHNCQUNFO0FBQUssYUFBUyxFQUFDLDBEQUFmO0FBQUEsMkJBQ0U7QUFBSSxlQUFTLEVBQUVDLHNEQUFNLENBQUNDLFVBQXRCO0FBQUEsOEJBQ0U7QUFBQSwrQkFDRTtBQUFHLGNBQUksRUFBQyxHQUFSO0FBQUEscUJBQ0csT0FESCxlQUVFO0FBQ0UsZUFBRyxFQUFDLFdBRE47QUFFRSxlQUFHLEVBQUMsWUFGTjtBQUdFLHFCQUFTLFlBQUtOLEtBQUw7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVdFO0FBQUEsK0JBQ0U7QUFBRyxjQUFJLEVBQUMsR0FBUjtBQUFBLHFCQUNHLFVBREgsZUFFRTtBQUNFLGVBQUcsRUFBQyxXQUROO0FBRUUsZUFBRyxFQUFDLFlBRk47QUFHRSxxQkFBUyxZQUFLQyxPQUFMO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEYsZUFxQkU7QUFBQSwrQkFDRTtBQUFHLGNBQUksRUFBQyxHQUFSO0FBQUEscUJBQ0csVUFESCxlQUVFO0FBQ0UsZUFBRyxFQUFDLFdBRE47QUFFRSxlQUFHLEVBQUMsWUFGTjtBQUdFLHFCQUFTLFlBQUtDLFFBQUw7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyQkYsZUErQkU7QUFBQSwrQkFDRTtBQUFHLGNBQUksRUFBQyxHQUFSO0FBQUEscUJBQ0csUUFESCxlQUVFO0FBQ0UsZUFBRyxFQUFDLFdBRE47QUFFRSxlQUFHLEVBQUMsWUFGTjtBQUdFLHFCQUFTLFlBQUtDLE1BQUw7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EvQkYsZUF5Q0U7QUFBQSwrQkFDRTtBQUFHLGNBQUksRUFBQyxHQUFSO0FBQUEscUJBQ0csV0FESCxlQUVFO0FBQ0UsZUFBRyxFQUFDLFdBRE47QUFFRSxlQUFHLEVBQUMsWUFGTjtBQUdFLHFCQUFTLFlBQUtDLFFBQUw7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6Q0YsZUFtREU7QUFBQSwrQkFDRTtBQUFHLGNBQUksRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJERDtLQTVHZU4sRztBQThHREEsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZW1wbG95ZXNzTGlzdC4wNjUyZThhM2YwZGM0MGQ5NzQyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL25hdi5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTmF2KHsgZW1wc3RhdHVzIH0pIHtcclxuICBsZXQgYWRkZWQgPSBcIlwiO1xyXG4gIGxldCBpbmNoZWNrID0gXCJcIjtcclxuICBsZXQgYXBwcm92ZWQgPSBcIlwiO1xyXG4gIGxldCBhY3RpdmUgPSBcIlwiO1xyXG4gIGxldCBpbmFjdGl2ZSA9IFwiXCI7XHJcblxyXG4gIHN3aXRjaCAoZW1wc3RhdHVzKSB7XHJcbiAgICBjYXNlIFwiQURERURcIjoge1xyXG4gICAgICBhZGRlZCA9IFwiXCI7XHJcbiAgICAgIGluY2hlY2sgPSBcImhpZGRlblwiO1xyXG4gICAgICBhcHByb3ZlZCA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGFjdGl2ZSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGluYWN0aXZlID0gXCJoaWRkZW5cIjtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFwiSU4tQ0hFQ0tcIjoge1xyXG4gICAgICBhZGRlZCA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGluY2hlY2sgPSBcIlwiO1xyXG4gICAgICBhcHByb3ZlZCA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGFjdGl2ZSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGluYWN0aXZlID0gXCJoaWRkZW5cIjtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFwiQVBQUk9WRURcIjoge1xyXG4gICAgICBhZGRlZCA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGluY2hlY2sgPSBcImhpZGRlblwiO1xyXG4gICAgICBhcHByb3ZlZCA9IFwiXCI7XHJcbiAgICAgIGFjdGl2ZSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGluYWN0aXZlID0gXCJoaWRkZW5cIjtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFwiQUNUSVZFXCI6IHtcclxuICAgICAgYWRkZWQgPSBcImhpZGRlblwiO1xyXG4gICAgICBpbmNoZWNrID0gXCJoaWRkZW5cIjtcclxuICAgICAgYXBwcm92ZWQgPSBcImhpZGRlblwiO1xyXG4gICAgICBhY3RpdmUgPSBcIlwiO1xyXG4gICAgICBpbmFjdGl2ZSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBcIklOQUNUSVZFXCI6IHtcclxuICAgICAgYWRkZWQgPSBcImhpZGRlblwiO1xyXG4gICAgICBpbmNoZWNrID0gXCJoaWRkZW5cIjtcclxuICAgICAgYXBwcm92ZWQgPSBcImhpZGRlblwiO1xyXG4gICAgICBhY3RpdmUgPSBcImhpZGRlblwiO1xyXG4gICAgICBpbmFjdGl2ZSA9IFwiXCI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGJnLWdyZXktYmcganVzdGlmeS1jZW50ZXIgYWxpZ24tbWlkZGxlIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuYnJlYWRjcnVtYn0+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAge1wiQURERURcIn1cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cIi9saWtlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiTXkgQWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHthZGRlZH0gaC00IGlubGluZS1ibG9ja2B9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICB7XCJJbi1jaGVja1wifVxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiL2xpa2Uuc3ZnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJNeSBBY2NvdW50XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2luY2hlY2t9IGgtNCBpbmxpbmUtYmxvY2tgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAge1wiYXBwcm92ZWRcIn1cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cIi9saWtlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiTXkgQWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHthcHByb3ZlZH0gaC00IGlubGluZS1ibG9ja2B9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICB7XCJBY3RpdmVcIn1cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cIi9saWtlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiTXkgQWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHthY3RpdmV9IGgtNCBpbmxpbmUtYmxvY2tgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAge1wiSW5hY3RpdmUgXCJ9XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCIvbGlrZS5zdmdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIk15IEFjY291bnRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aW5hY3RpdmV9IGgtNCBpbmxpbmUtYmxvY2tgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj48L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==