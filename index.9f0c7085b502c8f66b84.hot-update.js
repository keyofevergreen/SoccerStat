/*!
 * banner:
 * SoccerStat: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateSoccerStat"]("index",{

/***/ "./src/pages/Team/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/Team/index.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _features_TeamCalendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../features/TeamCalendar */ "./src/features/TeamCalendar/index.js");
/* harmony import */ var _features_TeamCalendar_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/TeamCalendar/components */ "./src/features/TeamCalendar/components/index.jsx");
/* harmony import */ var _components_TeamItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/TeamItem */ "./src/components/TeamItem/index.jsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ "./src/pages/Team/styles.module.scss");
/* harmony import */ var _components_CompetitionItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/CompetitionItem */ "./src/components/CompetitionItem/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












const Team = () => {
  const {
    teamId
  } = (0,react_router__WEBPACK_IMPORTED_MODULE_7__.useParams)();
  const [teamLoading, teamError, team] = (0,_features_TeamCalendar__WEBPACK_IMPORTED_MODULE_1__.useTeam)(teamId);
  const [matchesLoading, matchesError, matches] = (0,_features_TeamCalendar__WEBPACK_IMPORTED_MODULE_1__.useTeamMatches)(teamId);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_0__.Helmet, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("title", {
        children: `SoccerStat - ${team.shortName ? team.shortName : 'Loading...'}`
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("meta", {
        name: "description",
        content: "Team page"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      children: !teamLoading && !teamError && !matchesLoading && !matchesError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["team-info"],
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_TeamItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
            team: team,
            fullMode: true
          })
        }), team.activeCompetitions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["active-competitions"],
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
            children: "Active Competitions"
          }), team.activeCompetitions.filter(comp => comp.plan === 'TIER_ONE').map(comp => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_CompetitionItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
            comp: comp,
            fullMode: false
          }, comp.id))]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_router__WEBPACK_IMPORTED_MODULE_7__.Routes, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_7__.Route, {
        exact: true,
        index: true,
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_features_TeamCalendar_components__WEBPACK_IMPORTED_MODULE_2__["default"], {
          loading: matchesLoading,
          error: matchesError,
          matches: matches
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_7__.Route, {
        path: "/:dateRange",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_features_TeamCalendar_components__WEBPACK_IMPORTED_MODULE_2__["default"], {
          loading: matchesLoading,
          error: matchesError,
          matches: matches
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Team);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2bfb938b574a36cfca7b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.9f0c7085b502c8f66b84.hot-update.js.map