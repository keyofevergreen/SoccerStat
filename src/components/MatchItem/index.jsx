import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './styles.module.scss';
import '../../assets/styles/global.scss';

const MatchItem = ({ match }) => (
  <div className={styles.match}>
    <div className={styles.match__date}>
      {moment(match.utcDate, moment.ISO_8601).format('DD MMM YYYY HH:mm')}
    </div>
    <div className={`${styles.match__team} ${styles['match__team--home']}`}>
      <Link to={`/team/${match.homeTeam.id}`} className={match.score.winner === 'HOME_TEAM' ? styles['winner--home-team'] : ''}>{match.homeTeam.name}</Link>
    </div>
    <div className={`${styles.match__team} ${styles['match__team--away']}`}>
      <Link to={`/team/${match.awayTeam.id}`} className={match.score.winner === 'AWAY_TEAM' ? styles['winner--away-team'] : ''}>{match.awayTeam.name}</Link>
    </div>
    <div className={styles.match__info}>
      <div className={styles.match__group}>
        {match.group !== null ? match.group.replace('_', ' ').toLowerCase() : null}
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
