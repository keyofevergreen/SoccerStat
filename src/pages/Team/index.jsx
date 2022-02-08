import { useParams } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTeam, useTeamMatches } from '../../features/TeamCalendar';
import TeamCalendar from '../../features/TeamCalendar/components';
import TeamItem from '../../components/TeamItem';
import styles from './styles.module.scss';
import CompetitionItem from '../../components/CompetitionItem';

const Team = () => {
  const { teamId } = useParams();
  const [teamLoading, teamError, team] = useTeam(teamId);
  const [matchesLoading, matchesError, matches] = useTeamMatches(teamId);

  return (
    <div>
      <Helmet>
        <title>{`SoccerStat - ${team.shortName ? team.shortName : 'Loading...'}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Team page" />
      </Helmet>
      <div>
        {!teamLoading && !teamError && !matchesLoading && !matchesError
        && (
          <>
            <div className={styles['team-info']}>
              <TeamItem team={team} fullMode />
            </div>
            {team.activeCompetitions
            && (
              <div className={styles['active-competitions']}>
                <h2>Active Competitions</h2>
                {team.activeCompetitions.filter((comp) => comp.plan === 'TIER_ONE').map((comp) => <CompetitionItem
                  comp={comp} fullMode={false} key={comp.id} />)}
              </div>
            )}
          </>
        )}
      </div>
      <Routes>
        <Route
          exact
          index
          element={
            (
              <TeamCalendar
                loading={matchesLoading}
                error={matchesError}
                matches={matches}
              />
            )
          }
        />
        <Route
          path="/:dateRange"
          element={
            (
              <TeamCalendar
                loading={matchesLoading}
                error={matchesError}
                matches={matches}
              />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default Team;
