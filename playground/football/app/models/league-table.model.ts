export interface LeagueTable {
  leagueCaption: string;
  matchday: number;
  /** Populated for Leagues */
  standing?: Array<Standing>;
  /** Populated for Tournaments (i.e. EuroCup, Champions League) */
  standings?: Standings;
}

export interface Standing {
  /** needs to be extracted from _links.team.href */
  teamId: number;
  position: number;
  teamName: string;
  crestURI: string;
  playedGames: number;
  points: number;
  goals: number;
  goalsAgainst: number;
  goalDifference: number;
  wins: number;
  draws: number;
  losses: number;
  home: HomeAway;
  away: HomeAway;
}

export interface HomeAway {
  goals: number;
  goalsAgainst: number;
  wins: number;
  draws: number;
  losses: number;
}

export interface GroupStanding {
    group: string;
    rank: number;
    team: string;
    teamId: number;
    playedGames: number;
    crestURI: string;
    points: number;
    goals: number;
    goalsAgainst: number;
    goalDifference: number;
}

export interface Standings {
    A: GroupStanding[];
    B: GroupStanding[];
    C: GroupStanding[];
    D: GroupStanding[];
    E: GroupStanding[];
    F: GroupStanding[];
    G: GroupStanding[];
    H: GroupStanding[];
}
