import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { Competition, LeagueTable, Standing, Team, Player, Fixture, FixtureSearchOptions } from './models';
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

  public getCompetitions(): Promise<Array<Competition>> {
    return this.callFootballService('competitions')
      .toPromise();
  }

  public getCompetition(competitionId: number): Promise<Competition> {
    return this.callFootballService(`competitions/${competitionId}`)
    .toPromise();
  }

  public getLeagueTable(competitionId: number, matchday: number = null): Promise<LeagueTable> {
    return this.callFootballService(`competitions/${competitionId}/leagueTable`, { matchday })
    .do((table: LeagueTable) => {
      // If table for a leage (not a tournament with groups)
      if (table.standing) {
        // Append teamId for each standing
        table.standing.forEach(standing => this.appendStandingTeamId(standing))
      }
    })
    .toPromise();
  }

  public getTeams(competitionId: number): Promise<Team[]> {
    return this.callFootballService(`competitions/${competitionId}/teams`)
    .map(result => result.teams)
    .do( 
      (teams: Array<Team>) =>
        teams.forEach(team => this.appendTeamId(team))
    )
    .toPromise();
  }

  public getTeam(teamId: number): Promise<Team> {
    return this.callFootballService(`teams/${teamId}`)
    .do(
      (team: Team) => this.appendTeamId(team)
    )
    .toPromise();
  }

  public getPlayers(teamId: number): Promise<Player[]> {
    return this.callFootballService(`teams/${teamId}/players`)
    .map(result => result.players)
    .toPromise();
  }

  public getFixtures(competitionId: number, options: FixtureSearchOptions = {}): Promise<Fixture[]> {
    return this.callFootballService(`competitions/${competitionId}/fixtures`, options)
    .map(result => result.fixtures)
    .do(
      (fixtures: Array<Fixture>) => 
        fixtures.forEach(fixture => this.appendFixtureIds(fixture))
    )
    .toPromise();
  }

  public getTeamFixtures(teamId: number): Promise<Fixture[]> {
    return this.callFootballService(`teams/${teamId}/fixtures`)
    .map(result => result.fixtures)
    .do(
      (fixtures: Array<Fixture>) => 
        fixtures.forEach(fixture => this.appendFixtureIds(fixture))
    )
    .toPromise();
  }

  /**
   * Extracts and appends teamId from _links.self.href
   */
  private appendTeamId(team: Team) {
    team.teamId = this.extractId(team, 'self');
  }

  /**
   ** Extracts and appends fixtureId from _links.self.href /n
   ** Extracts and appends competitionId from _links.competition.href
   ** Extracts and appends homeTeamId from _links.homeTeam.href
   ** Extracts and appends awayTeamId from _links.awayTeam.href
   */
  private appendFixtureIds(fixture: Fixture) {
    fixture.fixtureId = this.extractId(fixture, 'self');
    fixture.competitionId = this.extractId(fixture, 'competition');
    fixture.homeTeamId = this.extractId(fixture, 'homeTeam');
    fixture.awayTeamId = this.extractId(fixture, 'awayTeam');
  }

  /**
   * Extracts and appends teamId from _links.team.href
   */
  private appendStandingTeamId(standing: Standing) {
    standing.teamId = this.extractId(standing, 'team');
  }

  private extractId(item: any, from: string) {
    const url = item._links[from].href;
    return +url.split('/').pop();
  }

  /**
   * Performs the http get from the api.petfinder.com and returns the object containing the response.
   * @param method the name of the api method to call
   * @param params an object containing parameters
   */
  private callFootballService(method: string, params: any = {}): Observable<any> {
    const header = this.prepareHeader();
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
