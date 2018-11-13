"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var football_service_1 = require("../football.service");
var CompetitionFixturesComponent = /** @class */ (function () {
    function CompetitionFixturesComponent(footballService, route) {
        this.footballService = footballService;
        this.route = route;
        this.fixtures = [];
        this.competitionName = '';
    }
    CompetitionFixturesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.competitionId = +this.route.snapshot.params['competitionId'];
        this.competitionName = this.route.snapshot.params['competitionName'];
        this.footballService.getFixtures(this.competitionId)
            .subscribe(function (fixtures) { return _this.fixtures = fixtures; });
    };
    CompetitionFixturesComponent = __decorate([
        core_1.Component({
            selector: 'my-fixtures',
            moduleId: module.id,
            templateUrl: './competition-fixtures.component.html',
            styleUrls: ['./fixture.component.css']
        }),
        __metadata("design:paramtypes", [football_service_1.FootballService,
            router_1.ActivatedRoute])
    ], CompetitionFixturesComponent);
    return CompetitionFixturesComponent;
}());
exports.CompetitionFixturesComponent = CompetitionFixturesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGV0aXRpb24tZml4dHVyZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcGV0aXRpb24tZml4dHVyZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELDBDQUFpRDtBQUdqRCx3REFBc0Q7QUFRdEQ7SUFLRSxzQ0FDVSxlQUFnQyxFQUNoQyxLQUFxQjtRQURyQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFOeEIsYUFBUSxHQUFjLEVBQUUsQ0FBQztRQUV6QixvQkFBZSxHQUFXLEVBQUUsQ0FBQztJQUtwQyxDQUFDO0lBRUQsK0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRXJFLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7YUFDakQsU0FBUyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLEVBQXhCLENBQXdCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBaEJVLDRCQUE0QjtRQU54QyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1Q0FBdUM7WUFDcEQsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDdkMsQ0FBQzt5Q0FPMkIsa0NBQWU7WUFDekIsdUJBQWM7T0FQcEIsNEJBQTRCLENBaUJ4QztJQUFELG1DQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksb0VBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEZpeHR1cmUsIFRlYW0gfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgRm9vdGJhbGxTZXJ2aWNlIH0gZnJvbSAnLi4vZm9vdGJhbGwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LWZpeHR1cmVzJyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBldGl0aW9uLWZpeHR1cmVzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZml4dHVyZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29tcGV0aXRpb25GaXh0dXJlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgcHVibGljIGZpeHR1cmVzOiBGaXh0dXJlW10gPSBbXTtcbiAgcHVibGljIGNvbXBldGl0aW9uSWQ6IG51bWJlcjtcbiAgcHVibGljIGNvbXBldGl0aW9uTmFtZTogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmb290YmFsbFNlcnZpY2U6IEZvb3RiYWxsU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jb21wZXRpdGlvbklkID0gK3RoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydjb21wZXRpdGlvbklkJ107XG4gICAgdGhpcy5jb21wZXRpdGlvbk5hbWUgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1snY29tcGV0aXRpb25OYW1lJ107XG5cbiAgICB0aGlzLmZvb3RiYWxsU2VydmljZS5nZXRGaXh0dXJlcyh0aGlzLmNvbXBldGl0aW9uSWQpXG4gICAgICAuc3Vic2NyaWJlKGZpeHR1cmVzID0+IHRoaXMuZml4dHVyZXMgPSBmaXh0dXJlcyk7XG4gIH1cbn1cbiJdfQ==