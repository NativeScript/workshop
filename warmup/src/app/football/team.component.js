"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var football_service_1 = require("../football.service");
var TeamComponent = /** @class */ (function () {
    // private players: Player[] = [];
    function TeamComponent(route, footballService) {
        this.route = route;
        this.footballService = footballService;
        this.fixtures = [];
    }
    TeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        var teamId = +this.route.snapshot.params['teamId'];
        this.footballService.getTeam(teamId)
            .subscribe(function (team) { return _this.team = team; });
        this.footballService.getTeamFixtures(teamId)
            .subscribe(function (fixtures) { return _this.fixtures = fixtures; });
        // this.footballService.getPlayers(teamId)
        // .subscribe(players => this.players = players);
    };
    TeamComponent.prototype.teamSelected = function (teamId) {
        console.log('::TeamComponent::teamSelected::' + teamId);
    };
    TeamComponent = __decorate([
        core_1.Component({
            selector: 'my-team',
            moduleId: module.id,
            templateUrl: './team.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            football_service_1.FootballService])
    ], TeamComponent);
    return TeamComponent;
}());
exports.TeamComponent = TeamComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZWFtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFFakQsd0RBQXNEO0FBUXREO0lBR0Usa0NBQWtDO0lBRWxDLHVCQUNVLEtBQXFCLEVBQ3JCLGVBQWdDO1FBRGhDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUxsQyxhQUFRLEdBQWMsRUFBRSxDQUFDO0lBTWpDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBV0M7UUFWQyxJQUFNLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVyRCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7YUFDakMsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQWhCLENBQWdCLENBQUMsQ0FBQztRQUV2QyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7YUFDekMsU0FBUyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLEVBQXhCLENBQXdCLENBQUMsQ0FBQTtRQUVsRCwwQ0FBMEM7UUFDMUMsaURBQWlEO0lBQ25ELENBQUM7SUFFRCxvQ0FBWSxHQUFaLFVBQWEsTUFBYztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQzFELENBQUM7SUF6QlUsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDckMsQ0FBQzt5Q0FPaUIsdUJBQWM7WUFDSixrQ0FBZTtPQVAvQixhQUFhLENBMEJ6QjtJQUFELG9CQUFDO0NBQUEsQUExQkQsSUEwQkM7QUExQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBGb290YmFsbFNlcnZpY2UgfSBmcm9tICcuLi9mb290YmFsbC5zZXJ2aWNlJztcbmltcG9ydCB7IFRlYW0sIEZpeHR1cmUsIFBsYXllciB9IGZyb20gJy4uL21vZGVscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LXRlYW0nLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vdGVhbS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVGVhbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgcHJpdmF0ZSB0ZWFtOiBUZWFtO1xuICBwcml2YXRlIGZpeHR1cmVzOiBGaXh0dXJlW10gPSBbXTtcbiAgLy8gcHJpdmF0ZSBwbGF5ZXJzOiBQbGF5ZXJbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgZm9vdGJhbGxTZXJ2aWNlOiBGb290YmFsbFNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IHRlYW1JZCA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1sndGVhbUlkJ107XG5cbiAgICB0aGlzLmZvb3RiYWxsU2VydmljZS5nZXRUZWFtKHRlYW1JZClcbiAgICAgIC5zdWJzY3JpYmUodGVhbSA9PiB0aGlzLnRlYW0gPSB0ZWFtKTtcblxuICAgIHRoaXMuZm9vdGJhbGxTZXJ2aWNlLmdldFRlYW1GaXh0dXJlcyh0ZWFtSWQpXG4gICAgICAuc3Vic2NyaWJlKGZpeHR1cmVzID0+IHRoaXMuZml4dHVyZXMgPSBmaXh0dXJlcykgXG5cbiAgICAvLyB0aGlzLmZvb3RiYWxsU2VydmljZS5nZXRQbGF5ZXJzKHRlYW1JZClcbiAgICAvLyAuc3Vic2NyaWJlKHBsYXllcnMgPT4gdGhpcy5wbGF5ZXJzID0gcGxheWVycyk7XG4gIH1cblxuICB0ZWFtU2VsZWN0ZWQodGVhbUlkOiBudW1iZXIpIHtcbiAgICBjb25zb2xlLmxvZygnOjpUZWFtQ29tcG9uZW50Ojp0ZWFtU2VsZWN0ZWQ6OicgKyB0ZWFtSWQpO1xuICB9XG59XG4iXX0=