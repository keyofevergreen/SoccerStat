/*!
 * banner:
 * SoccerStat: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateSoccerStat"]("index",{

/***/ "./src/features/CompetitionCalendar/components/index.jsx":
/*!***************************************************************!*\
  !*** ./src/features/CompetitionCalendar/components/index.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./src/features/CompetitionCalendar/components/styles.module.scss");
/* harmony import */ var _pages_Competition_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pages/Competition/antd.css */ "./src/pages/Competition/antd.css");
/* harmony import */ var _components_MatchesList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/MatchesList */ "./src/components/MatchesList/index.jsx");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/hooks */ "./src/utils/hooks.js");
/* harmony import */ var _components_MyRangePicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/MyRangePicker */ "./src/components/MyRangePicker/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");














const UTC_FORMAT = (moment__WEBPACK_IMPORTED_MODULE_2___default().ISO_8601);

const getDate = date => moment__WEBPACK_IMPORTED_MODULE_2___default()(date, UTC_FORMAT);

const CompetitionCalendar = _ref => {
  let {
    loading,
    error,
    matches
  } = _ref;
  const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_9__.useNavigate)();
  const {
    competitionId,
    dateRange
  } = (0,react_router__WEBPACK_IMPORTED_MODULE_9__.useParams)();
  const [rangeValue, setRangeValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(['', '']); // eslint-disable-next-line

  const sortedMatchesByTime = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return [...matches].sort((a, b) => getDate(b.utcDate).diff(getDate(a.utcDate)));
  }, [matches]);
  const [sortedMatches] = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_6__.useSortedMatchesByDateRange)(rangeValue, sortedMatchesByTime);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (dateRange) {
      const [dateFrom, dateTo] = dateRange.split('_');
      setRangeValue([dateFrom, dateTo]);
    }
  }, []);

  const onChange = (dates, dateStrings) => {
    setRangeValue([dateStrings[0], dateStrings[1]]);

    if (dateStrings.includes('')) {
      navigate(`/competition/${competitionId}/`);
    } else {
      const dateRangesUrl = `${dateStrings[0]}_${dateStrings[1]}`;
      navigate(`/competition/${competitionId}/${dateRangesUrl}`);
    }
  };

  const onClick = e => {
    e.preventDefault();
    navigate(`/competition/${competitionId}/teams`);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    children: [!loading && !error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
        type: "primary",
        block: true,
        className: "button-link",
        onClick: onClick,
        children: "Show participating teams"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_MyRangePicker__WEBPACK_IMPORTED_MODULE_7__["default"], {
        rangeValue: rangeValue,
        handleChange: onChange
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["league-list-wrap"],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_MatchesList__WEBPACK_IMPORTED_MODULE_5__["default"], {
        loading: loading,
        error: error,
        matches: sortedMatches
      })
    })]
  });
};

CompetitionCalendar.propTypes = {
  loading: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool.isRequired),
  error: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool.isRequired),
  // eslint-disable-next-line react/forbid-prop-types
  matches: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().array.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CompetitionCalendar);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("748f9cfb2cfaeb6d9c51")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.74206e9c86be845f049b.hot-update.js.map