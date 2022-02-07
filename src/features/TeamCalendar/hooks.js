import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeamData, fetchTeamMatches } from './thunks';

export const useTeam = (id) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line object-curly-newline
  const { team, teamError, teamLoading } = useSelector((state) => state.team);

  useEffect(() => {
    dispatch(fetchTeamData(id));
  }, []);

  return [teamError, teamLoading, team];
};

export const useTeamMatches = (id) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line object-curly-newline
  const { matches, matchesError, matchesLoading } = useSelector((state) => state.team);

  useEffect(() => {
    dispatch(fetchTeamMatches(id));
  }, []);

  return [matchesLoading, matchesError, matches];
};
