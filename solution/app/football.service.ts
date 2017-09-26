import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { FootballFactory, Competition, LeagueTable, Standing, Team, Player, Fixture, FixtureSearchOptions } from './models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'

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
    const url = `${this.baseUrl}/teams/${teamId}`;

    return this.http.get(url, { headers: this.header })
    .map(result => result.json())
    .map(result => FootballFactory.teamFromRaw(result));
  }

  /**
   * Show all players for a certain team.
   * URL Structure: https://api.football-data.org/v1/teams/{teamId}/players
   */
  public getPlayers(teamId: number): Observable<Player[]> {
    const url = `${this.baseUrl}/teams/${teamId}/players`;

    return this.http.get(url, { headers: this.header })
    .map(result => result.json())
    .map(result => FootballFactory.playersFromRaw(result));
  }

  /**
   * Show all fixtures for a certain team.
   * URL Structure: https://api.football-data.org/v1/teams/{teamId}/fixtures
   */
  public getTeamFixtures(teamId: number): Observable<Fixture[]> {
    const url = `${this.baseUrl}/teams/${teamId}/fixtures`;

    return this.http.get(url, { headers: this.header })
    .map(result => result.json())
    .map(result => FootballFactory.fixturesFromRaw(result));
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

    // alternative way
    // let searchParams = this.buildSearchParams({ matchday });

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
    const url = `${this.baseUrl}/competitions/${competitionId}/fixtures`;

    let searchParams: URLSearchParams = new URLSearchParams();
    if (options.matchday) {
      searchParams.set('matchday', options.matchday.toString());
    } else if (options.timeFrame) {
      searchParams.set('timeFrame', options.timeFrame);
    }

    // alternative way
    // let searchParams = this.buildSearchParams(options);

    return this.http.get(url, { headers: this.header, params: options })
    .map(result => result.json())
    .map(result => FootballFactory.fixturesFromRaw(result));
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
}
