import competitionsService from './features/CompetitionsList/service';
import { competitionMatchesService } from './features/CompetitionCalendar';

const createServices = (rest) => ({
  competitions: competitionsService(rest),
  competitionMatches: competitionMatchesService(rest),
});

export default createServices;
