## Lesson 3 - Components and Services

### Services
<!-- https://angular.io/docs/ts/latest/tutorial/toh-pt4.html-->

Services are JavaScript functions that are responsible for doing a specific task. Angular services are injected using a Dependency Injection mechanism and include the value, function or feature that is required by the application. There nothing specially related to Services in Angular--there is no ServiceBase class--but still services can be treated as fundamental to Angular applications.

#### Creating a service

Creating a `Service` is really simple. You need to import `Injectable` function and apply it as the `@Injectable` decorator. Then we need to create a class for our service and `export` it:

``` javascript
import { Injectable } from '@angular/core';

@Injectable()
export class MyHappyService {
  
  public doSomethingFun() {
    console.log('I am a happy bunny... hop, hop, hop');
  }
}
```

#### Naming convention

Following the naming convention in Angular, the above service should be placed in a file called: `my-happy.service.ts`. This is basically the name of the class in lower case, each word (excluding the word `service`) separated with `-` and followed by `.service.ts`.

The same naming convention applies to all files in an Angular app like: `currency.pipe.ts`, `navigation-menu.component.ts`, `login.model.ts`.

#### Adding the service to app.modules.ts

In order to make our service available in the app, you need to add to `providers` in the `@NgModule`.
The global `@NgModule` is located in `app.module.ts`.

``` javascript
import { MyHappyService } from './my-happy.service';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptHttpModule,
    NativeScriptFormsModule
  ],
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  providers: [
    MyHappyService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
```

#### Injecting services

<!--Angular docs: https://angular.io/docs/ts/latest/guide/dependency-injection.html-->
In order to use a service in a component, we need to inject it in the component's `constructor`.

> Note: You can also inject services into other services or pipes.

This is done like this:

``` javascript
constructor(private myHappyService: MyHappyService) {
  //constructor code
}
```

Here is how you inject and then use a service:

``` javascript
import { MyHappyService } from '../my-happy.service';

@Component({
  selector: 'app-mood',
  templateUrl: './mood/mood.component.html'
})
export class MoodComponent {

  constructor(private myHappyService: MyHappyService) {
  }

  showYourMood() {
    this.myHappyService.doSomethingFun();
  }
}
```

### Http
<!--https://medium.com/google-developer-experts/angular-2-introduction-to-new-http-module-1278499db2a0#.nh7b07pjg-->

NativeScript comes with its own implementation of the `Http` module, which uses `Android` and `iOS` native functionality to perform the calls.

This is exposed as `NativeScriptHttpModule`, which implements the same interface as the web `Http` module.

#### Http: adding the module to the app

This means that all you have to do is declare our NativeScript wrapper in the respective module file and Dependency Injection will take care of the rest.

This is done by adding `NativeScriptHttpModule` to `@NgModule` `imports`.

``` javascript
import { NativeScriptHttpModule } from 'nativescript-angular/http';
```

``` javascript
imports: [
  ...
  NativeScriptHttpModule,
],
```

From this point onwards the code that uses the `Http` module is `exactly the same` as the code you would write for a `web application`.

This gives us a high level Angular `Http` module that is capable of performing various request natively for `Android`, `iOS` and `Web`.

![Http](images/warmup-http.png?raw=true)

#### Http: Injecting the service

Then you can `import` and `Inject` the `Http` module where you are planning to use it.

``` javascript
import { Http } from '@angular/http';
```

``` javascript
constructor(private http: Http) {
}
```

#### Http: calling the service

The http module has a bunch of useful functions like, `get`, `post`, `put`, `delete` and others.
Each takes a `url` as a parameter and optional `options`, and then they return an `Observable` with a `Response`.

``` javascript
get(url: string, options?: RequestOptionsArgs): Observable<Response>
```

Example of how to call `get` and `subscribe` to the `Observable` result:
Please note that you should always convert the response to json()

``` javascript
doSomething() {
  this.http.get('http://api.someopendata.org/cities') // make the call
  .map(response => response.json())                   // convert the result to json()
  .map(result => result.cities)                       // map the result to the object we need to return
  .subscribe(                                         // subscribe and do something with the result
    cities => console.log(cities),
    error => console.error('Error: ' + err),
    () => console.log('Completed!')
  )
}
```

Example of how to call `get` and convert the `Observable` to a `Promise`:

``` javascript
doSomething() {
  this.http.get('http://api.someopendata.org/cities') // make the call
  .map(response => response.json())                   // convert the result to json()
  .map(result => result.cities)                       // map the result to the object we need to return
  .toPromise()                                        // convert the observable to a promise
  .then(                                              // then do something with the result
    cities => console.log(cities),
    error => console.error('Error: ' + err)
  )
}
```

#### Http: Adding Headers to http calls

If you need to pass headers into a `http` call, you can construct it by using `Headers` class, append data and then add it to `options?: RequestOptionsArgs`.

``` javascript
import { Http, Headers } from '@angular/http';
```

``` javascript
let myHeaders = new Headers();
myHeaders.append('key', 'value');

this.http.get('http://api.someopendata.org/cities', 
  { headers: myHeaders })
```

#### Http: Constructing URL search params

If you need to pass query parameters (like service?mood='happy'&face='round') into a `http` call, you can construct it by using `URLSearchParams` class, append query params and then add it to `options?: RequestOptionsArgs`.


``` javascript
import { Http, Headers, URLSearchParams } from '@angular/http';
```

``` javascript
let searchParams: URLSearchParams = new URLSearchParams();
searchParams.set('mood', 'happy');
searchParams.set('face', 'round');

this.http.get('http://api.someopendata.org/cities', 
  { headers: myHeaders, search: searchParams })
```

### Exercise: Football Service

For this exercise we will use `ServiceTestComponent` located in `service-test` folder and `FootballService`, which you can find in `football.service.ts`.

If you are using `Playground` then you should head to: [https://play.nativescript.org/?template=nsday-football`](https://play.nativescript.org/?template=nsday-football)

`ServiceTestComponent` has several buttons, each designed to test a function of the `FootballService` that you will be constructing in this exercise. 

The football service is based on [football-data.org API](http://api.football-data.org/documentation)

![Test Service](images/warmup-service-test.png?raw=true)


<h4 class="exercise-start">
  <b>Exercise</b>: Injecting football service
</h4>

Let's start with changing the default route in `app.routing.ts` to `'/service-test'`:

``` javascript
{ path: '', redirectTo: '/service-test', pathMatch: 'full' },
```

If you try to run the application, it will fail with the following error: `Error: No provider for FootballService!` 

You need to add the `FootballService` to `app.module.ts`.

<b>HINT</b> Remember that this should be added to the providers.

<div class="solution-start"></div>

First import `FootballService`

``` javascript
import { FootballService } from './football.service';
```

And then add this inside `@NgModule`:

``` javascript
providers: [
  FootballService
],
```

<div class="solution-end"></div>

<div class="exercise-end"></div>

Now the app should be loading without any issues. However none of the buttons will deliver the results we want.

<h4 class="exercise-start">
  <b>Exercise</b>: Implementing the http calls
</h4>

For your convenience the `http` service is already injected into `FootballService` and the header with `apiKEY` is already configured.

#### Step 1 - Make it work

If you open `football.service.ts` you will notice that `getTeams` and `getLeagueTable` are already implemented, which are the functions required to display the data in the `TablesComponent`.

If you press the `Get PL Table` button or `Get PL Teams`, you should get the data in the terminal.

#### Step 2 - Implement the missing functions

Your job is to implement the remaining functions:

 * `getTeam` - should make a call to: `https://api.football-data.org/v1/teams/{teamId}` with the `teamId` param,
 * `getPlayers` - should make a call to: `https://api.football-data.org/v1/teams/{teamId}/players` with the `teamId` param,
 * `getTeamFixtures` - should make a call to: `https://api.football-data.org/v1/teams/{teamId}/fixtures` with the `teamId` param,
 * `getFixtures` - should make a call to: `https://api.football-data.org/v1/competitions/{competitionId}/fixtures` with the `competitionId` param. Additionally this function should construct `URLSearchParams` for attributes passed in `options`.

To implement the first 3 functions, you can follow the `getTeams` function as the example. 
To implement `getFixtures`, see `getLeagueTable`, which constructs `URLSearchParams`.

In each function you will need to follow these steps:

 * construct the `url` - you can use the `baseUrl` property as the basis
 * use the `http` service to call `get()`
 * `map` and convert the result to `json`
 * use `FootballFactory` to convert the `Raw` output into the expected objects

As you implement each of the functions, you can test them with the buttons in the `Service Test`. If you get the data in the terminal, then you most likely did it right. But if you get an error message, then you need to keep working :)

<div class="solution-start"></div>

#### getTeam

``` javascript
public getTeam(teamId: number): Observable<Team> {
  const url = `${this.baseUrl}/teams/${teamId}`;

  return this.http.get(url, { headers: this.header })
  .map(result => result.json())
  .map(result => FootballFactory.teamFromRaw(result));
}
```

#### getPlayers

``` javascript
public getPlayers(teamId: number): Observable<Player[]> {
  const url = `${this.baseUrl}/teams/${teamId}/players`;

  return this.http.get(url, { headers: this.header })
  .map(result => result.json())
  .map(result => FootballFactory.playersFromRaw(result));
}
```

#### getTeamFixtures

``` javascript
public getTeamFixtures(teamId: number): Observable<Fixture[]> {
  const url = `${this.baseUrl}/teams/${teamId}/fixtures`;

  return this.http.get(url, { headers: this.header })
  .map(result => result.json())
  .map(result => FootballFactory.fixturesFromRaw(result));
}
```

#### getFixtures

``` javascript
public getFixtures(competitionId: number, options: FixtureSearchOptions = {}): Observable<Fixture[]> {
  const url = `${this.baseUrl}/competitions/${competitionId}/fixtures`;

  let searchParams: URLSearchParams = new URLSearchParams();
  if (options.matchday) {
    searchParams.set('matchday', options.matchday.toString());
  } else if (options.timeFrame) {
    searchParams.set('timeFrame', options.timeFrame);
  }

  // alternative way
  // let searchParams = this.buildSearchParams(options);

  return this.http.get(url, { headers: this.header, params: options })
  .map(result => result.json())
  .map(result => FootballFactory.fixturesFromRaw(result));
}
```

<div class="solution-end"></div>

<div class="exercise-end"></div>

### Components 
<!--with custom attributes-->

The component is a controller class with a template which mainly deals with a view of the application and logic on the page. It is a bit of code can be used throughout an application. The component knows how to render itself and configure dependency injection.

The component contains two important things; one is a view and another contains some logic.

<!--A good example of a component is a `LeagueTableComponent` as an example.-->

A component is usually made of a `@Component` decorator, which contains:

 * `selector` - html tag that should be used for this component
 * `templateUrl` - a location of the file that contains the html code (view) - you can also use `template` to provide the html code inline, but this is not a great idea
 * `styleUrls` - a location of the file that contains the css

Then we need a Component Class that will encapsulate all the logic.

Here is an example:

#### blue.component.ts

``` javascript
@Component({
  selector: 'my-blue',
  templateUrl: './color/blue.component.html',
  styleUrls: ['./color/color.component.css']
})
export class BlueComponent{
  private pink: string = '#ff0088';

  constructor(private router: RouterExtensions, private route: ActivatedRoute) {
  }

  // other functions
}
```

#### blue.component.html

``` XML
<ActionBar title="BLUE" color="white" backgroundColor="blue">
</ActionBar>

<StackLayout>
  <Button text="Go Red" (tap)="goRed()" class="btn red"></Button>
  <Button text="Go Pink" (tap)="goPink()" class="btn pink"></Button>
  <Button text="Go Home" (tap)="goHome()" class="btn btn-primary"></Button>
  <Button text="Go Back" (tap)="goBack()" class="btn btn-outline"></Button>
</StackLayout>
```

#### Adding your component to the app
If you try to use your module straight after creating it, you will get an error like this: `Component BlueComponent is not part of any NgModule or the module has not been imported into your module.` 

Solution: 

All components should be added to `@NgModule` `declarations`. By default each should be added to `app.modules.ts`:

``` javascript
declarations: [
  AppComponent,
  ProfileComponent,
  ColorComponent,
  BlueComponent,
  RedComponent,
  RGBComponent,
]
```

#### Smart versus Presentation components
<!--http://blog.angular-university.io/angular-2-smart-components-vs-presentation-components-whats-the-difference-when-to-use-each-and-why/-->
Components can be divided into two categories:

 * smart - those contain the business logic of your application. Like a `LoginComponent` that contains the logic of how to log in and where to redirect after user successfully logs in
 * presentation - those are used to encapsulate something that we want to show on the screen. Like a `LogoComponent`, which contains the `img` tag with your logo, which you can paste everywhere you need to display your logo. However when you need to change the logo, you can do it all in one place (the definition of the component).

### Components with custom input (one-way binding)

Just like the `<Label>` component has a `text` attribute, your components can have their own custom attributes as well.

Adding custom attributes to a component is really easy—just add an `@Input()` decorator in front of your attribute or property set and you are ready to go.

``` javascript
@Component({
  selector: 'my-calendar',
  templateUrl: './calendar/calendar.component.html'
})
export class CalendarComponent {
  @Input() day: number;
  @Input() month: number;

  private _year: number;
  @Input() set year(year: number) {
    this._year = (year > 100) ? year : year + 2000; 
  }
```

Now you can use it like this:

``` XML
<my-calendar day="12" month="11" year="10"></my-calendar>
```

### Exercise: Creating a presentation component with @Input

For this part of the exercise we will be using all components in the `football` folder.

Change the default route to:

``` javascript
{ path: '', redirectTo: '/football', pathMatch: 'full' },
```

And run the application. You should get a view displaying a league table and a tab bar for navigation.
When you press the `View Fixtures` button, you will get a list of fixtures.

![League Table](images/warmup-league-table.png?raw=true)
![Fixtures](images/warmup-fixtures.png?raw=true)

Your task is to encapsulate the fixture template into a `FixtureComponent` and use it in `CompetitionFixturesComponent` instead of the current fixture template.

<h4 class="exercise-start">
  <b>Exercise</b>: Create FixtureComponent with @Input
</h4>

#### Step 1 - Replace current fixture template in Competition Fixtures 

The initial structure for `FixtureComponent` is already in place (see `fixture.component.ts`) and added to declarations in `app.module.ts`.

Open `competition-fixtures.component.html`, comment out the `GridLayout` and then add `<my-fixture [fixture]="fixture"></my-fixture>` in its place.

You will notice that `my-fixture` expects a `[fixture]` attribute. This will be added in the next exercise.

<!-- > **HINT**: Make sure to keep the `GridLayout` commented out—you’ll need it momentarily. -->

<div class="solution-start"></div>

The template in `competition-fixtures.component.html` should look like this:

``` XML
<ng-template let-fixture="item">
  <StackLayout class="list-group-item">
    <!-- Fixture Template -->
    <my-fixture [fixture]="fixture"></my-fixture>
  </StackLayout>
</ng-template>
```

<div class="solution-end"></div>

Now if you reload the app and go to `View Fixtures` you should get something like this:

![Fixtures](images/warmup-custom-fixtures.png?raw=true)

#### Step 2 - Update FixtureComponent and add @Input for fixture

Head to `fixture.component.ts`.

Currently the `FixtureComponent` has a `fixture` attribute, however in this state there is no way to update the value of the fixture from the `LeagueFixtures` Component.

What we need is to turn the `fixture` into an `@Input` type attribute.

Refer to the solution below if you get stuck.

<div class="solution-start"></div>

`FixtureComponent` should look like this:

``` javascript
export class FixtureComponent {
  @Input() fixture: Fixture;

  public fakeDate: Date = new Date();

  public displayScore(): boolean {
    // return this.fixture.status === 'FINISHED' || this.fixture.status === 'IN_PLAY'
    return false;
  }
}
```
<div class="solution-end"></div>

#### Step 3 - Update displayScore

You should also update `displayScore()` to use the commented out logic. Basically it is a helper function that is used to define whether we should display the `score` or the `date and time` of the game.

<div class="solution-start"></div>

``` javascript
public displayScore(): boolean {
  return this.fixture.status === 'FINISHED' || this.fixture.status === 'IN_PLAY'
}
```

<div class="solution-end"></div>


#### Step 4 - Update HTML

Head to `fixture.component.html`.

Update all the `Labels` so that they display the data from the fixture attribute. Make sure you take care of `homeTeamName`, `awayTeamName`, `result.goalsHomeTeam`, `result.goalsAwayTeam`, and `date`.

<div class="solution-start"></div>

``` XML
<GridLayout rows="auto" columns="*, auto, *" class="list-group-item">  
  <Label col="0" [text]="fixture.homeTeamName" class="h4 text-right"></Label>
  
  <StackLayout col="1"  horizontalAlignment="center" class="m-x-10 h3">
    <StackLayout *ngIf="displayScore()"  orientation="horizontal">
      <Label [text]="fixture.result.goalsHomeTeam" class="score m-r-5"></Label>
      <Label [text]="fixture.result.goalsAwayTeam" class="score"></Label>
    </StackLayout>

    <StackLayout *ngIf="!displayScore()" class="text-center text-muted h5">
        <Label [text]="fixture.date | date:'H:m'"></Label>
        <Label [text]="fixture.date | date:'dd-MMM'" textWrap="true"></Label>
    </StackLayout>
  </StackLayout>

  <Label col="2" [text]="fixture.awayTeamName" class="h4 text-left"></Label>
</GridLayout>
```

<div class="solution-end"></div>

Reload the app. Now the fixtures should be displayed correctly again.

<!-- #### Step 3 (Bonus) - Convert inline styling conditions to functions

The `<StackLayout>` and `<Label>` components in `fixture.component.html` have some logic embedded in `*ngIf` and `[class.in-play]` attributes.

Your task is to move this logic into two functions in `fixture.component.ts` and then call these functions:

 * `*ngIf` => `displayScore()`
 * `[class.in-play]` => `inPlay()`


<div class="solution-start"></div>

The outer `StackLayout` in `fixture.component.html` should now look like this:

``` XML
<StackLayout col="1"  horizontalAlignment="center" class="p-l-10 p-r-10 h3">
  <StackLayout *ngIf="displayScore()"  orientation="horizontal">
    <Label [text]="fixture.result.goalsHomeTeam" class="score m-r-5" [class.in-play]="inPlay()"></Label>
    <Label [text]="fixture.result.goalsAwayTeam" class="score" [class.in-play]="inPlay()"></Label>
  </StackLayout>

  <StackLayout *ngIf="!displayScore()" class="text-center text-muted h5">
    <Label [text]="fixture.date | date:'H:m'"></Label>
    <Label [text]="fixture.date | date:'dd-MMM'" textWrap="true"></Label>
  </StackLayout>
</StackLayout>
```

And the following functions should now be defined in your `FixtureComponent`.

#### displayScore
``` javascript
public displayScore(): boolean {
  return this.fixture.status === 'FINISHED' 
      || this.fixture.status === 'IN_PLAY';
}
```

#### inPlay
``` javascript
public inPlay(): boolean {
  return this.fixture.status === 'IN_PLAY';
}
```

<div class="solution-end"></div> -->

<div class="exercise-end"></div>


### Components with custom events

Adding a custom event to a component is easy. Let's have a look at `LeagueTableComponent` as an example.

To make it work we need first to create an `EventEmitter`:

``` javascript
@Output() teamSelected: EventEmitter<number> = new EventEmitter<number>();
```

Note that this is made of 3 parts:

 * @Output - decorator
 * teamSelected - eventName
 * EventEmitter<number> - EventEmitter with the type of output

Then every time we want to trigger the event, we can call `emit(value)` on `this.teamSelected`. Just like this:

``` javascript
onTeamSelect(event) {
  const selectedTeamId = this.table.standing[event.index].teamId;
  console.log('::LeagueTableComponent::onTeamSelect::' + selectedTeamId);
  this.teamSelected.emit(selectedTeamId);
}
```

Obviously there must be something that actually triggers `onTeamSelect`. In this case this is done by the `<ListView>`

``` XML
<ListView [items]="table?.standing" class="list-group" (itemTap)="onTeamSelect($event)">
```

All this means that everywhere we use `<my-league-table>` we can now add a handler for `teamSelected` like this (see `tables.component.html`):

``` XML
<my-league-table [competitionId]="PremierLeagueId" (teamSelected)="onTeamTap($event)"></my-league-table>
```

Note that `$event` will contain the value passed into `emit`, in this case this will be a `teamId`.

### Exercise: Creating a presentation component with @Output

In this exercise we need to update the app, so that if the user taps on a team in the league table, the app should navigate to `TeamComponent` with `teamId` of that team.

Even though you could make it happen by adding `[nsRouterLink]` on each team standing, we want the navigation logic to be delegated to the parent component, so it should be the `TablesComponent` that should trigger the navigation.

> So in short: when the user taps on a team, we need the `LeagueTableComponent` to emit `teamSelected` with the `teamId`. And the `TablesComponent` should intercept the `teamSelected` event and call `onTeamSelected` where it should navigate to the `TeamComponent`.

<h4 class="exercise-start">
  <b>Exercise</b>: Update LeagueTableComponent with @Output
</h4>

#### Step 1 - Add @Output EventEmitter

Add an `EventEmitter<number>` called `teamSelected` to your `LeagueTableComponent` in `league-table.component.ts`.

<div class="solution-start"></div>
``` javascript
@Output() teamSelected: EventEmitter<number> = new EventEmitter<number>();
```
<div class="solution-end"></div>

#### Step 2 - Emit value

Update the `onTeamSelected` function, so that it `emits` the `teamSelected` event with the `teamId`

<div class="solution-start"></div>

``` javascript
onTeamSelected(event) {
  const selectedTeamId = this.table.standing[event.index].teamId;
  console.log('::LeagueTableComponent::onTeamSelect::' + selectedTeamId);

  this.teamSelected.emit(selectedTeamId);
}
```

<div class="solution-end"></div>

#### Step 3 - Call OnTeamSelect from the UI

Now we need the `ListView` in `league-table.component.html` to call `onTeamSelected` whenever the user taps on one of the teams. 
`ListView` has an event `itemTap` which does precisely that.

Add `(itemTap)="onTeamSelected($event)"` to the `ListView`.

<div class="solution-start"></div>

ListView first line

``` XML
<ListView [items]="table?.standing" class="list-group" (itemTap)="onTeamSelected($event)">
```

<div class="solution-end"></div>

#### Step 4
Now the `LeagueTableComponent` is ready to emit a `teamId` each time user taps on it. We just need to take it and navigate to the `TeamComponent`.

The `onTeamTap` function in `tables.component.ts` already has a logic to navigate to the `TeamComponent` with a specified `teamId`.

``` javascript
private onTeamTap(teamId: number) {
  console.log('::TablesComponent::onTeamTap::' + teamId);
  this.router.navigate(['/football/team', teamId]);
}
```

We just need to update each of the `<my-league-table>` tag to bind to the `(teamSelected)` event and call `onTeamTap`

> **HINT**: Don't forget to pass `$event` to `teamSelected`.

<div class="solution-start"></div>
``` XML
<my-league-table [competitionId]="PremierLeagueId" (teamSelected)="onTeamTap($event)"></my-league-table>
```
<div class="solution-end"></div>

#### Step 5

Test the app to see if this works.

Now upon tapping on a team in the table you should be redirected to a team view, which should display fixtures for that given team.

<div class="exercise-end"></div>

### Components with custom input (two-way binding)
<!--https://blog.thoughtram.io/angular/2016/10/13/two-way-data-binding-in-angular-2.html#creating-custom-two-way-data-bindings-->

To create a custom attribute that is capable of both taking data as an input and also updating it, we need to use two-way binding.

To do that we need to combine the power of the `@Input` and `@Output` decorators.

Let's imagine we are working on a `ColorPicker` component, which should take a `color`, as an input, but when the user selects a different color, it should provide an updated value.

First we need to create a property `@Input color`.

Then we need to add a custom event, which is called `propertyNameChange`. For our example we’ll use `@Output() colorChange`.

Finally, we need to emit the new value `colorChange.emit(newColor);`

Here is the full code:

``` javascript
@Component({
  selector: 'color-picker',
  templateUrl: './color-picker/color-picker.component.html'
})
export class ColorPickerComponent {
  @Input color: string;
  @Output() colorChange = new EventEmitter<string>();

  onColorPick(newColor: string) {
    colorChange.emit(newColor);
  }
}
```

Please note that `@Input` could be also used with a `getter` and `setter`.

Now you can use the `ColorPickerComponent` like this:

``` XML
<color-picker [(color)]="selectedColorFromParentClass"></color-picker>
```

### Bonus Component Exercise

Can you implement the missing pieces of the `PlayerComponent`? 
Your task is to add an `@Input` to capture the player object, then update `TeamComponent`, so that it displayes a list of players instead of fixtures.

Each `PlayerComponent` should display player details like: name, position, jerseyNumber and nationality. 
