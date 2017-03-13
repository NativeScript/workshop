## Lesson 3 - Components and Services

### Services
<!-- Should we add a link to the Angular docs? https://angular.io/docs/ts/latest/tutorial/toh-pt4.html-->

Services are JavaScript functions that are responsible for doing a specific task only. Angular services are injected using Dependency Injection mechanism and include the value, function or feature which is required by the application. There nothing much about service in Angular and there is no ServiceBase class, but still services can be treated as fundamental to Angular application.

#### Creating a service

Creating a `Service` is really simple.
You need to import `Injectable` function and apply it as the `@Injectable` decorator.
Then we need to create a class for our service and `export` it.

Just like this:

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
Following the naming convention in Angular, the above service should be placed in a file called: `my-happy.service.ts`.
Which basically is the name of the class in lower case, each word (excluding word `Service`) separated with `-` and followed by `.serviece.ts`.

The same convention applies to naming all files in an Angular app like: `currency.pipe.ts`, `navigation-menu.component.ts`, `login.model.ts`.

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
Please note that you can also inject services into other services or pipes.

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

#### Http: Intro ???


#### Http: adding the module to the app

In order to use `Http` module you need to add it to `@NgModule` `imports` first.

``` javascript
import { NativeScriptHttpModule } from 'nativescript-angular/http';
```

``` javascript
imports: [
  ...
  NativeScriptHttpModule,
],
```

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

The http module has a bunch of useful functions like, `get`, `post`, `put`, `delete` and other.
Each takes a `url` as a parameter and optional `options`, then they return an `Observable` with a `Response`.

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
myHeaders.appen('key', 'value');

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
<!--exercise to be performed on the service-test.component.ts and `football.service.ts`, which will contain empty functions that call `this.callFootballService` and implemnted `callFootballService` and all the functions below it. -->

<!--The service won't be injected out of the box !!! Make sure that this is reflected in the starting point of the app.-->

For this exercise we will use `ServiceTestComponent` located in `service-test` folder and `FootballService`, which you can find in `football.service.ts`.

`ServiceTestComponent` has a bunch of buttons, each designed to test a function of the `FootballService` that you will be constructing in this exercise. 

The football service is based on [football-data.org API](http://api.football-data.org/documentation)

![Test Service](images/warmup-service-test.png?raw=true)


<h4 class="exercise-start">
  <b>Exercise</b>: Injecting football service
</h4>

Let's start with changing the default route in `app.routing.ts` to `'/service-test'`.
Like this:

``` javascript
{ path: '', redirectTo: '/service-test', pathMatch: 'full' },
````

If you try to run the application, it will fail with the following error: `Error: No provider for FootballService!` 

You task is to add the `FootballService` to `app.module.ts`.

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
  <b>Exercise</b>: Implementing the first http call
</h4>

For your convenience the `http` service is already injected into `FootballService`.

#### Step 1 - Make it work

In this exercise you need to implement `callFootballService` function, which should use the `http` to `get` data.
`get` returns an observable, which is the result that we are after.

Just construct a full `url` using `baseUrl` (class attribute) and `method` (passed in as a parameter).
Call `http.get`, and `map` the `result` to `result.json()`.

Now if you run the app and press `Get Competitions` button. You should get all available competitions printed out in the console.

<div class="solution-start"></div>

``` javascript
private callFootballService(method: string, queryParams: any = {}): Observable<any> {
  return this.http.get(this.baseUrl + method,)
  .map(result => result.json());
}
```

<div class="solution-end"></div>

#### Step 2 - Add API KEY

Without the API KEY, you are going to quickly hit the limit of allowed API calls, which is `50 requests a day`.

Use [this link](http://api.football-data.org/register) to get your own API KEY.

This API requires the key to be added in the header. For your convenience the header is already constructed with `prepareHeader` and stored in `this.header`.

In order to add a header, `get` takes a second parameter of type `RequestOptionsArgs`, with `headers` as one of the options.
Update the `get` function with `{ headers: <your header here>}` as the second parameter.


Now test app. It should still let you call the API with a much more generous API call limit `(50 requests per minute)`.

<div class="solution-start"></div>

``` javascript
private callFootballService(method: string, queryParams: any = {}): Observable<any> {
  return this.http.get(
    this.baseUrl + method, 
    { 
      headers: this.header
    })
    .map(result => result.json());
}
```

<div class="solution-end"></div>



<div class="exercise-end"></div>



<h4 class="exercise-start">
  <b>Exercise</b>: Implement the remaining functions
</h4>

Now it is time to implement the remaining functions of the `FootballService`.

Update the implementation of:

 * getCompetition
 * getLeagueTable -> make sure to pass in `matchday` into `callFootballService`, as the second parameter in the form of `{ matchday: matchday }` or in short `{ matchday }`. This will be explained in the next exercise.
 * getTeams
 * getTeam
 * getPlayers
 * getFixtures -> make sure to pass in `options` into `callFootballService`. Options are already provided in the expected format. This will be explained in the next exercise.
 * getTeamFixtures

Follow the pattern of the implementation of `getCompetitions`:

  * first call `this.callFootballService` with correctly constructed URL, for example to get list of teams your url should be like: `competitions/123/teams`, where `123, should come from teamId,
  * second use `FootballFactory` to get an object from raw. Please note that some functions like `getTeams` returns a result, which contains teams, like: `result.teams`, while other functions return the required object straight away. So you may need to use map accordingly,
  * finally convert the Observable to promise

<div class="solution-start"></div>

#### getCompetition
```
return this.callFootballService(`competitions/${competitionId}`)
.map(competition => FootballFactory.competitionFromRaw(competition))
.toPromise();
}
```

#### getLeagueTable
``` javascript
return this.callFootballService(`competitions/${competitionId}/leagueTable`, { matchday })
.map(table => FootballFactory.leagueTableFromRaw(table))
.toPromise();
```

#### getTeams
``` javascript
return this.callFootballService(`competitions/${competitionId}/teams`)
.map(result => FootballFactory.teamsFromRaw(result.teams))
.toPromise();
```

#### getTeam
``` javascript
return this.callFootballService(`teams/${teamId}`)
.map(team => FootballFactory.teamFromRaw(team))
.toPromise();
```

#### getPlayers
``` javascript
return this.callFootballService(`teams/${teamId}/players`)
.map(result => FootballFactory.playersFromRaw(result.players))
.toPromise();
```

#### getFixtures
``` javascript
return this.callFootballService(`competitions/${competitionId}/fixtures`, options)
.map(result => FootballFactory.fixturesFromRaw(result.fixtures))
.toPromise();
```

#### getTeamFixtures
``` javascript
return this.callFootballService(`teams/${teamId}/fixtures`)
.map(result => FootballFactory.fixturesFromRaw(result.fixtures))
.toPromise();
```

<div class="solution-end"></div>

<div class="exercise-end"></div>

<h4 class="exercise-start">
  <b>Exercise</b>: Adding Query parameters
</h4>

Some of the api functions allow to pass query parameters.
For example to get fixtures for the next 7 days, you can use `timeFrame=n7`, like:  

```
https://api.football-data.org/v1/competitions/426/fixtures?timeFrame=n7
```

Or to get fixtures for the previous 10 days, call it like:

```
https://api.football-data.org/v1/competitions/426/fixtures?timeFrame=p10
```

In `FootballService` functions: `getLeagueTable` and `getFixtures` take an additional parameter and pass it into `callFootballService`.

To pass query parameters into `get` you need to construct a `URLSearchParams` object and add it to `RequestOptionsArgs`, as `search`, like `{ search: <URL Search Params here>}`.

Luckilly for you the `FootballService` already contains `buildSearchParams` function that can construct a `URLSearchParams` from an object.

Your task is to update `RequestOptionsArgs` when calling `get` and add the constructed `URLSearchParams` as `search`.

<div class="solution-start"></div>

``` javascript
private callFootballService(method: string, queryParams: any = {}): Observable<any> {
  return this.http.get(
    this.baseUrl + method, 
    { 
      headers: this.header,
      search: this.buildSearchParams(queryParams)
    })
    .map(result => result.json());
}
```

<div class="solution-end"></div>

<div class="exercise-end"></div>


### Components with custom attributes

Use `LeagueTableComponent` as an example.

HERE EXPLAIN WHAT A COMPONENT IS MADE OF

HERE EXPLAIN HOW TO USE @Input

HERE EXPLAIN HOW TO ADD COMPONENT TO app.modules.ts

HERE EXPLAIN Smart VS Dumb


### Exercise: Creating a dumb component with @Input

For this part of the exercise we will be using all components in the `football` folder.

Change the `default route` to:

``` javascript
{ path: '', redirectTo: '/football', pathMatch: 'full' },
```

And run the application. You should get a view displaying a league table and a tab bar for navigation.
When you press the `View Fixtures` button, you will get a list of fixtures.

![League Table](images/warmup-league-table.png?raw=true)
![Fixtures](images/warmup-fixtures.png?raw=true)


Your task is to encapsulate the fixture template into a `FixtureComponent` and use it in `CompetitionFixturesComponent` instead of the current fixture teamplate.


<h4 class="exercise-start">
  <b>Exercise</b>: Create FixtureComponent with @Input
</h4>

#### Step 1 - Replace current fixture template in Competition Fixtures 

The initial structure for `FixtureComponent` is already in place (see `fixture.component.ts`) and added to declarations in `app.module.ts`.

Open `competition-fixtures.component.html`, comment out the `GridLayout` and then add `<my-fixture [fixture]="fixture"></my-fixture>` in its place.
You will notice that `my-fixture` expects a `[fixture]` attribute. This will be added in the next exercise.

<b>HINT</b> Make sure to keep a copy of the `GridLayout`.

<div class="solution-start"></div>

The template in `competition-fixtures.component.html` should look like this:

``` XML
<template let-fixture="item">
  <StackLayout class="list-group-item">
    <!-- Fixture Template -->
    <my-fixture [fixture]="fixture"></my-fixture>
  </StackLayout>
</template>
```

<div class="solution-end"></div>

Now if you reload the app and go to `View Fixtures` you should get something like this:

![Fixtures](images/warmup-custom-fixtures.png?raw=true)

#### Step 2 - Update FixtureComponent and add @Input for fixture

Move the `GridLayout` from `competition-fixtures.component.html` and it's content into `fixture.component.html`.

Then add `fixture` input attribute to `FixtureComponent`

<div class="solution-start"></div>

`FixtureComponent` should look like this:

``` javascript
export class FixtureComponent {
  @Input() fixture: Fixture;

  public displayScore(): boolean {
    return undefined;
  }

  public inPlay(): boolean {
    return undefined;
  }

  public homeTeamTap() {
    
  }

  public awayTeamTap() {

  }
}
```

<div class="solution-end"></div>

Reload the app. Now the fixtures should be displayed correctly again.

#### Step 3 (Bonus) - Convert inline styling conditions to functions

The middle `StackLayout` in `fixture.component.html` has some logic embeded in `*ngIf` and `[class.in-play]`.
Your task is to move this logic into two functions in `fixture.component.ts` and then call these functions:

 * `*ngIf` => `displayScore()`
 * `[class.in-play]` => `inPlay()`


<div class="solution-start"></div>

The middle `StackLayout` should like this:

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

<div class="solution-end"></div>

<div class="exercise-end"></div>


### Components with custom events

Adding a custom event to a component is really easy. Let's have a look at `LeagueTableComponent` as an example.

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

### Exercise: Creating a dumb component with @Output

In this exercise we need to update the app, so that if the user clicks on a team in the fixture, the app should navigate to `TeamComponent` with `teamId` of that team.

Even though you could make it happen by adding `[nsRouterLink]` on each fixture team name `Label`. We want the navigation logic to be delegated to the parent component, so it should be `CompetitionFixturesComponent` that should trigger navigation.


<h4 class="exercise-start">
  <b>Exercise</b>: Update FixtureComponent with @Output
</h4>

#### Step 1

Add customer event called `teamTap` to `FixtureComponent`.

Do it just like it was done in `LeagueTableComponent`.

<div class="solution-start"></div>
``` javascript
@Output() teamTap: EventEmitter<number> = new EventEmitter<number>();
```
<div class="solution-end"></div>

#### Step 2

Update `homeTeamTap` and `awayTeamTap`, so that they `emit` either `homeTeamId` or `awayTeamId`.

<div class="solution-start"></div>

#### homeTeamTap
``` javascript
public homeTeamTap() {
  console.log('::FixtureComponent::homeTeamTap::' + this.fixture.homeTeamId);
  this.teamTap.emit(this.fixture.homeTeamId);
}
```

#### awayTeamTap
``` javascript
public awayTeamTap() {
  console.log('::FixtureComponent::awayTeamTap::' + this.fixture.awayTeamId);
  this.teamTap.emit(this.fixture.awayTeamId);
}
```
<div class="solution-end"></div>

#### Step 3

Update the home and away team labels in `fixture.component.html`, so that a `tap` will trigger either `homeTeamTap` or `awayTeamTap`

<div class="solution-start"></div>

#### home label
``` XML
<Label
  col="0"
  [text]="fixture.homeTeamName"
  (tap)="homeTeamTap()"
  class="h4 text-right">
</Label>
```

#### away label
``` XML
<Label
  col="2"
  [text]="fixture.awayTeamName"
  (tap)="awayTeamTap()"
  class="h4">
</Label>
```
<div class="solution-end"></div>


#### Step 4
Now the `FixtureComponent` is ready to emit the if of the tapped team through `teamTap`.
Let's use it in `CompetitionFixturesComponent` to navigate to the tapped team.

Update `teamSelected` function in `competition-fixtures.component.ts` to navigate to the team with the provided `teamId`.
You might need to inspect `app.routing.ts` to find out what is the correct route.

<div class="solution-start"></div>
``` javascript
teamSelected(teamId: number) {
  console.log('::CompetitionFixturesComponent::teamSelected::' + teamId);
  this.router.navigate(['/football/team', teamId]);
}
```
<div class="solution-end"></div>

#### Step 5

Update `my-fixture` in `competition-fixtures.component.html` so that it binds to `teamTap` and call `teamSelected` (that you implemented in step 4).

<b>HINT:</b> Don't forget to pass `$event` to `teamSelected`.

<div class="solution-start"></div>
``` XML
<my-fixture [fixture]="fixture" (teamTap)="teamSelected($event)"></my-fixture>
```
<div class="solution-end"></div>

Now upon tapping in a team in the fixture you should be redirected to a team view, which should display fixtures for that given team.

<div class="exercise-end"></div>

### Bonus Service Exercise:

When requesting fixtures from `api.football-data.org` it allows you to set the timeframe to # of days before (`p7`) or after (`n7`) the current date. However it is not possilbe to get fixtures for before and after in one call.

Update `FootballService` to add a function which would:

 * take two parameters: `before` and `after`
 * call football service twice, once with the value of before and once with the value of after
 * return merged results

### Bonus Component Exercise:

Create a `PlayerComponent`, which will display player details like: name, position, jerseyNumber and nationality.
Then add a list of players to the `Team` screen. 
