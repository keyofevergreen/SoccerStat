import { requestCompetitions, requestCompetitionsSuccess, requestCompetitionsError } from './actions';

// eslint-disable-next-line import/prefer-default-export
export const fetchCompetitions = () => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestCompetitions());
    const { competitions } = await services.competitions.fetchCompetitions();
    // eslint-disable-next-line max-len
    dispatch(requestCompetitionsSuccess(competitions));
  } catch (error) {
    dispatch(requestCompetitionsError());
  }
};
