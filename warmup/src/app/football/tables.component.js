"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var TablesComponent = /** @class */ (function () {
    function TablesComponent(router) {
        this.router = router;
        this.PremierLeagueId = 445;
        this.PrimeraDivisionId = 455;
        this.BundesligaId = 452;
        this.SerieAId = 456;
        this.Ligue1Id = 450;
        this.EredivisieId = 449;
    }
    TablesComponent.prototype.onTeamTap = function (teamId) {
        console.log('::TablesComponent::onTeamTap::' + teamId);
        this.router.navigate(['/football/team', teamId]);
    };
    TablesComponent = __decorate([
        core_1.Component({
            selector: 'my-tables',
            moduleId: module.id,
            templateUrl: './tables.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], TablesComponent);
    return TablesComponent;
}());
exports.TablesComponent = TablesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhYmxlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlDO0FBU3pDO0lBU0UseUJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUDNCLG9CQUFlLEdBQVcsR0FBRyxDQUFDO1FBQzlCLHNCQUFpQixHQUFXLEdBQUcsQ0FBQztRQUNoQyxpQkFBWSxHQUFXLEdBQUcsQ0FBQztRQUMzQixhQUFRLEdBQVcsR0FBRyxDQUFDO1FBQ3ZCLGFBQVEsR0FBVyxHQUFHLENBQUM7UUFDdkIsaUJBQVksR0FBVyxHQUFHLENBQUM7SUFHbEMsQ0FBQztJQUVPLG1DQUFTLEdBQWpCLFVBQWtCLE1BQWM7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQWZVLGVBQWU7UUFMM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUseUJBQXlCO1NBQ3ZDLENBQUM7eUNBVTRCLGVBQU07T0FUdkIsZUFBZSxDQWdCM0I7SUFBRCxzQkFBQztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IENvbXBldGl0aW9uLCBMZWFndWVUYWJsZSB9IGZyb20gJy4uL21vZGVscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LXRhYmxlcycsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZXMuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlc0NvbXBvbmVudCB7XG5cbiAgcHVibGljIFByZW1pZXJMZWFndWVJZDogbnVtYmVyID0gNDQ1O1xuICBwdWJsaWMgUHJpbWVyYURpdmlzaW9uSWQ6IG51bWJlciA9IDQ1NTtcbiAgcHVibGljIEJ1bmRlc2xpZ2FJZDogbnVtYmVyID0gNDUyO1xuICBwdWJsaWMgU2VyaWVBSWQ6IG51bWJlciA9IDQ1NjtcbiAgcHVibGljIExpZ3VlMUlkOiBudW1iZXIgPSA0NTA7XG4gIHB1YmxpYyBFcmVkaXZpc2llSWQ6IG51bWJlciA9IDQ0OTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gIH1cblxuICBwcml2YXRlIG9uVGVhbVRhcCh0ZWFtSWQ6IG51bWJlcikge1xuICAgIGNvbnNvbGUubG9nKCc6OlRhYmxlc0NvbXBvbmVudDo6b25UZWFtVGFwOjonICsgdGVhbUlkKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9mb290YmFsbC90ZWFtJywgdGVhbUlkXSk7XG4gIH1cbn1cbiJdfQ==