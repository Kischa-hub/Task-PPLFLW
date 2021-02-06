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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config.json */ "./config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config.json */ "./config.json", 1);


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

  var apiEndPoint = _config_json__WEBPACK_IMPORTED_MODULE_5__["apiUrl"];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      success = _useState[0],
      setSuccess = _useState[1];

  var onSubmit = function onSubmit(data) {
    //console.table(data);
    console.log("mydata", data);
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(apiEndPoint, data).then(function (response) {
      console.log(response);
    })["catch"](function (error) {
      console.log(error);
    });
    setSuccess(true);
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
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        className: "w-80 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01",
        placeholder: "Employee ID",
        name: "id" //   ref={register({
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
        lineNumber: 37,
        columnNumber: 9
      }, this), errors.id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "ml-10 text-xs text-error",
        children: errors.id.message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mb-8",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "block font-semibold mb-3",
        children: "Name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        className: "w-80 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01",
        placeholder: "First Name",
        name: "Name",
        ref: register({
          required: "First Name is Requierd",
          minLength: {
            value: 2,
            message: "Minimum firstname is 2 char"
          }
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), errors.Name && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "ml-10 text-xs text-error",
        children: errors.Name.message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mb-8",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "block font-semibold mb-3",
        children: "Status"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
        className: "w-80 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01",
        name: "Status",
        ref: register({
          required: "Status is Requierd"
        }),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "",
          children: "Select ..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "ADDED",
          children: "ADDED"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "IN-CHECK",
          children: "IN-CHECK"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "APPROVED",
          children: "APPROVED"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "ACTIVE",
          children: "ACTIVE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "INACTIVE",
          children: "INACTIVE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this), errors.Status && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "ml-10 text-xs text-error",
        children: errors.Status.message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mb-8",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "block mb-3 font-bold",
        children: "skills"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
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
          lineNumber: 114,
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
            lineNumber: 126,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Good",
            children: "Good"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "VGood",
            children: "VGood"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Excellent",
            children: "Excellent"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          ref: register(),
          name: "controlItems[".concat(index, "].amount"),
          type: "number",
          defaultValue: item.amount,
          className: "w-16 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:placeholder-dark focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
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
              lineNumber: 150,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z",
              fill: "#5B6366"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 13
        }, _this)]
      }, item.id, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
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
          lineNumber: 171,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z",
          fill: "#00A8E8"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex justify-end",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        className: "mt-3 mr-5 focus:outline-none bg-warning px-8 py-2 text-white font-semibold rounded-full",
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }, this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "ml-10 text-xs text-success",
      children: "Form submit successfully"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: "Back to Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      className: "ml-10 ",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: " text-accent",
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
    lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRkRW1wbHllZS5qcyJdLCJuYW1lcyI6WyJhZGRFbXBseWVlIiwicHJvcHMiLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJjb250cm9sIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwidXNlRmllbGRBcnJheSIsIm5hbWUiLCJmaWVsZHMiLCJhcHBlbmQiLCJyZW1vdmUiLCJhcGlFbmRQb2ludCIsImFwaVVybCIsInVzZVN0YXRlIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJvblN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiZXJyb3IiLCJyZXF1aXJlZCIsInBhdHRlcm4iLCJ2YWx1ZSIsIm1lc3NhZ2UiLCJpZCIsIm1pbkxlbmd0aCIsIk5hbWUiLCJTdGF0dXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsYW5nTmFtZSIsImdyYWQiLCJhbW91bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFBQTs7QUFBQTs7QUFBQSxpQkFDMkJDLCtEQUFPLEVBRGxDO0FBQUEsTUFDakJDLFFBRGlCLFlBQ2pCQSxRQURpQjtBQUFBLE1BQ1BDLE9BRE8sWUFDUEEsT0FETztBQUFBLE1BQ0VDLFlBREYsWUFDRUEsWUFERjtBQUFBLE1BQ2dCQyxNQURoQixZQUNnQkEsTUFEaEI7O0FBQUEsdUJBRVVDLHFFQUFhLENBQUM7QUFDL0NILFdBQU8sRUFBUEEsT0FEK0M7QUFFL0NJLFFBQUksRUFBRTtBQUZ5QyxHQUFELENBRnZCO0FBQUEsTUFFakJDLE1BRmlCLGtCQUVqQkEsTUFGaUI7QUFBQSxNQUVUQyxNQUZTLGtCQUVUQSxNQUZTO0FBQUEsTUFFREMsTUFGQyxrQkFFREEsTUFGQzs7QUFNekIsTUFBTUMsV0FBVyxHQUFHQyxt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QUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2S0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErS0Q7O0dBdE1RZixVO1VBQzZDRSx1RCxFQUNqQkssNkQ7OztBQXNNdEJQLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkZEVtcGx5ZWUuOTk0MDc2MjcxNDE4MTM1ZGYzMmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUZvcm0sIHVzZUZpZWxkQXJyYXkgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgYXBpVXJsIH0gZnJvbSBcIi4uL2NvbmZpZy5qc29uXCI7XHJcblxyXG5mdW5jdGlvbiBhZGRFbXBseWVlKHByb3BzKSB7XHJcbiAgY29uc3QgeyByZWdpc3RlciwgY29udHJvbCwgaGFuZGxlU3VibWl0LCBlcnJvcnMgfSA9IHVzZUZvcm0oKTtcclxuICBjb25zdCB7IGZpZWxkcywgYXBwZW5kLCByZW1vdmUgfSA9IHVzZUZpZWxkQXJyYXkoe1xyXG4gICAgY29udHJvbCxcclxuICAgIG5hbWU6IFwiY29udHJvbEl0ZW1zXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgYXBpRW5kUG9pbnQgPSBhcGlVcmw7XHJcbiAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IHtcclxuICAgIC8vY29uc29sZS50YWJsZShkYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKFwibXlkYXRhXCIsIGRhdGEpO1xyXG5cclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KGFwaUVuZFBvaW50LCBkYXRhKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm1cclxuICAgICAgY2xhc3NOYW1lPVwiYmctZ3JleS1iZyBwLTYgdy05NiByb3VuZGVkLW1kIG14LWF1dG9cIlxyXG4gICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgbWItM1wiPklEPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctODAgYm9yZGVyLWdyZXktc2hkNSBob3Zlcjpib3JkZXItZ3JleS1zaGQyIGZvY3VzOm91dGxpbmUtZm9jdXMtYm9yZGVyIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZGFyayBib3JkZXIgcm91bmRlZC1tZCBweC00IHB5LTIuNSB0ZXh0LWdyZXktc2gwMVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtcGxveWVlIElEXCJcclxuICAgICAgICAgIG5hbWU9XCJpZFwiXHJcbiAgICAgICAgICAvLyAgIHJlZj17cmVnaXN0ZXIoe1xyXG4gICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiBcIklEIGlzIFJlcXVpZXJkXCIsXHJcbiAgICAgICAgICAvLyAgICAgbWluTGVuZ3RoOiB7IHZhbHVlOiAyLCBtZXNzYWdlOiBcIk1pbmltdW0gZmlyc3RuYW1lIGlzIDIgY2hhclwiIH0sIC8vXlsxLTldWzAtOV0/JHxeMTAwJFxyXG4gICAgICAgICAgLy8gICB9KX1cclxuICAgICAgICAgIHJlZj17cmVnaXN0ZXIoe1xyXG4gICAgICAgICAgICByZXF1aXJlZDogXCJJRCBpcyBSZXF1aWVyZCAmIGFjY2VwdCBvbmx5IGRpZ2l0IGZyb20gMSB0byAxMDBcIixcclxuICAgICAgICAgICAgcGF0dGVybjoge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiAvXlsxLTldWzAtOV0/JHxeMTAwJC8sXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJhY2NlcHQgb25seSBkaWdpdCBmcm9tIDEgdG8gMTAwXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtlcnJvcnMuaWQgJiYgKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMTAgdGV4dC14cyB0ZXh0LWVycm9yXCI+e2Vycm9ycy5pZC5tZXNzYWdlfTwvcD5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgbWItM1wiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy04MCBib3JkZXItZ3JleS1zaGQ1IGhvdmVyOmJvcmRlci1ncmV5LXNoZDIgZm9jdXM6b3V0bGluZS1mb2N1cy1ib3JkZXIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1kYXJrIGJvcmRlciByb3VuZGVkLW1kIHB4LTQgcHktMi41IHRleHQtZ3JleS1zaDAxXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiXHJcbiAgICAgICAgICBuYW1lPVwiTmFtZVwiXHJcbiAgICAgICAgICByZWY9e3JlZ2lzdGVyKHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiRmlyc3QgTmFtZSBpcyBSZXF1aWVyZFwiLFxyXG4gICAgICAgICAgICBtaW5MZW5ndGg6IHsgdmFsdWU6IDIsIG1lc3NhZ2U6IFwiTWluaW11bSBmaXJzdG5hbWUgaXMgMiBjaGFyXCIgfSxcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2Vycm9ycy5OYW1lICYmIChcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTEwIHRleHQteHMgdGV4dC1lcnJvclwiPntlcnJvcnMuTmFtZS5tZXNzYWdlfTwvcD5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgbWItM1wiPlN0YXR1czwvbGFiZWw+XHJcbiAgICAgICAgey8qIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy04MCBib3JkZXItZ3JleS1zaGQ1IGhvdmVyOmJvcmRlci1ncmV5LXNoZDIgZm9jdXM6b3V0bGluZS1mb2N1cy1ib3JkZXIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1kYXJrIGJvcmRlciByb3VuZGVkLW1kIHB4LTQgcHktMi41IHRleHQtZ3JleS1zaDAxXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2Vjb3VuZCBOYW1lXCJcclxuICAgICAgICAgIG5hbWU9XCJzTmFtZVwiXHJcbiAgICAgICAgICByZWY9e3JlZ2lzdGVyKHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiU2Vjb3VuZCBOYW1lIGlzIFJlcXVpZXJkXCIsXHJcbiAgICAgICAgICAgIG1pbkxlbmd0aDogeyB2YWx1ZTogMiwgbWVzc2FnZTogXCJNaW5pbXVtIGZpcnN0bmFtZSBpcyAyIGNoYXJcIiB9LFxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgLz4gKi99XHJcblxyXG4gICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctODAgYm9yZGVyLWdyZXktc2hkNSBob3Zlcjpib3JkZXItZ3JleS1zaGQyIGZvY3VzOm91dGxpbmUtZm9jdXMtYm9yZGVyIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZGFyayBib3JkZXIgcm91bmRlZC1tZCBweC00IHB5LTIuNSB0ZXh0LWdyZXktc2gwMVwiXHJcbiAgICAgICAgICBuYW1lPVwiU3RhdHVzXCJcclxuICAgICAgICAgIHJlZj17cmVnaXN0ZXIoe1xyXG4gICAgICAgICAgICByZXF1aXJlZDogXCJTdGF0dXMgaXMgUmVxdWllcmRcIixcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgLi4uPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQURERURcIj5BRERFRDwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIklOLUNIRUNLXCI+SU4tQ0hFQ0s8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBUFBST1ZFRFwiPkFQUFJPVkVEPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQUNUSVZFXCI+QUNUSVZFPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSU5BQ1RJVkVcIj5JTkFDVElWRTwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIHtlcnJvcnMuU3RhdHVzICYmIChcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTEwIHRleHQteHMgdGV4dC1lcnJvclwiPntlcnJvcnMuU3RhdHVzLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIG1iLTMgZm9udC1ib2xkXCI+c2tpbGxzPC9sYWJlbD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7ZmllbGRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cIm1iLTUgZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgey8qIHctOTYgKi99XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoKX1cclxuICAgICAgICAgICAgICBuYW1lPXtgY29udHJvbEl0ZW1zWyR7aW5kZXh9XS5uYW1lYH1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2l0ZW0ubGFuZ05hbWV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xNiBib3JkZXItZ3JleS1zaGQ1IGhvdmVyOmJvcmRlci1ncmV5LXNoZDIgZm9jdXM6b3V0bGluZS1mb2N1cy1ib3JkZXIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnBsYWNlaG9sZGVyLWRhcmsgZm9jdXM6Ym9yZGVyLWRhcmsgYm9yZGVyIHJvdW5kZWQtbWQgcHgtNCBweS0yLjUgdGV4dC1ncmV5LXNoMDFcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgcmVmPXtyZWdpc3RlcigpfVxyXG4gICAgICAgICAgICAgIG5hbWU9e2Bjb250cm9sSXRlbXNbJHtpbmRleH1dLnR5cGVgfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aXRlbS5ncmFkfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCAuLi48L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR29vZFwiPkdvb2Q8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVkdvb2RcIj5WR29vZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFeGNlbGxlbnRcIj5FeGNlbGxlbnQ8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoKX1cclxuICAgICAgICAgICAgICBuYW1lPXtgY29udHJvbEl0ZW1zWyR7aW5kZXh9XS5hbW91bnRgfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aXRlbS5hbW91bnR9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xNiBib3JkZXItZ3JleS1zaGQ1IGhvdmVyOmJvcmRlci1ncmV5LXNoZDIgZm9jdXM6b3V0bGluZS1mb2N1cy1ib3JkZXIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnBsYWNlaG9sZGVyLWRhcmsgZm9jdXM6Ym9yZGVyLWRhcmsgYm9yZGVyIHJvdW5kZWQtbWQgcHgtNCBweS0yLjUgdGV4dC1ncmV5LXNoMDFcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMiBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZShpbmRleCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI0XCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk03IDExSDE3VjEzSDdWMTFaXCIgZmlsbD1cIiM1QjYzNjZcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgZD1cIk0xMiAyQzYuNDg2IDIgMiA2LjQ4NiAyIDEyQzIgMTcuNTE0IDYuNDg2IDIyIDEyIDIyQzE3LjUxNCAyMiAyMiAxNy41MTQgMjIgMTJDMjIgNi40ODYgMTcuNTE0IDIgMTIgMlpNMTIgMjBDNy41ODkgMjAgNCAxNi40MTEgNCAxMkM0IDcuNTg5IDcuNTg5IDQgMTIgNEMxNi40MTEgNCAyMCA3LjU4OSAyMCAxMkMyMCAxNi40MTEgMTYuNDExIDIwIDEyIDIwWlwiXHJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCIjNUI2MzY2XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gYXBwZW5kKHt9KX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTIgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIyNFwiXHJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwYXRoIGQ9XCJNMTMgN0gxMVYxMUg3VjEzSDExVjE3SDEzVjEzSDE3VjExSDEzVjdaXCIgZmlsbD1cIiMwMEE4RThcIiAvPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk0xMiAyQzYuNDg2IDIgMiA2LjQ4NiAyIDEyQzIgMTcuNTE0IDYuNDg2IDIyIDEyIDIyQzE3LjUxNCAyMiAyMiAxNy41MTQgMjIgMTJDMjIgNi40ODYgMTcuNTE0IDIgMTIgMlpNMTIgMjBDNy41ODkgMjAgNCAxNi40MTEgNCAxMkM0IDcuNTg5IDcuNTg5IDQgMTIgNEMxNi40MTEgNCAyMCA3LjU4OSAyMCAxMkMyMCAxNi40MTEgMTYuNDExIDIwIDEyIDIwWlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCIjMDBBOEU4XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC0zIG1yLTUgZm9jdXM6b3V0bGluZS1ub25lIGJnLXdhcm5pbmcgcHgtOCBweS0yIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCByb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtzdWNjZXNzICYmIChcclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWwtMTAgdGV4dC14cyB0ZXh0LXN1Y2Nlc3NcIj5Gb3JtIHN1Ym1pdCBzdWNjZXNzZnVsbHk8L2gxPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPGgyPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YT5CYWNrIHRvIEhvbWU8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2gyPlxyXG5cclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1sLTEwIFwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCIgdGV4dC1hY2NlbnRcIj5CYWNrIHRvIEhvbWU8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZEVtcGx5ZWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=