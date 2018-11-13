"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.profile = {
            name: 'Joe',
            password: 'bl0gs',
            angularPro: false,
            dob: new Date(),
            codingPower: 1
        };
    }
    ProfileComponent.prototype.save = function () {
        console.log(JSON.stringify(this.profile, null, 2));
    };
    ProfileComponent.prototype.clear = function () {
        this.profile.name = '';
        this.profile.password = '';
        this.profile.angularPro = false;
        this.profile.dob = new Date();
        this.profile.codingPower = 1;
    };
    ProfileComponent.prototype.clearForm = function () {
        this.profile = {
            name: '',
            password: '',
            angularPro: false,
            dob: new Date(),
            codingPower: 1
        };
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'my-profile',
            moduleId: module.id,
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQVExQztJQUdFO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLElBQUksRUFBRSxLQUFLO1lBQ1gsUUFBUSxFQUFFLE9BQU87WUFDakIsVUFBVSxFQUFFLEtBQUs7WUFDakIsR0FBRyxFQUFFLElBQUksSUFBSSxFQUFFO1lBQ2YsV0FBVyxFQUFFLENBQUM7U0FDZixDQUFBO0lBQ0gsQ0FBQztJQUVELCtCQUFJLEdBQUo7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsZ0NBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxvQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLElBQUksRUFBRSxFQUFFO1lBQ1IsUUFBUSxFQUFFLEVBQUU7WUFDWixVQUFVLEVBQUUsS0FBSztZQUNqQixHQUFHLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDZixXQUFXLEVBQUUsQ0FBQztTQUNmLENBQUE7SUFDSCxDQUFDO0lBakNVLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDdkMsQ0FBQzs7T0FDVyxnQkFBZ0IsQ0FrQzVCO0lBQUQsdUJBQUM7Q0FBQSxBQWxDRCxJQWtDQztBQWxDWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktcHJvZmlsZScsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9maWxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZmlsZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbXBvbmVudCB7XG4gIHByb2ZpbGU6IFByb2ZpbGU7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9maWxlID0ge1xuICAgICAgbmFtZTogJ0pvZScsXG4gICAgICBwYXNzd29yZDogJ2JsMGdzJyxcbiAgICAgIGFuZ3VsYXJQcm86IGZhbHNlLFxuICAgICAgZG9iOiBuZXcgRGF0ZSgpLFxuICAgICAgY29kaW5nUG93ZXI6IDFcbiAgICB9XG4gIH1cblxuICBzYXZlKCkge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucHJvZmlsZSwgbnVsbCwgMikpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5wcm9maWxlLm5hbWUgPSAnJztcbiAgICB0aGlzLnByb2ZpbGUucGFzc3dvcmQgPSAnJztcbiAgICB0aGlzLnByb2ZpbGUuYW5ndWxhclBybyA9IGZhbHNlO1xuICAgIHRoaXMucHJvZmlsZS5kb2IgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMucHJvZmlsZS5jb2RpbmdQb3dlciA9IDE7XG4gIH1cblxuICBjbGVhckZvcm0oKSB7XG4gICAgdGhpcy5wcm9maWxlID0ge1xuICAgICAgbmFtZTogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBhbmd1bGFyUHJvOiBmYWxzZSxcbiAgICAgIGRvYjogbmV3IERhdGUoKSxcbiAgICAgIGNvZGluZ1Bvd2VyOiAxXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZmlsZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbiAgYW5ndWxhclBybzogYm9vbGVhbjtcbiAgZG9iOiBEYXRlO1xuICBjb2RpbmdQb3dlcjogbnVtYmVyO1xufSJdfQ==