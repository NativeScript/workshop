"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FootballFactory = /** @class */ (function () {
    function FootballFactory() {
    }
    FootballFactory.leagueTableFromRaw = function (rawLeagueTable) {
        var _this = this;
        // If table for a leage (not a tournament with groups), then append teamId for each standing.
        // This doesn't apply to tournaments, as tournament teams already contain the teamId value
        if (rawLeagueTable.standing) {
            rawLeagueTable.standing.forEach(function (standing) { return _this.appendStandingTeamId(standing); });
        }
        return rawLeagueTable;
    };
    FootballFactory.teamFromRaw = function (rawTeam) {
        this.appendTeamId(rawTeam);
        return rawTeam;
    };
    FootballFactory.teamsFromRaw = function (rawTeams) {
        var _this = this;
        return rawTeams.teams.map(function (rawTeam) { return _this.teamFromRaw(rawTeam); });
    };
    FootballFactory.fixtureFromRaw = function (rawFixture) {
        this.appendFixtureIds(rawFixture);
        return rawFixture;
    };
    FootballFactory.fixturesFromRaw = function (rawFixtures) {
        var _this = this;
        return rawFixtures.fixtures.map(function (rawFixture) { return _this.fixtureFromRaw(rawFixture); });
    };
    FootballFactory.playerFromRaw = function (rawPlayer) {
        return rawPlayer;
    };
    FootballFactory.playersFromRaw = function (rawPlayers) {
        var _this = this;
        return rawPlayers.players.map(function (rawPlayer) { return _this.playerFromRaw(rawPlayer); });
    };
    FootballFactory.standingFromRaw = function (rawStanding) {
        this.appendStandingTeamId(rawStanding);
        return rawStanding;
    };
    /**
     * Extracts and appends teamId from _links.self.href
     */
    FootballFactory.appendTeamId = function (team) {
        team.teamId = this.extractId(team, 'self');
    };
    /**
     ** Extracts and appends fixtureId from _links.self.href /n
     ** Extracts and appends competitionId from _links.competition.href
     ** Extracts and appends homeTeamId from _links.homeTeam.href
     ** Extracts and appends awayTeamId from _links.awayTeam.href
     */
    FootballFactory.appendFixtureIds = function (fixture) {
        fixture.fixtureId = this.extractId(fixture, 'self');
        fixture.competitionId = this.extractId(fixture, 'competition');
        fixture.homeTeamId = this.extractId(fixture, 'homeTeam');
        fixture.awayTeamId = this.extractId(fixture, 'awayTeam');
    };
    /**
     * Extracts and appends teamId from _links.team.href
     */
    FootballFactory.appendStandingTeamId = function (standing) {
        standing.teamId = this.extractId(standing, 'team');
    };
    FootballFactory.extractId = function (item, from) {
        var url = item._links[from].href;
        return +url.split('/').pop();
    };
    return FootballFactory;
}());
exports.FootballFactory = FootballFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGJhbGwtZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZvb3RiYWxsLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUFBO0lBa0ZBLENBQUM7SUFoRlEsa0NBQWtCLEdBQXpCLFVBQTBCLGNBQW1CO1FBQTdDLGlCQVVDO1FBVEMsNkZBQTZGO1FBQzdGLDBGQUEwRjtRQUMxRixJQUFJLGNBQWMsQ0FBQyxRQUFRLEVBQUU7WUFDM0IsY0FBYyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQzdCLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxFQUFuQyxDQUFtQyxDQUNoRCxDQUFDO1NBQ0g7UUFFRCxPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDO0lBRU0sMkJBQVcsR0FBbEIsVUFBbUIsT0FBWTtRQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFTSw0QkFBWSxHQUFuQixVQUFvQixRQUF3QjtRQUE1QyxpQkFJQztRQUhDLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQ3ZCLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBekIsQ0FBeUIsQ0FDckMsQ0FBQztJQUNKLENBQUM7SUFFTSw4QkFBYyxHQUFyQixVQUFzQixVQUFlO1FBQ25DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsQyxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRU0sK0JBQWUsR0FBdEIsVUFBdUIsV0FBOEI7UUFBckQsaUJBSUM7UUFIQyxPQUFPLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUM3QixVQUFBLFVBQVUsSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQS9CLENBQStCLENBQzlDLENBQUM7SUFDSixDQUFDO0lBRU0sNkJBQWEsR0FBcEIsVUFBcUIsU0FBYztRQUNqQyxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRU0sOEJBQWMsR0FBckIsVUFBc0IsVUFBNEI7UUFBbEQsaUJBSUM7UUFIQyxPQUFPLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUMzQixVQUFBLFNBQVMsSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQTdCLENBQTZCLENBQzNDLENBQUM7SUFDSixDQUFDO0lBRU0sK0JBQWUsR0FBdEIsVUFBdUIsV0FBZ0I7UUFDckMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNZLDRCQUFZLEdBQTNCLFVBQTRCLElBQVU7UUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDWSxnQ0FBZ0IsR0FBL0IsVUFBZ0MsT0FBZ0I7UUFDOUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNwRCxPQUFPLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQy9ELE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDekQsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7O09BRUc7SUFDWSxvQ0FBb0IsR0FBbkMsVUFBb0MsUUFBa0I7UUFDcEQsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRWMseUJBQVMsR0FBeEIsVUFBeUIsSUFBUyxFQUFFLElBQVk7UUFDOUMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQWxGRCxJQWtGQztBQWxGWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBldGl0aW9uLCBMZWFndWVUYWJsZSwgVGVhbSwgRml4dHVyZSwgUGxheWVyLCBTdGFuZGluZyB9IGZyb20gJy4vJztcblxuZXhwb3J0IGNsYXNzIEZvb3RiYWxsRmFjdG9yeSB7XG5cbiAgc3RhdGljIGxlYWd1ZVRhYmxlRnJvbVJhdyhyYXdMZWFndWVUYWJsZTogYW55KTogTGVhZ3VlVGFibGUge1xuICAgIC8vIElmIHRhYmxlIGZvciBhIGxlYWdlIChub3QgYSB0b3VybmFtZW50IHdpdGggZ3JvdXBzKSwgdGhlbiBhcHBlbmQgdGVhbUlkIGZvciBlYWNoIHN0YW5kaW5nLlxuICAgIC8vIFRoaXMgZG9lc24ndCBhcHBseSB0byB0b3VybmFtZW50cywgYXMgdG91cm5hbWVudCB0ZWFtcyBhbHJlYWR5IGNvbnRhaW4gdGhlIHRlYW1JZCB2YWx1ZVxuICAgIGlmIChyYXdMZWFndWVUYWJsZS5zdGFuZGluZykge1xuICAgICAgcmF3TGVhZ3VlVGFibGUuc3RhbmRpbmcuZm9yRWFjaChcbiAgICAgICAgc3RhbmRpbmcgPT4gdGhpcy5hcHBlbmRTdGFuZGluZ1RlYW1JZChzdGFuZGluZylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhd0xlYWd1ZVRhYmxlO1xuICB9XG5cbiAgc3RhdGljIHRlYW1Gcm9tUmF3KHJhd1RlYW06IGFueSk6IFRlYW0ge1xuICAgIHRoaXMuYXBwZW5kVGVhbUlkKHJhd1RlYW0pO1xuICAgIHJldHVybiByYXdUZWFtO1xuICB9XG5cbiAgc3RhdGljIHRlYW1zRnJvbVJhdyhyYXdUZWFtczoge3RlYW1zOiBhbnlbXX0pOiBUZWFtW10ge1xuICAgIHJldHVybiByYXdUZWFtcy50ZWFtcy5tYXAoXG4gICAgICByYXdUZWFtID0+IHRoaXMudGVhbUZyb21SYXcocmF3VGVhbSlcbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGZpeHR1cmVGcm9tUmF3KHJhd0ZpeHR1cmU6IGFueSk6IEZpeHR1cmUge1xuICAgIHRoaXMuYXBwZW5kRml4dHVyZUlkcyhyYXdGaXh0dXJlKTtcbiAgICByZXR1cm4gcmF3Rml4dHVyZTtcbiAgfVxuXG4gIHN0YXRpYyBmaXh0dXJlc0Zyb21SYXcocmF3Rml4dHVyZXM6IHtmaXh0dXJlczogYW55W119KTogRml4dHVyZVtdIHtcbiAgICByZXR1cm4gcmF3Rml4dHVyZXMuZml4dHVyZXMubWFwKFxuICAgICAgcmF3Rml4dHVyZSA9PiB0aGlzLmZpeHR1cmVGcm9tUmF3KHJhd0ZpeHR1cmUpXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBwbGF5ZXJGcm9tUmF3KHJhd1BsYXllcjogYW55KTogUGxheWVyIHtcbiAgICByZXR1cm4gcmF3UGxheWVyO1xuICB9XG5cbiAgc3RhdGljIHBsYXllcnNGcm9tUmF3KHJhd1BsYXllcnM6IHtwbGF5ZXJzOiBhbnlbXX0pOiBQbGF5ZXJbXSB7XG4gICAgcmV0dXJuIHJhd1BsYXllcnMucGxheWVycy5tYXAoXG4gICAgICByYXdQbGF5ZXIgPT4gdGhpcy5wbGF5ZXJGcm9tUmF3KHJhd1BsYXllcilcbiAgICApO1xuICB9XG5cbiAgc3RhdGljIHN0YW5kaW5nRnJvbVJhdyhyYXdTdGFuZGluZzogYW55KTogU3RhbmRpbmcge1xuICAgIHRoaXMuYXBwZW5kU3RhbmRpbmdUZWFtSWQocmF3U3RhbmRpbmcpO1xuICAgIHJldHVybiByYXdTdGFuZGluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRyYWN0cyBhbmQgYXBwZW5kcyB0ZWFtSWQgZnJvbSBfbGlua3Muc2VsZi5ocmVmXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBhcHBlbmRUZWFtSWQodGVhbTogVGVhbSkge1xuICAgIHRlYW0udGVhbUlkID0gdGhpcy5leHRyYWN0SWQodGVhbSwgJ3NlbGYnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiogRXh0cmFjdHMgYW5kIGFwcGVuZHMgZml4dHVyZUlkIGZyb20gX2xpbmtzLnNlbGYuaHJlZiAvblxuICAgKiogRXh0cmFjdHMgYW5kIGFwcGVuZHMgY29tcGV0aXRpb25JZCBmcm9tIF9saW5rcy5jb21wZXRpdGlvbi5ocmVmXG4gICAqKiBFeHRyYWN0cyBhbmQgYXBwZW5kcyBob21lVGVhbUlkIGZyb20gX2xpbmtzLmhvbWVUZWFtLmhyZWZcbiAgICoqIEV4dHJhY3RzIGFuZCBhcHBlbmRzIGF3YXlUZWFtSWQgZnJvbSBfbGlua3MuYXdheVRlYW0uaHJlZlxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgYXBwZW5kRml4dHVyZUlkcyhmaXh0dXJlOiBGaXh0dXJlKSB7XG4gICAgZml4dHVyZS5maXh0dXJlSWQgPSB0aGlzLmV4dHJhY3RJZChmaXh0dXJlLCAnc2VsZicpO1xuICAgIGZpeHR1cmUuY29tcGV0aXRpb25JZCA9IHRoaXMuZXh0cmFjdElkKGZpeHR1cmUsICdjb21wZXRpdGlvbicpO1xuICAgIGZpeHR1cmUuaG9tZVRlYW1JZCA9IHRoaXMuZXh0cmFjdElkKGZpeHR1cmUsICdob21lVGVhbScpO1xuICAgIGZpeHR1cmUuYXdheVRlYW1JZCA9IHRoaXMuZXh0cmFjdElkKGZpeHR1cmUsICdhd2F5VGVhbScpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dHJhY3RzIGFuZCBhcHBlbmRzIHRlYW1JZCBmcm9tIF9saW5rcy50ZWFtLmhyZWZcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIGFwcGVuZFN0YW5kaW5nVGVhbUlkKHN0YW5kaW5nOiBTdGFuZGluZykge1xuICAgIHN0YW5kaW5nLnRlYW1JZCA9IHRoaXMuZXh0cmFjdElkKHN0YW5kaW5nLCAndGVhbScpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZXh0cmFjdElkKGl0ZW06IGFueSwgZnJvbTogc3RyaW5nKSB7XG4gICAgY29uc3QgdXJsID0gaXRlbS5fbGlua3NbZnJvbV0uaHJlZjtcbiAgICByZXR1cm4gK3VybC5zcGxpdCgnLycpLnBvcCgpO1xuICB9XG59Il19