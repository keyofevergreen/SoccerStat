/*!
 * banner:
 * SoccerStat: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateSoccerStat"]("index",{

/***/ "./src/features/CompetitionTeams/thunks.js":
/*!*************************************************!*\
  !*** ./src/features/CompetitionTeams/thunks.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchCompetitionTeams": () => (/* binding */ fetchCompetitionTeams)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/features/CompetitionTeams/actions.js");
 // eslint-disable-next-line import/prefer-default-export

const fetchCompetitionTeams = id => async (dispatch, getState, _ref) => {
  let {
    services
  } = _ref;

  try {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestCompetitionTeams)());
    const competitionTeams = await services.competitionTeams.fetchCompetitionTeams(id);
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestCompetitionTeamsSuccess)(competitionTeams));
  } catch (error) {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestCompetitionTeamsError)());
  }
};

/***/ }),

/***/ "./src/features/TeamCalendar/thunks.js":
/*!*********************************************!*\
  !*** ./src/features/TeamCalendar/thunks.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchTeamData": () => (/* binding */ fetchTeamData),
/* harmony export */   "fetchTeamMatches": () => (/* binding */ fetchTeamMatches)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/features/TeamCalendar/actions.js");
 // eslint-disable-next-line import/prefer-default-export

const fetchTeamData = id => async (dispatch, getState, _ref) => {
  let {
    services
  } = _ref;

  try {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestTeamData)());
    const teamData = await services.team.fetchTeamData(id);
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestTeamDataSuccess)(teamData));
  } catch (error) {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestTeamDataError)());
  }
}; // eslint-disable-next-line import/prefer-default-export

const fetchTeamMatches = id => async (dispatch, getState, _ref2) => {
  let {
    services
  } = _ref2;

  try {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestTeamMatches)());
    const {
      matches
    } = await services.team.fetchTeamMatches(id);
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestTeamMatchesSuccess)(matches));
  } catch (error) {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestTeamMatchesError)());
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("76373b4f44358f9e03ee")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.d22bb2a0861daf675e5f.hot-update.js.map