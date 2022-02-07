import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router';
import { useEffect, useMemo, useState } from 'react';
import moment from 'moment';
import { useSortedMatchesByDateRange } from '../../../helpers/hooks';
import MatchesList from '../../../components/MatchesList';
import MyRangePicker from '../../../components/MyRangePicker';

const UTC_FORMAT = moment.ISO_8601;
const getDate = (date) => moment(date, UTC_FORMAT);

// eslint-disable-next-line
const TeamCalendar = ({ loading, error, matches }) => {
  const navigate = useNavigate();
  const { teamId, dateRange } = useParams();
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
    setRangeValue([(dateStrings[0]), dateStrings[1]]);
    if (dateStrings.includes('')) {
      navigate(`/team/${teamId}`);
    } else {
      const dateRangesUrl = `${dateStrings[0]}_${dateStrings[1]}`;
      navigate(`/team/${teamId}/${dateRangesUrl}`);
    }
  };
  return (
    <div>
      {!loading && !error && (
        <MyRangePicker rangeValue={rangeValue} handleChange={onChange} />
      )}
      <MatchesList loading={loading} error={error} matches={sortedMatches} />
    </div>
  );
};

TeamCalendar.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  // eslint-disable-next-line
  matches: PropTypes.array.isRequired,
};

export default TeamCalendar;
