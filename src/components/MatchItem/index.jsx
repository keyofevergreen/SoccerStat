import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './styles.module.scss';

const MatchItem = ({ match }) => (
  <div className={styles.match}>
    <div className={styles.match__date}>
      {moment(match.utcDate, moment.ISO_8601).format('DD MMM YYYY HH:mm')}
    </div>
    <div className={`${styles.match__team} ${styles['match__team--home']}`}>
      <span className={match.score.winner === 'HOME_TEAM' ? styles['winner--home-team'] : ''}>{match.homeTeam.name}</span>
    </div>
    <div className={`${styles.match__team} ${styles['match__team--away']}`}>
      <span className={match.score.winner === 'AWAY_TEAM' ? styles['winner--away-team'] : ''}>{match.awayTeam.name}</span>
    </div>
    <div className={styles.match__info}>
      <div className={styles.match__group}>
        Group A
      </div>
      <span className={styles.match__scores}>
        {match.score.winner ? `${match.score.fullTime.homeTeam}:${match.score.fullTime.awayTeam}` : '-'}
      </span>
      <div className={styles.match__status}>
        {match.status}
      </div>
    </div>
  </div>
);

MatchItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.object.isRequired,
};

export default MatchItem;
