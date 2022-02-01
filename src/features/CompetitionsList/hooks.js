import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCompetitions } from './thunks';

// eslint-disable-next-line import/prefer-default-export
export const useCompetitions = () => {
  const dispatch = useDispatch();
  const { competitions, error, loading } = useSelector((state) => state.competitions);

  useEffect(() => {
    dispatch(fetchCompetitions());
  }, []);

  return [loading, error, competitions];
};
