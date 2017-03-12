## Lesson 3 - Components and Services

### Services

Creating a service

Adding the service to app.modules.ts

Injecting services

Using http service




exercise to be performed on the service-test.component.ts and `football.service.ts`, which will contain empty functions that call `this.callFootballService` and implemnted `callFootballService` and all the functions below it. 

The service won't be injected out of the box !!! Make sure that this is reflected in the starting point of the app.

### Exercise: Football Service

For this exercise we will use `ServiceTestComponent` located in `service-test` folder and `FootballService`, which you can find in `football.service.ts`.

`ServiceTestComponent` has a bunch of buttons, each designed to test a function of the `FootballService` that you will be constructing in this exercise. 

The football service is based on [football-data.org API](http://api.football-data.org/documentation)

<!--![Recreate UI](https://github.com/NativeScript/workshop/blob/gh-pages/images/warmup-service-test.png?raw=true)-->
![Recreate UI](http://127.0.0.1:4000/images/warmup-service-test.png?raw=true)


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


¬¬¬¬¬¬¬ You will be able to test this functionality with `Get PL Fixtures` button. ¬¬¬¬¬¬¬

Some of the api functions allow to pass query parameters.
For example to get fixtures for the next 7 days, you can use `timeFrame=n7`, like:  

```
https://api.football-data.org/v1/competitions/426/fixtures?timeFrame=n7
```

Or to get fixtures for the previous 10 days, call it like:

```
https://api.football-data.org/v1/competitions/426/fixtures?timeFrame=p10
```

To pass query parameters into `get` you need to construct a `URLSearchParams` object and add it to `RequestOptionsArgs`, as `search`, like `{ search: <URL Search Params here>}`.

Luckilly for you the `FootballService` already contains `buildSearchParams` function that can construct a `URLSearchParams` from an object.

Update `RequestOptionsArgs` and add constructed `URLSearchParams` as `search`.

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


### Components

Creating components

Adding components to app.modules.ts

Smart vs dumb components

Using @Input

Using @Output

Creating your own ngModel ?


########## EXERCISES

Update Competition component, so that it uses a dumb component to display fixtures
- Create fixture component with `@Input` for `fixture` and `@Output` for `teamTap`


Update Team component, so that it uses a dumb component to display fixtures (or maybe even players as a bonus task)
- Create player component


...
