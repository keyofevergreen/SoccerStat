import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import { DatePicker } from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';
import CompetitionMatchesList from './CompetitionMatchesList/CompetitionMatchesList';
import styles from './styles.module.scss';
import './antd.css';

const { RangePicker } = DatePicker;
const UTC_FORMAT = moment.ISO_8601;
const YEAR_FORMAT = 'YYYY-MM-DD';
const getDate = (date) => moment(date, UTC_FORMAT);

const CompetitionCalendar = (
  {
    loading,
    error,
    matches,
  },
) => {
  const { competitionId } = useParams();
  const [rangeValue, setRangeValue] = useState(['', '']);
  /* There are no urls to the country flag/competition emblem
     in the API request for a particular competition,
     so I keep it from the previous request in which such urls were.

     Alternatively, I could pass them through props,
     but then when the page was refreshed, these urls disappeared. */
  // Load value for DateRange from LocalStorage
  useEffect(() => {
    if (localStorage.rangeValue) {
      const { rangeDates, compId } = JSON.parse(localStorage.rangeValue);
      return compId === competitionId ? setRangeValue(rangeDates) : localStorage.removeItem('rangeValue');
    }
    return null;
  }, []);
  // Save value from DateRange
  useEffect(() => {
    localStorage.setItem('rangeValue', JSON.stringify({ rangeDates: rangeValue, compId: competitionId }));
  }, [rangeValue]);

  const onChange = (dates, dateStrings) => {
    setRangeValue([(dateStrings[0]), dateStrings[1]]);
  };

  // eslint-disable-next-line
  const sortedMatchesByTime = useMemo(() => {
    return [...matches].sort((a, b) => getDate(b.utcDate).diff(getDate(a.utcDate)));
  }, [matches]);

  const matchesAfterSorts = () => {
    if (rangeValue.includes('')) {
      return sortedMatchesByTime;
    }
    return sortedMatchesByTime.filter((match) => {
      const matchDate = moment(match.utcDate, UTC_FORMAT);
      // eslint-disable-next-line max-len
      return matchDate.diff(moment(rangeValue[0], YEAR_FORMAT), 'days') >= 0 && matchDate.diff(moment(rangeValue[1], YEAR_FORMAT), 'days') <= 0;
    });
  };
  return (
    <div>
      {!loading && !error && (
        <div className={styles['range-picker-wrap']}>
          <span>Sort matches by date range:</span>
          <RangePicker
            defaultValue={rangeValue.includes('') ? null : [moment(rangeValue[0], YEAR_FORMAT), moment(rangeValue[1], YEAR_FORMAT)]}
            onChange={onChange}
            size="large"
            format="YYYY-MM-DD"
          />
        </div>
      )}
      <div className={styles['league-list-wrap']}>
        <CompetitionMatchesList loading={loading} error={error} matches={matchesAfterSorts()} />
      </div>
    </div>
  );
};

CompetitionCalendar.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  matches: PropTypes.array.isRequired,
};

export default CompetitionCalendar;
