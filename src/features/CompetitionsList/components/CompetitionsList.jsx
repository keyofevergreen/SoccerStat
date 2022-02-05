import { Result, Spin } from 'antd';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import CompetitionItem from './CompetitionItem';

const CompetitionsList = ({ loading, error, competitions }) => (
  <div className={styles['competitions-wrap']}>
    {loading && <Spin className={styles['loading-wrap']} size="large" />}
    {error && (
      <Result
        status="warning"
        title="Oops! It looks like you&apos;ve exceeded your request limit! Try it in a minute."
      />
    )}
    {competitions.map((comp) => (
      <CompetitionItem comp={comp} key={comp.id} />
    ))}
  </div>
);

CompetitionsList.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  competitions: PropTypes.array.isRequired,
};

export default CompetitionsList;
