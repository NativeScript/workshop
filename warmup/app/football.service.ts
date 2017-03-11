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

  public getCompetitions(): Promise<Competition[]> {
    return this.callFootballService('competitions')
    .map(competitions => FootballFactory.competitionsFromRaw(competitions))
    .toPromise();
  }

  public getCompetition(competitionId: number): Promise<Competition> {
    return this.callFootballService(`competitions/${competitionId}`)
    .map(competition => FootballFactory.competitionFromRaw(competition))
    .toPromise();
  }

  public getLeagueTable(competitionId: number, matchday: number = null): Promise<LeagueTable> {
    return this.callFootballService(`competitions/${competitionId}/leagueTable`, { matchday })
    .map(table => FootballFactory.leagueTableFromRaw(table))
    .toPromise();
  }

  public getTeams(competitionId: number): Promise<Team[]> {
    return this.callFootballService(`competitions/${competitionId}/teams`)
    .map(result => FootballFactory.teamsFromRaw(result.teams))
    .toPromise();
  }

  public getTeam(teamId: number): Promise<Team> {
    return this.callFootballService(`teams/${teamId}`)
    .map(team => FootballFactory.teamFromRaw(team))
    .toPromise();
  }

  public getPlayers(teamId: number): Promise<Player[]> {
    return this.callFootballService(`teams/${teamId}/players`)
    .map(result => FootballFactory.playersFromRaw(result.players))
    .toPromise();
  }

  public getFixtures(competitionId: number, options: FixtureSearchOptions = {}): Promise<Fixture[]> {
    return this.callFootballService(`competitions/${competitionId}/fixtures`, options)
    .map(result => FootballFactory.fixturesFromRaw(result.fixtures))
    .toPromise();
  }

  public getTeamFixtures(teamId: number): Promise<Fixture[]> {
    return this.callFootballService(`teams/${teamId}/fixtures`)
    .map(result => FootballFactory.fixturesFromRaw(result.fixtures))
    .toPromise();
  }

  /**
   * Performs the http get from the api.petfinder.com and returns the object containing the response.
   * @param method the name of the api method to call
   * @param params an object containing parameters
   */
  private callFootballService(method: string, params: any = {}): Observable<any> {
    const searchParams: URLSearchParams = this.buildSearchParams(params);

    return this.http.get(
      this.baseUrl + method,
      { 
        search: searchParams,
        headers: this.header
      }
    )
    .do((result : any) => {
      if (!result.ok) {
        throw new Error(result.statusText);
      }
    })
    .map(result => result.json());
  }

  private prepareHeader() {
    const headers = new Headers();
    headers.append('X-Auth-Token', this.apiKey);

    return headers;
  }

  /**
   * Constructs an http ready set of parameters based on the provided parameters.
   * @param params an object containing parameters
   */
  private buildSearchParams(params: any) {
    let searchParams: URLSearchParams = new URLSearchParams();

    for (let key in params) {
      searchParams.set(key, params[key]);
    }
    return searchParams;
  }
}
