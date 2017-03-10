## Lesson 2 - Navigation

### Intro

In this lesson we are going to familiarise ourselves with navigation techniques.

For this exercise we will use the contents of the `app/color` folder, which already contains some pieces of the app that we need.

### Routing configuration

<!--implementation of app.rounting.ts and color.component.html component -->
<!--Configuration of app.routing.ts
  Children
  Params-->




### Exercise: Routing configuration
<h4 class="exercise-start">
  <b>Exercise</b>: Routing configuration
</h4>

#### Step 1

Open `app.routing.ts` and change the `redirectTo` of the default route to `'/color'`

<div class="solution-start"></div>
``` XML
{ path: '', redirectTo: '/color', pathMatch: 'full' },
```
<div class="solution-end"></div>

#### Step 2

Now it is time to add routes for the `Red` and `RGB` components.
Update the childern of the `color` route, so that:

 * `'color/red'` path will navigate to `RedComponent` - you can see how this is done for the `blue` example,
 * `'color/rgb'` + `<rgb param>` path will navigate to `RGBComponent` while passing the `rgb` parameter

<div class="solution-start"></div>
``` XML
{ path: 'color', children: [
  { path: '', component: ColorComponent },
  { path: 'blue', component: BlueComponent },
  { path: 'red', component: RedComponent },
  { path: 'rgb/:rgb', component: RGBComponent },
]},
```

<div class="solution-end"></div>

<div class="exercise-end"></div>


### Navigation with nsRouterLink
<!--Navigation with ngRouterLink-->

#### Relative path

``` XML
[nsRouterLink]="['/absolute']"
<!--Navigate to parent-->
[nsRouterLink]="['..']"
[nsRouterLink]="['../sibling']"
[nsRouterLink]="['./child']"     // or
[nsRouterLink]="['child']" 
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

<div class="solution-start"></div>

Here is the configuration for each: 

 * `Blue` => `[nsRouterLink]="['/color/blue']"` OR `[nsRouterLink]="['blue']"`
 * `Red` => `[nsRouterLink]="['/color/red']"` OR `[nsRouterLink]="['red']"`
 * `Pink` => `[nsRouterLink]="['/color/rgb', '#ff0088']"` OR  `[nsRouterLink]="['rgb', '#ff0088']"`
 * `Gray` => `[nsRouterLink]="['/color/rgb', 'gray']"` OR  `[nsRouterLink]="['rgb', 'gray']"`
 * `Lavender` => `[nsRouterLink]="['/color/rgb', '#bad']"` OR  `[nsRouterLink]="['rgb', '#bad']"`

<div class="solution-end"></div>

<div class="exercise-end"></div>


### Navigation with code
<!--Navigation with with code: router
  Router from ‘@angular/router’
  RouterExtensions from ‘nativescript-angular/router’
  Navigating with params
  Navigating back
  Navigating home (clearHistory)-->

<!-- router back vs back to previous page -->
    this.router.back();
    this.router.backToPreviousPage();


#### Relative path

<!--this.router.navigate('../../parent', {relativeTo: this.route});-->
``` javascript
this.router.navigate(['/absolute/path']);

<!--navigate to parent-->
this.router.navigate('..',   {relativeTo: this.route});

this.router.navigate('../sibling',   {relativeTo: this.route});
this.router.navigate('./child',      {relativeTo: this.route}); // or
this.router.navigate('child',        {relativeTo: this.route});
```


### Exercise: Navigation with code

<h4 class="exercise-start">
  <b>Exercise</b>: Navigation with code
</h4>

In this exercise we will play with the `blue` component.
`blue.component.html` already contains 4 buttons, each calling a different function.

Your task is to implement the empty functions, so that:

 * goRed() navigates to the `Red` page
 * goPink() navigates to the `RGB` page with `this.pink` as the parameter
 * goBack() navigates back
 * goHome() navigates home whilst clearing the navigation history


<div class="solution-start"></div>

 * goRed (Absolute Solution) => <br />
 `this.router.navigate(['/color/red']);`
 * goRed (Relative Solution) => <br />
 `this.router.navigate(['../red'], { relativeTo: this.route });`
 * goPink (Absolute Solution) => <br />
 `this.router.navigate(['/color/rgb', this.pink]);`
 * goPink (Relative Solution) => <br />
 `this.router.navigate(['../rgb', this.pink], { relativeTo: this.route });`
 * goBack => <br />
 `this.router.back();`
 * goHome => <br />
 `this.router.navigate(['/color'], { clearHistory: true });`

<div class="solution-end"></div>


<div class="exercise-end"></div>

### Receiving parameters

``` javascript
import { ActivatedRoute } from '@angular/router';
```

``` javascript
constructor(private route: ActivatedRoute) {
}
```

``` javascript
ngOnInit() {
  this.route.params
    .forEach(params => this.paramValue = params['param_name']);
}
```

### Exercise: Receiving parameters



<h4 class="exercise-start">
  <b>Exercise</b>: Receiving parameters
</h4>

In this exercise we will play with the `rgb` component.
Currently every time you navigate to rgb the input parameters are getting ignored.
Your task is to intercept the 'rgb' parameter and update `this.rgb`.

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


[Here is a list of all available navigation transitions](http://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationtransition.html)

[Here is a list of all available animation curves](http://docs.nativescript.org/api-reference/modules/_ui_enums_.animationcurve.html)

#### Transition via html


Example of page transition:

``` XML
<Button
  text="Open Path"
  [nsRouterLink]="['/path']"
  pageTransition="slideBottom">
</Button>
```

#### Transition via code

Example of page transition:

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
 * The `Red` button triggers the `explode` transition
 * The `Pink`, `Gray` and `#bad` buttons trigger the `flip` transition


<div class="solution-start"></div>

 * `Blue` => `pageTransition="curl"`
 * `Red` => `pageTransition="explode"`
 * `Pink`, `Gray` and `#bad` => `pageTransition="flip"`

<div class="solution-end"></div>


#### Step 2

`red.component.html` already contains 4 buttons, each calling a different function.

Your task is to implement the empty functions, so that:

 * goBlue() navigates to the `Blue` page with page transition `slideTop`, duration `2 seconds` and curve `spring`,
 * goGray() navigates to the `RGB` page with `gray` as the parameter and page transition `fade` and duration `1 second`
 * goBack() navigates back
 * goHome() navigates home whilst clearing the navigation history


<div class="solution-start"></div>

 * goBlue (Absolute Solution) => <br />

 `this.router.navigate(['/color/red']);`
 * goGray (Relative Solution) => <br />
 `this.router.navigate(['../red'], { relativeTo: this.route });`

 * goBack => <br />
 `this.router.back();`
 * goHome => <br />
 `this.router.navigate(['/color'], { clearHistory: true });`

<div class="solution-end"></div>


<div class="exercise-end"></div>

 <!--(do I need it? it seems that PageRoute is redunant now)-->
<!--### Navigating to self-->

<!--### Exercise: Navigating to self-->
