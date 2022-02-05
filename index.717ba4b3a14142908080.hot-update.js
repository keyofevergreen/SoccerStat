/*!
 * banner:
 * SoccerStat: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateSoccerStat"]("index",{

/***/ "./src/features/CompetitionCalendar/service.js":
/*!*****************************************************!*\
  !*** ./src/features/CompetitionCalendar/service.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const competitionMatchesService = rest => ({
  fetchCompetitionMatches: async id => {
    const response = await rest(`https://api.football-data.org/v2/competitions/${id}/matches`, {
      method: 'GET',
      headers: {
        'X-Auth-Token': "4c1d957817774e7b9b3baee986df392a"
      }
    }); // eslint-disable-next-line no-return-await

    return await response.json();
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (competitionMatchesService);

/***/ }),

/***/ "./src/features/CompetitionsList/service.js":
/*!**************************************************!*\
  !*** ./src/features/CompetitionsList/service.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const competitionsService = rest => ({
  fetchCompetitions: async () => {
    const response = await rest('https://api.football-data.org/v2/competitions?plan=TIER_ONE&areas=2077', {
      method: 'GET',
      headers: {
        'X-Auth-Token': "4c1d957817774e7b9b3baee986df392a"
      }
    }); // eslint-disable-next-line no-return-await

    return await response.json();
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (competitionsService);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("456790d6ecfd5d81123a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.717ba4b3a14142908080.hot-update.js.map