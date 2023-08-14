import { Record } from "./Record";
import { Team } from "./Team";

// Interface describing the schedule of games of the current day
export interface Schedule {
  date: string;
  games: Game[];
}

export interface Game {
  gameDate: string;
  gamePk: number;
  season: string;
  venue: { name: string };
  teams: { away: TeamInfo; home: TeamInfo };
}

// Interface to describe details about a team on game day
interface TeamInfo {
  leagueRecord: Record;
  score: number;
  team: Team;
}
