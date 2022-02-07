import { createAction } from '@reduxjs/toolkit';

export const requestCompetitionTeams = createAction('Competition teams is fetching...');

export const requestCompetitionTeamsSuccess = createAction('Competition teams has already fetched');

export const requestCompetitionTeamsError = createAction('Competition teams fetched with error');
