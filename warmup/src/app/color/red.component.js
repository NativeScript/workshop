"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var router_1 = require("@angular/router");
var RedComponent = /** @class */ (function () {
    function RedComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    RedComponent.prototype.goBlue = function () {
    };
    RedComponent.prototype.goGray = function () {
    };
    RedComponent.prototype.goBack = function () {
        this.router.back();
    };
    RedComponent.prototype.goHome = function () {
        this.router.navigate(['/color'], { clearHistory: true });
    };
    RedComponent = __decorate([
        core_1.Component({
            selector: 'my-red',
            moduleId: module.id,
            templateUrl: './red.component.html',
            styleUrls: ['./color.component.css']
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions, router_1.ActivatedRoute])
    ], RedComponent);
    return RedComponent;
}());
exports.RedComponent = RedComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsNkRBQXdEO0FBQ3hELDBDQUFpRDtBQVFqRDtJQUVFLHNCQUFvQixNQUF3QixFQUFVLEtBQXFCO1FBQXZELFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFDM0UsQ0FBQztJQUVELDZCQUFNLEdBQU47SUFFQSxDQUFDO0lBRUQsNkJBQU0sR0FBTjtJQUVBLENBQUM7SUFFRCw2QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsNkJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBbkJVLFlBQVk7UUFOeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3JDLENBQUM7eUNBRzRCLHVDQUFnQixFQUFpQix1QkFBYztPQUZoRSxZQUFZLENBb0J4QjtJQUFELG1CQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktcmVkJyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbG9yLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZWRDb21wb25lbnQge1xuICBcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gIH1cblxuICBnb0JsdWUoKSB7XG4gICAgXG4gIH1cblxuICBnb0dyYXkoKSB7XG4gICAgXG4gIH1cblxuICBnb0JhY2soKSB7XG4gICAgdGhpcy5yb3V0ZXIuYmFjaygpO1xuICB9XG5cbiAgZ29Ib21lKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NvbG9yJ10sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG59XG4iXX0=