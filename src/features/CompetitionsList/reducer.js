import { createReducer } from '@reduxjs/toolkit';
import { requestCompetitions, requestCompetitionsError, requestCompetitionsSuccess } from './actions';

const competitionsReducer = createReducer({
  competitions: [],
  loading: false,
  error: false,
}, {
  [requestCompetitions.type]: () => ({
    competitions: [],
    loading: true,
    error: false,
  }),
  [requestCompetitionsSuccess.type]: (state, { payload }) => ({
    competitions: payload,
    loading: false,
    error: false,
  }),
  [requestCompetitionsError.type]: () => ({
    competitions: [],
    loading: false,
    error: true,
  }),
});

export default competitionsReducer;
