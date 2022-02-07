import { createAction } from '@reduxjs/toolkit';

export const requestCompetitionMatches = createAction('Competition matches is fetching...');

export const requestCompetitionMatchesSuccess = createAction('Competition matches has already fetched');

export const requestCompetitionMatchesError = createAction('Competition matches fetched with error');
