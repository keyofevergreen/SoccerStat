import { Helmet } from 'react-helmet';
import { useParams } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import CompetitionCalendar from '../../features/CompetitionCalendar/components';
import { useCompetitionMatches } from '../../features/CompetitionCalendar';
import CompetitionTeams from '../../features/CompetitionTeams/components';
import styles from './styles.module.scss';

const Competition = () => {
  const { competitionId } = useParams();
  const [loading, error, matches, competition] = useCompetitionMatches(competitionId);
  const competitionFlag = JSON.parse(localStorage.currentCompetitionFlag);

  return (
    <div>
      <Helmet>
        <title>{`SoccerStat - ${competition.name ? competition.name : 'Loading...'}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="League Calendar page" />
      </Helmet>
      {!loading && !error && (
        <div className={styles['page-header-wrap']}>
          <h1 className="page-header">{competition.name}</h1>
          <div className={styles['page-description-wrap']}>
            <img src={competitionFlag.url} alt={competitionFlag.alt} className={styles['flag-img']} />
            <span className="page-description">{competition?.area?.name}</span>
          </div>
        </div>
      )}

      <Routes>
        <Route
          exact
          index
          element={
            (
              <CompetitionCalendar
                loading={loading}
                error={error}
                matches={matches}
                competition={competition}
              />
            )
          }
        />
        <Route
          path="/:dateRange"
          element={
            (
              <CompetitionCalendar
                loading={loading}
                error={error}
                matches={matches}
                competition={competition}
              />
            )
          }
        />
        <Route path="/teams" element={<CompetitionTeams />} />
        <Route path="/teams/:search" element={<CompetitionTeams />} />
      </Routes>
    </div>
  );
};

export default Competition;
