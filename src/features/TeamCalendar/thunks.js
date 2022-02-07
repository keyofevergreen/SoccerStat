import {
  requestTeamData,
  requestTeamDataError,
  requestTeamDataSuccess,
  requestTeamMatches, requestTeamMatchesError,
  requestTeamMatchesSuccess,
} from './actions';

// eslint-disable-next-line
export const fetchTeamData = (id) => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestTeamData());
    const teamData = await services.team.fetchTeamData(id);
    dispatch(requestTeamDataSuccess(teamData));
  } catch (error) {
    dispatch(requestTeamDataError());
  }
};

// eslint-disable-next-line
export const fetchTeamMatches = (id) => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestTeamMatches());
    const { matches } = await services.team.fetchTeamMatches(id);
    dispatch(requestTeamMatchesSuccess(matches));
  } catch (error) {
    dispatch(requestTeamMatchesError());
  }
};
