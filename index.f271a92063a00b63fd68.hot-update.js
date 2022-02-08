/*!
 * banner:
 * SoccerStat: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateSoccerStat"]("index",{

/***/ "./src/features/CompetitionTeams/hooks.js":
/*!************************************************!*\
  !*** ./src/features/CompetitionTeams/hooks.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCompetitionTeams": () => (/* binding */ useCompetitionTeams)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thunks */ "./src/features/CompetitionTeams/thunks.js");


 // eslint-disable-next-line import/prefer-default-export

const useCompetitionTeams = id => {
  const [competitionCode] = id.split('-');
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
  const {
    teams,
    competition,
    error,
    loading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(state => state.competitionTeams);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    dispatch((0,_thunks__WEBPACK_IMPORTED_MODULE_2__.fetchCompetitionTeams)(competitionCode));
  }, []);
  return [loading, error, teams, competition];
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9c19ecf71c139dd19f2d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.f271a92063a00b63fd68.hot-update.js.map