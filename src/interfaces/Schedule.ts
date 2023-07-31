// Interface describing the schedule of games of the current day
export interface Schedule {
  date: string;
  games: Game[];
}

interface Game {
  gameDate: string;
  gamePk: number
  season: string;
  venue: { name: string };
  teams: { away: TeamInfo; home: TeamInfo };
}

// Interface to describe details about a team on game day
interface TeamInfo {
  leagueRecord: { wins: number; losses: number; ot: number };
  score: number;
  team: { id: number; name: string };
}
