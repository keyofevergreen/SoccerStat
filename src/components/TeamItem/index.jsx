import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const TeamItem = ({ team, fullMode }) => {
  const teamColors = team.clubColors ? team.clubColors.split(' / ').join(', ') : null;

  return (
    <div>
      {fullMode
        ? (
          <div className={styles.team}>
            <div className={styles['team__flag-wrap']}>
              <img src={team.crestUrl} alt={team.shortName} />
            </div>
            <div className={styles.team__description}>
              <span className={styles.team__name}>{team.shortName}</span>
              <span className={styles.team__founded}>{`Founded in ${team.founded}`}</span>
              <span className={styles.team__country}>{`Country: ${team?.area?.name}`}</span>
              {teamColors && (
                <span>{`Club colors: ${teamColors}`}</span>
              )}
              {team.website && <a href={team.website}>Team website</a>}
            </div>
          </div>
        )
        : (
          <Link to={`/team/${team.id}`}>
            <div className={styles['team-crop']}>
              <span className={styles['team-crop__name']}>{team.shortName}</span>
              <div className={styles['team-crop__description']}>
                <span className={styles['team-crop__country']}>{`Country: ${team.area.name}`}</span>
                {teamColors && (
                  <span>{`Club colors: ${teamColors}`}</span>
                )}
                <span className={styles['team-crop__founded']}>{`Founded in ${team.founded}`}</span>
              </div>
            </div>
          </Link>
        )}
    </div>
  );
};

TeamItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  team: PropTypes.object.isRequired,
  fullMode: PropTypes.bool.isRequired,
};

export default TeamItem;
