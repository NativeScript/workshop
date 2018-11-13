"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FixtureComponent = /** @class */ (function () {
    function FixtureComponent() {
        this.fakeDate = new Date();
    }
    FixtureComponent.prototype.displayScore = function () {
        // return this.fixture.status === 'FINISHED' || this.fixture.status === 'IN_PLAY'
        return false;
    };
    FixtureComponent = __decorate([
        core_1.Component({
            selector: 'my-fixture',
            moduleId: module.id,
            templateUrl: './fixture.component.html',
            styleUrls: ['./fixture.component.css']
        })
    ], FixtureComponent);
    return FixtureComponent;
}());
exports.FixtureComponent = FixtureComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml4dHVyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaXh0dXJlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1RTtBQVN2RTtJQU5BO1FBU1MsYUFBUSxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7SUFPckMsQ0FBQztJQUxRLHVDQUFZLEdBQW5CO1FBQ0UsaUZBQWlGO1FBQ2pGLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQVJVLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDdkMsQ0FBQztPQUNXLGdCQUFnQixDQVU1QjtJQUFELHVCQUFDO0NBQUEsQUFWRCxJQVVDO0FBVlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpeHR1cmUgfSBmcm9tICcuLi9tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1maXh0dXJlJyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpeHR1cmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maXh0dXJlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGaXh0dXJlQ29tcG9uZW50IHtcbiAgcHVibGljIGZpeHR1cmU6IEZpeHR1cmU7XG5cbiAgcHVibGljIGZha2VEYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcblxuICBwdWJsaWMgZGlzcGxheVNjb3JlKCk6IGJvb2xlYW4ge1xuICAgIC8vIHJldHVybiB0aGlzLmZpeHR1cmUuc3RhdHVzID09PSAnRklOSVNIRUQnIHx8IHRoaXMuZml4dHVyZS5zdGF0dXMgPT09ICdJTl9QTEFZJ1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG59XG4iXX0=