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
  private baseUrl = 'https://api.football-data.org/v1/';
  private header;

  constructor(private http: Http) {
    this.header = this.prepareHeader();
  }

  /**
   * List all available competitions.
   * URL Structure: https://api.football-data.org/v1/competitions
   */
  public getCompetitions(): Promise<Competition[]> {
    return this.callFootballService('competitions')
    .map(competitions => FootballFactory.competitionsFromRaw(competitions))
    .toPromise();
  }

  /**
   * Show one competition.
   * URL Structure: https://api.football-data.org/v1/competitions/{competitionId}
   * @param competitionId: id of the competition
   */
  public getCompetition(competitionId: number): Promise<Competition> {
    return this.notImplemented('getCompetition');
  }

  /**
   * Show League Table / current standing.	
   * URL Structure: https://api.football-data.org/v1/competitions/{competitionId}/leagueTable
   * @param matchday 
   */
  public getLeagueTable(competitionId: number, matchday: number = null): Promise<LeagueTable> {
    return this.notImplemented('getLeagueTable');
  }

  /**
   * List all teams for a certain competition.
   * URL Structure: https://api.football-data.org/v1/competitions/{competitionId}/teams
   */
  public getTeams(competitionId: number): Promise<Team[]> {
    return this.notImplemented('getTeams');
  }

  /**
   * Show one team.
   * URL Structure: https://api.football-data.org/v1/teams/{teamId}
   */
  public getTeam(teamId: number): Promise<Team> {
    return this.notImplemented('getTeam');
  }

  /**
   * Show all players for a certain team.
   * URL Structure: https://api.football-data.org/v1/teams/{teamId}/players
   */
  public getPlayers(teamId: number): Promise<Player[]> {
    return this.notImplemented('getPlayers');
  }

  /**
   * List all fixtures for a certain competition.	
   * URL Structure: https://api.football-data.org/v1/competitions/{competitionId}/fixtures
   * @param options: FixtureSearchOptions which allows to specify either a matchday or timeframe
   */
  public getFixtures(competitionId: number, options: FixtureSearchOptions = {}): Promise<Fixture[]> {
    return this.notImplemented('getFixtures');
  }

  /**
   * Show all fixtures for a certain team.
   * URL Structure: https://api.football-data.org/v1/teams/{teamId}/fixtures
   */
  public getTeamFixtures(teamId: number): Promise<Fixture[]> {
    return this.notImplemented('getTeamFixtures');
  }

  /**
   * Performs the http get from the api.petfinder.com and returns the object containing the response.
   * @param method the name of the api method to call
   * @param queryParams an object containing parameters
   */
  private callFootballService(method: string, queryParams: any = {}): Observable<any> {
    return Observable.fromPromise(this.notImplemented('callFootballService'));
  }

  /** 
   * Prepares a header with the API KEY
   */
  private prepareHeader() {
    const headers = new Headers();
    headers.append('X-Auth-Token', this.apiKey);

    return headers;
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

  /**
   * Checks if the response from the http service is successful.
   * Result is expected to have an ok flag set to true.
   * @param result result from the http service
   */
  private validateResults(result) {
    if (!result.ok) {
      throw new Error(result.statusText);
    }
  }

  private notImplemented(fname: string): Promise<any> {
    return new Promise( 
      (resolve, reject) =>
        reject('Function Not Implemented: ' + fname)
    );
  }
}
