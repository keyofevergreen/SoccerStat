import { createAction } from '@reduxjs/toolkit';

export const requestCompetitions = createAction('The competitions is fetching...');

export const requestCompetitionsSuccess = createAction('The competitions has already fetched');

export const requestCompetitionsError = createAction('The competitions fetched with error');
