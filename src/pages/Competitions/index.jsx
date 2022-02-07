import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import CompetitionsList from '../../features/CompetitionsList/components';
import { useCompetitions } from '../../features/CompetitionsList';
import MyInput from '../../components/Input';
import '../../assets/styles/global.scss';
import { useSortedList } from '../../helpers/hooks';

// eslint-disable-next-line
const Competitions = () => {
  const { search } = useParams();
  const navigate = useNavigate();
  const [loading, error, competitions] = useCompetitions();
  const [searchQuery, setSearchQuery] = useState(search || '');
  const [sortedCompetitions] = useSortedList(competitions, searchQuery);

  const handleChange = (inputValue) => {
    setSearchQuery(inputValue);
  };

  useEffect(() => {
    navigate(`/competitions/${searchQuery}`);
  }, [searchQuery]);
  return (
    <>
      <Helmet>
        <title>SoccerStat - Competitions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Competition page" />
      </Helmet>
      <h1 className="page-header">European Football Competition</h1>
      <MyInput placeholder="Find the league" value={searchQuery} handleChange={handleChange} />
      <CompetitionsList loading={loading} error={error} competitions={sortedCompetitions} />
    </>
  );
};

export default Competitions;
