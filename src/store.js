import { configureStore } from '@reduxjs/toolkit';
import { isDevelopment } from './utils/environments';
import { competitionsReducer } from './features/CompetitionsList';
import { competitionMatchesReducer } from './features/CompetitionCalendar';

const createStore = ({
  history,
  services,
  initialState,
}) => (
  configureStore({
    reducer: {
      competitions: competitionsReducer,
      competitionMatches: competitionMatchesReducer,
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
