import { requestCompetitions, requestCompetitionsSuccess, requestCompetitionsError } from './actions';

// eslint-disable-next-line import/prefer-default-export
export const fetchCompetitions = () => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestCompetitions());
    // eslint-disable-next-line camelcase
    const { competitions } = await services.competitions.fetchCompetitions();
    // eslint-disable-next-line camelcase
    const notEuropeTierOne = /^(BRA|SAM|INT)$/;
    dispatch(requestCompetitionsSuccess(competitions.filter((comp) => (comp.plan === 'TIER_ONE' && !notEuropeTierOne.test(comp.area.countryCode)))));
  } catch (error) {
    dispatch(requestCompetitionsError());
  }
};
