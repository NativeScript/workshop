"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var nativescript_angular_1 = require("nativescript-angular");
var RGBComponent = /** @class */ (function () {
    function RGBComponent(router, route) {
        this.router = router;
        this.route = route;
        this.rgb = 'black';
    }
    RGBComponent.prototype.ngOnInit = function () {
    };
    RGBComponent.prototype.goBlue = function () {
        this.router.navigate(['/color/blue']);
    };
    RGBComponent.prototype.goRed = function () {
        this.router.navigate(['/color/red']);
    };
    RGBComponent.prototype.changeToRandom = function () {
    };
    RGBComponent.prototype.getRandomColor = function () {
        var r = Math.floor(Math.random() * 16).toString(16);
        var g = Math.floor(Math.random() * 16).toString(16);
        var b = Math.floor(Math.random() * 16).toString(16);
        return '#' + r + g + b;
    };
    RGBComponent.prototype.goBack = function () {
        this.router.back();
    };
    RGBComponent.prototype.goHome = function () {
        this.router.navigate(['/color'], { clearHistory: true });
    };
    RGBComponent = __decorate([
        core_1.Component({
            selector: 'my-color-paletter',
            moduleId: module.id,
            templateUrl: './rgb.component.html',
            styleUrls: ['./color.component.css']
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions, router_1.ActivatedRoute])
    ], RGBComponent);
    return RGBComponent;
}());
exports.RGBComponent = RGBComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmdiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJnYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQWlEO0FBQ2pELDZEQUF3RDtBQVF4RDtJQUdFLHNCQUFvQixNQUF3QixFQUFVLEtBQXFCO1FBQXZELFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFGM0UsUUFBRyxHQUFXLE9BQU8sQ0FBQztJQUd0QixDQUFDO0lBRUQsK0JBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCw2QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCw0QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxxQ0FBYyxHQUFkO0lBRUEsQ0FBQztJQUVELHFDQUFjLEdBQWQ7UUFDRSxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEQsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0RCxPQUFPLEdBQUcsR0FBRyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsNkJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELDZCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQW5DVSxZQUFZO1FBTnhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3JDLENBQUM7eUNBSTRCLHVDQUFnQixFQUFpQix1QkFBYztPQUhoRSxZQUFZLENBcUN4QjtJQUFELG1CQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7QUFyQ1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktY29sb3ItcGFsZXR0ZXInLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vcmdiLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29sb3IuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJHQkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgcmdiOiBzdHJpbmcgPSAnYmxhY2snO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgXG4gIH1cblxuICBnb0JsdWUoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY29sb3IvYmx1ZSddKTtcbiAgfVxuXG4gIGdvUmVkKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NvbG9yL3JlZCddKTtcbiAgfVxuXG4gIGNoYW5nZVRvUmFuZG9tKCkge1xuICAgIFxuICB9XG5cbiAgZ2V0UmFuZG9tQ29sb3IoKTogc3RyaW5nIHtcbiAgICBjb25zdCByID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpLnRvU3RyaW5nKDE2KTtcbiAgICBjb25zdCBnID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpLnRvU3RyaW5nKDE2KTtcbiAgICBjb25zdCBiID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpLnRvU3RyaW5nKDE2KTtcbiAgICByZXR1cm4gJyMnICsgcitnK2I7XG4gIH1cblxuICBnb0JhY2soKSB7XG4gICAgdGhpcy5yb3V0ZXIuYmFjaygpO1xuICB9XG5cbiAgZ29Ib21lKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NvbG9yJ10sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG4gIFxufVxuIl19