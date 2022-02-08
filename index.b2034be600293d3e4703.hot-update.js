/*!
 * banner:
 * SoccerStat: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateSoccerStat"]("index",{

/***/ "./src/features/TeamCalendar/components/index.jsx":
/*!********************************************************!*\
  !*** ./src/features/TeamCalendar/components/index.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/hooks */ "./src/utils/hooks.js");
/* harmony import */ var _components_MatchesList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/MatchesList */ "./src/components/MatchesList/index.jsx");
/* harmony import */ var _components_MyRangePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/MyRangePicker */ "./src/components/MyRangePicker/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









const UTC_FORMAT = (moment__WEBPACK_IMPORTED_MODULE_1___default().ISO_8601);

const getDate = date => moment__WEBPACK_IMPORTED_MODULE_1___default()(date, UTC_FORMAT);

const TeamCalendar = _ref => {
  let {
    loading,
    error,
    matches
  } = _ref;
  const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
  const {
    teamId,
    dateRange
  } = (0,react_router__WEBPACK_IMPORTED_MODULE_6__.useParams)();
  const [rangeValue, setRangeValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(['', '']);
  const sortedMatchesByTime = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [...matches].sort((a, b) => getDate(b.utcDate).diff(getDate(a.utcDate))), [matches]);
  const [sortedMatches] = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_2__.useSortedMatchesByDateRange)(rangeValue, sortedMatchesByTime);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (dateRange) {
      const [dateFrom, dateTo] = dateRange.split('_');
      setRangeValue([dateFrom, dateTo]);
    }
  }, []);

  const onChange = (dates, dateStrings) => {
    setRangeValue([dateStrings[0], dateStrings[1]]);

    if (dateStrings.includes('')) {
      navigate(`/team/${teamId}`);
    } else {
      const dateRangesUrl = `${dateStrings[0]}_${dateStrings[1]}`;
      navigate(`/team/${teamId}/${dateRangesUrl}`);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [!loading && !error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_MyRangePicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
      rangeValue: rangeValue,
      handleChange: onChange
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_MatchesList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      loading: loading,
      error: error,
      matches: sortedMatches
    })]
  });
};

TeamCalendar.propTypes = {
  loading: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool.isRequired),
  error: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool.isRequired),
  // eslint-disable-next-line
  matches: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().array.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeamCalendar);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ba35be7fbf4426cd0b14")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.b2034be600293d3e4703.hot-update.js.map