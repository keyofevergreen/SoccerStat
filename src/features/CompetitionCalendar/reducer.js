import { createReducer } from '@reduxjs/toolkit';
import { requestCompetitionMatches, requestCompetitionMatchesError, requestCompetitionMatchesSuccess } from './actions';

const competitionMatchesReducer = createReducer({
  matches: [],
  competition: [],
  loading: false,
  error: false,
}, {
  [requestCompetitionMatches.type]: () => ({
    matches: [],
    competition: [],
    loading: true,
    error: false,
  }),
  [requestCompetitionMatchesSuccess.type]: (state, { payload }) => ({
    matches: payload.matches,
    competition: payload.competition,
    loading: false,
    error: false,
  }),
  [requestCompetitionMatchesError.type]: () => ({
    matches: [],
    competition: [],
    loading: false,
    error: true,
  }),
});

export default competitionMatchesReducer;
