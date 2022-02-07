import { createReducer } from '@reduxjs/toolkit';
import { requestCompetitionTeams, requestCompetitionTeamsError, requestCompetitionTeamsSuccess } from './actions';

const competitionTeamsReducer = createReducer({
  teams: [],
  loading: false,
  error: false,
}, {
  [requestCompetitionTeams.type]: () => ({
    teams: [],
    competition: [],
    loading: true,
    error: false,
  }),
  [requestCompetitionTeamsSuccess.type]: (state, { payload }) => ({
    teams: payload.teams,
    competition: payload.competition,
    loading: false,
    error: false,
  }),
  [requestCompetitionTeamsError.type]: () => ({
    teams: [],
    competition: [],
    loading: false,
    error: true,
  }),
});

export default competitionTeamsReducer;
