import { requestCompetitionTeams, requestCompetitionTeamsError, requestCompetitionTeamsSuccess } from './actions';

// eslint-disable-next-line
export const fetchCompetitionTeams = (id) => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestCompetitionTeams());
    const competitionTeams = await services.competitionTeams.fetchCompetitionTeams(id);
    dispatch(requestCompetitionTeamsSuccess(competitionTeams));
  } catch (error) {
    dispatch(requestCompetitionTeamsError());
  }
};
