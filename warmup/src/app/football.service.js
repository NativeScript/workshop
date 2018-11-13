"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var models_1 = require("./models");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var FootballService = /** @class */ (function () {
    function FootballService(http) {
        this.http = http;
        this.apiKey = 'cba58e88198c44c78548e2be6c21b671';
        this.baseUrl = 'https://api.football-data.org/v1';
        this.header = this.prepareHeader();
    }
    /**
     * Prepares a header with the API KEY
     */
    FootballService.prototype.prepareHeader = function () {
        var headers = new http_1.HttpHeaders();
        headers.append('X-Auth-Token', this.apiKey);
        return headers;
    };
    /**
     * List all teams for a certain competition.
     * URL Structure: https://api.football-data.org/v1/competitions/{competitionId}/teams
     */
    FootballService.prototype.getTeams = function (competitionId) {
        var url = this.baseUrl + "/competitions/" + competitionId + "/teams";
        return this.http.get(url, { headers: this.header })
            .pipe(operators_1.map(function (teams) { return models_1.FootballFactory.teamsFromRaw(teams); }));
    };
    /**
     * Show one team.
     * URL Structure: https://api.football-data.org/v1/teams/{teamId}
     */
    FootballService.prototype.getTeam = function (teamId) {
        // 1. construct a url based on https://api.football-data.org/v1/teams/{teamId}
        // 2. call http get with the url and header
        // 3. use FootballFactory.teamFromRaw to convert the output
        var url = this.baseUrl + "/teams/" + teamId;
        return this.notImplemented('getTeam');
    };
    /**
     * Show all players for a certain team.
     * URL Structure: https://api.football-data.org/v1/teams/{teamId}/players
     */
    FootballService.prototype.getPlayers = function (teamId) {
        // 1. construct a url based on https://api.football-data.org/v1/teams/{teamId}/players
        // 2. call http get with the url and header
        // 3. use FootballFactory.playersFromRaw to convert the output
        return this.notImplemented('getPlayers');
    };
    /**
     * Show all fixtures for a certain team.
     * URL Structure: https://api.football-data.org/v1/teams/{teamId}/fixtures
     */
    FootballService.prototype.getTeamFixtures = function (teamId) {
        // 1. construct a url based on https://api.football-data.org/v1/teams/{teamId}/fixtures
        // 2. call http get with the url and header
        // 3. use FootballFactory.fixturesFromRaw to convert the output
        return this.notImplemented('getTeamFixtures');
    };
    /**
     * Show League Table / current standing.
     * URL Structure: https://api.football-data.org/v1/competitions/{competitionId}/leagueTable
     * @param matchday
     */
    FootballService.prototype.getLeagueTable = function (competitionId, matchday) {
        if (matchday === void 0) { matchday = null; }
        var url = this.baseUrl + "/competitions/" + competitionId + "/leagueTable";
        var searchParams = new http_1.HttpParams();
        if (matchday) {
            searchParams = searchParams.set('matchday', matchday.toString());
        }
        return this.http.get(url, { headers: this.header, params: searchParams })
            .pipe(operators_1.map(function (competition) { return models_1.FootballFactory.leagueTableFromRaw(competition); }));
    };
    /**
     * List all fixtures for a certain competition.
     * URL Structure: https://api.football-data.org/v1/competitions/{competitionId}/fixtures
     * @param options: FixtureSearchOptions which allows to specify either a matchday or timeframe
     */
    FootballService.prototype.getFixtures = function (competitionId, options) {
        // 1. construct a url based on https://api.football-data.org/v1/competitions/{competitionId}/fixtures
        // 2. construct searchParams from options.matchday and options.timeFrame
        // see getLeagueTable as the example
        // or use this.buildSearchParams(options) if you struggle
        // 3. call http get with the url and header
        // 4. use FootballFactory.fixturesFromRaw to convert the output
        if (options === void 0) { options = {}; }
        return this.notImplemented('getFixtures');
    };
    /**
     * Constructs an http ready set of parameters based on the provided parameters.
     * @param queryParams an object containing query parameters i.e. { matchday: 5 }
     */
    FootballService.prototype.buildSearchParams = function (queryParams) {
        var searchParams = new http_1.HttpParams();
        for (var key in queryParams) {
            searchParams = searchParams.set(key, queryParams[key]);
        }
        return searchParams;
    };
    FootballService.prototype.notImplemented = function (fname) {
        return rxjs_1.throwError(fname + " Not Implemented");
    };
    FootballService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], FootballService);
    return FootballService;
}());
exports.FootballService = FootballService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGJhbGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZvb3RiYWxsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQTRFO0FBQzVFLG1DQUE0SDtBQUM1SCw2QkFBOEM7QUFDOUMsNENBQXFDO0FBS3JDO0lBS0UseUJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFKNUIsV0FBTSxHQUFHLGtDQUFrQyxDQUFDO1FBQzVDLFlBQU8sR0FBRyxrQ0FBa0MsQ0FBQztRQUluRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7O09BRUc7SUFDSyx1Q0FBYSxHQUFyQjtRQUNFLElBQU0sT0FBTyxHQUFHLElBQUksa0JBQVcsRUFBRSxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU1QyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksa0NBQVEsR0FBZixVQUFnQixhQUFxQjtRQUNuQyxJQUFNLEdBQUcsR0FBTSxJQUFJLENBQUMsT0FBTyxzQkFBaUIsYUFBYSxXQUFRLENBQUM7UUFFbEUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2xELElBQUksQ0FDSCxlQUFHLENBQUMsVUFBQyxLQUFVLElBQUssT0FBQSx3QkFBZSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxDQUN6RCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNJLGlDQUFPLEdBQWQsVUFBZSxNQUFjO1FBQzNCLDhFQUE4RTtRQUM5RSwyQ0FBMkM7UUFDM0MsMkRBQTJEO1FBRTNELElBQU0sR0FBRyxHQUFNLElBQUksQ0FBQyxPQUFPLGVBQVUsTUFBUSxDQUFDO1FBRTlDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksb0NBQVUsR0FBakIsVUFBa0IsTUFBYztRQUM5QixzRkFBc0Y7UUFDdEYsMkNBQTJDO1FBQzNDLDhEQUE4RDtRQUU5RCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHlDQUFlLEdBQXRCLFVBQXVCLE1BQWM7UUFDbkMsdUZBQXVGO1FBQ3ZGLDJDQUEyQztRQUMzQywrREFBK0Q7UUFFL0QsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSx3Q0FBYyxHQUFyQixVQUFzQixhQUFxQixFQUFFLFFBQXVCO1FBQXZCLHlCQUFBLEVBQUEsZUFBdUI7UUFDbEUsSUFBTSxHQUFHLEdBQU0sSUFBSSxDQUFDLE9BQU8sc0JBQWlCLGFBQWEsaUJBQWMsQ0FBQztRQUV4RSxJQUFJLFlBQVksR0FBRyxJQUFJLGlCQUFVLEVBQUUsQ0FBQztRQUNwQyxJQUFJLFFBQVEsRUFBRTtZQUNaLFlBQVksR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUNsRTtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxDQUFDO2FBQ3hFLElBQUksQ0FDSCxlQUFHLENBQUMsVUFBQSxXQUFXLElBQUksT0FBQSx3QkFBZSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxFQUEvQyxDQUErQyxDQUFDLENBQ3BFLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHFDQUFXLEdBQWxCLFVBQW1CLGFBQXFCLEVBQUUsT0FBa0M7UUFDMUUscUdBQXFHO1FBQ3JHLHdFQUF3RTtRQUN0RSxvQ0FBb0M7UUFDcEMseURBQXlEO1FBQzNELDJDQUEyQztRQUMzQywrREFBK0Q7UUFOdkIsd0JBQUEsRUFBQSxZQUFrQztRQVExRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVEOzs7T0FHRztJQUNLLDJDQUFpQixHQUF6QixVQUEwQixXQUFnQjtRQUN4QyxJQUFJLFlBQVksR0FBRyxJQUFJLGlCQUFVLEVBQUUsQ0FBQztRQUVwQyxLQUFLLElBQUksR0FBRyxJQUFJLFdBQVcsRUFBRTtZQUMzQixZQUFZLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDeEQ7UUFFRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBRU8sd0NBQWMsR0FBdEIsVUFBdUIsS0FBYTtRQUNsQyxPQUFPLGlCQUFVLENBQUksS0FBSyxxQkFBa0IsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUF6SFUsZUFBZTtRQUgzQixpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FNMEIsaUJBQVU7T0FMekIsZUFBZSxDQTBIM0I7SUFBRCxzQkFBQztDQUFBLEFBMUhELElBMEhDO0FBMUhZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgIEh0dHBQYXJhbXMsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRm9vdGJhbGxGYWN0b3J5LCBDb21wZXRpdGlvbiwgTGVhZ3VlVGFibGUsIFN0YW5kaW5nLCBUZWFtLCBQbGF5ZXIsIEZpeHR1cmUsIEZpeHR1cmVTZWFyY2hPcHRpb25zIH0gZnJvbSAnLi9tb2RlbHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGb290YmFsbFNlcnZpY2Uge1xuICBwcml2YXRlIGFwaUtleSA9ICdjYmE1OGU4ODE5OGM0NGM3ODU0OGUyYmU2YzIxYjY3MSc7XG4gIHByaXZhdGUgYmFzZVVybCA9ICdodHRwczovL2FwaS5mb290YmFsbC1kYXRhLm9yZy92MSc7XG4gIHByaXZhdGUgaGVhZGVyOiBIdHRwSGVhZGVycztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICB0aGlzLmhlYWRlciA9IHRoaXMucHJlcGFyZUhlYWRlcigpO1xuICB9XG5cbiAgLyoqIFxuICAgKiBQcmVwYXJlcyBhIGhlYWRlciB3aXRoIHRoZSBBUEkgS0VZXG4gICAqL1xuICBwcml2YXRlIHByZXBhcmVIZWFkZXIoKTogSHR0cEhlYWRlcnMge1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnWC1BdXRoLVRva2VuJywgdGhpcy5hcGlLZXkpO1xuXG4gICAgcmV0dXJuIGhlYWRlcnM7XG4gIH1cblxuICAvKipcbiAgICogTGlzdCBhbGwgdGVhbXMgZm9yIGEgY2VydGFpbiBjb21wZXRpdGlvbi5cbiAgICogVVJMIFN0cnVjdHVyZTogaHR0cHM6Ly9hcGkuZm9vdGJhbGwtZGF0YS5vcmcvdjEvY29tcGV0aXRpb25zL3tjb21wZXRpdGlvbklkfS90ZWFtc1xuICAgKi9cbiAgcHVibGljIGdldFRlYW1zKGNvbXBldGl0aW9uSWQ6IG51bWJlcik6IE9ic2VydmFibGU8VGVhbVtdPiB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5iYXNlVXJsfS9jb21wZXRpdGlvbnMvJHtjb21wZXRpdGlvbklkfS90ZWFtc2A7XG4gICAgXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsLCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVyIH0pXG4gICAgLnBpcGUoXG4gICAgICBtYXAoKHRlYW1zOiBhbnkpID0+IEZvb3RiYWxsRmFjdG9yeS50ZWFtc0Zyb21SYXcodGVhbXMpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBvbmUgdGVhbS5cbiAgICogVVJMIFN0cnVjdHVyZTogaHR0cHM6Ly9hcGkuZm9vdGJhbGwtZGF0YS5vcmcvdjEvdGVhbXMve3RlYW1JZH1cbiAgICovXG4gIHB1YmxpYyBnZXRUZWFtKHRlYW1JZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxUZWFtPiB7XG4gICAgLy8gMS4gY29uc3RydWN0IGEgdXJsIGJhc2VkIG9uIGh0dHBzOi8vYXBpLmZvb3RiYWxsLWRhdGEub3JnL3YxL3RlYW1zL3t0ZWFtSWR9XG4gICAgLy8gMi4gY2FsbCBodHRwIGdldCB3aXRoIHRoZSB1cmwgYW5kIGhlYWRlclxuICAgIC8vIDMuIHVzZSBGb290YmFsbEZhY3RvcnkudGVhbUZyb21SYXcgdG8gY29udmVydCB0aGUgb3V0cHV0XG5cbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVcmx9L3RlYW1zLyR7dGVhbUlkfWA7XG5cbiAgICByZXR1cm4gdGhpcy5ub3RJbXBsZW1lbnRlZCgnZ2V0VGVhbScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgYWxsIHBsYXllcnMgZm9yIGEgY2VydGFpbiB0ZWFtLlxuICAgKiBVUkwgU3RydWN0dXJlOiBodHRwczovL2FwaS5mb290YmFsbC1kYXRhLm9yZy92MS90ZWFtcy97dGVhbUlkfS9wbGF5ZXJzXG4gICAqL1xuICBwdWJsaWMgZ2V0UGxheWVycyh0ZWFtSWQ6IG51bWJlcik6IE9ic2VydmFibGU8UGxheWVyW10+IHtcbiAgICAvLyAxLiBjb25zdHJ1Y3QgYSB1cmwgYmFzZWQgb24gaHR0cHM6Ly9hcGkuZm9vdGJhbGwtZGF0YS5vcmcvdjEvdGVhbXMve3RlYW1JZH0vcGxheWVyc1xuICAgIC8vIDIuIGNhbGwgaHR0cCBnZXQgd2l0aCB0aGUgdXJsIGFuZCBoZWFkZXJcbiAgICAvLyAzLiB1c2UgRm9vdGJhbGxGYWN0b3J5LnBsYXllcnNGcm9tUmF3IHRvIGNvbnZlcnQgdGhlIG91dHB1dFxuICAgIFxuICAgIHJldHVybiB0aGlzLm5vdEltcGxlbWVudGVkKCdnZXRQbGF5ZXJzJyk7XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBhbGwgZml4dHVyZXMgZm9yIGEgY2VydGFpbiB0ZWFtLlxuICAgKiBVUkwgU3RydWN0dXJlOiBodHRwczovL2FwaS5mb290YmFsbC1kYXRhLm9yZy92MS90ZWFtcy97dGVhbUlkfS9maXh0dXJlc1xuICAgKi9cbiAgcHVibGljIGdldFRlYW1GaXh0dXJlcyh0ZWFtSWQ6IG51bWJlcik6IE9ic2VydmFibGU8Rml4dHVyZVtdPiB7XG4gICAgLy8gMS4gY29uc3RydWN0IGEgdXJsIGJhc2VkIG9uIGh0dHBzOi8vYXBpLmZvb3RiYWxsLWRhdGEub3JnL3YxL3RlYW1zL3t0ZWFtSWR9L2ZpeHR1cmVzXG4gICAgLy8gMi4gY2FsbCBodHRwIGdldCB3aXRoIHRoZSB1cmwgYW5kIGhlYWRlclxuICAgIC8vIDMuIHVzZSBGb290YmFsbEZhY3RvcnkuZml4dHVyZXNGcm9tUmF3IHRvIGNvbnZlcnQgdGhlIG91dHB1dFxuXG4gICAgcmV0dXJuIHRoaXMubm90SW1wbGVtZW50ZWQoJ2dldFRlYW1GaXh0dXJlcycpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgTGVhZ3VlIFRhYmxlIC8gY3VycmVudCBzdGFuZGluZy5cdFxuICAgKiBVUkwgU3RydWN0dXJlOiBodHRwczovL2FwaS5mb290YmFsbC1kYXRhLm9yZy92MS9jb21wZXRpdGlvbnMve2NvbXBldGl0aW9uSWR9L2xlYWd1ZVRhYmxlXG4gICAqIEBwYXJhbSBtYXRjaGRheSBcbiAgICovXG4gIHB1YmxpYyBnZXRMZWFndWVUYWJsZShjb21wZXRpdGlvbklkOiBudW1iZXIsIG1hdGNoZGF5OiBudW1iZXIgPSBudWxsKTogT2JzZXJ2YWJsZTxMZWFndWVUYWJsZT4ge1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybH0vY29tcGV0aXRpb25zLyR7Y29tcGV0aXRpb25JZH0vbGVhZ3VlVGFibGVgO1xuXG4gICAgbGV0IHNlYXJjaFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgaWYgKG1hdGNoZGF5KSB7XG4gICAgICBzZWFyY2hQYXJhbXMgPSBzZWFyY2hQYXJhbXMuc2V0KCdtYXRjaGRheScsIG1hdGNoZGF5LnRvU3RyaW5nKCkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCwgeyBoZWFkZXJzOiB0aGlzLmhlYWRlciwgcGFyYW1zOiBzZWFyY2hQYXJhbXMgfSlcbiAgICAucGlwZShcbiAgICAgIG1hcChjb21wZXRpdGlvbiA9PiBGb290YmFsbEZhY3RvcnkubGVhZ3VlVGFibGVGcm9tUmF3KGNvbXBldGl0aW9uKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3QgYWxsIGZpeHR1cmVzIGZvciBhIGNlcnRhaW4gY29tcGV0aXRpb24uXHRcbiAgICogVVJMIFN0cnVjdHVyZTogaHR0cHM6Ly9hcGkuZm9vdGJhbGwtZGF0YS5vcmcvdjEvY29tcGV0aXRpb25zL3tjb21wZXRpdGlvbklkfS9maXh0dXJlc1xuICAgKiBAcGFyYW0gb3B0aW9uczogRml4dHVyZVNlYXJjaE9wdGlvbnMgd2hpY2ggYWxsb3dzIHRvIHNwZWNpZnkgZWl0aGVyIGEgbWF0Y2hkYXkgb3IgdGltZWZyYW1lXG4gICAqL1xuICBwdWJsaWMgZ2V0Rml4dHVyZXMoY29tcGV0aXRpb25JZDogbnVtYmVyLCBvcHRpb25zOiBGaXh0dXJlU2VhcmNoT3B0aW9ucyA9IHt9KTogT2JzZXJ2YWJsZTxGaXh0dXJlW10+IHtcbiAgICAvLyAxLiBjb25zdHJ1Y3QgYSB1cmwgYmFzZWQgb24gaHR0cHM6Ly9hcGkuZm9vdGJhbGwtZGF0YS5vcmcvdjEvY29tcGV0aXRpb25zL3tjb21wZXRpdGlvbklkfS9maXh0dXJlc1xuICAgIC8vIDIuIGNvbnN0cnVjdCBzZWFyY2hQYXJhbXMgZnJvbSBvcHRpb25zLm1hdGNoZGF5IGFuZCBvcHRpb25zLnRpbWVGcmFtZVxuICAgICAgLy8gc2VlIGdldExlYWd1ZVRhYmxlIGFzIHRoZSBleGFtcGxlXG4gICAgICAvLyBvciB1c2UgdGhpcy5idWlsZFNlYXJjaFBhcmFtcyhvcHRpb25zKSBpZiB5b3Ugc3RydWdnbGVcbiAgICAvLyAzLiBjYWxsIGh0dHAgZ2V0IHdpdGggdGhlIHVybCBhbmQgaGVhZGVyXG4gICAgLy8gNC4gdXNlIEZvb3RiYWxsRmFjdG9yeS5maXh0dXJlc0Zyb21SYXcgdG8gY29udmVydCB0aGUgb3V0cHV0XG5cbiAgICByZXR1cm4gdGhpcy5ub3RJbXBsZW1lbnRlZCgnZ2V0Rml4dHVyZXMnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RzIGFuIGh0dHAgcmVhZHkgc2V0IG9mIHBhcmFtZXRlcnMgYmFzZWQgb24gdGhlIHByb3ZpZGVkIHBhcmFtZXRlcnMuXG4gICAqIEBwYXJhbSBxdWVyeVBhcmFtcyBhbiBvYmplY3QgY29udGFpbmluZyBxdWVyeSBwYXJhbWV0ZXJzIGkuZS4geyBtYXRjaGRheTogNSB9XG4gICAqL1xuICBwcml2YXRlIGJ1aWxkU2VhcmNoUGFyYW1zKHF1ZXJ5UGFyYW1zOiBhbnkpOiBIdHRwUGFyYW1zIHtcbiAgICBsZXQgc2VhcmNoUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcblxuICAgIGZvciAobGV0IGtleSBpbiBxdWVyeVBhcmFtcykge1xuICAgICAgc2VhcmNoUGFyYW1zID0gc2VhcmNoUGFyYW1zLnNldChrZXksIHF1ZXJ5UGFyYW1zW2tleV0pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gc2VhcmNoUGFyYW1zO1xuICB9XG5cbiAgcHJpdmF0ZSBub3RJbXBsZW1lbnRlZChmbmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhyb3dFcnJvcihgJHtmbmFtZX0gTm90IEltcGxlbWVudGVkYCk7XG4gIH1cbn1cbiJdfQ==