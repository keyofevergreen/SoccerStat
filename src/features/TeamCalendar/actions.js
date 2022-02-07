import { createAction } from '@reduxjs/toolkit';

export const requestTeamData = createAction('Team data is fetching...');

export const requestTeamDataSuccess = createAction('Team data has already fetched');

export const requestTeamDataError = createAction('Team data fetched with error');

export const requestTeamMatches = createAction('Team matches is fetching...');

export const requestTeamMatchesSuccess = createAction('Team matches has already fetched');

export const requestTeamMatchesError = createAction('Team matches fetched with error');
