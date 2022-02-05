import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCompetitionMatches } from './thunks';

// eslint-disable-next-line import/prefer-default-export
export const useCompetitionMatches = (id) => {
  const [urlCode] = id.split('-');
  const dispatch = useDispatch();
  // eslint-disable-next-line object-curly-newline
  const { matches, competition, error, loading } = useSelector((state) => state.competitionMatches);

  useEffect(() => {
    dispatch(fetchCompetitionMatches(urlCode));
  }, []);

  return [loading, error, matches, competition];
};
