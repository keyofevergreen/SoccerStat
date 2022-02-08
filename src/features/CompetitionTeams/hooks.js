import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCompetitionTeams } from './thunks';

// eslint-disable-next-line import/prefer-default-export
export const useCompetitionTeams = (id) => {
  const [competitionCode] = id.split('-');
  const dispatch = useDispatch();
  const {
    teams,
    competition,
    error,
    loading,
  } = useSelector((state) => state.competitionTeams);

  useEffect(() => {
    dispatch(fetchCompetitionTeams(competitionCode));
  }, []);

  return [loading, error, teams, competition];
};
