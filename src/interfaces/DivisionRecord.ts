import { Record } from "./Record";
import { Team } from "./Team";

export interface DivisionRecord {
  league: { id: number; name: string };
  conference: { id: number; name: string };
  division: { id: number; name: string; nameShort: string };
  standingsType: string;
  teamRecords: TeamRecord[];
}

export interface TeamRecord {
  conferenceRank: string;
  divisionRank: string;
  gamesPlayed: number;
  goalsAgainst: number;
  goalsScored: number;
  leagueRank: string;
  leagueRecord: Record;
  points: number;
  pointsPercentage: number;
  ppLeagueRank: string;
  regulationWins: number;
  team: Team;
  wildCardRank: string;
}
