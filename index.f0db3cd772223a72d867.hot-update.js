/*!
 * banner:
 * SoccerStat: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateSoccerStat"]("index",{

/***/ "./src/features/TeamCalendar/hooks.js":
/*!********************************************!*\
  !*** ./src/features/TeamCalendar/hooks.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTeam": () => (/* binding */ useTeam),
/* harmony export */   "useTeamMatches": () => (/* binding */ useTeamMatches)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thunks */ "./src/features/TeamCalendar/thunks.js");



const useTeam = id => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    team,
    teamError,
    teamLoading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.team);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_thunks__WEBPACK_IMPORTED_MODULE_2__.fetchTeamData)(id));
  }, []);
  return [teamError, teamLoading, team];
};
const useTeamMatches = id => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    matches,
    matchesError,
    matchesLoading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.team);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_thunks__WEBPACK_IMPORTED_MODULE_2__.fetchTeamMatches)(id));
  }, []);
  return [matchesLoading, matchesError, matches];
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cbd4f77aaa047cccbe53")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.f0db3cd772223a72d867.hot-update.js.map