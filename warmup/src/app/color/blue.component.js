"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var nativescript_angular_1 = require("nativescript-angular");
var BlueComponent = /** @class */ (function () {
    function BlueComponent(router, route) {
        this.router = router;
        this.route = route;
        this.pink = '#ff0088';
    }
    BlueComponent.prototype.goRed = function () {
    };
    BlueComponent.prototype.goPink = function () {
    };
    BlueComponent.prototype.goBack = function () {
    };
    BlueComponent.prototype.goHome = function () {
    };
    BlueComponent = __decorate([
        core_1.Component({
            selector: 'my-blue',
            moduleId: module.id,
            templateUrl: './blue.component.html',
            styleUrls: ['./color.component.css']
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions, router_1.ActivatedRoute])
    ], BlueComponent);
    return BlueComponent;
}());
exports.BlueComponent = BlueComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmx1ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJibHVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBaUQ7QUFDakQsNkRBQXdEO0FBUXhEO0lBR0UsdUJBQW9CLE1BQXdCLEVBQVUsS0FBcUI7UUFBdkQsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUZuRSxTQUFJLEdBQVcsU0FBUyxDQUFDO0lBR2pDLENBQUM7SUFFRCw2QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDhCQUFNLEdBQU47SUFFQSxDQUFDO0lBRUQsOEJBQU0sR0FBTjtJQUVBLENBQUM7SUFFRCw4QkFBTSxHQUFOO0lBRUEsQ0FBQztJQXBCVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNyQyxDQUFDO3lDQUk0Qix1Q0FBZ0IsRUFBaUIsdUJBQWM7T0FIaEUsYUFBYSxDQXFCekI7SUFBRCxvQkFBQztDQUFBLEFBckJELElBcUJDO0FBckJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1ibHVlJyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2JsdWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb2xvci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQmx1ZUNvbXBvbmVudHtcbiAgcHJpdmF0ZSBwaW5rOiBzdHJpbmcgPSAnI2ZmMDA4OCc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gIH1cblxuICBnb1JlZCgpIHtcbiAgICBcbiAgfVxuXG4gIGdvUGluaygpIHtcbiAgICBcbiAgfVxuXG4gIGdvQmFjaygpIHtcbiAgICBcbiAgfVxuXG4gIGdvSG9tZSgpIHtcbiAgICBcbiAgfVxufVxuIl19