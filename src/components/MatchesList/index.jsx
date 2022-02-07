import PropTypes from 'prop-types';
import MatchItem from '../MatchItem';
import styles from './styles.module.scss';
import LoadingSpin from '../LoadingSpin';
import LimitErrorMessage from '../LimitErrorMessage';
import NotFoundMessage from '../NotFoundMessage';

const MatchesList = ({ loading, error, matches }) => (
  <div className={styles['matches-wrap']}>
    {loading && <LoadingSpin />}
    {error && <LimitErrorMessage />}
    {!error && !loading && !matches.length
      ? <NotFoundMessage>Not found matches</NotFoundMessage>
      : matches.map((match) => (
        <MatchItem match={match} key={match.id} />
      ))}
  </div>
);

MatchesList.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  // eslint-disable-next-line
  matches: PropTypes.array.isRequired,
};

export default MatchesList;
