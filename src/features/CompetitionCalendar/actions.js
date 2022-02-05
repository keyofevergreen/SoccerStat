import { createAction } from '@reduxjs/toolkit';

export const requestCompetitionMatches = createAction('League matches is fetching...');

export const requestCompetitionMatchesSuccess = createAction('League matches has already fetched');

export const requestCompetitionMatchesError = createAction('League matches fetched with error');
