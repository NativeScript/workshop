"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var football_service_1 = require("../football.service");
var LeagueTableComponent = /** @class */ (function () {
    function LeagueTableComponent(footballService) {
        this.footballService = footballService;
    }
    LeagueTableComponent.prototype.ngOnInit = function () {
        this.loadTeamsAndTable();
    };
    /**
     * Get both teams and table info. Teams contains short name for each team
     */
    LeagueTableComponent.prototype.loadTeamsAndTable = function () {
        var _this = this;
        this.footballService.getTeams(this.competitionId)
            .subscribe(function (teams) {
            _this.teams = teams;
            _this.footballService.getLeagueTable(_this.competitionId)
                .subscribe(function (table) { return _this.table = table; });
        });
    };
    LeagueTableComponent.prototype.getTeamName = function (teamId) {
        var team = this.getTeam(teamId);
        return (team.shortName) ? team.shortName : team.name;
    };
    LeagueTableComponent.prototype.getTeam = function (teamId) {
        return this.teams.filter(function (team) { return team.teamId === teamId; })[0];
    };
    LeagueTableComponent.prototype.onTeamSelected = function (event) {
        var selectedTeamId = this.table.standing[event.index].teamId;
        console.log('::LeagueTableComponent::onTeamSelect::' + selectedTeamId);
        // Add eventemitter emit call here with the selectedTeamId
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], LeagueTableComponent.prototype, "competitionId", void 0);
    LeagueTableComponent = __decorate([
        core_1.Component({
            selector: 'my-league-table',
            moduleId: module.id,
            templateUrl: './league-table.component.html'
        }),
        __metadata("design:paramtypes", [football_service_1.FootballService])
    ], LeagueTableComponent);
    return LeagueTableComponent;
}());
exports.LeagueTableComponent = LeagueTableComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZ3VlLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxlYWd1ZS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0U7QUFJL0Usd0RBQXNEO0FBT3REO0lBT0UsOEJBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUNwRCxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRDs7T0FFRztJQUNLLGdEQUFpQixHQUF6QjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUM5QyxTQUFTLENBQUMsVUFBQSxLQUFLO1lBQ2QsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQztpQkFDcEQsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQWxCLENBQWtCLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSwwQ0FBVyxHQUFsQixVQUFtQixNQUFjO1FBQy9CLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbEMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN2RCxDQUFDO0lBRU8sc0NBQU8sR0FBZixVQUFnQixNQUFjO1FBQzVCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCw2Q0FBYyxHQUFkLFVBQWUsS0FBSztRQUNsQixJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLEdBQUcsY0FBYyxDQUFDLENBQUM7UUFDdkUsMERBQTBEO0lBQzVELENBQUM7SUF2Q1E7UUFBUixZQUFLLEVBQUU7OytEQUE4QjtJQUQzQixvQkFBb0I7UUFMaEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwrQkFBK0I7U0FDN0MsQ0FBQzt5Q0FRcUMsa0NBQWU7T0FQekMsb0JBQW9CLENBeUNoQztJQUFELDJCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7QUF6Q1ksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmltcG9ydCB7IExlYWd1ZVRhYmxlLCBUZWFtIH0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7IEZvb3RiYWxsU2VydmljZSB9IGZyb20gJy4uL2Zvb3RiYWxsLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1sZWFndWUtdGFibGUnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vbGVhZ3VlLXRhYmxlLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBMZWFndWVUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgQElucHV0KCkgcHVibGljIGNvbXBldGl0aW9uSWQ6IG51bWJlcjtcbiAgLy8gQWRkIE91dHB1dCBFdmVudEVtaXR0ZXIgaGVyZVxuXG4gIHB1YmxpYyB0YWJsZTogTGVhZ3VlVGFibGU7XG4gIHB1YmxpYyB0ZWFtczogVGVhbVtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9vdGJhbGxTZXJ2aWNlOiBGb290YmFsbFNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubG9hZFRlYW1zQW5kVGFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYm90aCB0ZWFtcyBhbmQgdGFibGUgaW5mby4gVGVhbXMgY29udGFpbnMgc2hvcnQgbmFtZSBmb3IgZWFjaCB0ZWFtXG4gICAqL1xuICBwcml2YXRlIGxvYWRUZWFtc0FuZFRhYmxlKCkge1xuICAgIHRoaXMuZm9vdGJhbGxTZXJ2aWNlLmdldFRlYW1zKHRoaXMuY29tcGV0aXRpb25JZClcbiAgICAgIC5zdWJzY3JpYmUodGVhbXMgPT4ge1xuICAgICAgICB0aGlzLnRlYW1zID0gdGVhbXM7XG4gICAgICAgIHRoaXMuZm9vdGJhbGxTZXJ2aWNlLmdldExlYWd1ZVRhYmxlKHRoaXMuY29tcGV0aXRpb25JZClcbiAgICAgICAgICAuc3Vic2NyaWJlKHRhYmxlID0+IHRoaXMudGFibGUgPSB0YWJsZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRUZWFtTmFtZSh0ZWFtSWQ6IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgdGVhbSA9IHRoaXMuZ2V0VGVhbSh0ZWFtSWQpO1xuXG4gICAgcmV0dXJuICh0ZWFtLnNob3J0TmFtZSkgPyB0ZWFtLnNob3J0TmFtZSA6IHRlYW0ubmFtZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGVhbSh0ZWFtSWQ6IG51bWJlcik6IFRlYW0ge1xuICAgIHJldHVybiB0aGlzLnRlYW1zLmZpbHRlcih0ZWFtID0+IHRlYW0udGVhbUlkID09PSB0ZWFtSWQpWzBdO1xuICB9XG5cbiAgb25UZWFtU2VsZWN0ZWQoZXZlbnQpIHtcbiAgICBjb25zdCBzZWxlY3RlZFRlYW1JZCA9IHRoaXMudGFibGUuc3RhbmRpbmdbZXZlbnQuaW5kZXhdLnRlYW1JZDtcbiAgICBjb25zb2xlLmxvZygnOjpMZWFndWVUYWJsZUNvbXBvbmVudDo6b25UZWFtU2VsZWN0OjonICsgc2VsZWN0ZWRUZWFtSWQpO1xuICAgIC8vIEFkZCBldmVudGVtaXR0ZXIgZW1pdCBjYWxsIGhlcmUgd2l0aCB0aGUgc2VsZWN0ZWRUZWFtSWRcbiAgfVxufVxuIl19