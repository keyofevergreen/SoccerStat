import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Button } from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import '../../../pages/Competition/antd.css';
import MatchesList from '../../../components/MatchesList';
import { useSortedMatchesByDateRange } from '../../../helpers/hooks';
import MyRangePicker from '../../../components/MyRangePicker';

const UTC_FORMAT = moment.ISO_8601;
const getDate = (date) => moment(date, UTC_FORMAT);
// eslint-disable-next-line
const CompetitionCalendar = ({ loading, error, matches }) => {
  const navigate = useNavigate();
  const { competitionId, dateRange } = useParams();
  const [rangeValue, setRangeValue] = useState(['', '']);
  // eslint-disable-next-line
  const sortedMatchesByTime = useMemo(() => {
    return [...matches].sort((a, b) => getDate(b.utcDate).diff(getDate(a.utcDate)));
  }, [matches]);
  const [sortedMatches] = useSortedMatchesByDateRange(rangeValue, sortedMatchesByTime);

  useEffect(() => {
    if (dateRange) {
      const [dateFrom, dateTo] = dateRange.split('_');
      setRangeValue([dateFrom, dateTo]);
    }
  }, []);

  const onChange = (dates, dateStrings) => {
    // eslint-disable-next-line
    console.log(dateStrings);
    setRangeValue([(dateStrings[0]), dateStrings[1]]);
    if (dateStrings.includes('')) {
      navigate(`/competition/${competitionId}/`);
    } else {
      const dateRangesUrl = `${dateStrings[0]}_${dateStrings[1]}`;
      navigate(`/competition/${competitionId}/${dateRangesUrl}`);
    }
  };
  const onClick = (e) => {
    e.preventDefault();
    navigate(`/competition/${competitionId}/teams`);
  };

  return (
    <div>
      {!loading && !error && (
        <>
          <Button type="primary" block className="button-link" onClick={onClick}>
            Show participating teams
          </Button>
          <MyRangePicker rangeValue={rangeValue} handleChange={onChange} />
        </>
      )}
      <div className={styles['league-list-wrap']}>
        <MatchesList loading={loading} error={error} matches={sortedMatches} />
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
