import competitionsService from './features/CompetitionsList/service';
import { competitionMatchesService } from './features/CompetitionCalendar';
import { competitionTeamsService } from './features/CompetitionTeams';
import { teamService } from './features/TeamCalendar';

const createServices = (rest) => ({
  competitions: competitionsService(rest),
  competitionMatches: competitionMatchesService(rest),
  competitionTeams: competitionTeamsService(rest),
  team: teamService(rest),
});

export default createServices;
