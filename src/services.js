import competitionsService from './features/CompetitionsList/service';

const createServices = (rest) => ({
  competitions: competitionsService(rest),
});

export default createServices;
