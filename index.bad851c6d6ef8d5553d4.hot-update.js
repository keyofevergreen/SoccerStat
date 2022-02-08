/*!
 * banner:
 * SoccerStat: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateSoccerStat"]("index",{

/***/ "./src/features/CompetitionsList/components/index.jsx":
/*!************************************************************!*\
  !*** ./src/features/CompetitionsList/components/index.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_CompetitionItem_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/CompetitionItem/index */ "./src/components/CompetitionItem/index.jsx");
/* harmony import */ var _components_LimitErrorMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/LimitErrorMessage */ "./src/components/LimitErrorMessage/index.jsx");
/* harmony import */ var _components_LoadingSpin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/LoadingSpin */ "./src/components/LoadingSpin/index.jsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./src/features/CompetitionsList/components/styles.module.scss");
/* harmony import */ var _components_NotFoundMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/NotFoundMessage */ "./src/components/NotFoundMessage/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









const CompetitionList = _ref => {
  let {
    loading,
    error,
    competitions
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["competitions-wrap"],
    children: [loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_LoadingSpin__WEBPACK_IMPORTED_MODULE_2__["default"], {}), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_LimitErrorMessage__WEBPACK_IMPORTED_MODULE_1__["default"], {}), !error && !loading && !competitions.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_NotFoundMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: "Not found competition for this query"
    }) : competitions.map(comp => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_CompetitionItem_index__WEBPACK_IMPORTED_MODULE_0__["default"], {
      comp: comp,
      fullMode: true
    }, comp.id))]
  });
};

CompetitionList.propTypes = {
  loading: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool.isRequired),
  error: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool.isRequired),
  // eslint-disable-next-line react/forbid-prop-types
  competitions: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().array.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CompetitionList);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f271a92063a00b63fd68")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.bad851c6d6ef8d5553d4.hot-update.js.map