import { configureStore } from '@reduxjs/toolkit';
import { isDevelopment } from './utils/environments';
import { competitionsReducer } from './features/CompetitionsList';
import { competitionMatchesReducer } from './features/CompetitionCalendar';
import { competitionTeamsReducer } from './features/CompetitionTeams';
import { teamReducer } from './features/TeamCalendar';

const createStore = ({
  history,
  services,
  initialState,
}) => (
  configureStore({
    reducer: {
      competitions: competitionsReducer,
      competitionMatches: competitionMatchesReducer,
      competitionTeams: competitionTeamsReducer,
      team: teamReducer,
    },
    devTools: isDevelopment(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      immutableCheck: true,
      serializableCheck: false,
      thunk: {
        extraArgument: {
          history,
          services,
        },
      },
    }),
    preloadedState: initialState || {},
  })
);

export default createStore;
