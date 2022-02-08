import PropTypes from 'prop-types';
import CompetitionItem from '../../../components/CompetitionItem/index';
import LimitErrorMessage from '../../../components/LimitErrorMessage';
import LoadingSpin from '../../../components/LoadingSpin';
import styles from './styles.module.scss';
import NotFoundMessage from '../../../components/NotFoundMessage';

const CompetitionList = ({ loading, error, competitions }) => (
  <div className={styles['competitions-wrap']}>
    {loading && <LoadingSpin />}
    {error && <LimitErrorMessage />}
    {!error && !loading && !competitions.length
      ? <NotFoundMessage>Not found competition for this query</NotFoundMessage>
      : competitions.map((comp) => (
        <CompetitionItem comp={comp} fullMode key={comp.id} />
      ))}
  </div>
);

CompetitionList.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  competitions: PropTypes.array.isRequired,
};

export default CompetitionList;
