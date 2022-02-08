import { requestCompetitionMatches, requestCompetitionMatchesError, requestCompetitionMatchesSuccess } from './actions';

// eslint-disable-next-line import/prefer-default-export
export const fetchCompetitionMatches = (id) => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestCompetitionMatches());
    const competitionMatches = await services.competitionMatches.fetchCompetitionMatches(id);
    dispatch(requestCompetitionMatchesSuccess(competitionMatches));
  } catch (error) {
    dispatch(requestCompetitionMatchesError());
  }
};
