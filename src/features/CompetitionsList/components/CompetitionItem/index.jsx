import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const CompetitionItem = ({ comp }) => {
  const navigate = useNavigate();
  const urlFlag = {
    url: comp.emblemUrl ? comp.emblemUrl : comp.area?.ensignUrl,
    alt: comp.emblemUrl ? comp.name : comp.area.name,
  };
  const onClick = () => {
    localStorage.setItem('currentCompetitionFlag', JSON.stringify(urlFlag));
    navigate(`/competition/${comp.code}-${comp.id}`);
  };
  return (
    <button
      type="button"
      className={styles.competition}
      onClick={onClick}
    >
      <div className={styles['competition__flag-wrap']}>
        <img
          className={styles.competition__flag}
          src={urlFlag.url}
          alt={urlFlag.alt}
        />
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
    </button>
  );
};

CompetitionItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  comp: PropTypes.object.isRequired,
};

export default CompetitionItem;
