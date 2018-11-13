"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var football_service_1 = require("../football.service");
var rxjs_1 = require("rxjs");
var ServiceTestComponent = /** @class */ (function () {
    function ServiceTestComponent(footballService) {
        this.footballService = footballService;
    }
    ServiceTestComponent.prototype.getPLTable = function () {
        var _this = this;
        this.footballService.getLeagueTable(445)
            .subscribe(function (leagueTable) { return _this.printData(leagueTable); }, function (error) { return _this.printError(error); });
    };
    ServiceTestComponent.prototype.getPLTeams = function () {
        var _this = this;
        this.footballService.getTeams(445)
            .subscribe(function (teams) { return _this.printData(teams); }, function (error) { return _this.printError(error); });
    };
    ServiceTestComponent.prototype.getPLFixtures = function () {
        var _this = this;
        this.footballService.getFixtures(445, { timeFrame: 'p7' })
            .subscribe(function (fixtures) {
            var fixturesEssential = fixtures.map(function (fix) {
                return {
                    homeTeam: fix.homeTeamName,
                    awayTeam: fix.awayTeamName,
                    date: fix.date,
                    score: fix.result.goalsHomeTeam + ':' + fix.result.goalsAwayTeam
                };
            });
            _this.printData(fixturesEssential);
        }, function (error) { return _this.printError(error); });
    };
    ServiceTestComponent.prototype.getLiverpool = function () {
        var _this = this;
        this.footballService.getTeam(64)
            .subscribe(function (team) { return _this.printData(team); }, function (error) { return _this.printError(error); });
    };
    ServiceTestComponent.prototype.getLiverpoolPlayers = function () {
        var _this = this;
        this.footballService.getPlayers(64)
            .subscribe(function (players) { return _this.printData(players); }, function (error) { return _this.printError(error); });
    };
    ServiceTestComponent.prototype.getLiverpoolFixtures = function () {
        var _this = this;
        this.footballService.getTeamFixtures(64)
            .subscribe(function (fixtures) { return _this.printData(fixtures); }, function (error) { return _this.printError(error); });
    };
    ServiceTestComponent.prototype.printData = function (item) {
        console.log(JSON.stringify(item, null, 2));
    };
    ServiceTestComponent.prototype.printError = function (error) {
        console.log(JSON.stringify(error, null, 2));
        return rxjs_1.throwError(error);
    };
    ServiceTestComponent = __decorate([
        core_1.Component({
            selector: 'ns-test',
            moduleId: module.id,
            templateUrl: './service-test.component.html',
        }),
        __metadata("design:paramtypes", [football_service_1.FootballService])
    ], ServiceTestComponent);
    return ServiceTestComponent;
}());
exports.ServiceTestComponent = ServiceTestComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS10ZXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlcnZpY2UtdGVzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUMsd0RBQXNEO0FBQ3RELDZCQUE4QztBQU85QztJQUVFLDhCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFDcEQsQ0FBQztJQUVELHlDQUFVLEdBQVY7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQzthQUN2QyxTQUFTLENBQ1IsVUFBQSxXQUFXLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUEzQixDQUEyQixFQUMxQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQXRCLENBQXNCLENBQ2hDLENBQUM7SUFDSixDQUFDO0lBRUQseUNBQVUsR0FBVjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO2FBQ2pDLFNBQVMsQ0FDUixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQXJCLENBQXFCLEVBQzlCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBdEIsQ0FBc0IsQ0FDaEMsQ0FBQztJQUNKLENBQUM7SUFFRCw0Q0FBYSxHQUFiO1FBQUEsaUJBaUJDO1FBaEJDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUN6RCxTQUFTLENBQ1IsVUFBQSxRQUFRO1lBQ04sSUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBWTtnQkFDbEQsT0FBTztvQkFDTCxRQUFRLEVBQUUsR0FBRyxDQUFDLFlBQVk7b0JBQzFCLFFBQVEsRUFBRSxHQUFHLENBQUMsWUFBWTtvQkFDMUIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO29CQUNkLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhO2lCQUNqRSxDQUFBO1lBQ0gsQ0FBQyxDQUFDLENBQUE7WUFFRixLQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDcEMsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBdEIsQ0FBc0IsQ0FDaEMsQ0FBQztJQUNKLENBQUM7SUFFRCwyQ0FBWSxHQUFaO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDL0IsU0FBUyxDQUNSLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBcEIsQ0FBb0IsRUFDNUIsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUF0QixDQUFzQixDQUNoQyxDQUFDO0lBQ0osQ0FBQztJQUVELGtEQUFtQixHQUFuQjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO2FBQ2xDLFNBQVMsQ0FDUixVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQXZCLENBQXVCLEVBQ2xDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBdEIsQ0FBc0IsQ0FDaEMsQ0FBQztJQUNKLENBQUM7SUFFRCxtREFBb0IsR0FBcEI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQzthQUN2QyxTQUFTLENBQ1IsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUF4QixDQUF3QixFQUNwQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQXRCLENBQXNCLENBQ2hDLENBQUM7SUFDSixDQUFDO0lBRUQsd0NBQVMsR0FBVCxVQUFVLElBQUk7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCx5Q0FBVSxHQUFWLFVBQVcsS0FBSztRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUMsT0FBTyxpQkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUF2RVUsb0JBQW9CO1FBTGhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLCtCQUErQjtTQUMvQyxDQUFDO3lDQUdxQyxrQ0FBZTtPQUZ6QyxvQkFBb0IsQ0F3RWhDO0lBQUQsMkJBQUM7Q0FBQSxBQXhFRCxJQXdFQztBQXhFWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpeHR1cmUgfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgRm9vdGJhbGxTZXJ2aWNlIH0gZnJvbSAnLi4vZm9vdGJhbGwuc2VydmljZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbnMtdGVzdCcsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2VydmljZS10ZXN0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2VydmljZVRlc3RDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9vdGJhbGxTZXJ2aWNlOiBGb290YmFsbFNlcnZpY2UpIHtcbiAgfVxuXG4gIGdldFBMVGFibGUoKSB7XG4gICAgdGhpcy5mb290YmFsbFNlcnZpY2UuZ2V0TGVhZ3VlVGFibGUoNDQ1KVxuICAgIC5zdWJzY3JpYmUoXG4gICAgICBsZWFndWVUYWJsZSA9PiB0aGlzLnByaW50RGF0YShsZWFndWVUYWJsZSksXG4gICAgICBlcnJvciA9PiB0aGlzLnByaW50RXJyb3IoZXJyb3IpXG4gICAgKTtcbiAgfVxuXG4gIGdldFBMVGVhbXMoKSB7XG4gICAgdGhpcy5mb290YmFsbFNlcnZpY2UuZ2V0VGVhbXMoNDQ1KVxuICAgIC5zdWJzY3JpYmUoXG4gICAgICB0ZWFtcyA9PiB0aGlzLnByaW50RGF0YSh0ZWFtcyksXG4gICAgICBlcnJvciA9PiB0aGlzLnByaW50RXJyb3IoZXJyb3IpXG4gICAgKTtcbiAgfVxuXG4gIGdldFBMRml4dHVyZXMoKSB7XG4gICAgdGhpcy5mb290YmFsbFNlcnZpY2UuZ2V0Rml4dHVyZXMoNDQ1LCB7IHRpbWVGcmFtZTogJ3A3JyB9KVxuICAgIC5zdWJzY3JpYmUoXG4gICAgICBmaXh0dXJlcyA9PiB7XG4gICAgICAgIGNvbnN0IGZpeHR1cmVzRXNzZW50aWFsID0gZml4dHVyZXMubWFwKChmaXg6IEZpeHR1cmUpID0+IHtcbiAgICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICAgIGhvbWVUZWFtOiBmaXguaG9tZVRlYW1OYW1lLFxuICAgICAgICAgICAgYXdheVRlYW06IGZpeC5hd2F5VGVhbU5hbWUsXG4gICAgICAgICAgICBkYXRlOiBmaXguZGF0ZSxcbiAgICAgICAgICAgIHNjb3JlOiBmaXgucmVzdWx0LmdvYWxzSG9tZVRlYW0gKyAnOicgKyBmaXgucmVzdWx0LmdvYWxzQXdheVRlYW1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5wcmludERhdGEoZml4dHVyZXNFc3NlbnRpYWwpO1xuICAgICAgfSxcbiAgICAgIGVycm9yID0+IHRoaXMucHJpbnRFcnJvcihlcnJvcilcbiAgICApO1xuICB9XG5cbiAgZ2V0TGl2ZXJwb29sKCkge1xuICAgIHRoaXMuZm9vdGJhbGxTZXJ2aWNlLmdldFRlYW0oNjQpXG4gICAgLnN1YnNjcmliZShcbiAgICAgIHRlYW0gPT4gdGhpcy5wcmludERhdGEodGVhbSksXG4gICAgICBlcnJvciA9PiB0aGlzLnByaW50RXJyb3IoZXJyb3IpXG4gICAgKTtcbiAgfVxuXG4gIGdldExpdmVycG9vbFBsYXllcnMoKSB7XG4gICAgdGhpcy5mb290YmFsbFNlcnZpY2UuZ2V0UGxheWVycyg2NClcbiAgICAuc3Vic2NyaWJlKFxuICAgICAgcGxheWVycyA9PiB0aGlzLnByaW50RGF0YShwbGF5ZXJzKSxcbiAgICAgIGVycm9yID0+IHRoaXMucHJpbnRFcnJvcihlcnJvcilcbiAgICApO1xuICB9XG5cbiAgZ2V0TGl2ZXJwb29sRml4dHVyZXMoKSB7XG4gICAgdGhpcy5mb290YmFsbFNlcnZpY2UuZ2V0VGVhbUZpeHR1cmVzKDY0KVxuICAgIC5zdWJzY3JpYmUoXG4gICAgICBmaXh0dXJlcyA9PiB0aGlzLnByaW50RGF0YShmaXh0dXJlcyksXG4gICAgICBlcnJvciA9PiB0aGlzLnByaW50RXJyb3IoZXJyb3IpXG4gICAgKTtcbiAgfVxuXG4gIHByaW50RGF0YShpdGVtKSB7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoaXRlbSwgbnVsbCwgMikpO1xuICB9XG5cbiAgcHJpbnRFcnJvcihlcnJvcik6IE9ic2VydmFibGU8bmV2ZXI+IHtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvciwgbnVsbCwgMikpO1xuICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcbiAgfVxufVxuIl19