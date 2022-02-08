/*!
 * banner:
 * SoccerStat: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateSoccerStat"]("index",{

/***/ "./src/utils/hooks.js":
/*!****************************!*\
  !*** ./src/utils/hooks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSortedList": () => (/* binding */ useSortedList),
/* harmony export */   "useSortedMatchesByDateRange": () => (/* binding */ useSortedMatchesByDateRange)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


const UTC_FORMAT = (moment__WEBPACK_IMPORTED_MODULE_1___default().ISO_8601);
const YEAR_FORMAT = 'YYYY-MM-DD'; // eslint-disable-next-line

const getMatchesWithSearchQuery = (string1, string2) => string1.toLowerCase().includes(string2.toLowerCase()); // eslint-disable-next-line


const useSortedList = (list, searchQuery) => {
  const [sortedList, setSortedList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(list);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setSortedList(list // eslint-disable-next-line max-len
    .filter(item => getMatchesWithSearchQuery(item.name, searchQuery) || getMatchesWithSearchQuery(item.area.name, searchQuery)));
  }, [list, searchQuery]);
  return [sortedList];
};
const useSortedMatchesByDateRange = (dateRange, matches) => {
  const [sortedMatches, setSortedMatches] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(matches);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (dateRange.includes('')) {
      setSortedMatches(matches);
    } else {
      setSortedMatches(matches.filter(match => {
        const matchDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(match.utcDate, UTC_FORMAT); // eslint-disable-next-line max-len

        return matchDate.diff(moment__WEBPACK_IMPORTED_MODULE_1___default()(dateRange[0], YEAR_FORMAT), 'days') >= 0 && matchDate.diff(moment__WEBPACK_IMPORTED_MODULE_1___default()(dateRange[1], YEAR_FORMAT), 'days') <= 0;
      }));
    }
  }, [dateRange, matches]);
  return [sortedMatches];
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5e1487baee877bf4faa5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.e61ed7a5f9e0fbe3f732.hot-update.js.map