"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var image_source_1 = require("image-source");
var WizardProfileComponent = /** @class */ (function () {
    function WizardProfileComponent() {
        this.name = 'Sebastian';
        this.powers = [
            { name: 'Cosmic Manipulation', level: 1, description: 'The power to manipulate all cosmic forces.' },
            { name: 'Magic Resistance', level: 1, description: 'The power to be highly resistant to Magic. Not to be confused with Magic Immunity.' },
            { name: 'Telekinesis', level: 1, description: 'User can influence/manipulate/move objects/matter with their mind.' },
            { name: 'Alchemy', level: 1, description: 'The mystic and scientific pursuit of the power of the Philosopher\'s Stone and Universal Panacea.' },
            { name: 'Invocation', level: 1, description: 'The ability to gain control over the target\'s life or actions by speaking their name or phrases.' },
            { name: 'Magic Detection', level: 1, description: 'The ability to sense the presence of magic in one\'s vicinity.' },
            { name: 'Fiction Manipulation', level: 1, description: 'The power to manipulate anything invented through imaginative and theoretical ideologies.' }
        ];
    }
    WizardProfileComponent.prototype.ngOnInit = function () {
        // get camera permissions when loading for the first time
        this.reloadPowers();
    };
    WizardProfileComponent.prototype.share = function () {
        var messageBody = "name: " + this.name + ", powers: " + JSON.stringify(this.powers);
        // Add social shareText code here
    };
    WizardProfileComponent.prototype.sharePicture = function () {
        if (this.profilePicture) {
            // Call SocialShare.shareImage here
        }
    };
    WizardProfileComponent.prototype.takeProfilePicture = function () {
        // call camera.takePicture here
    };
    WizardProfileComponent.prototype.updateProfilePicture = function (asset) {
        var _this = this;
        var imageSource = new image_source_1.ImageSource();
        imageSource.fromAsset(asset)
            .then(function (image) {
            _this.profilePicture = image;
        });
    };
    WizardProfileComponent.prototype.onPull = function (args) {
        this.reloadPowers();
        args.object.refreshing = false;
    };
    WizardProfileComponent.prototype.reloadPowers = function () {
        this.powers.forEach(function (power) { return power.level = Math.round(Math.random() * 10); });
    };
    WizardProfileComponent.prototype.onPowerTap = function (event) {
        this.displayPower(this.powers[event.index]);
    };
    WizardProfileComponent.prototype.displayPower = function (power) {
        if (power.level < 5) {
            alert(power.name + ' ' + power.description + ' ' + 'Nice');
        }
        else if (power.level < 9) {
            alert(power.name + ' ' + power.description + ' ' + 'W00000W!!!');
        }
        else {
            alert(power.name + ' ' + power.description + ' ' + 'Be careful');
        }
    };
    WizardProfileComponent = __decorate([
        core_1.Component({
            selector: 'my-share',
            moduleId: module.id,
            templateUrl: './wizard-profile.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], WizardProfileComponent);
    return WizardProfileComponent;
}());
exports.WizardProfileComponent = WizardProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLXByb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2l6YXJkLXByb2ZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELDZDQUEyQztBQVEzQztJQWVFO1FBZE8sU0FBSSxHQUFXLFdBQVcsQ0FBQztRQUUzQixXQUFNLEdBQVk7WUFDdkIsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsNENBQTRDLEVBQUM7WUFDbkcsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsb0ZBQW9GLEVBQUM7WUFDeEksRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLG9FQUFvRSxFQUFDO1lBQ25ILEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxtR0FBbUcsRUFBQztZQUM5SSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsbUdBQW1HLEVBQUM7WUFDakosRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsZ0VBQWdFLEVBQUM7WUFDbkgsRUFBRSxJQUFJLEVBQUUsc0JBQXNCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsMkZBQTJGLEVBQUM7U0FDcEosQ0FBQztJQUtGLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0UseURBQXlEO1FBR3pELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsc0NBQUssR0FBTDtRQUNFLElBQU0sV0FBVyxHQUFHLFdBQVMsSUFBSSxDQUFDLElBQUksa0JBQWEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFHLENBQUM7UUFFakYsaUNBQWlDO0lBRW5DLENBQUM7SUFFRCw2Q0FBWSxHQUFaO1FBQ0UsSUFBRyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3RCLG1DQUFtQztTQUVwQztJQUNILENBQUM7SUFFRCxtREFBa0IsR0FBbEI7UUFDRSwrQkFBK0I7SUFDakMsQ0FBQztJQUVELHFEQUFvQixHQUFwQixVQUFxQixLQUFpQjtRQUF0QyxpQkFNQztRQUxDLElBQU0sV0FBVyxHQUFHLElBQUksMEJBQVcsRUFBRSxDQUFDO1FBQ3RDLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO2FBQ3pCLElBQUksQ0FBQyxVQUFBLEtBQUs7WUFDVCxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCx1Q0FBTSxHQUFOLFVBQU8sSUFBSTtRQUNULElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVwQixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUVELDZDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDakIsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLEVBQUUsQ0FBQyxFQUExQyxDQUEwQyxDQUNwRCxDQUFDO0lBQ0osQ0FBQztJQUVELDJDQUFVLEdBQVYsVUFBVyxLQUFLO1FBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCw2Q0FBWSxHQUFaLFVBQWEsS0FBWTtRQUN2QixJQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2xCLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsV0FBVyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQztTQUM1RDthQUFNLElBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDekIsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLEdBQUcsR0FBRyxHQUFHLFlBQVksQ0FBQyxDQUFDO1NBQ2xFO2FBQU07WUFDTCxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsR0FBRyxHQUFHLEdBQUcsWUFBWSxDQUFDLENBQUM7U0FDbEU7SUFDSCxDQUFDO0lBM0VVLHNCQUFzQjtRQUxsQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxpQ0FBaUM7U0FDL0MsQ0FBQzs7T0FDVyxzQkFBc0IsQ0E0RWxDO0lBQUQsNkJBQUM7Q0FBQSxBQTVFRCxJQTRFQztBQTVFWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VBc3NldCB9IGZyb20gJ2ltYWdlLWFzc2V0JztcbmltcG9ydCB7IEltYWdlU291cmNlIH0gZnJvbSAnaW1hZ2Utc291cmNlJztcbiBcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktc2hhcmUnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vd2l6YXJkLXByb2ZpbGUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFdpemFyZFByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSAnU2ViYXN0aWFuJztcblxuICBwdWJsaWMgcG93ZXJzOiBQb3dlcltdID0gW1xuICAgIHsgbmFtZTogJ0Nvc21pYyBNYW5pcHVsYXRpb24nLCBsZXZlbDogMSwgZGVzY3JpcHRpb246ICdUaGUgcG93ZXIgdG8gbWFuaXB1bGF0ZSBhbGwgY29zbWljIGZvcmNlcy4nfSxcbiAgICB7IG5hbWU6ICdNYWdpYyBSZXNpc3RhbmNlJywgbGV2ZWw6IDEsIGRlc2NyaXB0aW9uOiAnVGhlIHBvd2VyIHRvIGJlIGhpZ2hseSByZXNpc3RhbnQgdG8gTWFnaWMuIE5vdCB0byBiZSBjb25mdXNlZCB3aXRoIE1hZ2ljIEltbXVuaXR5Lid9LFxuICAgIHsgbmFtZTogJ1RlbGVraW5lc2lzJywgbGV2ZWw6IDEsIGRlc2NyaXB0aW9uOiAnVXNlciBjYW4gaW5mbHVlbmNlL21hbmlwdWxhdGUvbW92ZSBvYmplY3RzL21hdHRlciB3aXRoIHRoZWlyIG1pbmQuJ30sXG4gICAgeyBuYW1lOiAnQWxjaGVteScsIGxldmVsOiAxLCBkZXNjcmlwdGlvbjogJ1RoZSBteXN0aWMgYW5kIHNjaWVudGlmaWMgcHVyc3VpdCBvZiB0aGUgcG93ZXIgb2YgdGhlIFBoaWxvc29waGVyXFwncyBTdG9uZSBhbmQgVW5pdmVyc2FsIFBhbmFjZWEuJ30sXG4gICAgeyBuYW1lOiAnSW52b2NhdGlvbicsIGxldmVsOiAxLCBkZXNjcmlwdGlvbjogJ1RoZSBhYmlsaXR5IHRvIGdhaW4gY29udHJvbCBvdmVyIHRoZSB0YXJnZXRcXCdzIGxpZmUgb3IgYWN0aW9ucyBieSBzcGVha2luZyB0aGVpciBuYW1lIG9yIHBocmFzZXMuJ30sXG4gICAgeyBuYW1lOiAnTWFnaWMgRGV0ZWN0aW9uJywgbGV2ZWw6IDEsIGRlc2NyaXB0aW9uOiAnVGhlIGFiaWxpdHkgdG8gc2Vuc2UgdGhlIHByZXNlbmNlIG9mIG1hZ2ljIGluIG9uZVxcJ3MgdmljaW5pdHkuJ30sXG4gICAgeyBuYW1lOiAnRmljdGlvbiBNYW5pcHVsYXRpb24nLCBsZXZlbDogMSwgZGVzY3JpcHRpb246ICdUaGUgcG93ZXIgdG8gbWFuaXB1bGF0ZSBhbnl0aGluZyBpbnZlbnRlZCB0aHJvdWdoIGltYWdpbmF0aXZlIGFuZCB0aGVvcmV0aWNhbCBpZGVvbG9naWVzLid9XG4gIF07XG4gIFxuICBwdWJsaWMgcHJvZmlsZVBpY3R1cmU6IEltYWdlU291cmNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gZ2V0IGNhbWVyYSBwZXJtaXNzaW9ucyB3aGVuIGxvYWRpbmcgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgXG5cbiAgICB0aGlzLnJlbG9hZFBvd2VycygpO1xuICB9XG5cbiAgc2hhcmUoKSB7XG4gICAgY29uc3QgbWVzc2FnZUJvZHkgPSBgbmFtZTogJHt0aGlzLm5hbWV9LCBwb3dlcnM6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy5wb3dlcnMpfWA7XG5cbiAgICAvLyBBZGQgc29jaWFsIHNoYXJlVGV4dCBjb2RlIGhlcmVcbiAgICBcbiAgfVxuXG4gIHNoYXJlUGljdHVyZSgpIHtcbiAgICBpZih0aGlzLnByb2ZpbGVQaWN0dXJlKSB7XG4gICAgICAvLyBDYWxsIFNvY2lhbFNoYXJlLnNoYXJlSW1hZ2UgaGVyZVxuXG4gICAgfVxuICB9XG5cbiAgdGFrZVByb2ZpbGVQaWN0dXJlKCkge1xuICAgIC8vIGNhbGwgY2FtZXJhLnRha2VQaWN0dXJlIGhlcmVcbiAgfVxuXG4gIHVwZGF0ZVByb2ZpbGVQaWN0dXJlKGFzc2V0OiBJbWFnZUFzc2V0KSB7XG4gICAgY29uc3QgaW1hZ2VTb3VyY2UgPSBuZXcgSW1hZ2VTb3VyY2UoKTtcbiAgICBpbWFnZVNvdXJjZS5mcm9tQXNzZXQoYXNzZXQpXG4gICAgICAudGhlbihpbWFnZSA9PiB7XG4gICAgICAgIHRoaXMucHJvZmlsZVBpY3R1cmUgPSBpbWFnZTtcbiAgICAgIH0pXG4gIH1cblxuICBvblB1bGwoYXJncykge1xuICAgIHRoaXMucmVsb2FkUG93ZXJzKCk7XG4gICAgXG4gICAgYXJncy5vYmplY3QucmVmcmVzaGluZyA9IGZhbHNlO1xuICB9XG5cbiAgcmVsb2FkUG93ZXJzKCkge1xuICAgIHRoaXMucG93ZXJzLmZvckVhY2goXG4gICAgICBwb3dlciA9PiBwb3dlci5sZXZlbCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSoxMClcbiAgICApO1xuICB9XG5cbiAgb25Qb3dlclRhcChldmVudCkge1xuICAgIHRoaXMuZGlzcGxheVBvd2VyKHRoaXMucG93ZXJzW2V2ZW50LmluZGV4XSk7XG4gIH1cblxuICBkaXNwbGF5UG93ZXIocG93ZXI6IFBvd2VyKSB7XG4gICAgaWYocG93ZXIubGV2ZWwgPCA1KSB7XG4gICAgICBhbGVydChwb3dlci5uYW1lICsgJyAnICsgcG93ZXIuZGVzY3JpcHRpb24gKyAnICcgKyAnTmljZScpO1xuICAgIH0gZWxzZSBpZihwb3dlci5sZXZlbCA8IDkpIHtcbiAgICAgIGFsZXJ0KHBvd2VyLm5hbWUgKyAnICcgKyBwb3dlci5kZXNjcmlwdGlvbiArICcgJyArICdXMDAwMDBXISEhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KHBvd2VyLm5hbWUgKyAnICcgKyBwb3dlci5kZXNjcmlwdGlvbiArICcgJyArICdCZSBjYXJlZnVsJyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG93ZXIge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxldmVsOiBudW1iZXI7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xufVxuIl19