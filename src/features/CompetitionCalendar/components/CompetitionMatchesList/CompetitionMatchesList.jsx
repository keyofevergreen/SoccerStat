import PropTypes from 'prop-types';
import { Result, Spin } from 'antd';
import MatchItem from '../../../../components/MatchItem';
import '../../../../assets/styles/global.scss';
import styles from './styles.module.scss';

const CompetitionMatchesList = ({ loading, error, matches }) => (
  <div className={styles['matches-wrap']}>
    {loading && <Spin className={styles['loading-wrap']} size="large" />}
    {!loading && !error && matches.length === 0
    && <div className={styles['not-found-message']}>No matches found for this date range</div>}
    {error && (
      <Result
        status="warning"
        title="Oops! It looks like you&apos;ve exceeded your request limit! Try it in a minute."
      />
    )}
    {matches.map((match) => (
      <MatchItem key={match.id} match={match} />
    ))}
  </div>
);
CompetitionMatchesList.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  matches: PropTypes.array.isRequired,
};
export default CompetitionMatchesList;
