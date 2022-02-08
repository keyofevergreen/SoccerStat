/*!
 * banner:
 * SoccerStat: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateSoccerStat"]("index",{

/***/ "./src/pages/Competition/index.jsx":
/*!*****************************************!*\
  !*** ./src/pages/Competition/index.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _features_CompetitionCalendar_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../features/CompetitionCalendar/components */ "./src/features/CompetitionCalendar/components/index.jsx");
/* harmony import */ var _features_CompetitionCalendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/CompetitionCalendar */ "./src/features/CompetitionCalendar/index.js");
/* harmony import */ var _features_CompetitionTeams_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/CompetitionTeams/components */ "./src/features/CompetitionTeams/components/index.jsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ "./src/pages/Competition/styles.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










const Competition = () => {
  var _competition$area;

  const {
    competitionId
  } = (0,react_router__WEBPACK_IMPORTED_MODULE_6__.useParams)();
  const [loading, error, matches, competition] = (0,_features_CompetitionCalendar__WEBPACK_IMPORTED_MODULE_2__.useCompetitionMatches)(competitionId);
  const competitionFlag = JSON.parse(localStorage.currentCompetitionFlag);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_0__.Helmet, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("title", {
        children: `SoccerStat - ${competition.name ? competition.name : 'Loading...'}`
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta", {
        name: "description",
        content: "League Calendar page"
      })]
    }), !loading && !error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["page-header-wrap"],
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1", {
        className: "page-header",
        children: competition.name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["page-description-wrap"],
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
          src: competitionFlag.url,
          alt: competitionFlag.alt,
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["flag-img"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "page-description",
          children: competition === null || competition === void 0 ? void 0 : (_competition$area = competition.area) === null || _competition$area === void 0 ? void 0 : _competition$area.name
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_router__WEBPACK_IMPORTED_MODULE_6__.Routes, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_6__.Route, {
        exact: true,
        index: true,
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_features_CompetitionCalendar_components__WEBPACK_IMPORTED_MODULE_1__["default"], {
          loading: loading,
          error: error,
          matches: matches,
          competition: competition
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_6__.Route, {
        path: "/:dateRange",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_features_CompetitionCalendar_components__WEBPACK_IMPORTED_MODULE_1__["default"], {
          loading: loading,
          error: error,
          matches: matches,
          competition: competition
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_6__.Route, {
        path: "/teams",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_features_CompetitionTeams_components__WEBPACK_IMPORTED_MODULE_3__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_6__.Route, {
        path: "/teams/:search",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_features_CompetitionTeams_components__WEBPACK_IMPORTED_MODULE_3__["default"], {})
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Competition);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5096616b6ab5a75f5a96")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.ccebd147128e3b9b01a4.hot-update.js.map