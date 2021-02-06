webpackHotUpdate_N_E("pages/addEmplyee",{

/***/ "./pages/addEmplyee.js":
/*!*****************************!*\
  !*** ./pages/addEmplyee.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");


var _jsxFileName = "D:\\React-pro\\Projects\\Task_pplflw\\task_pplflw\\pages\\addEmplyee.js",
    _s = $RefreshSig$();





function addEmplyee(props) {
  _s();

  var _this = this;

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"])(),
      register = _useForm.register,
      control = _useForm.control,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors;

  var _useFieldArray = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useFieldArray"])({
    control: control,
    name: "controlItems"
  }),
      fields = _useFieldArray.fields,
      append = _useFieldArray.append,
      remove = _useFieldArray.remove;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      success = _useState[0],
      setSuccess = _useState[1];

  var onSubmit = function onSubmit(data) {
    //console.log("success", success);
    console.table(data);
    setSuccess(true); //data.preventDefault();
    //console.log("success", success);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    className: "bg-grey-bg p-6 w-96 rounded-md mx-auto",
    onSubmit: handleSubmit(onSubmit),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mb-8",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "block font-semibold mb-3",
        children: "ID"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        className: "w-80 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01",
        placeholder: "Employee ID",
        name: "empid",
        ref: register({
          required: "ID is Requierd",
          minLength: {
            value: 2,
            message: "Minimum firstname is 2 char"
          }
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), errors.fName && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "ml-10 text-xs text-error",
        children: errors.empid.message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mb-8",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "block font-semibold mb-3",
        children: "Name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        className: "w-80 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01",
        placeholder: "First Name",
        name: "fName",
        ref: register({
          required: "First Name is Requierd",
          minLength: {
            value: 2,
            message: "Minimum firstname is 2 char"
          }
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), errors.fName && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "ml-10 text-xs text-error",
        children: errors.fName.message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mb-8",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "block font-semibold mb-3",
        children: "Family Name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        className: "w-80 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01",
        placeholder: "Secound Name",
        name: "sName",
        ref: register({
          required: "Secound Name is Requierd",
          minLength: {
            value: 2,
            message: "Minimum firstname is 2 char"
          }
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), errors.sName && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "ml-10 text-xs text-error",
        children: errors.sName.message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mb-8",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "block mb-3 font-bold",
        children: "Favourites"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this), fields.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "mb-5 flex items-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          ref: register(),
          name: "controlItems[".concat(index, "].name"),
          defaultValue: item.langName,
          className: "w-16 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:placeholder-dark focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
          ref: register(),
          name: "controlItems[".concat(index, "].type"),
          defaultValue: item.grad,
          className: "ml-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "",
            children: "Select ..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Good",
            children: "Good"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "VGood",
            children: "VGood"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Excellent",
            children: "Excellent"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          ref: register(),
          name: "controlItems[".concat(index, "].amount"),
          type: "number",
          defaultValue: item.amount,
          className: "w-16 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:placeholder-dark focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: "mr-2 focus:outline-none",
          onClick: function onClick() {
            return remove(index);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M7 11H17V13H7V11Z",
              fill: "#5B6366"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z",
              fill: "#5B6366"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 13
        }, _this)]
      }, item.id, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex items-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
        onClick: function onClick() {
          return append({});
        },
        className: "mr-2 cursor-pointer",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M13 7H11V11H7V13H11V17H13V13H17V11H13V7Z",
          fill: "#00A8E8"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z",
          fill: "#00A8E8"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex justify-end",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        className: "mt-3 mr-5 focus:outline-none bg-primary px-8 py-2 text-white font-semibold rounded-full",
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }, this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "ml-10 text-xs text-success",
      children: "Form submit successfully"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: "Back to Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

_s(addEmplyee, "jw50CK768auGVF/HW0x7VymmXwQ=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"], react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useFieldArray"]];
});

/* harmony default export */ __webpack_exports__["default"] = (addEmplyee);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRkRW1wbHllZS5qcyJdLCJuYW1lcyI6WyJhZGRFbXBseWVlIiwicHJvcHMiLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJjb250cm9sIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwidXNlRmllbGRBcnJheSIsIm5hbWUiLCJmaWVsZHMiLCJhcHBlbmQiLCJyZW1vdmUiLCJ1c2VTdGF0ZSIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsInRhYmxlIiwicmVxdWlyZWQiLCJtaW5MZW5ndGgiLCJ2YWx1ZSIsIm1lc3NhZ2UiLCJmTmFtZSIsImVtcGlkIiwic05hbWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsYW5nTmFtZSIsImdyYWQiLCJhbW91bnQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFBQTs7QUFBQTs7QUFBQSxpQkFDMkJDLCtEQUFPLEVBRGxDO0FBQUEsTUFDakJDLFFBRGlCLFlBQ2pCQSxRQURpQjtBQUFBLE1BQ1BDLE9BRE8sWUFDUEEsT0FETztBQUFBLE1BQ0VDLFlBREYsWUFDRUEsWUFERjtBQUFBLE1BQ2dCQyxNQURoQixZQUNnQkEsTUFEaEI7O0FBQUEsdUJBRVVDLHFFQUFhLENBQUM7QUFDL0NILFdBQU8sRUFBUEEsT0FEK0M7QUFFL0NJLFFBQUksRUFBRTtBQUZ5QyxHQUFELENBRnZCO0FBQUEsTUFFakJDLE1BRmlCLGtCQUVqQkEsTUFGaUI7QUFBQSxNQUVUQyxNQUZTLGtCQUVUQSxNQUZTO0FBQUEsTUFFREMsTUFGQyxrQkFFREEsTUFGQzs7QUFBQSxrQkFNS0Msc0RBQVEsQ0FBQyxLQUFELENBTmI7QUFBQSxNQU1sQkMsT0FOa0I7QUFBQSxNQU1UQyxVQU5TOztBQU96QixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxD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O0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQS9JRixFQXdKR0csT0FBTyxpQkFDTjtBQUFJLGVBQVMsRUFBQyw0QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpKSixlQTRKRTtBQUFBLDZCQUNFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0tEOztHQWxMUWIsVTtVQUM2Q0UsdUQsRUFDakJLLDZEOzs7QUFrTHRCUCx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZGRFbXBseWVlLjYyY2QxNjFiNzFlZjI4YjE4ZjRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VGb3JtLCB1c2VGaWVsZEFycmF5IH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5cclxuZnVuY3Rpb24gYWRkRW1wbHllZShwcm9wcykge1xyXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGNvbnRyb2wsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzIH0gPSB1c2VGb3JtKCk7XHJcbiAgY29uc3QgeyBmaWVsZHMsIGFwcGVuZCwgcmVtb3ZlIH0gPSB1c2VGaWVsZEFycmF5KHtcclxuICAgIGNvbnRyb2wsXHJcbiAgICBuYW1lOiBcImNvbnRyb2xJdGVtc1wiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBvblN1Ym1pdCA9IChkYXRhKSA9PiB7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwic3VjY2Vzc1wiLCBzdWNjZXNzKTtcclxuICAgIGNvbnNvbGUudGFibGUoZGF0YSk7XHJcbiAgICBzZXRTdWNjZXNzKHRydWUpO1xyXG4gICAgLy9kYXRhLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwic3VjY2Vzc1wiLCBzdWNjZXNzKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybVxyXG4gICAgICBjbGFzc05hbWU9XCJiZy1ncmV5LWJnIHAtNiB3LTk2IHJvdW5kZWQtbWQgbXgtYXV0b1wiXHJcbiAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLThcIj5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCBtYi0zXCI+SUQ8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy04MCBib3JkZXItZ3JleS1zaGQ1IGhvdmVyOmJvcmRlci1ncmV5LXNoZDIgZm9jdXM6b3V0bGluZS1mb2N1cy1ib3JkZXIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1kYXJrIGJvcmRlciByb3VuZGVkLW1kIHB4LTQgcHktMi41IHRleHQtZ3JleS1zaDAxXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1wbG95ZWUgSURcIlxyXG4gICAgICAgICAgbmFtZT1cImVtcGlkXCJcclxuICAgICAgICAgIHJlZj17cmVnaXN0ZXIoe1xyXG4gICAgICAgICAgICByZXF1aXJlZDogXCJJRCBpcyBSZXF1aWVyZFwiLFxyXG4gICAgICAgICAgICBtaW5MZW5ndGg6IHsgdmFsdWU6IDIsIG1lc3NhZ2U6IFwiTWluaW11bSBmaXJzdG5hbWUgaXMgMiBjaGFyXCIgfSxcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2Vycm9ycy5mTmFtZSAmJiAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0xMCB0ZXh0LXhzIHRleHQtZXJyb3JcIj57ZXJyb3JzLmVtcGlkLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLThcIj5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCBtYi0zXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTgwIGJvcmRlci1ncmV5LXNoZDUgaG92ZXI6Ym9yZGVyLWdyZXktc2hkMiBmb2N1czpvdXRsaW5lLWZvY3VzLWJvcmRlciBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWRhcmsgYm9yZGVyIHJvdW5kZWQtbWQgcHgtNCBweS0yLjUgdGV4dC1ncmV5LXNoMDFcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCJcclxuICAgICAgICAgIG5hbWU9XCJmTmFtZVwiXHJcbiAgICAgICAgICByZWY9e3JlZ2lzdGVyKHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiRmlyc3QgTmFtZSBpcyBSZXF1aWVyZFwiLFxyXG4gICAgICAgICAgICBtaW5MZW5ndGg6IHsgdmFsdWU6IDIsIG1lc3NhZ2U6IFwiTWluaW11bSBmaXJzdG5hbWUgaXMgMiBjaGFyXCIgfSxcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2Vycm9ycy5mTmFtZSAmJiAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0xMCB0ZXh0LXhzIHRleHQtZXJyb3JcIj57ZXJyb3JzLmZOYW1lLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLThcIj5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCBtYi0zXCI+RmFtaWx5IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy04MCBib3JkZXItZ3JleS1zaGQ1IGhvdmVyOmJvcmRlci1ncmV5LXNoZDIgZm9jdXM6b3V0bGluZS1mb2N1cy1ib3JkZXIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1kYXJrIGJvcmRlciByb3VuZGVkLW1kIHB4LTQgcHktMi41IHRleHQtZ3JleS1zaDAxXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2Vjb3VuZCBOYW1lXCJcclxuICAgICAgICAgIG5hbWU9XCJzTmFtZVwiXHJcbiAgICAgICAgICByZWY9e3JlZ2lzdGVyKHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiU2Vjb3VuZCBOYW1lIGlzIFJlcXVpZXJkXCIsXHJcbiAgICAgICAgICAgIG1pbkxlbmd0aDogeyB2YWx1ZTogMiwgbWVzc2FnZTogXCJNaW5pbXVtIGZpcnN0bmFtZSBpcyAyIGNoYXJcIiB9LFxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7ZXJyb3JzLnNOYW1lICYmIChcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTEwIHRleHQteHMgdGV4dC1lcnJvclwiPntlcnJvcnMuc05hbWUubWVzc2FnZX08L3A+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLThcIj5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgbWItMyBmb250LWJvbGRcIj5GYXZvdXJpdGVzPC9sYWJlbD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7ZmllbGRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cIm1iLTUgZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgey8qIHctOTYgKi99XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoKX1cclxuICAgICAgICAgICAgICBuYW1lPXtgY29udHJvbEl0ZW1zWyR7aW5kZXh9XS5uYW1lYH1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2l0ZW0ubGFuZ05hbWV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xNiBib3JkZXItZ3JleS1zaGQ1IGhvdmVyOmJvcmRlci1ncmV5LXNoZDIgZm9jdXM6b3V0bGluZS1mb2N1cy1ib3JkZXIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnBsYWNlaG9sZGVyLWRhcmsgZm9jdXM6Ym9yZGVyLWRhcmsgYm9yZGVyIHJvdW5kZWQtbWQgcHgtNCBweS0yLjUgdGV4dC1ncmV5LXNoMDFcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgcmVmPXtyZWdpc3RlcigpfVxyXG4gICAgICAgICAgICAgIG5hbWU9e2Bjb250cm9sSXRlbXNbJHtpbmRleH1dLnR5cGVgfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aXRlbS5ncmFkfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCAuLi48L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR29vZFwiPkdvb2Q8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVkdvb2RcIj5WR29vZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFeGNlbGxlbnRcIj5FeGNlbGxlbnQ8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoKX1cclxuICAgICAgICAgICAgICBuYW1lPXtgY29udHJvbEl0ZW1zWyR7aW5kZXh9XS5hbW91bnRgfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aXRlbS5hbW91bnR9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xNiBib3JkZXItZ3JleS1zaGQ1IGhvdmVyOmJvcmRlci1ncmV5LXNoZDIgZm9jdXM6b3V0bGluZS1mb2N1cy1ib3JkZXIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnBsYWNlaG9sZGVyLWRhcmsgZm9jdXM6Ym9yZGVyLWRhcmsgYm9yZGVyIHJvdW5kZWQtbWQgcHgtNCBweS0yLjUgdGV4dC1ncmV5LXNoMDFcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMiBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZShpbmRleCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI0XCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk03IDExSDE3VjEzSDdWMTFaXCIgZmlsbD1cIiM1QjYzNjZcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgZD1cIk0xMiAyQzYuNDg2IDIgMiA2LjQ4NiAyIDEyQzIgMTcuNTE0IDYuNDg2IDIyIDEyIDIyQzE3LjUxNCAyMiAyMiAxNy41MTQgMjIgMTJDMjIgNi40ODYgMTcuNTE0IDIgMTIgMlpNMTIgMjBDNy41ODkgMjAgNCAxNi40MTEgNCAxMkM0IDcuNTg5IDcuNTg5IDQgMTIgNEMxNi40MTEgNCAyMCA3LjU4OSAyMCAxMkMyMCAxNi40MTEgMTYuNDExIDIwIDEyIDIwWlwiXHJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCIjNUI2MzY2XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gYXBwZW5kKHt9KX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTIgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIyNFwiXHJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwYXRoIGQ9XCJNMTMgN0gxMVYxMUg3VjEzSDExVjE3SDEzVjEzSDE3VjExSDEzVjdaXCIgZmlsbD1cIiMwMEE4RThcIiAvPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk0xMiAyQzYuNDg2IDIgMiA2LjQ4NiAyIDEyQzIgMTcuNTE0IDYuNDg2IDIyIDEyIDIyQzE3LjUxNCAyMiAyMiAxNy41MTQgMjIgMTJDMjIgNi40ODYgMTcuNTE0IDIgMTIgMlpNMTIgMjBDNy41ODkgMjAgNCAxNi40MTEgNCAxMkM0IDcuNTg5IDcuNTg5IDQgMTIgNEMxNi40MTEgNCAyMCA3LjU4OSAyMCAxMkMyMCAxNi40MTEgMTYuNDExIDIwIDEyIDIwWlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCIjMDBBOEU4XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgey8qIDxpbnB1dFxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICBjbGFzc05hbWU9XCJ3LTcyIGJvcmRlciBib3JkZXItYWNjZW50ICBmb2N1czpvdXRsaW5lLW5vbmUgcm91bmRlZC1tZCBweC00IHB5LTIuNSB0ZXh0LWdyZXktc2gwMVwiXHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIG5hbWU9XCJmYXZvdXJpdGVcIlxyXG4gICAgICAgIHZhbHVlPXtjb250ZW50fVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBmYXZvdXJpdGVcIlxyXG4gICAgICAvPiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiBcclxuICAgIDxidXR0b25cclxuICAgICAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtc20gcm91bmRlZC1mdWxsIHRleHQtd2hpdGUgYmctc3VjY2VzcyB3LTQgaC00XCJcclxuICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IGFwcGVuZCh7fSl9XHJcbiAgICA+XHJcbiAgICAgICtcclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJyPjwvYnI+ICovfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC0zIG1yLTUgZm9jdXM6b3V0bGluZS1ub25lIGJnLXByaW1hcnkgcHgtOCBweS0yIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCByb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtzdWNjZXNzICYmIChcclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWwtMTAgdGV4dC14cyB0ZXh0LXN1Y2Nlc3NcIj5Gb3JtIHN1Ym1pdCBzdWNjZXNzZnVsbHk8L2gxPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPGgyPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YT5CYWNrIHRvIEhvbWU8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2gyPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZEVtcGx5ZWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=