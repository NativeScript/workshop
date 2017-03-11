import { Competition, LeagueTable, Team, Fixture, Player, Standing } from './';

export class FootballFactory {

  static competitionFromRaw(rawCompetition: any): Competition {
    return rawCompetition;
  }

  static leagueTableFromRaw(rawLeagueTable: any): LeagueTable {
    // If table for a leage (not a tournament with groups), then append teamId for each standing.
    // This doesn't apply to tournaments, as tournament teams already contain the teamId value
    if (rawLeagueTable.standing) {
      rawLeagueTable.standing.forEach(standing => this.appendStandingTeamId(standing))
    }
    return rawLeagueTable;
  }

  static teamFromRaw(rawTeam: any): Team {
    this.appendTeamId(rawTeam);
    return rawTeam;
  }

  static teamsFromRaw(rawTeams: any[]): Team[] {
    rawTeams.forEach(
      team => this.appendTeamId(team)
    );

    return rawTeams;
  }

  static fixtureFromRaw(rawFixture: any): Fixture {
    this.appendFixtureIds(rawFixture);
    return rawFixture;
  }

  static fixturesFromRaw(rawFixtures: any[]): Fixture[] {
    rawFixtures.forEach(
      fixture => this.appendFixtureIds(fixture)
    );

    return rawFixtures;
  }

  static playerFromRaw(rawPlayer: any): Player {
    return rawPlayer;
  }

  static standingFromRaw(rawStanding: any): Standing {
    this.appendStandingTeamId(rawStanding);
    return rawStanding;
  }

  /**
   * Extracts and appends teamId from _links.self.href
   */
  private static appendTeamId(team: Team) {
    team.teamId = this.extractId(team, 'self');
  }

  /**
   ** Extracts and appends fixtureId from _links.self.href /n
   ** Extracts and appends competitionId from _links.competition.href
   ** Extracts and appends homeTeamId from _links.homeTeam.href
   ** Extracts and appends awayTeamId from _links.awayTeam.href
   */
  private static appendFixtureIds(fixture: Fixture) {
    fixture.fixtureId = this.extractId(fixture, 'self');
    fixture.competitionId = this.extractId(fixture, 'competition');
    fixture.homeTeamId = this.extractId(fixture, 'homeTeam');
    fixture.awayTeamId = this.extractId(fixture, 'awayTeam');
  }

  /**
   * Extracts and appends teamId from _links.team.href
   */
  private static appendStandingTeamId(standing: Standing) {
    standing.teamId = this.extractId(standing, 'team');
  }

  private static extractId(item: any, from: string) {
    const url = item._links[from].href;
    return +url.split('/').pop();
  }
}