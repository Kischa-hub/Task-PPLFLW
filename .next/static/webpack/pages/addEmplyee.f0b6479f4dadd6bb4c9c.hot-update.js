webpackHotUpdate_N_E("pages/addEmplyee",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

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
        name: "empid" //   ref={register({
        //     required: "ID is Requierd",
        //     minLength: { value: 2, message: "Minimum firstname is 2 char" }, //^[1-9][0-9]?$|^100$
        //   })}
        ,
        ref: register({
          required: "ID is Requierd & accept only digit from 1 to 100",
          pattern: {
            value: /^[1-9][0-9]?$|^100$/,
            message: "accept only digit from 1 to 100"
          }
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), errors.empid && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "ml-10 text-xs text-error",
        children: errors.empid.message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
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
        lineNumber: 48,
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
        lineNumber: 49,
        columnNumber: 9
      }, this), errors.fName && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "ml-10 text-xs text-error",
        children: errors.fName.message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mb-8",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "block font-semibold mb-3",
        children: "Status"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
        defaultValue: item.grad,
        className: "w-80 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01",
        name: "empstatus",
        ref: register({
          required: "Secound Name is Requierd",
          minLength: {
            value: 2,
            message: "Minimum firstname is 2 char"
          }
        }),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "",
          children: "Select ..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Good",
          children: "Good"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "VGood",
          children: "VGood"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Excellent",
          children: "Excellent"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this), errors.empstatus && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "ml-10 text-xs text-error",
        children: errors.empstatus.message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mb-8",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "block mb-3 font-bold",
        children: "Favourites"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
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
          lineNumber: 103,
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
            lineNumber: 115,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Good",
            children: "Good"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "VGood",
            children: "VGood"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Excellent",
            children: "Excellent"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          ref: register(),
          name: "controlItems[".concat(index, "].amount"),
          type: "number",
          defaultValue: item.amount,
          className: "w-16 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:placeholder-dark focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
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
              lineNumber: 139,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z",
              fill: "#5B6366"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }, _this)]
      }, item.id, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
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
          lineNumber: 160,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z",
          fill: "#00A8E8"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex justify-end",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        className: "mt-3 mr-5 focus:outline-none bg-primary px-8 py-2 text-white font-semibold rounded-full",
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 7
    }, this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "ml-10 text-xs text-success",
      children: "Form submit successfully"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: "Back to Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 198,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRkRW1wbHllZS5qcyJdLCJuYW1lcyI6WyJhZGRFbXBseWVlIiwicHJvcHMiLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJjb250cm9sIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwidXNlRmllbGRBcnJheSIsIm5hbWUiLCJmaWVsZHMiLCJhcHBlbmQiLCJyZW1vdmUiLCJ1c2VTdGF0ZSIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsInRhYmxlIiwicmVxdWlyZWQiLCJwYXR0ZXJuIiwidmFsdWUiLCJtZXNzYWdlIiwiZW1waWQiLCJtaW5MZW5ndGgiLCJmTmFtZSIsIml0ZW0iLCJncmFkIiwiZW1wc3RhdHVzIiwibWFwIiwiaW5kZXgiLCJsYW5nTmFtZSIsImFtb3VudCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUFBOztBQUFBOztBQUFBLGlCQUMyQkMsK0RBQU8sRUFEbEM7QUFBQSxNQUNqQkMsUUFEaUIsWUFDakJBLFFBRGlCO0FBQUEsTUFDUEMsT0FETyxZQUNQQSxPQURPO0FBQUEsTUFDRUMsWUFERixZQUNFQSxZQURGO0FBQUEsTUFDZ0JDLE1BRGhCLFlBQ2dCQSxNQURoQjs7QUFBQSx1QkFFVUMscUVBQWEsQ0FBQztBQUMvQ0gsV0FBTyxFQUFQQSxPQUQrQztBQUUvQ0ksUUFBSSxFQUFFO0FBRnlDLEdBQUQsQ0FGdkI7QUFBQSxNQUVqQkMsTUFGaUIsa0JBRWpCQSxNQUZpQjtBQUFBLE1BRVRDLE1BRlMsa0JBRVRBLE1BRlM7QUFBQSxNQUVEQyxNQUZDLGtCQUVEQSxNQUZDOztBQUFBLGtCQU1LQyxzREFBUSxDQUFDLEtBQUQsQ0FOYjtBQUFBLE1BTWxCQyxPQU5rQjtBQUFBLE1BTVRDLFVBTlM7O0FBT3pCLE1BQU1DLFFBQVEs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QVNFO0FBQU0sV0FBQyxFQUFDLDBDQUFSO0FBQW1ELGNBQUksRUFBQztBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRGLGVBVUU7QUFDRSxXQUFDLEVBQUMsMk1BREo7QUFFRSxjQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsSUYsZUFxS0U7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQSw2QkFDRTtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsaUJBQVMsRUFBQyx5RkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyS0YsRUE4S0dHLE9BQU8saUJBQ047QUFBSSxlQUFTLEVBQUMsNEJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEvS0osZUFrTEU7QUFBQSw2QkFDRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBMRDs7R0F4TVFiLFU7VUFDNkNFLHVELEVBQ2pCSyw2RDs7O0FBd010QlAseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRkRW1wbHllZS5mMGI2NDc5ZjRkYWRkNmJiNGM5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSwgdXNlRmllbGRBcnJheSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuXHJcbmZ1bmN0aW9uIGFkZEVtcGx5ZWUocHJvcHMpIHtcclxuICBjb25zdCB7IHJlZ2lzdGVyLCBjb250cm9sLCBoYW5kbGVTdWJtaXQsIGVycm9ycyB9ID0gdXNlRm9ybSgpO1xyXG4gIGNvbnN0IHsgZmllbGRzLCBhcHBlbmQsIHJlbW92ZSB9ID0gdXNlRmllbGRBcnJheSh7XHJcbiAgICBjb250cm9sLFxyXG4gICAgbmFtZTogXCJjb250cm9sSXRlbXNcIixcclxuICB9KTtcclxuICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4ge1xyXG4gICAgLy9jb25zb2xlLmxvZyhcInN1Y2Nlc3NcIiwgc3VjY2Vzcyk7XHJcbiAgICBjb25zb2xlLnRhYmxlKGRhdGEpO1xyXG4gICAgc2V0U3VjY2Vzcyh0cnVlKTtcclxuICAgIC8vZGF0YS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcInN1Y2Nlc3NcIiwgc3VjY2Vzcyk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm1cclxuICAgICAgY2xhc3NOYW1lPVwiYmctZ3JleS1iZyBwLTYgdy05NiByb3VuZGVkLW1kIG14LWF1dG9cIlxyXG4gICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgbWItM1wiPklEPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctODAgYm9yZGVyLWdyZXktc2hkNSBob3Zlcjpib3JkZXItZ3JleS1zaGQyIGZvY3VzOm91dGxpbmUtZm9jdXMtYm9yZGVyIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZGFyayBib3JkZXIgcm91bmRlZC1tZCBweC00IHB5LTIuNSB0ZXh0LWdyZXktc2gwMVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtcGxveWVlIElEXCJcclxuICAgICAgICAgIG5hbWU9XCJlbXBpZFwiXHJcbiAgICAgICAgICAvLyAgIHJlZj17cmVnaXN0ZXIoe1xyXG4gICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiBcIklEIGlzIFJlcXVpZXJkXCIsXHJcbiAgICAgICAgICAvLyAgICAgbWluTGVuZ3RoOiB7IHZhbHVlOiAyLCBtZXNzYWdlOiBcIk1pbmltdW0gZmlyc3RuYW1lIGlzIDIgY2hhclwiIH0sIC8vXlsxLTldWzAtOV0/JHxeMTAwJFxyXG4gICAgICAgICAgLy8gICB9KX1cclxuICAgICAgICAgIHJlZj17cmVnaXN0ZXIoe1xyXG4gICAgICAgICAgICByZXF1aXJlZDogXCJJRCBpcyBSZXF1aWVyZCAmIGFjY2VwdCBvbmx5IGRpZ2l0IGZyb20gMSB0byAxMDBcIixcclxuICAgICAgICAgICAgcGF0dGVybjoge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiAvXlsxLTldWzAtOV0/JHxeMTAwJC8sXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJhY2NlcHQgb25seSBkaWdpdCBmcm9tIDEgdG8gMTAwXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtlcnJvcnMuZW1waWQgJiYgKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMTAgdGV4dC14cyB0ZXh0LWVycm9yXCI+e2Vycm9ycy5lbXBpZC5tZXNzYWdlfTwvcD5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgbWItM1wiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy04MCBib3JkZXItZ3JleS1zaGQ1IGhvdmVyOmJvcmRlci1ncmV5LXNoZDIgZm9jdXM6b3V0bGluZS1mb2N1cy1ib3JkZXIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1kYXJrIGJvcmRlciByb3VuZGVkLW1kIHB4LTQgcHktMi41IHRleHQtZ3JleS1zaDAxXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiXHJcbiAgICAgICAgICBuYW1lPVwiZk5hbWVcIlxyXG4gICAgICAgICAgcmVmPXtyZWdpc3Rlcih7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBcIkZpcnN0IE5hbWUgaXMgUmVxdWllcmRcIixcclxuICAgICAgICAgICAgbWluTGVuZ3RoOiB7IHZhbHVlOiAyLCBtZXNzYWdlOiBcIk1pbmltdW0gZmlyc3RuYW1lIGlzIDIgY2hhclwiIH0sXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtlcnJvcnMuZk5hbWUgJiYgKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMTAgdGV4dC14cyB0ZXh0LWVycm9yXCI+e2Vycm9ycy5mTmFtZS5tZXNzYWdlfTwvcD5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgbWItM1wiPlN0YXR1czwvbGFiZWw+XHJcbiAgICAgICAgey8qIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy04MCBib3JkZXItZ3JleS1zaGQ1IGhvdmVyOmJvcmRlci1ncmV5LXNoZDIgZm9jdXM6b3V0bGluZS1mb2N1cy1ib3JkZXIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1kYXJrIGJvcmRlciByb3VuZGVkLW1kIHB4LTQgcHktMi41IHRleHQtZ3JleS1zaDAxXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2Vjb3VuZCBOYW1lXCJcclxuICAgICAgICAgIG5hbWU9XCJzTmFtZVwiXHJcbiAgICAgICAgICByZWY9e3JlZ2lzdGVyKHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiU2Vjb3VuZCBOYW1lIGlzIFJlcXVpZXJkXCIsXHJcbiAgICAgICAgICAgIG1pbkxlbmd0aDogeyB2YWx1ZTogMiwgbWVzc2FnZTogXCJNaW5pbXVtIGZpcnN0bmFtZSBpcyAyIGNoYXJcIiB9LFxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgLz4gKi99XHJcblxyXG4gICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aXRlbS5ncmFkfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy04MCBib3JkZXItZ3JleS1zaGQ1IGhvdmVyOmJvcmRlci1ncmV5LXNoZDIgZm9jdXM6b3V0bGluZS1mb2N1cy1ib3JkZXIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1kYXJrIGJvcmRlciByb3VuZGVkLW1kIHB4LTQgcHktMi41IHRleHQtZ3JleS1zaDAxXCJcclxuICAgICAgICAgIG5hbWU9XCJlbXBzdGF0dXNcIlxyXG4gICAgICAgICAgcmVmPXtyZWdpc3Rlcih7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBcIlNlY291bmQgTmFtZSBpcyBSZXF1aWVyZFwiLFxyXG4gICAgICAgICAgICBtaW5MZW5ndGg6IHsgdmFsdWU6IDIsIG1lc3NhZ2U6IFwiTWluaW11bSBmaXJzdG5hbWUgaXMgMiBjaGFyXCIgfSxcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgLi4uPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR29vZFwiPkdvb2Q8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJWR29vZFwiPlZHb29kPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRXhjZWxsZW50XCI+RXhjZWxsZW50PC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAge2Vycm9ycy5lbXBzdGF0dXMgJiYgKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMTAgdGV4dC14cyB0ZXh0LWVycm9yXCI+e2Vycm9ycy5lbXBzdGF0dXMubWVzc2FnZX08L3A+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLThcIj5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgbWItMyBmb250LWJvbGRcIj5GYXZvdXJpdGVzPC9sYWJlbD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7ZmllbGRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cIm1iLTUgZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgey8qIHctOTYgKi99XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoKX1cclxuICAgICAgICAgICAgICBuYW1lPXtgY29udHJvbEl0ZW1zWyR7aW5kZXh9XS5uYW1lYH1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2l0ZW0ubGFuZ05hbWV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xNiBib3JkZXItZ3JleS1zaGQ1IGhvdmVyOmJvcmRlci1ncmV5LXNoZDIgZm9jdXM6b3V0bGluZS1mb2N1cy1ib3JkZXIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnBsYWNlaG9sZGVyLWRhcmsgZm9jdXM6Ym9yZGVyLWRhcmsgYm9yZGVyIHJvdW5kZWQtbWQgcHgtNCBweS0yLjUgdGV4dC1ncmV5LXNoMDFcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgcmVmPXtyZWdpc3RlcigpfVxyXG4gICAgICAgICAgICAgIG5hbWU9e2Bjb250cm9sSXRlbXNbJHtpbmRleH1dLnR5cGVgfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aXRlbS5ncmFkfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCAuLi48L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR29vZFwiPkdvb2Q8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVkdvb2RcIj5WR29vZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFeGNlbGxlbnRcIj5FeGNlbGxlbnQ8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoKX1cclxuICAgICAgICAgICAgICBuYW1lPXtgY29udHJvbEl0ZW1zWyR7aW5kZXh9XS5hbW91bnRgfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aXRlbS5hbW91bnR9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xNiBib3JkZXItZ3JleS1zaGQ1IGhvdmVyOmJvcmRlci1ncmV5LXNoZDIgZm9jdXM6b3V0bGluZS1mb2N1cy1ib3JkZXIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnBsYWNlaG9sZGVyLWRhcmsgZm9jdXM6Ym9yZGVyLWRhcmsgYm9yZGVyIHJvdW5kZWQtbWQgcHgtNCBweS0yLjUgdGV4dC1ncmV5LXNoMDFcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMiBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZShpbmRleCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI0XCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk03IDExSDE3VjEzSDdWMTFaXCIgZmlsbD1cIiM1QjYzNjZcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgZD1cIk0xMiAyQzYuNDg2IDIgMiA2LjQ4NiAyIDEyQzIgMTcuNTE0IDYuNDg2IDIyIDEyIDIyQzE3LjUxNCAyMiAyMiAxNy41MTQgMjIgMTJDMjIgNi40ODYgMTcuNTE0IDIgMTIgMlpNMTIgMjBDNy41ODkgMjAgNCAxNi40MTEgNCAxMkM0IDcuNTg5IDcuNTg5IDQgMTIgNEMxNi40MTEgNCAyMCA3LjU4OSAyMCAxMkMyMCAxNi40MTEgMTYuNDExIDIwIDEyIDIwWlwiXHJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCIjNUI2MzY2XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gYXBwZW5kKHt9KX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTIgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIyNFwiXHJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwYXRoIGQ9XCJNMTMgN0gxMVYxMUg3VjEzSDExVjE3SDEzVjEzSDE3VjExSDEzVjdaXCIgZmlsbD1cIiMwMEE4RThcIiAvPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk0xMiAyQzYuNDg2IDIgMiA2LjQ4NiAyIDEyQzIgMTcuNTE0IDYuNDg2IDIyIDEyIDIyQzE3LjUxNCAyMiAyMiAxNy41MTQgMjIgMTJDMjIgNi40ODYgMTcuNTE0IDIgMTIgMlpNMTIgMjBDNy41ODkgMjAgNCAxNi40MTEgNCAxMkM0IDcuNTg5IDcuNTg5IDQgMTIgNEMxNi40MTEgNCAyMCA3LjU4OSAyMCAxMkMyMCAxNi40MTEgMTYuNDExIDIwIDEyIDIwWlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCIjMDBBOEU4XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgey8qIDxpbnB1dFxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICBjbGFzc05hbWU9XCJ3LTcyIGJvcmRlciBib3JkZXItYWNjZW50ICBmb2N1czpvdXRsaW5lLW5vbmUgcm91bmRlZC1tZCBweC00IHB5LTIuNSB0ZXh0LWdyZXktc2gwMVwiXHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIG5hbWU9XCJmYXZvdXJpdGVcIlxyXG4gICAgICAgIHZhbHVlPXtjb250ZW50fVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBmYXZvdXJpdGVcIlxyXG4gICAgICAvPiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiBcclxuICAgIDxidXR0b25cclxuICAgICAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtc20gcm91bmRlZC1mdWxsIHRleHQtd2hpdGUgYmctc3VjY2VzcyB3LTQgaC00XCJcclxuICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IGFwcGVuZCh7fSl9XHJcbiAgICA+XHJcbiAgICAgICtcclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJyPjwvYnI+ICovfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC0zIG1yLTUgZm9jdXM6b3V0bGluZS1ub25lIGJnLXByaW1hcnkgcHgtOCBweS0yIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCByb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtzdWNjZXNzICYmIChcclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWwtMTAgdGV4dC14cyB0ZXh0LXN1Y2Nlc3NcIj5Gb3JtIHN1Ym1pdCBzdWNjZXNzZnVsbHk8L2gxPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPGgyPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YT5CYWNrIHRvIEhvbWU8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2gyPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZEVtcGx5ZWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=