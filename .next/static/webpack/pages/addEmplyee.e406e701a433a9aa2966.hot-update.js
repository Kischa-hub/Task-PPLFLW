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
        className: "w-80 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01",
        name: "empstatus",
        ref: register({
          required: "Secound Name is Requierd"
        }),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "",
          children: "Select ..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "ADDED",
          children: "ADDED"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "IN-CHECK",
          children: "IN-CHECK"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "APPROVED",
          children: "APPROVED"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "ACTIVE",
          children: "ACTIVE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "INACTIVE",
          children: "INACTIVE"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRkRW1wbHllZS5qcyJdLCJuYW1lcyI6WyJhZGRFbXBseWVlIiwicHJvcHMiLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJjb250cm9sIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwidXNlRmllbGRBcnJheSIsIm5hbWUiLCJmaWVsZHMiLCJhcHBlbmQiLCJyZW1vdmUiLCJ1c2VTdGF0ZSIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsInRhYmxlIiwicmVxdWlyZWQiLCJwYXR0ZXJuIiwidmFsdWUiLCJtZXNzYWdlIiwiZW1waWQiLCJtaW5MZW5ndGgiLCJmTmFtZSIsImVtcHN0YXR1cyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImxhbmdOYW1lIiwiZ3JhZCIsImFtb3VudCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUFBOztBQUFBOztBQUFBLGlCQUMyQkMsK0RBQU8sRUFEbEM7QUFBQSxNQUNqQkMsUUFEaUIsWUFDakJBLFFBRGlCO0FBQUEsTUFDUEMsT0FETyxZQUNQQSxPQURPO0FBQUEsTUFDRUMsWUFERixZQUNFQSxZQURGO0FBQUEsTUFDZ0JDLE1BRGhCLFlBQ2dCQSxNQURoQjs7QUFBQSx1QkFFVUMscUVBQWEsQ0FBQztBQUMvQ0gsV0FBTyxFQUFQQSxPQUQrQztBQUUvQ0ksUUFBSSxFQUFFO0FBRnlDLEdBQUQsQ0FGdkI7QUFBQSxNQUVqQkMsTUFGaUIsa0JBRWpCQSxNQUZpQjtBQUFBLE1BRVRDLE1BRlMsa0JBRVRBLE1BRlM7QUFBQSxNQUVEQyxNQUZDLGtCQUVEQSxNQUZDOztBQUFBLGtCQU1LQyxzREFBUSxDQUFDLEtBQUQsQ0FOYjtBQUFBLE1BTWxCQyxPQU5rQjtBQUFBLE1BTVRDLFVBTlM7O0FBT3pCLE1BQU1DLFFBQVEsR0FB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QUMsNEJBUFI7QUFBQSxnQ0FTRTtBQUFNLFdBQUMsRUFBQywwQ0FBUjtBQUFtRCxjQUFJLEVBQUM7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURixlQVVFO0FBQ0UsV0FBQyxFQUFDLDJNQURKO0FBRUUsY0FBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbElGLGVBcUtFO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsNkJBQ0U7QUFDRSxZQUFJLEVBQUMsUUFEUDtBQUVFLGlCQUFTLEVBQUMseUZBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcktGLEVBOEtHRyxPQUFPLGlCQUNOO0FBQUksZUFBUyxFQUFDLDRCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0tKLGVBa0xFO0FBQUEsNkJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwTEQ7O0dBeE1RYixVO1VBQzZDRSx1RCxFQUNqQkssNkQ7OztBQXdNdEJQLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkZEVtcGx5ZWUuZTQwNmU3MDFhNDMzYTlhYTI5NjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUZvcm0sIHVzZUZpZWxkQXJyYXkgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcblxyXG5mdW5jdGlvbiBhZGRFbXBseWVlKHByb3BzKSB7XHJcbiAgY29uc3QgeyByZWdpc3RlciwgY29udHJvbCwgaGFuZGxlU3VibWl0LCBlcnJvcnMgfSA9IHVzZUZvcm0oKTtcclxuICBjb25zdCB7IGZpZWxkcywgYXBwZW5kLCByZW1vdmUgfSA9IHVzZUZpZWxkQXJyYXkoe1xyXG4gICAgY29udHJvbCxcclxuICAgIG5hbWU6IFwiY29udHJvbEl0ZW1zXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IHtcclxuICAgIC8vY29uc29sZS5sb2coXCJzdWNjZXNzXCIsIHN1Y2Nlc3MpO1xyXG4gICAgY29uc29sZS50YWJsZShkYXRhKTtcclxuICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XHJcbiAgICAvL2RhdGEucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vY29uc29sZS5sb2coXCJzdWNjZXNzXCIsIHN1Y2Nlc3MpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtXHJcbiAgICAgIGNsYXNzTmFtZT1cImJnLWdyZXktYmcgcC02IHctOTYgcm91bmRlZC1tZCBteC1hdXRvXCJcclxuICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIG1iLTNcIj5JRDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTgwIGJvcmRlci1ncmV5LXNoZDUgaG92ZXI6Ym9yZGVyLWdyZXktc2hkMiBmb2N1czpvdXRsaW5lLWZvY3VzLWJvcmRlciBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWRhcmsgYm9yZGVyIHJvdW5kZWQtbWQgcHgtNCBweS0yLjUgdGV4dC1ncmV5LXNoMDFcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbXBsb3llZSBJRFwiXHJcbiAgICAgICAgICBuYW1lPVwiZW1waWRcIlxyXG4gICAgICAgICAgLy8gICByZWY9e3JlZ2lzdGVyKHtcclxuICAgICAgICAgIC8vICAgICByZXF1aXJlZDogXCJJRCBpcyBSZXF1aWVyZFwiLFxyXG4gICAgICAgICAgLy8gICAgIG1pbkxlbmd0aDogeyB2YWx1ZTogMiwgbWVzc2FnZTogXCJNaW5pbXVtIGZpcnN0bmFtZSBpcyAyIGNoYXJcIiB9LCAvL15bMS05XVswLTldPyR8XjEwMCRcclxuICAgICAgICAgIC8vICAgfSl9XHJcbiAgICAgICAgICByZWY9e3JlZ2lzdGVyKHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiSUQgaXMgUmVxdWllcmQgJiBhY2NlcHQgb25seSBkaWdpdCBmcm9tIDEgdG8gMTAwXCIsXHJcbiAgICAgICAgICAgIHBhdHRlcm46IHtcclxuICAgICAgICAgICAgICB2YWx1ZTogL15bMS05XVswLTldPyR8XjEwMCQvLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiYWNjZXB0IG9ubHkgZGlnaXQgZnJvbSAxIHRvIDEwMFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7ZXJyb3JzLmVtcGlkICYmIChcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTEwIHRleHQteHMgdGV4dC1lcnJvclwiPntlcnJvcnMuZW1waWQubWVzc2FnZX08L3A+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIG1iLTNcIj5OYW1lPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctODAgYm9yZGVyLWdyZXktc2hkNSBob3Zlcjpib3JkZXItZ3JleS1zaGQyIGZvY3VzOm91dGxpbmUtZm9jdXMtYm9yZGVyIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZGFyayBib3JkZXIgcm91bmRlZC1tZCBweC00IHB5LTIuNSB0ZXh0LWdyZXktc2gwMVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIlxyXG4gICAgICAgICAgbmFtZT1cImZOYW1lXCJcclxuICAgICAgICAgIHJlZj17cmVnaXN0ZXIoe1xyXG4gICAgICAgICAgICByZXF1aXJlZDogXCJGaXJzdCBOYW1lIGlzIFJlcXVpZXJkXCIsXHJcbiAgICAgICAgICAgIG1pbkxlbmd0aDogeyB2YWx1ZTogMiwgbWVzc2FnZTogXCJNaW5pbXVtIGZpcnN0bmFtZSBpcyAyIGNoYXJcIiB9LFxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7ZXJyb3JzLmZOYW1lICYmIChcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTEwIHRleHQteHMgdGV4dC1lcnJvclwiPntlcnJvcnMuZk5hbWUubWVzc2FnZX08L3A+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIG1iLTNcIj5TdGF0dXM8L2xhYmVsPlxyXG4gICAgICAgIHsvKiA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctODAgYm9yZGVyLWdyZXktc2hkNSBob3Zlcjpib3JkZXItZ3JleS1zaGQyIGZvY3VzOm91dGxpbmUtZm9jdXMtYm9yZGVyIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZGFyayBib3JkZXIgcm91bmRlZC1tZCBweC00IHB5LTIuNSB0ZXh0LWdyZXktc2gwMVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlY291bmQgTmFtZVwiXHJcbiAgICAgICAgICBuYW1lPVwic05hbWVcIlxyXG4gICAgICAgICAgcmVmPXtyZWdpc3Rlcih7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBcIlNlY291bmQgTmFtZSBpcyBSZXF1aWVyZFwiLFxyXG4gICAgICAgICAgICBtaW5MZW5ndGg6IHsgdmFsdWU6IDIsIG1lc3NhZ2U6IFwiTWluaW11bSBmaXJzdG5hbWUgaXMgMiBjaGFyXCIgfSxcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIC8+ICovfVxyXG5cclxuICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTgwIGJvcmRlci1ncmV5LXNoZDUgaG92ZXI6Ym9yZGVyLWdyZXktc2hkMiBmb2N1czpvdXRsaW5lLWZvY3VzLWJvcmRlciBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWRhcmsgYm9yZGVyIHJvdW5kZWQtbWQgcHgtNCBweS0yLjUgdGV4dC1ncmV5LXNoMDFcIlxyXG4gICAgICAgICAgbmFtZT1cImVtcHN0YXR1c1wiXHJcbiAgICAgICAgICByZWY9e3JlZ2lzdGVyKHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiU2Vjb3VuZCBOYW1lIGlzIFJlcXVpZXJkXCIsXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IC4uLjwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFEREVEXCI+QURERUQ8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJJTi1DSEVDS1wiPklOLUNIRUNLPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQVBQUk9WRURcIj5BUFBST1ZFRDwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFDVElWRVwiPkFDVElWRTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIklOQUNUSVZFXCI+SU5BQ1RJVkU8L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICB7ZXJyb3JzLmVtcHN0YXR1cyAmJiAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0xMCB0ZXh0LXhzIHRleHQtZXJyb3JcIj57ZXJyb3JzLmVtcHN0YXR1cy5tZXNzYWdlfTwvcD5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayBtYi0zIGZvbnQtYm9sZFwiPkZhdm91cml0ZXM8L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtmaWVsZHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwibWItNSBmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICB7Lyogdy05NiAqL31cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgcmVmPXtyZWdpc3RlcigpfVxyXG4gICAgICAgICAgICAgIG5hbWU9e2Bjb250cm9sSXRlbXNbJHtpbmRleH1dLm5hbWVgfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aXRlbS5sYW5nTmFtZX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTE2IGJvcmRlci1ncmV5LXNoZDUgaG92ZXI6Ym9yZGVyLWdyZXktc2hkMiBmb2N1czpvdXRsaW5lLWZvY3VzLWJvcmRlciBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cGxhY2Vob2xkZXItZGFyayBmb2N1czpib3JkZXItZGFyayBib3JkZXIgcm91bmRlZC1tZCBweC00IHB5LTIuNSB0ZXh0LWdyZXktc2gwMVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKCl9XHJcbiAgICAgICAgICAgICAgbmFtZT17YGNvbnRyb2xJdGVtc1ske2luZGV4fV0udHlwZWB9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpdGVtLmdyYWR9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IC4uLjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJHb29kXCI+R29vZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJWR29vZFwiPlZHb29kPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkV4Y2VsbGVudFwiPkV4Y2VsbGVudDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgcmVmPXtyZWdpc3RlcigpfVxyXG4gICAgICAgICAgICAgIG5hbWU9e2Bjb250cm9sSXRlbXNbJHtpbmRleH1dLmFtb3VudGB9XHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpdGVtLmFtb3VudH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTE2IGJvcmRlci1ncmV5LXNoZDUgaG92ZXI6Ym9yZGVyLWdyZXktc2hkMiBmb2N1czpvdXRsaW5lLWZvY3VzLWJvcmRlciBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cGxhY2Vob2xkZXItZGFyayBmb2N1czpib3JkZXItZGFyayBib3JkZXIgcm91bmRlZC1tZCBweC00IHB5LTIuNSB0ZXh0LWdyZXktc2gwMVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlKGluZGV4KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTcgMTFIMTdWMTNIN1YxMVpcIiBmaWxsPVwiIzVCNjM2NlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTEyIDJDNi40ODYgMiAyIDYuNDg2IDIgMTJDMiAxNy41MTQgNi40ODYgMjIgMTIgMjJDMTcuNTE0IDIyIDIyIDE3LjUxNCAyMiAxMkMyMiA2LjQ4NiAxNy41MTQgMiAxMiAyWk0xMiAyMEM3LjU4OSAyMCA0IDE2LjQxMSA0IDEyQzQgNy41ODkgNy41ODkgNCAxMiA0QzE2LjQxMSA0IDIwIDcuNTg5IDIwIDEyQzIwIDE2LjQxMSAxNi40MTEgMjAgMTIgMjBaXCJcclxuICAgICAgICAgICAgICAgICAgZmlsbD1cIiM1QjYzNjZcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhcHBlbmQoe30pfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXItMiBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICAgIGhlaWdodD1cIjI0XCJcclxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHBhdGggZD1cIk0xMyA3SDExVjExSDdWMTNIMTFWMTdIMTNWMTNIMTdWMTFIMTNWN1pcIiBmaWxsPVwiIzAwQThFOFwiIC8+XHJcbiAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTEyIDJDNi40ODYgMiAyIDYuNDg2IDIgMTJDMiAxNy41MTQgNi40ODYgMjIgMTIgMjJDMTcuNTE0IDIyIDIyIDE3LjUxNCAyMiAxMkMyMiA2LjQ4NiAxNy41MTQgMiAxMiAyWk0xMiAyMEM3LjU4OSAyMCA0IDE2LjQxMSA0IDEyQzQgNy41ODkgNy41ODkgNCAxMiA0QzE2LjQxMSA0IDIwIDcuNTg5IDIwIDEyQzIwIDE2LjQxMSAxNi40MTEgMjAgMTIgMjBaXCJcclxuICAgICAgICAgICAgZmlsbD1cIiMwMEE4RThcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgICB7LyogPGlucHV0XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInctNzIgYm9yZGVyIGJvcmRlci1hY2NlbnQgIGZvY3VzOm91dGxpbmUtbm9uZSByb3VuZGVkLW1kIHB4LTQgcHktMi41IHRleHQtZ3JleS1zaDAxXCJcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgbmFtZT1cImZhdm91cml0ZVwiXHJcbiAgICAgICAgdmFsdWU9e2NvbnRlbnR9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGZhdm91cml0ZVwiXHJcbiAgICAgIC8+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1zbSByb3VuZGVkLWZ1bGwgdGV4dC13aGl0ZSBiZy1zdWNjZXNzIHctNCBoLTRcIlxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgb25DbGljaz17KCkgPT4gYXBwZW5kKHt9KX1cclxuICAgID5cclxuICAgICAgK1xyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnI+PC9icj4gKi99XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTMgbXItNSBmb2N1czpvdXRsaW5lLW5vbmUgYmctcHJpbWFyeSBweC04IHB5LTIgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3N1Y2Nlc3MgJiYgKFxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJtbC0xMCB0ZXh0LXhzIHRleHQtc3VjY2Vzc1wiPkZvcm0gc3VibWl0IHN1Y2Nlc3NmdWxseTwvaDE+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8aDI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhPkJhY2sgdG8gSG9tZTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvaDI+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkRW1wbHllZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==