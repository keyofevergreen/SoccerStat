/*!
 * banner:
 * SoccerStat: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateSoccerStat"]("index",{

/***/ "./src/features/CompetitionCalendar/hooks.js":
/*!***************************************************!*\
  !*** ./src/features/CompetitionCalendar/hooks.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCompetitionMatches": () => (/* binding */ useCompetitionMatches)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thunks */ "./src/features/CompetitionCalendar/thunks.js");


 // eslint-disable-next-line import/prefer-default-export

const useCompetitionMatches = id => {
  const [CompetitionCode] = id.split('-');
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
  const {
    matches,
    competition,
    error,
    loading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(state => state.competitionMatches);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    dispatch((0,_thunks__WEBPACK_IMPORTED_MODULE_2__.fetchCompetitionMatches)(CompetitionCode));
  }, []);
  return [loading, error, matches, competition];
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("904fd68a569bdc8f5ef7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.899ea597b4ff8f8b907b.hot-update.js.map