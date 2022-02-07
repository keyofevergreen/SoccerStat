import { createReducer } from '@reduxjs/toolkit';
import {
  requestTeamData, requestTeamDataError,
  requestTeamDataSuccess,
  requestTeamMatches,
  requestTeamMatchesError,
  requestTeamMatchesSuccess,
} from './actions';

const teamReducer = createReducer({
  team: [],
  matches: [],
  teamLoading: false,
  teamError: false,
  matchesLoading: false,
  matchesError: false,
}, {
  [requestTeamData.type]: (state) => ({
    ...state,
    team: [],
    teamLoading: true,
    teamError: false,
  }),
  [requestTeamDataSuccess.type]: (state, { payload }) => ({
    ...state,
    team: payload,
    teamLoading: false,
    teamError: false,
  }),
  [requestTeamDataError.type]: (state) => ({
    ...state,
    team: [],
    teamLoading: false,
    teamError: true,
  }),
  [requestTeamMatches.type]: (state) => ({
    ...state,
    matches: [],
    matchesLoading: true,
    matchesError: false,
  }),
  [requestTeamMatchesSuccess.type]: (state, { payload }) => ({
    ...state,
    matches: payload,
    matchesLoading: false,
    matchesError: false,
  }),
  [requestTeamMatchesError.type]: (state) => ({
    ...state,
    matches: [],
    matchesLoading: false,
    matchesError: true,
  }),
});

export default teamReducer;
