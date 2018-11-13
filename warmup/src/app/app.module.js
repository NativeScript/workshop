"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
var angular_1 = require("nativescript-ui-dataform/angular");
var profile_component_1 = require("./profile/profile.component");
var color_1 = require("./color");
var service_test_component_1 = require("./service-test/service-test.component");
var tables_component_1 = require("./football/tables.component");
var league_table_component_1 = require("./football/league-table.component");
var competition_fixtures_component_1 = require("./football/competition-fixtures.component");
var fixture_component_1 = require("./football/fixture.component");
var team_component_1 = require("./football/team.component");
var player_component_1 = require("./football/player.component");
var wizard_profile_component_1 = require("./plugins/wizard-profile.component");
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                // NativeScriptFormsModule,
                // NativeScriptHttpClientModule,
                angular_1.NativeScriptUIDataFormModule
            ],
            declarations: [
                app_component_1.AppComponent,
                //Lesson 1
                profile_component_1.ProfileComponent,
                //Lesson 2
                color_1.ColorComponent,
                color_1.BlueComponent,
                color_1.RedComponent,
                color_1.RGBComponent,
                //Lesson 3
                // Services
                service_test_component_1.ServiceTestComponent,
                // Components
                tables_component_1.TablesComponent,
                league_table_component_1.LeagueTableComponent,
                competition_fixtures_component_1.CompetitionFixturesComponent,
                fixture_component_1.FixtureComponent,
                team_component_1.TeamComponent,
                player_component_1.PlayerComponent,
                //Lesson 4
                wizard_profile_component_1.WizardProfileComponent,
            ],
            providers: [],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLDJEQUF3RDtBQUN4RCxpREFBK0M7QUFFL0MsMkVBQTJFO0FBQzNFLHdFQUF3RTtBQUV4RSxrRkFBa0Y7QUFDbEYsbUZBQW1GO0FBRW5GLDREQUFnRjtBQUVoRixpRUFBK0Q7QUFDL0QsaUNBQW9GO0FBQ3BGLGdGQUE2RTtBQUM3RSxnRUFBOEQ7QUFDOUQsNEVBQXlFO0FBQ3pFLDRGQUF5RjtBQUN6RixrRUFBZ0U7QUFDaEUsNERBQTBEO0FBQzFELGdFQUE4RDtBQUM5RCwrRUFBNEU7QUFrRDVFO0lBSEE7O01BRUU7SUFDRjtJQUF5QixDQUFDO0lBQWIsU0FBUztRQWhEckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQixxQ0FBZ0I7Z0JBRWhCLDJCQUEyQjtnQkFDM0IsZ0NBQWdDO2dCQUVoQyxzQ0FBNEI7YUFDL0I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBRVosVUFBVTtnQkFDVixvQ0FBZ0I7Z0JBRWhCLFVBQVU7Z0JBQ1Ysc0JBQWM7Z0JBQ2QscUJBQWE7Z0JBQ2Isb0JBQVk7Z0JBQ1osb0JBQVk7Z0JBRVosVUFBVTtnQkFDVixXQUFXO2dCQUNYLDZDQUFvQjtnQkFDcEIsYUFBYTtnQkFDYixrQ0FBZTtnQkFDZiw2Q0FBb0I7Z0JBQ3BCLDZEQUE0QjtnQkFDNUIsb0NBQWdCO2dCQUNoQiw4QkFBYTtnQkFDYixrQ0FBZTtnQkFFZixVQUFVO2dCQUNWLGlEQUFzQjthQUN6QjtZQUNELFNBQVMsRUFBRSxFQUNWO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7UUFDRjs7VUFFRTtPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIdHRwQ2xpZW50IHdyYXBwZXJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudCc7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhcic7XG5cbmltcG9ydCB7IFByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sb3JDb21wb25lbnQsIEJsdWVDb21wb25lbnQsIFJlZENvbXBvbmVudCwgUkdCQ29tcG9uZW50IH0gZnJvbSAnLi9jb2xvcic7XG5pbXBvcnQgeyBTZXJ2aWNlVGVzdENvbXBvbmVudCB9IGZyb20gJy4vc2VydmljZS10ZXN0L3NlcnZpY2UtdGVzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFibGVzQ29tcG9uZW50IH0gZnJvbSAnLi9mb290YmFsbC90YWJsZXMuY29tcG9uZW50JztcbmltcG9ydCB7IExlYWd1ZVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9mb290YmFsbC9sZWFndWUtdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBldGl0aW9uRml4dHVyZXNDb21wb25lbnQgfSBmcm9tICcuL2Zvb3RiYWxsL2NvbXBldGl0aW9uLWZpeHR1cmVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaXh0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi9mb290YmFsbC9maXh0dXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZWFtQ29tcG9uZW50IH0gZnJvbSAnLi9mb290YmFsbC90ZWFtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQbGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL2Zvb3RiYWxsL3BsYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgV2l6YXJkUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vcGx1Z2lucy93aXphcmQtcHJvZmlsZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuXG4gICAgICAgIC8vIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICAvLyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxuXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG5cbiAgICAgICAgLy9MZXNzb24gMVxuICAgICAgICBQcm9maWxlQ29tcG9uZW50LFxuXG4gICAgICAgIC8vTGVzc29uIDJcbiAgICAgICAgQ29sb3JDb21wb25lbnQsXG4gICAgICAgIEJsdWVDb21wb25lbnQsXG4gICAgICAgIFJlZENvbXBvbmVudCxcbiAgICAgICAgUkdCQ29tcG9uZW50LFxuXG4gICAgICAgIC8vTGVzc29uIDNcbiAgICAgICAgLy8gU2VydmljZXNcbiAgICAgICAgU2VydmljZVRlc3RDb21wb25lbnQsXG4gICAgICAgIC8vIENvbXBvbmVudHNcbiAgICAgICAgVGFibGVzQ29tcG9uZW50LFxuICAgICAgICBMZWFndWVUYWJsZUNvbXBvbmVudCxcbiAgICAgICAgQ29tcGV0aXRpb25GaXh0dXJlc0NvbXBvbmVudCxcbiAgICAgICAgRml4dHVyZUNvbXBvbmVudCxcbiAgICAgICAgVGVhbUNvbXBvbmVudCxcbiAgICAgICAgUGxheWVyQ29tcG9uZW50LFxuXG4gICAgICAgIC8vTGVzc29uIDRcbiAgICAgICAgV2l6YXJkUHJvZmlsZUNvbXBvbmVudCxcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==