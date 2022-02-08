/*!
 * banner:
 * SoccerStat: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateSoccerStat"]("index",{

/***/ "./src/features/CompetitionCalendar/thunks.js":
/*!****************************************************!*\
  !*** ./src/features/CompetitionCalendar/thunks.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchCompetitionMatches": () => (/* binding */ fetchCompetitionMatches)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/features/CompetitionCalendar/actions.js");

const fetchCompetitionMatches = id => async (dispatch, getState, _ref) => {
  let {
    services
  } = _ref;

  try {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestCompetitionMatches)());
    const competitionMatches = await services.competitionMatches.fetchCompetitionMatches(id);
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestCompetitionMatchesSuccess)(competitionMatches));
  } catch (error) {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestCompetitionMatchesError)());
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("01fb84c16a91bdbec761")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.904fd68a569bdc8f5ef7.hot-update.js.map