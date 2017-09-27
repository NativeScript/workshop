import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { FootballFactory, Competition, LeagueTable, Standing, Team, Player, Fixture, FixtureSearchOptions } from './models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class FootballService {
  private apiKey = 'cba58e88198c44c78548e2be6c21b671';
  private baseUrl = 'https://api.football-data.org/v1';
  private header: Headers;

  constructor(private http: Http) {
    this.header = this.prepareHeader();
  }

  /** 
   * Prepares a header with the API KEY
   */
  private prepareHeader(): Headers {
    const headers = new Headers();
    headers.append('X-Auth-Token', this.apiKey);

    return headers;
  }

  /**
   * List all teams for a certain competition.
   * URL Structure: https://api.football-data.org/v1/competitions/{competitionId}/teams
   */
  public getTeams(competitionId: number): Observable<Team[]> {
    const url = `${this.baseUrl}/competitions/${competitionId}/teams`;
    
    return this.http.get(url, { headers: this.header })
    .map(result => result.json())
    .map(teams => FootballFactory.teamsFromRaw(teams));
  }

  /**
   * Show one team.
   * URL Structure: https://api.football-data.org/v1/teams/{teamId}
   */
  public getTeam(teamId: number): Observable<Team> {
    // 1. construct a url based on https://api.football-data.org/v1/teams/{teamId}
    // 2. call http get with the url and header
    // 3. use FootballFactory.teamFromRaw to convert the output

    const url = `${this.baseUrl}/teams/${teamId}`;

    return this.notImplemented('getTeam');
  }

  /**
   * Show all players for a certain team.
   * URL Structure: https://api.football-data.org/v1/teams/{teamId}/players
   */
  public getPlayers(teamId: number): Observable<Player[]> {
    // 1. construct a url based on https://api.football-data.org/v1/teams/{teamId}/players
    // 2. call http get with the url and header
    // 3. use FootballFactory.playersFromRaw to convert the output
    
    return this.notImplemented('getPlayers');
  }

  /**
   * Show all fixtures for a certain team.
   * URL Structure: https://api.football-data.org/v1/teams/{teamId}/fixtures
   */
  public getTeamFixtures(teamId: number): Observable<Fixture[]> {
    // 1. construct a url based on https://api.football-data.org/v1/teams/{teamId}/fixtures
    // 2. call http get with the url and header
    // 3. use FootballFactory.fixturesFromRaw to convert the output

    return this.notImplemented('getTeamFixtures');
  }

  /**
   * Show League Table / current standing.	
   * URL Structure: https://api.football-data.org/v1/competitions/{competitionId}/leagueTable
   * @param matchday 
   */
  public getLeagueTable(competitionId: number, matchday: number = null): Observable<LeagueTable> {
    const url = `${this.baseUrl}/competitions/${competitionId}/leagueTable`;

    let searchParams: URLSearchParams = new URLSearchParams();
    if (matchday) {
      searchParams.set('matchday', matchday.toString());
    }

    return this.http.get(url, { headers: this.header, params: searchParams })
    .map(result => result.json())
    .map(competition => FootballFactory.leagueTableFromRaw(competition));
  }

  /**
   * List all fixtures for a certain competition.	
   * URL Structure: https://api.football-data.org/v1/competitions/{competitionId}/fixtures
   * @param options: FixtureSearchOptions which allows to specify either a matchday or timeframe
   */
  public getFixtures(competitionId: number, options: FixtureSearchOptions = {}): Observable<Fixture[]> {
    // 1. construct a url based on https://api.football-data.org/v1/competitions/{competitionId}/fixtures
    // 2. construct searchParams from options.matchday and options.timeFrame
      // see getLeagueTable as the example
      // or use this.buildSearchParams(options) if you struggle
    // 3. call http get with the url and header
    // 4. use FootballFactory.fixturesFromRaw to convert the output

    return this.notImplemented('getFixtures');
  }

  /**
   * Constructs an http ready set of parameters based on the provided parameters.
   * @param queryParams an object containing query parameters i.e. { matchday: 5 }
   */
  private buildSearchParams(queryParams: any) {
    let searchParams: URLSearchParams = new URLSearchParams();

    for (let key in queryParams) {
      searchParams.set(key, queryParams[key]);
    }
    return searchParams;
  }

  private notImplemented(fname: string): Observable<any> {
    return Observable.throw(`${fname} Not Implemented`);
  }
}
