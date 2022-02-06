import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from 'react-router';
import { Button } from 'antd';
import CompetitionCalendar from '../../features/CompetitionCalendar/components/CompetitionCalendar';
import { useCompetitionMatches } from '../../features/CompetitionCalendar';
import styles from './styles.module.scss';

const Competition = () => {
  const navigate = useNavigate();
  const { competitionId } = useParams();
  const [loading, error, matches, competition] = useCompetitionMatches(competitionId);
  const competitionFlag = JSON.parse(localStorage.currentCompetitionFlag);

  const onClick = (e) => {
    e.preventDefault();
    navigate(`/competition/${competitionId}/teams`);
  };
  return (
    <div>
      <Helmet>
        <title>{`SoccerStat - ${competition.name ? competition.name : 'Loading...'}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="League Calendar page" />
      </Helmet>
      {!loading && !error && (
        <>
          <div className={styles['page-header-wrap']}>
            <h1 className="page-header">{competition.name}</h1>
            <div className={styles['page-description-wrap']}>
              <img src={competitionFlag.url} alt={competitionFlag.alt} className={styles['flag-img']} />
              <span className="page-description">{competition?.area?.name}</span>
            </div>
          </div>
          <Button type="primary" block className={styles['button-link']} onClick={onClick}>
            Show participating teams
          </Button>
        </>
      )}
      <CompetitionCalendar
        loading={loading}
        error={error}
        matches={matches}
        competition={competition}
      />
    </div>
  );
};

export default Competition;
