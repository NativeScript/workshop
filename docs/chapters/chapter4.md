## Lesson 2 - Navigation

### Intro

In this lesson we are going to familiarize ourselves with navigation techniques.


### Routing configuration

The Angular Router enables navigation from one view to the next as users perform application tasks.

A routed Angular application has one singleton instance of the Router service. When the app's URL changes, that router looks for a corresponding Route from which it can determine the component to display.

When you create a brand new {N} app, you will straight away get a sample `Routes` configuration, which should look like this:

``` javascript
const routes: Routes = [
  { path: "", redirectTo: "/items", pathMatch: "full" },
  { path: "items", component: ItemsComponent },
  { path: "item/:id", component: ItemDetailComponent },
];
```

This tells us 3 things:

 * When the app starts, it should automatically redirect to `items` path,
 * If you navigate to `'items'`, you will be provided with `ItemsComponent`,
 * If you navigate to `'items/somevalue'` you will be provided with `ItemDetailComponent`, which additionally will receive `somevalue` as `id`

As your application grows, so will your list of routes. One way to manage them is to group them into related `parent<->children` groups like this:

``` javascript
const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: 'items', children: [
    { path: '', component: ItemsComponent },
    { path: ':id', component: ItemDetailComponent },
  ]},
  { path: 'articles', children: [
    { path: '', component: ArticlesComponent },
    { path: 'read/:id', component: ArticleComponent },
    { path: 'edit/:id', component: EditArticleComponent },
    { path: 'search/:tech/:keyword', component: ArticleSearchResultsComponent },
  ]},
];
```

This time:

 * The default path is for `articles`,
 * `items` and `items/:id` are grouped together, which means that we could change `items` to something else in just one place,
 * We can also navigate to `articles`, `articles/read/5`, `articles/edit/5` and `articles/search/angular/navigation` (this will translate to `tech='angular'` and `keyword='navigation'`) 

There is a lot more you can do in here, which is out of scope for this workshop. See [Angular docs](https://angular.io/docs/ts/latest/guide/router.html) for more info on the subject.



### Exercise: Routing configuration
<h4 class="exercise-start">
  <b>Exercise</b>: Routing configuration
</h4>

#### Step 1

For this exercise we will use the contents of the `app/color` folder, which already contains some pieces of the app that we need.

Open `app.routing.ts` and change the `redirectTo` of the default route to `'/color'`

``` XML
{ path: '', redirectTo: '/color', pathMatch: 'full' },
```

If you are using `Playground` then you should head to: [https://play.nativescript.org/?template=nsday-color`](https://play.nativescript.org/?template=nsday-color)

#### Step 2

Now it is time to add routes for the `Red` and `RGB` components. Update the children of the `color` route, so that:

 * `'color/red'` path will navigate to `RedComponent` - you can see how this is done for the `blue` example,
 * `'color/rgb'` + `rgb` (as a parameter) path will navigate to `RGBComponent` while passing the `rgb` parameter

<div class="solution-start"></div>
``` javascript
{ path: 'color', children: [
  { path: '', component: ColorComponent },
  { path: 'blue', component: BlueComponent },
  { path: 'red', component: RedComponent },
  { path: 'rgb/:rgb', component: RGBComponent },
]},
```

<div class="solution-end"></div>

<div class="exercise-end"></div>


### Navigation from template
One way to add navigation in markup is with the `nsRouterLink` directive. It is similar to `routerLink` (which is used in the web), but works with NativeScript navigation.

`nsRouterLink` expects an array of parameters, which can be matched to one of the routes defined in `app.routes.ts`.

For example, if we want to create a label that should navigate to a “reading” page and pass it a value, such as “5”, we can achieve this by providing an absolute path. That would look something like this:

``` XML
<Label text="Angular Navigation" [nsRouterLink]="['/articles/read', '5']"></Label>
```

#### Relative Paths

We can also use relative paths. Where you provide the path based on the page you are currently at.

#### Children

If you are in the articles page (path `'/articles'`) and want to navigate to the same pages as in the previous example. You can use `'./name_of_child_path'` or `'name_of_child_path'`, like this:

``` XML
<!--With an embeded param-->
<Label text="Angular Navigation" [nsRouterLink]="['./read', '5']"></Label>
<!--with a param provided separately-->
<Label text="Angular Navigation" [nsRouterLink]="['./read', navigationId]"></Label>
```

OR

``` XML
<Label text="Angular Navigation" [nsRouterLink]="['read', '5']"></Label>
<Label text="Angular Navigation" [nsRouterLink]="['read', navigationId]"></Label>
```

#### Parent

If you are in the `'articles/read/5'` route and you want to provide a relative path back to the parent, you can use `'..'`, like this:

``` XML
<Label text="Articles" [nsRouterLink]="['..']"></Label>
```

#### Siblings

If you are in the `'articles/read/5'` route and you want to provide a relative path to the edit page or search page, you can use `'../name_of_sibling_path'`, like this:

``` XML
<Label text="Articles" [nsRouterLink]="['../edit', 5]"></Label>
<Label text="Articles" [nsRouterLink]="['../search', 'angular', 'navigation']"></Label>
```

#### Cheat sheet

``` XML
[nsRouterLink]="['/absolute']"
<!--Navigate to parent-->
[nsRouterLink]="['..']"

[nsRouterLink]="['../sibling']"

[nsRouterLink]="['./child']" // or
[nsRouterLink]="['child']" 
```

#### Clear History
Also if you add a `clearHistory` flag, you can clear the navigation stack. Which means that there won't be a back button displayed on iOS, or pressing `back` on Android will not take you back to this page again.

``` XML
<Label text="Back to Articles" [nsRouterLink]="['..']" clearHistory="true"></Label>
```

### Exercise: Navigation with nsRouterLink

<h4 class="exercise-start">
  <b>Exercise</b>: Navigation with nsRouterLink
</h4>

Open `color.component.html` and update `[nsRouterLink]` for each button, so that:

 * `Blue` button navigates to the `BlueComponent`
 * `Red` button navigates to the `RedComponent`
 * `Pink` button navigates to the `RGBComponent` with `'#ff0088'` as the parameter
 * `Gray` button navigates to the `RGBComponent` with `'gray'` as the parameter
 * `Lavender` button navigates to the `RGBComponent` with `'#bad'` as the parameter

> **NOTE**: The parameter you pass to the “rgb” route won’t have an effect on that page—yet. Later in this section you’ll utilize that data to change the colors on the “rgb” component.

<div class="solution-start"></div>

Here is the configuration for each: 

#### Blue
`[nsRouterLink]="['/color/blue']"` OR `[nsRouterLink]="['blue']"`

#### Red
`[nsRouterLink]="['/color/red']"` OR `[nsRouterLink]="['red']"`

#### Pink
`[nsRouterLink]="['/color/rgb', '#ff0088']"` OR  `[nsRouterLink]="['rgb', '#ff0088']"`

#### Gray
`[nsRouterLink]="['/color/rgb', 'gray']"` OR  `[nsRouterLink]="['rgb', 'gray']"`

#### Lavender
`[nsRouterLink]="['/color/rgb', '#bad']"` OR  `[nsRouterLink]="['rgb', '#bad']"`

<div class="solution-end"></div>

<div class="exercise-end"></div>


### Navigation with code
Navigation can also be done with JavaScript.

For that you will either need the standard `Router` from `@angular/router`, or `RouterExtensions` from `nativescript-angular/router`, which comes with additional functionality: to `clearHistory`, choose a page `transition` or navigate `back`.

> Note: If you are working on a project where you need to share the code between web and mobile, then you might want to use the standard Angular `Router`. However if your project is mobile only, then you should stick with `RouterExtensions`.

#### Navigation: how to
Once you choose which Router to use, navigation is really easy: 

 * import the router you need,
 * inject the router in the constructor,
 * call navigate - just like you did with nsRouterLink

``` javascript
import { Router } from '@angular/router';
// or
import { RouterExtensions } from 'nativescript-angular';

@Component({
  selector: 'my-articles',
  templateUrl: './articles/articles.component.html',
})
export class ArticlesComponent {
  constructor(private router: RouterExtensions) {
  }

  readArticle(id: number) {
    this.router.navigate(['/articles/read', id]);
  }
}
```

#### Relative path
To use a relative path you need to:

 * import `ActivatedRoute`, which can be used as the `relative point`,
 * inject it in the constructor
 * provide it as a parameter for `navigate`, as `relativeTo`

``` javascript
import { RouterExtensions } from 'nativescript-angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-articles',
  templateUrl: './articles/articles.component.html',
})
export class ArticlesComponent {
  constructor(
    private router: RouterExtensions,
    private route: ActivatedRoute) {
  }

  readArticle(id: number) {
    this.router.navigate(['./read', id], { relativeTo: this.route });
  }
}
```


#### Cheat sheet

``` javascript
this.router.navigate(['/absolute/path']);
//navigate to parent
this.router.navigate(['..'],         {relativeTo: this.route});

this.router.navigate(['../sibling'], {relativeTo: this.route});

this.router.navigate(['./child'],    {relativeTo: this.route}); // or
this.router.navigate(['child'],      {relativeTo: this.route});
```

#### Clear History

To clear history just provide `clearHistory` into `navigate`, like this:

``` javascript
this.router.navigate(['/articles', { clearHistory: true }]);
```

Please note that you must use `RouterExtensions` for this to work. Also, `clearHistory` works only with `page-router-outlet`; this doesn't work with `router-outlet`.

#### Navigating back

To navigate back, you can use `RouterExtensions` functionality to call either:

 * `this.router.back()` - always takes us to back the previous view from the navigation stack,
 * `this.router.backToPreviousPage()` - always takes us back to the previous page from the navigation stack, skipping navigation stack items on the same page.

What is the difference?

Let's imagine you navigated through a number of paths in this order.

 * navigate `/articles`
 * navigate `/articles/read/1`
 * navigate `/articles/read/2`
 * navigate `/articles/edit/3`

So now we are at `/articles/edit/3`.

Calling `back` or `backToPreviousPage`, will both result in navigating to:
`/articles/read/2`.

Now calling `back` would take us to `/articles/read/1`, which is another article in the same page.
However calling `backToPreviousPage` from `/articles/read/2`, would take us to `/articles`.

#### Default iOS and Android back operations

The default `back` button which appears in the iOS `<ActionBar>` performs `backToPreviousPage`, while the Android back button performs `back`.

### Exercise: Navigation with code

<h4 class="exercise-start">
  <b>Exercise</b>: Navigation with code
</h4>

In this exercise we will play with the `blue` component. The `blue.component.html` already contains four buttons, each calling a different function.

Your task is to implement the empty functions in `blue.component.ts`, so that:

 * goRed() navigates to the `Red` page
 * goPink() navigates to the `RGB` page with `this.pink` as the parameter
 * goBack() navigates back
 * goHome() navigates home whilst clearing the navigation history


<div class="solution-start"></div>

#### goRed (Absolute Solution)
 `this.router.navigate(['/color/red']);`

#### goPink 

 `this.router.navigate(['/color/rgb', this.pink]);`

#### goBack

 `this.router.back();`

#### goHome

 `this.router.navigate(['/color'], { clearHistory: true });`

<div class="solution-end"></div>

<div class="exercise-end"></div>

### Receiving parameters

For components that are expected to receive parameters from the route navigation, you need to use `ActivatedRoute`.

You just have to perform the appropriate imports:

#### Import
``` javascript
import { ActivatedRoute } from '@angular/router';
```

#### Inject
``` javascript
export class ArticleSearchResultsComponent {
  constructor(private route: ActivatedRoute) {
  }
}
```

#### Use

Here we have two options. You can take a snapshot, which will be triggered only when we navigate to this page from another page.

``` javascript
ngOnInit() {
  this.tech = this.route.snapshot.params['tech'];
  this.keyword = this.route.snapshot.params['keyword'];

  this.searchArticles(this.tech, this.keyword);
}
```

#### Navigate to self

Using a snapshot will not work if we try to navigate from the search to itself, but with different parameters. To make this work, we need to use `params.forEach` instead.

``` javascript
ngOnInit() {
  this.route.params
    .forEach(params => {
      this.tech = this.route.snapshot.params['tech'];
      this.keyword = this.route.snapshot.params['keyword'];

      this.searchArticles(this.tech, this.keyword);
    });
}
```

### Exercise: Receiving parameters

<h4 class="exercise-start">
  <b>Exercise</b>: Receiving parameters
</h4>

In this exercise we will play with the `rgb` component: `rgb.component.ts`. Currently every time you navigate to `rgb` the input parameters are getting ignored. Your task is to intercept the 'rgb' parameter and update `this.rgb`.

<div class="solution-start"></div>

``` javascript
ngOnInit() {
  this.route.params
    .forEach(params => this.rgb = params['rgb']);
}
```

<div class="solution-end"></div>

<div class="exercise-end"></div>

### Page Transitions

One of the great things about NativeScript is its ability to use native animations and page transitions with very little effort.

[Here is a list of all available navigation transitions](http://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationtransition.html)

[Here is a list of all available animation curves](http://docs.nativescript.org/api-reference/modules/_ui_enums_.animationcurve.html)

#### Transition via html

To add pageTransition in html, just add `pageTransition` with a name of the transition you need:

``` XML
<Button
  text="Open Path"
  [nsRouterLink]="['/path']"
  pageTransition="slideBottom">
</Button>
```

#### Transition via code

To add page transition in JavaScript, just add a transition object to the `navigate` options. Just like this:

``` javascript
this.router.navigate(['/relative/path'], {
  transition: {
    name: 'slideBottom',
    duration: 500,
    curve: 'linear'
  }
});
```

### Exercise: Page Transitions

<h4 class="exercise-start">
  <b>Exercise</b>: Page Transitions
</h4>

In this exercise we will play with the `color` and `red` components.

#### Step 1

Your task is to update the buttons in `color.component.html`, so that:

 * The `Blue` button triggers `curl` transition
 * The `Red` button triggers the `fade` transition
 * The `Pink`, `Gray` and `#bad` buttons trigger the `flip` transition


<div class="solution-start"></div>

 * `Blue` => `pageTransition="curl"`
 * `Red` => `pageTransition="fade"`
 * `Pink`, `Gray` and `#bad` => `pageTransition="flip"`

<div class="solution-end"></div>


#### Step 2

`red.component.html` already contains 4 buttons, each calling a different function.

Your task is to implement the empty functions in `red.component.ts`, so that:

 * goBlue() navigates to the `Blue` page with page transition `slideTop`, duration `2 seconds` and curve `spring`
 * goGray() navigates to the `RGB` page with `gray` as the parameter and page transition `fade` and duration `1 second`


<div class="solution-start"></div>

#### goBlue

```
this.router.navigate(['/color/blue'], {
  transition: {
    name: 'slideTop',
    duration: 2000,
    curve: 'spring'
  }
});
```

#### goGray

```
this.router.navigate(['/color/rgb', 'gray'], {
  transition: {
    name: 'fade',
    duration: 1000
  }
});
```

<div class="solution-end"></div>

<div class="exercise-end"></div>
