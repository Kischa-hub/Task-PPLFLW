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

  function handle_incheck_Click(e) {
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
          onClick: handle_incheck_Click,
          children: ["In-check", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/like.svg",
            className: "".concat(incheck, " h-4 inline-block")
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
          children: ["approved", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/like.svg",
            className: "".concat(approved, " h-4 inline-block")
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
          href: "#",
          children: ["Active", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/like.svg",
            className: "".concat(active, " h-4 inline-block")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: ["Inactive ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/like.svg",
            className: "".concat(inactive, " h-4 inline-block")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 83,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwiZW1wc3RhdHVzIiwiZW1waWQiLCJhZGRlZCIsImluY2hlY2siLCJhcHByb3ZlZCIsImFjdGl2ZSIsImluYWN0aXZlIiwiYXBpRW5kUG9pbnQiLCJhcGlVcmwiLCJoYW5kbGVfYWRkZWRfQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJwYXRjaCIsIlN0YXR1cyIsInRoZW4iLCJyZXNwb25zZSIsImVycm9yIiwiaGFuZGxlX2luY2hlY2tfQ2xpY2siLCJzdHlsZXMiLCJicmVhZGNydW1iIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLEdBQVQsT0FBbUM7QUFBQSxNQUFwQkMsU0FBb0IsUUFBcEJBLFNBQW9CO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQ3hDLE1BQUlDLEtBQUssR0FBRyxFQUFaO0FBQ0EsTUFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFDQSxNQUFJQyxRQUFRLEdBQUcsRUFBZjtBQUNBLE1BQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0EsTUFBSUMsUUFBUSxHQUFHLEVBQWY7QUFDQSxNQUFNQyxXQUFXLEdBQUdDLG1EQUFwQjs7QUFFQSxVQUFRUixTQUFSO0FBQ0UsU0FBSyxPQUFMO0FBQWM7QUFDWkUsYUFBSyxHQUFHLEVBQVI7QUFDQUMsZUFBTyxHQUFHLFFBQVY7QUFDQUMsZ0JBQVEsR0FBRyxRQUFYO0FBQ0FDLGNBQU0sR0FBRyxRQUFUO0FBQ0FDLGdCQUFRLEdBQUcsUUFBWDtBQUNBO0FBQ0Q7O0FBQ0QsU0FBSyxVQUFMO0FBQWlCO0FBQ2ZKLGFBQUssR0FBRyxRQUFSO0FBQ0FDLGVBQU8sR0FBRyxFQUFWO0FBQ0FDLGdCQUFRLEdBQUcsUUFBWDtBQUNBQyxjQUFNLEdBQUcsUUFBVDtBQUNBQyxnQkFBUSxHQUFHLFFBQVg7QUFDQTtBQUNEOztBQUNELFNBQUssVUFBTDtBQUFpQjtBQUNmSixhQUFLLEdBQUcsUUFBUjtBQUNBQyxlQUFPLEdBQUcsUUFBVjtBQUNBQyxnQkFBUSxHQUFHLEVBQVg7QUFDQUMsY0FBTSxHQUFHLFFBQVQ7QUFDQUMsZ0JBQVEsR0FBRyxRQUFYO0FBQ0E7QUFDRDs7QUFDRCxTQUFLLFFBQUw7QUFBZTtBQUNiSixhQUFLLEdBQUcsUUFBUjtBQUNBQyxlQUFPLEdBQUcsUUFBVjtBQUNBQyxnQkFBUSxHQUFHLFFBQVg7QUFDQUMsY0FBTSxHQUFHLEVBQVQ7QUFDQUMsZ0JBQVEsR0FBRyxRQUFYO0FBQ0E7QUFDRDs7QUFDRCxTQUFLLFVBQUw7QUFBaUI7QUFDZkosYUFBSyxHQUFHLFFBQVI7QUFDQUMsZUFBTyxHQUFHLFFBQVY7QUFDQUMsZ0JBQVEsR0FBRyxRQUFYO0FBQ0FDLGNBQU0sR0FBRyxRQUFUO0FBQ0FDLGdCQUFRLEdBQUcsRUFBWDtBQUNBO0FBQ0Q7QUF4Q0g7O0FBMkNBLFdBQVNHLGtCQUFULENBQTRCQyxDQUE1QixFQUErQjtBQUM3QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCTixXQUFXLEdBQUcsR0FBZCxHQUFvQk4sS0FBbEQ7QUFDQWEsZ0RBQUssQ0FDRkMsS0FESCxDQUNTUixXQUFXLEdBQUcsR0FBZCxHQUFvQk4sS0FEN0IsRUFDb0M7QUFBRWUsWUFBTSxFQUFFO0FBQVYsS0FEcEMsRUFFR0MsSUFGSCxDQUVRLFVBQUNDLFFBQUQsRUFBYztBQUNsQk4sYUFBTyxDQUFDQyxHQUFSLENBQVlLLFFBQVo7QUFDRCxLQUpILFdBS1MsVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCUCxhQUFPLENBQUNDLEdBQVIsQ0FBWU0sS0FBWjtBQUNELEtBUEg7QUFRRDs7QUFDRCxXQUFTQyxvQkFBVCxDQUE4QlYsQ0FBOUIsRUFBaUM7QUFDL0JBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4Qk4sV0FBVyxHQUFHLEdBQWQsR0FBb0JOLEtBQWxEO0FBQ0FhLGdEQUFLLENBQ0ZDLEtBREgsQ0FDU1IsV0FBVyxHQUFHLEdBQWQsR0FBb0JOLEtBRDdCLEVBQ29DO0FBQUVlLFlBQU0sRUFBRTtBQUFWLEtBRHBDLEVBRUdDLElBRkgsQ0FFUSxVQUFDQyxRQUFELEVBQWM7QUFDbEJOLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSyxRQUFaO0FBQ0QsS0FKSCxXQUtTLFVBQUNDLEtBQUQsRUFBVztBQUNoQlAsYUFBTyxDQUFDQyxHQUFSLENBQVlNLEtBQVo7QUFDRCxLQVBIO0FBUUQ7O0FBRUQsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsMERBQWY7QUFBQSwyQkFDRTtBQUFJLGVBQVMsRUFBRUUsc0RBQU0sQ0FBQ0MsVUFBdEI7QUFBQSw4QkFDRTtBQUFBLCtCQUNFO0FBQUcsY0FBSSxFQUFDLEdBQVI7QUFBWSxpQkFBTyxFQUFFYixrQkFBckI7QUFBQSxxQkFDRyxPQURILGVBRUU7QUFBSyxlQUFHLEVBQUMsV0FBVDtBQUFxQixxQkFBUyxZQUFLUCxLQUFMO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBT0U7QUFBQSwrQkFDRTtBQUFHLGNBQUksRUFBQyxHQUFSO0FBQVksaUJBQU8sRUFBRWtCLG9CQUFyQjtBQUFBLHFCQUNHLFVBREgsZUFFRTtBQUFLLGVBQUcsRUFBQyxXQUFUO0FBQXFCLHFCQUFTLFlBQUtqQixPQUFMO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLGVBYUU7QUFBQSwrQkFDRTtBQUFHLGNBQUksRUFBQyxHQUFSO0FBQUEscUJBQ0csVUFESCxlQUVFO0FBQUssZUFBRyxFQUFDLFdBQVQ7QUFBcUIscUJBQVMsWUFBS0MsUUFBTDtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRixlQW1CRTtBQUFBLCtCQUNFO0FBQUcsY0FBSSxFQUFDLEdBQVI7QUFBQSxxQkFDRyxRQURILGVBRUU7QUFBSyxlQUFHLEVBQUMsV0FBVDtBQUFxQixxQkFBUyxZQUFLQyxNQUFMO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5CRixlQXlCRTtBQUFBLCtCQUNFO0FBQUcsY0FBSSxFQUFDLEdBQVI7QUFBQSxxQkFDRyxXQURILGVBRUU7QUFBSyxlQUFHLEVBQUMsV0FBVDtBQUFxQixxQkFBUyxZQUFLQyxRQUFMO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXpCRixlQStCRTtBQUFBLCtCQUNFO0FBQUcsY0FBSSxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUNEO0tBbkhlUCxHO0FBcUhEQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lbXBsb3llc3NMaXN0LjFmN2VlNDhjYWRmMGQzNGI4OWIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbmF2Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBhcGlVcmwgfSBmcm9tIFwiLi4vY29uZmlnLmpzb25cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOYXYoeyBlbXBzdGF0dXMsIGVtcGlkIH0pIHtcclxuICBsZXQgYWRkZWQgPSBcIlwiO1xyXG4gIGxldCBpbmNoZWNrID0gXCJcIjtcclxuICBsZXQgYXBwcm92ZWQgPSBcIlwiO1xyXG4gIGxldCBhY3RpdmUgPSBcIlwiO1xyXG4gIGxldCBpbmFjdGl2ZSA9IFwiXCI7XHJcbiAgY29uc3QgYXBpRW5kUG9pbnQgPSBhcGlVcmw7XHJcblxyXG4gIHN3aXRjaCAoZW1wc3RhdHVzKSB7XHJcbiAgICBjYXNlIFwiQURERURcIjoge1xyXG4gICAgICBhZGRlZCA9IFwiXCI7XHJcbiAgICAgIGluY2hlY2sgPSBcImhpZGRlblwiO1xyXG4gICAgICBhcHByb3ZlZCA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGFjdGl2ZSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGluYWN0aXZlID0gXCJoaWRkZW5cIjtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFwiSU4tQ0hFQ0tcIjoge1xyXG4gICAgICBhZGRlZCA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGluY2hlY2sgPSBcIlwiO1xyXG4gICAgICBhcHByb3ZlZCA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGFjdGl2ZSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGluYWN0aXZlID0gXCJoaWRkZW5cIjtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFwiQVBQUk9WRURcIjoge1xyXG4gICAgICBhZGRlZCA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGluY2hlY2sgPSBcImhpZGRlblwiO1xyXG4gICAgICBhcHByb3ZlZCA9IFwiXCI7XHJcbiAgICAgIGFjdGl2ZSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGluYWN0aXZlID0gXCJoaWRkZW5cIjtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFwiQUNUSVZFXCI6IHtcclxuICAgICAgYWRkZWQgPSBcImhpZGRlblwiO1xyXG4gICAgICBpbmNoZWNrID0gXCJoaWRkZW5cIjtcclxuICAgICAgYXBwcm92ZWQgPSBcImhpZGRlblwiO1xyXG4gICAgICBhY3RpdmUgPSBcIlwiO1xyXG4gICAgICBpbmFjdGl2ZSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBcIklOQUNUSVZFXCI6IHtcclxuICAgICAgYWRkZWQgPSBcImhpZGRlblwiO1xyXG4gICAgICBpbmNoZWNrID0gXCJoaWRkZW5cIjtcclxuICAgICAgYXBwcm92ZWQgPSBcImhpZGRlblwiO1xyXG4gICAgICBhY3RpdmUgPSBcImhpZGRlblwiO1xyXG4gICAgICBpbmFjdGl2ZSA9IFwiXCI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlX2FkZGVkX0NsaWNrKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRW1wbG95ZWUgaWQgaXNcIiwgYXBpRW5kUG9pbnQgKyBcIi9cIiArIGVtcGlkKTtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wYXRjaChhcGlFbmRQb2ludCArIFwiL1wiICsgZW1waWQsIHsgU3RhdHVzOiBcIkFEREVEXCIgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbiAgZnVuY3Rpb24gaGFuZGxlX2luY2hlY2tfQ2xpY2soZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coXCJFbXBsb3llZSBpZCBpc1wiLCBhcGlFbmRQb2ludCArIFwiL1wiICsgZW1waWQpO1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBhdGNoKGFwaUVuZFBvaW50ICsgXCIvXCIgKyBlbXBpZCwgeyBTdGF0dXM6IFwiQURERURcIiB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBiZy1ncmV5LWJnIGp1c3RpZnktY2VudGVyIGFsaWduLW1pZGRsZSBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmJyZWFkY3J1bWJ9PlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17aGFuZGxlX2FkZGVkX0NsaWNrfT5cclxuICAgICAgICAgICAge1wiQURERURcIn1cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvbGlrZS5zdmdcIiBjbGFzc05hbWU9e2Ake2FkZGVkfSBoLTQgaW5saW5lLWJsb2NrIG1sLTJgfSAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXtoYW5kbGVfaW5jaGVja19DbGlja30+XHJcbiAgICAgICAgICAgIHtcIkluLWNoZWNrXCJ9XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xpa2Uuc3ZnXCIgY2xhc3NOYW1lPXtgJHtpbmNoZWNrfSBoLTQgaW5saW5lLWJsb2NrYH0gLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIHtcImFwcHJvdmVkXCJ9XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xpa2Uuc3ZnXCIgY2xhc3NOYW1lPXtgJHthcHByb3ZlZH0gaC00IGlubGluZS1ibG9ja2B9IC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICB7XCJBY3RpdmVcIn1cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvbGlrZS5zdmdcIiBjbGFzc05hbWU9e2Ake2FjdGl2ZX0gaC00IGlubGluZS1ibG9ja2B9IC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICB7XCJJbmFjdGl2ZSBcIn1cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvbGlrZS5zdmdcIiBjbGFzc05hbWU9e2Ake2luYWN0aXZlfSBoLTQgaW5saW5lLWJsb2NrYH0gLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=