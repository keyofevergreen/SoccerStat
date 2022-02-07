import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useCompetitionTeams } from '../hooks';
import { useSortedList } from '../../../helpers/hooks';
import LimitErrorMessage from '../../../components/LimitErrorMessage';
import LoadingSpin from '../../../components/LoadingSpin';
import NotFoundMessage from '../../../components/NotFoundMessage';
import MyInput from '../../../components/Input';
import TeamItem from '../../../components/TeamItem';
import styles from './styles.module.scss';

const CompetitionTeams = () => {
  const navigate = useNavigate();
  const { competitionId, search } = useParams();
  const [loading, error, teams] = useCompetitionTeams(competitionId);
  const [searchQuery, setSearchQuery] = useState(search || '');
  const [sortedTeams] = useSortedList(teams, searchQuery);

  const handleChange = (inputValue) => {
    setSearchQuery(inputValue);
  };

  useEffect(() => {
    navigate(`/competition/${competitionId}/teams/${searchQuery}`);
  }, [searchQuery]);

  return (
    <>
      {!loading && <MyInput placeholder="Find a team" value={searchQuery} handleChange={handleChange} />}
      <div className={styles['teams-wrap']}>
        {loading && <LoadingSpin />}
        {error && <LimitErrorMessage />}
        {!loading && !error && !sortedTeams.length
          ? <NotFoundMessage>No team found for this query</NotFoundMessage>
          : sortedTeams.map((team) => <TeamItem team={team} fullMode={false} key={team.id} />)}
      </div>
    </>
  );
};

export default CompetitionTeams;
