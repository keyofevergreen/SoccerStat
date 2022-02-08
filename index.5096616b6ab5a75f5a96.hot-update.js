/*!
 * banner:
 * SoccerStat: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateSoccerStat"]("index",{

/***/ "./src/pages/Competitions/index.jsx":
/*!******************************************!*\
  !*** ./src/pages/Competitions/index.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var _features_CompetitionsList_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/CompetitionsList/components */ "./src/features/CompetitionsList/components/index.jsx");
/* harmony import */ var _features_CompetitionsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/CompetitionsList */ "./src/features/CompetitionsList/index.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Input */ "./src/components/Input/index.jsx");
/* harmony import */ var _assets_styles_global_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/styles/global.scss */ "./src/assets/styles/global.scss");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/hooks */ "./src/utils/hooks.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












const Competitions = () => {
  const {
    search
  } = (0,react_router__WEBPACK_IMPORTED_MODULE_8__.useParams)();
  const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
  const [loading, error, competitions] = (0,_features_CompetitionsList__WEBPACK_IMPORTED_MODULE_3__.useCompetitions)();
  const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(search || '');
  const [sortedCompetitions] = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_6__.useSortedList)(competitions, searchQuery);

  const handleChange = inputValue => {
    setSearchQuery(inputValue);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    navigate(`/competitions/${searchQuery}`);
  }, [searchQuery]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_0__.Helmet, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("title", {
        children: "SoccerStat - Competitions"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("meta", {
        name: "description",
        content: "Competition page"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h1", {
      className: "page-header",
      children: "European Football Competition"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
      placeholder: "Find the league",
      value: searchQuery,
      handleChange: handleChange
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_features_CompetitionsList_components__WEBPACK_IMPORTED_MODULE_2__["default"], {
      loading: loading,
      error: error,
      competitions: sortedCompetitions
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Competitions);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("397df45322edfeb71b1c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.5096616b6ab5a75f5a96.hot-update.js.map