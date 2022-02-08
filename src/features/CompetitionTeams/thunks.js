import { requestCompetitionTeams, requestCompetitionTeamsError, requestCompetitionTeamsSuccess } from './actions';

// eslint-disable-next-line import/prefer-default-export
export const fetchCompetitionTeams = (id) => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestCompetitionTeams());
    const competitionTeams = await services.competitionTeams.fetchCompetitionTeams(id);
    dispatch(requestCompetitionTeamsSuccess(competitionTeams));
  } catch (error) {
    dispatch(requestCompetitionTeamsError());
  }
};
