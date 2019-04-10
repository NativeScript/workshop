## Lesson 3 - Components and Services

### Services
<!-- https://angular.io/docs/ts/latest/tutorial/toh-pt4.html-->

Services are JavaScript functions that are responsible for doing a specific task. Angular services are injected using a Dependency Injection mechanism and include the value, function or feature that is required by the application. There is nothing especially related to Services in NativeScript Angular--there is no ServiceBase class--but still services can be treated as fundamental to Angular applications.

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
    NativeScriptHttpClientModule,
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

#### providedIn 

You can also use `provideIn` property in the `@Injectable` decorator, which delegates it to Angular to provide the service in `'root'` or a specific module.

```
@Injectable({
  providedIn: 'root'
})
export class MyHappyService {
  
  public doSomethingFun() {
    console.log('I am a happy bunny... hop, hop, hop');
  }
}
```

This way you don't have to add it manually to the providers list of your ngModule.

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

### HttpClient
<!--https://medium.com/google-developer-experts/angular-2-introduction-to-new-http-module-1278499db2a0#.nh7b07pjg-->

NativeScript comes with its own implementation of the `HttpClientModule`, which uses `Android` and `iOS` native functionality to perform the calls.

This is exposed as `NativeScriptHttpClientModule`, which implements the same interface as the web `HttpClient` module.

#### HttpClient: adding the module to the app

This means that all you have to do is declare our NativeScript wrapper in the respective module file and Dependency Injection will take care of the rest.

This is done by adding `NativeScriptHttpClientModule` to `@NgModule` `imports`.

``` javascript
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
```

``` javascript
imports: [
  ...
  NativeScriptHttpClientModule,
],
```

From this point onwards the code that uses the `HttpClient` module is `exactly the same` as the code you would write for a `web application`.

This gives us a high level Angular `HttpClient` module that is capable of performing various request natively for `Android`, `iOS` and `Web`.

![Http](images/warmup-http.png?raw=true)

#### HttpClient: Injecting the service

Then you can `import` and `Inject` the `Http` module where you are planning to use it.

``` javascript
import { HttpClient } from '@angular/common/http';
```

``` javascript
constructor(private http: HttpClient) {
}
```

#### HttpClient: calling the service

The http module has a bunch of useful functions like, `get`, `post`, `put`, `delete` and others. <td/>
Each takes a `url` as a parameter and optional `options`, and then they return an `Observable` with a `Response`.

``` javascript
get<ResultType>(url: string, options?: RequestOptionsArgs): Observable<Response>
```

Example of how to call `get` and `subscribe` to the `Observable` result: <td/>
Please note that you should always convert the response to json()

``` javascript
doSomething() {
  this.http.get<City[]>('http://api.someopendata.org/cities') // make the call
  .subscribe(                                                 // subscribe and do something with the result
    result => console.log(result.cities),
    error => console.error('Error: ' + error),
    () => console.log('Completed!')
  )
}
```

Example of how to call `get` and convert the `Observable` to a `Promise`:

``` javascript
doSomething() {
  this.http.get<City[]>('http://api.someopendata.org/cities') // make the call
  .toPromise()                                                // convert the observable to a promise
  .then(                                                      // then do something with the result
    result => console.log(result.cities),
    error => console.error('Error: ' + error)
  )
}
```

#### HttpClient: Adding Headers to http calls

If you need to pass headers into a `http` call, you can construct it by using `Headers` class, append data and then add it to `options?: RequestOptionsArgs`.

``` javascript
import { HttpClient, HttpHeaders } from '@angular/common/http';
```

``` javascript
let myHeaders = new HttpHeaders();
myHeaders.append('key', 'value');

this.http.get<City[]>('http://api.someopendata.org/cities', 
  { headers: myHeaders })
```

#### HttpClient: Constructing URL search params

If you need to pass query parameters (like service?mood='happy'&face='round') into a `http` call, you can construct it by using `HttpParams ` class, append query params and then add it to `options?: RequestOptionsArgs`.


``` javascript
import { Http, HttpHeaders, HttpParams } from '@angular/common/http';
```

``` javascript
let searchParams = new HttpParams();
searchParams = searchParams.set('mood', 'happy');
searchParams = searchParams.set('face', 'round');

this.http.get<any>('http://api.someopendata.org/cities', 
  { headers: myHeaders, params: searchParams })
```

#### Http parsing results

Very often the response returned from the http service doesn't come in the format that we might need.

For example calling:

``` javascript
const cities$: Observable<any> = this.http.get<any>('http://api.someopendata.org/cities');
```

Might return an object like:

``` javascript
{
  responseCode: 200,
  data: [
    'London', 'Paris', 'Amsterdam', 'Warsaw', 'Sofia'
  ]
}
```

While, you might be interested in the output to be formatted as an array of cities. <td/>
To do that you can use `pipe` with a `map` from `rxjs`, like this:

``` javascript
const cities$: Observable<string[]> = this.http.get<any>('http://api.someopendata.org/cities')
  .pipe(
    map(res => res.data)
  );

```

In the case where the response comes as a more complex object, like this:

``` javascript
{
  responseCode: 200,
  complexData: [
    { city: 'London', country: 'England' },
    { city: 'Paris', country: 'France' },
    { city: 'Amsterdam', country: 'Netherlands' },
    { city: 'Warsaw', country: 'Poland' },
    { city: 'Sofia', country: 'Bulgaria' },
  ]
}
```

You could achieve the same in two steps: <br/>

* First map `complexData` property (like before)
* Second - use `.map()` on the `data` object, and extract `item.city` (note you can name the `data` and `item` params as anything you want)

Like this:

``` javascript
const cities$: Observable<string[]> = this.http.get<any>('http://api.someopendata.org/cities')
  .pipe(
    map(res => res.complexData),
    map(data => data.map(item => item.city) )
  );
```

Or in one line:

``` javascript
const cities$: Observable<any> = this.http.get<any>('http://api.someopendata.org/cities')
  .pipe(
    map(res => res.complexData.map(item => item.city) ),
  );
```

Then you could easily call:

``` javascript
cities$.subscribe(cities => {
  console.log(cities); // this will print out an array of strings
})
```

#### Subscribe / Unsubscribe


Calling `.subscribe()` on an Observable is one of the way to get data out of it. <br/>
Some of the Observables, like the one from `http.get()` automatically close and clean up, as soon as you receive the result. <br/>
While other Observables remain active, until you call `.unsubscribe()`. Like this:

``` javascript
const myItems$: Observable<any> = this.listenToItems();

const subscription: Subscription = myItems$.subscribe(
  items => // do something with items;
)

subscription.unsubscribe();
```

A good place to `subscribe()` is in `ngOnInit()`.
A good place to `unsubscribe()` is in `ngOnDestroy()`.

> Note, there is no need to call `.unsubscribe()` on Observables returned from the `HttpClient`.

#### Async pipe

Angular has a very clean way of extracting data out of an Observable. It is called `async pipe`. It automatically subscribes to the provided Observable object, and unsubscribes when the component is getting cleaned up.

With the help of the `async pipe` you may never need to explicitly call `subscribe` ever again.

Here is how it works.

* In the component definition, you get an Observable, and assign it to a property:

``` javascript
@Component({
  ...
})
export class MyComponent implements OnInit {
  public cities$: Observable<City[]>;

  constructor(public http: HttpClient) {}

  ngOnInit() {
    this.cities$ = this.http.get('http://api.someopendata.org/cities')
      .pipe(
        map(res => res.data)
      );
  }

  }
}
```

* Then from the component template, you assign your the UI component to the Observable object and `| async` next to it, like this:

``` XML
<ListView [items]="cities$ | async" class="list-group">
  <ng-template let-city="item">
    <StackLayout>
      <Label [text]="city" class="list-group-item"></Label>
    </StackLayout>
  </ng-template>
</ListView>
```

In the above example, the listview will be populated with the data returned from the `cities$` observable.

### Exercise: Cocktail Service

For this exercise we will use `ServiceTestComponent` located in `service-test` folder and `CocktailService`, which you can find in `cocktail.service.ts`.

`ServiceTestComponent` has several buttons, each designed to test a function of the `CocktailService` that you will be constructing in this exercise. 

The football service is based on [thecocktaildb.com API](https://www.thecocktaildb.com/api.php)

![Test Service](images/warmup-service-test.png?raw=true)

<h4 class="exercise-start">
  <b>Exercise</b>: Change default the default route to show the Service Test Component
</h4>

Let's start with changing the default route in `app.routing.ts` to `'/service-test'`:

``` javascript
{ path: '', redirectTo: '/service-test', pathMatch: 'full' },
```

<div class="exercise-end"></div>

This should load an app with a bunch of buttons. At this moment pressing each button should result in an error message.

<h4 class="exercise-start">
  <b>Exercise</b>: Implementing the http calls
</h4>

#### Step 1 - Make it work

When you open `cocktail.service.ts` you will see that there are already a few function in there, however they are not implemented yet.

#### Step 2 - Implement the missing functions

Your job is to implement these functions:

 1. `getIngredients()`
  * make a get call to: `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`
  * you can call get with `IngredientsRawResult` as the expected result type, like this `get<IngredientsRawResult>()`
  * make sure to `pipe->map` the output to return an array of strings, containing ingredient names.
 2. `getCocktails(ingredient: string)`
   * make a call to: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin` with the `ingredient` as the `i` parameter.
   * before you call `get()`, you need to construct `HttpParams` with `ingredient` passed as `i`
   * you can call `get()` with `CocktailsRawResult` as the expected result type
   * make sure to `pipe->map` the output to return the drinks array. (Optional) you may want to return an empty array if the output is null
 3. `getCocktail(id: string)`
   * should make a call to: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=13940` with the `id` as the `i` parameter
   * before you call `get()`, you need to construct `HttpParams` with `id` passed as `i`
   * you can call `get()` with `CocktailRawResult` as the expected result type
   * make sure to `pipe->map` the output, to return a `CocktailRecipe` object ( you can use the `CocktailRecipe constructor` on the first item returned in the result]

In each function you will need to follow these steps:

 * construct the `url` - you can use the `baseUrl` property as the basis
 * construct `HttpParams` if required
 * use the `http` service to call `get<ResultType>(url, { params: myParams })`
 * use `pipe` and `map` to parse the result into the correct format 

As you implement each of the functions, you can test them with the buttons in the `Service Test`. If you get the data in the terminal, then you most likely did it right. But if you get an error message, then you need to keep working :)

<div class="solution-start"></div>

#### getIngredients

``` javascript
public getIngredients(): Observable<string[]> {
  const url = `${this.baseUrl}/list.php?i=list`;

  return this.http.get<IngredientsRawResult>(url)
    .pipe(
      map(result => result.drinks.map(ingredient => ingredient.strIngredient1)),
      map(ingredients => ingredients.sort())
    );
}
```

#### getCocktails

``` javascript
public getCocktails(ingredient: string): Observable<CocktailOverviewRaw[]> {
  const url = `${this.baseUrl}/filter.php`;
  const params = new HttpParams().set('i', ingredient);

  return this.http.get<CocktailsRawResult>(url, { params })
    .pipe(
      map(result => (result) ? result.drinks : [])
    );
}
```

#### getCocktail

``` javascript
public getCocktail(id: string): Observable<CocktailRecipe> {
  const url = `${this.baseUrl}/lookup.php`;
  const params = new HttpParams().set('i', id);

  return this.http.get<CocktailRawResult>(url, { params })
    .pipe(
      map(result =>
        new CocktailRecipe(result.drinks[0])
      )
    );
}
```

<div class="solution-end"></div>

<div class="exercise-end"></div>

### Components 
<!--with custom attributes-->

The component is a controller class with a template which mainly deals with a view of the application and logic on the page. It is a bit of code that can be used throughout an application. The component knows how to render itself and configure dependency injection.

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

For this part of the exercise we will be using all components in the `cocktail` folder.

Change the default route to:

``` javascript
{ path: '', redirectTo: '/drinks', pathMatch: 'full' },
```

And run the application. You should get a view displaying a list of ingredients, and if you tap on one you should be presented with a list of cocktails.
When you tap on a cocktail the app should navigate to the details page.

![Cocktail List](images/warmup-cocktail-list.png?raw=true)
![Cocktail Details](images/warmup-cocktail-details.png?raw=true)

Your task is to implement a Presentation Component called `CocktailItemComponent`, which can be used to display each item in the Cocktails List View, instead of the current XML teplate

<h4 class="exercise-start">
  <b>Exercise</b>: Create CocktailItemComponent with @Input
</h4>

#### Step 1 - Replace current fixture template in Competition Fixtures 

The initial structure for `CocktailItemComponent` is already in place (see `cocktail-item.component.ts`) and added to declarations in `app.module.ts`.

Open `cocktails.component.html`, comment out the `GridLayout` that is inside the second `ListView` and then add: <br/>

``` XML
<cocktail-item 
  [cocktail]="cocktail"
  [nsRouterLink]="['./recipe', cocktail.idDrink]">
</cocktail-item>
```

in its place.

You will notice that `cocktail-item` expects a `[cocktail]` attribute. This will be added in the next exercise.

Also `cocktail-item` contains `[nsRouterLink]`, as the navigation configuration should be managed from the *Parent* component (`CocktailsComponent`), not the *Presentation* component.

<div class="solution-start"></div>

Now, copy over the commented out `<GridLayout>` template to `cocktail-item.component.html`. But remember to remove the `[nsRouterLink]` property.

Your `cocktail-item.component.html` should look like this:

``` XML
<GridLayout class="list-group-item" rows="auto" columns="auto, *">
  <Image [src]="cocktail.strDrinkThumb" width="40" class="thumb img-circle"></Image>
  <Label col="1" [text]="cocktail.strDrink" class="list-group-item-heading font-sb"></Label>
</GridLayout>
```

<div class="solution-end"></div>

Now if you reload the app and select an ingredient, the app should work as before, but this time you have nice separation of how the Drinks listview should present each item.

### To be continued here!!!!!!!

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
