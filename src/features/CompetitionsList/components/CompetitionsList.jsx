import moment from 'moment';
import { Result, Spin } from 'antd';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

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
      <div className={styles.competition} key={comp.id}>
        <div className={styles['competition__flag-wrap']}>
          {comp.emblemUrl && (
            <img
              className={styles.competition__flag}
              src={comp.emblemUrl}
              alt={comp.name}
            />
          )}
          {!comp.emblemUrl && (
            <img
              className={styles.competition__flag}
              src={comp.area.ensignUrl}
              alt={comp.area.name}
            />
          )}
        </div>
        <div className={styles.competition__description}>
          <h1>{comp.name}</h1>
          <h2>{comp.area.name}</h2>
          <span className={styles['competition__date-range']}>
            {`${moment(comp.currentSeason.startDate, 'YYYY-MM-DD').format('DD.MM.YYYY')}
             —
             ${moment(comp.currentSeason.endDate, 'YYYY-MM-DD').format('DD.MM.YYYY')}`}
          </span>
        </div>
      </div>
    ))}
  </div>
);

CompetitionsList.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  competitions: PropTypes.instanceOf(Array).isRequired,
};

export default CompetitionsList;
