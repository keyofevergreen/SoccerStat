import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCompetitionMatches } from './thunks';

// eslint-disable-next-line import/prefer-default-export
export const useCompetitionMatches = (id) => {
  const [CompetitionCode] = id.split('-');
  const dispatch = useDispatch();
  const {
    matches,
    competition,
    error,
    loading,
  } = useSelector((state) => state.competitionMatches);

  useEffect(() => {
    dispatch(fetchCompetitionMatches(CompetitionCode));
  }, []);

  return [loading, error, matches, competition];
};
