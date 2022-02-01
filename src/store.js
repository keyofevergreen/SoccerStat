import { configureStore } from '@reduxjs/toolkit';
import { isDevelopment } from './utils/environments';
import { competitionsReducer } from './features/CompetitionsList';

const createStore = ({
  history,
  services,
  initialState,
}) => (
  configureStore({
    reducer: {
      competitions: competitionsReducer,
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
