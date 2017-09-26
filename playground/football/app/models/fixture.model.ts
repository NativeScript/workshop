export interface Fixture {
  fixtureId?: number;
  competitionId?: number;
  homeTeamId?: number;
  awayTeamId?: number;
  date: string;
  status: string;
  matchday: number;
  homeTeamName: string;
  awayTeamName: string;
  result?: Result;
  odds: Odds;
}

export interface Result {
  goalsHomeTeam?: number;
  goalsAwayTeam?: number;
  halfTime?: HalfTime;
}

export interface Odds {
  homeWin: number;
  draw: number;
  awayWin: number;
}
    
export interface HalfTime {
  goalsHomeTeam: number;
  goalsAwayTeam: number;
}
