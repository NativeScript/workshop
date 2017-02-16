## Beyond the basics

You now know how to start NativeScript apps, and how to scaffold out a basic user interface. Now let’s dig deeper. In this workshop you’ll learn how to create Angular services, how to deal with data, and how to setup routing. Let’s start by building an Angular service.

### Learning Angular 2 data binding, events, and services

In this workshop you’ll be building a simple grocery-management application. Let’s dive right in.

<h4 class="exercise-start">
    <b>Exercise</b>: Start up a new app
</h4>

Go ahead and start up a new NativeScript app for this workshop:

```
tns create WorkshopThree --ng
```

Next, change directories into your new project:

```
cd WorkshopThree
```

After that, start a livesync watcher with either

```
tns livesync ios --watch
```

or

```
tns livesync android --watch
```

<div class="exercise-end"></div>

Open this new project up in Visual Studio Code and let’s start working with Angular services.

<h4 class="exercise-start">
    <b>Exercise</b>: Your first service
</h4>

Replace the contents of `app.component.ts` with the code below, which creates a simple grocery list:

``` TypeScript
import { Component, OnInit } from "@angular/core";
import { GroceryService } from "./grocery.service";
import { Grocery } from "./grocery";

@Component({
  selector: "my-app",
  templateUrl: "app.component.html",
  providers: [GroceryService]
})
export class AppComponent {
  groceries: Array<Grocery>;

  constructor(private groceryService: GroceryService) {}
  ngOnInit() {
    this.groceries = this.groceryService.get();
  }
}
```

And then replace the contents of `app.component.html` with the code below, which shows the groceries on the screen:

``` XML
<GridLayout>
  <ListView [items]="groceries">
    <template let-item="item">
      <Label [text]="item.name"></Label>
    </template>
  </ListView>
</GridLayout>
```

Next, create a file in the `app` folder named `grocery.service.ts`, and paste in the following code:

``` TypeScript
import { Injectable } from "@angular/core";
import { Grocery } from "./grocery";

@Injectable()
export class GroceryService {
  get() {
    let groceries = [];
    groceries.push(new Grocery("Bananas"));
    groceries.push(new Grocery("Apples"));
    groceries.push(new Grocery("Grapes"));
    return groceries;
  }
}
```

Finally, create another file in the `app` folder named `grocery.ts`, and paste in the following code:

``` TypeScript
export class Grocery {
  name: string;
  constructor(name) {
    this.name = name;
  }
}
```

<div class="exercise-end"></div>

At this point you should see a hardcoded list of data. Let’s refactor this app so that the data isn’t hardcoded.

<h4 class="exercise-start">
    <b>Exercise</b>: Allow users to add groceries
</h4>

Update you `app.css` with the code below, which will add a bit of spacing to the app you’re building.

``` CSS
TextField, Button, Label {
  padding: 15;
}
```

Next, change your `app.component.html` file to use the code below, which sets up a UI that allows users to add data to the list.

``` XML
<GridLayout>
  <GridLayout rows="auto, *">

    <GridLayout row="0" columns="*, auto">
      <TextField col="0" hint="Enter a grocery"></TextField>
      <Button col="1" text="Add"></Button>
    </GridLayout>

    <ListView row="1" [items]="groceries">
      <template let-item="item">
        <Label [text]="item.name"></Label>
      </template>
    </ListView>
  </GridLayout>
</GridLayout>
```

With that setup out of the way, let’s try a quick challenge.

<div class="exercise-end"></div>

<h4 class="exercise-start">
    <b>Challenge</b>: Adding a tap handler
</h4>

NativeScript button elements have a `tap` event that you can subscribe to using `<Button (tap)="functionName()">`. Angular 2 lets you implement two-way data binding between a text field and a component property using the `[(ngModel)]` styntax, for instance `<TextField [(ngModel)]="grocery">`.

Your challenge is to combine the two, so that when the user taps the “Add” button they see the value they typed in the text field.

One last note before you get started: replace the contents of your `main.ts` file with the code below, which adds a `NativeScriptFormsModule` import you’ll need for this to all work.

``` TypeScript
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, NativeScriptFormsModule]
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
```

<div class="solution-start"></div>

Use the following code for your `app.component.html`:

``` XML
<GridLayout>
  <GridLayout rows="auto, *">

    <GridLayout row="0" columns="*, auto">
      <TextField col="0" hint="Enter a grocery" [(ngModel)]="grocery"></TextField>
      <Button col="1" text="Add" (tap)="add()"></Button>
    </GridLayout>

    <ListView row="1" [items]="groceries">
      <template let-item="item">
        <Label [text]="item.name"></Label>
      </template>
    </ListView>
  </GridLayout>
</GridLayout>
```

And the following code for your `app.component.ts`:

``` TypeScript
import { Component, OnInit } from "@angular/core";
import { GroceryService } from "./grocery.service";
import { Grocery } from "./grocery";

@Component({
  selector: "my-app",
  templateUrl: "app.component.html",
  providers: [GroceryService]
})
export class AppComponent {
  grocery: String;
  groceries: Array<Grocery>;

  constructor(private groceryService: GroceryService) {}

  ngOnInit() {
    this.groceries = this.groceryService.get();
  }

  add() {
    alert("You typed " + this.grocery);
  }
}
```

<div class="solution-end"></div>

<div class="exercise-end"></div>

Reference:

- [Angular services](https://angular.io/docs/ts/latest/tutorial/toh-pt4.html)
- [Angular dependency injection](https://angular.io/docs/ts/latest/guide/dependency-injection.html)
- [Using NativeScript ListViews](https://docs.nativescript.org/angular/ui/list-view.html)

### Dealing with data

In this next section of the workshop you’ll enhance the small grocery list to allow users to add items to the list, and also to persist grocery lists to their devices.

<h4 class="exercise-start">
    <b>Exercise</b>: Allow users to add data
</h4>

First, replace the contents of `grocery.service.ts` with the code below. The changes include removing the hardcoded list, as well as a new `add()` method.

``` TypeScript
import { Injectable } from "@angular/core";
import { Grocery } from "./grocery";

@Injectable()
export class GroceryService {
  private groceries: Array<Grocery>;

  constructor() {
    this.groceries = [];
  }

  get() {
    return this.groceries;
  }

  add(name) {
    this.groceries.unshift(new Grocery(name));
  }
}
```

Next, replace the contents of `app.component.ts` with the code below:

``` TypeScript
import { Component, OnInit } from "@angular/core";
import { GroceryService } from "./grocery.service";
import { Grocery } from "./grocery";

@Component({
  selector: "my-app",
  templateUrl: "app.component.html",
  providers: [GroceryService]
})
export class AppComponent {
  grocery: String;
  groceries: Array<Grocery>;

  constructor(private groceryService: GroceryService) {}

  ngOnInit() {
    this.groceries = this.groceryService.get();
  }

  add() {
    this.groceryService.add(this.grocery);
    this.grocery = "";
  }
}
```

Test your changes by adding a few items to the list.

<div class="exercise-end"></div>

You now have a very basic list, but there’s a big problem: this list isn’t persisted. Let’s look at how to change that.

<h4 class="exercise-start">
    <b>Exercise</b>: Persisting data
</h4>

Start by adding the import below to the top of your `grocery.service.ts` file:

``` TypeScript
import { getString, setString } from "application-settings";
```

Next, in the same file, replace the existing `add()` function with the code below, which saves the grocery list using the application settings module you just imported.

``` TypeScript
add(name) {
  this.groceries.unshift(new Grocery(name));
  let names = this.groceries.map((item: Grocery) => {
    return item.name;
  });
  setString("groceries", names.toString());
}
```

Your data is now being saved, but it’s up to you to determine how to load this data when the application loads. A challenge!

<div class="exercise-end"></div>

<h4 class="exercise-start">
    <b>Challenge</b>: Loading saved data
</h4>

Your challenge is to change `grocery.service.ts` to automatically load any data previously stored by the user. As a tip, you’ll want to use the `getString()` method you imported in the previous exercise.

> **NOTE**: A convenient way to restart the app is to add or remove a new line from the TypeScript file you’re currently working on.

<div class="solution-start"></div>

Replace the constructor in `grocery.service.ts` with the code below:

``` TypeScript
constructor() {
  this.groceries = [];
  let savedGroceriesString = getString("groceries"); 
  if (savedGroceriesString) {
    savedGroceriesString.split(",").forEach((grocery) => {
      this.groceries.push(new Grocery(grocery));
    });
  }
}
```

<div class="solution-end"></div>
<div class="exercise-end"></div>

There are many ways to store data in NativeScript apps. In addition to using the application settings module, you may wish to use one of the options listed below.

Reference:

- [NativeScript Firebase plugin](https://github.com/EddyVerbruggen/nativescript-plugin-firebase)
- [NativeScript Couchbase plugin](https://github.com/couchbaselabs/nativescript-couchbase)
- [NativeScript SQLLite plugin](https://github.com/NathanaelA/nativescript-sqlite)
- [Accessing RESTful HTTP APIs](http://docs.nativescript.org/angular/tutorial/ng-chapter-3#34-services)

### Setting up routing and navigation

Routing in a NativeScript app with Angular 2 works very similarly to how it works on the web. In order to get things up and running we have to create a few files.

<h4 class="exercise-start">
    <b>Exercise</b>: Set up the routing infrastructure
</h4>

- Create a new `groceries` folder in your app.
- Move the `grocery.ts` and `grocery.service.ts` files into the new `groceries` folder.
- Create new files named `groceries.component.html` and `groceries.component.ts` within the `groceries` folder.
- Create a file named `app.routing.ts` in your root `app` folder.

You should now have a folder structure that looks like this.


<div class="no-copy-button"></div>

```
app
├── app.component.ts
├── app.css
├── app.routing.ts
├── groceries
│   ├── groceries.component.html
│   ├── groceries.component.ts
│   ├── grocery.service.ts
│   └── grocery.ts
├── main.ts
└── package.json
```

Next, update your `groceries.component.ts` file to use the code below:

``` TypeScript
import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import { GroceryService } from "./grocery.service";
import { Grocery } from "./grocery";

@Component({
  selector: "my-app",
  templateUrl: "groceries/groceries.component.html",
  providers: [GroceryService]
})
export class GroceriesComponent {
  grocery: String;
  groceries: Array<Grocery>;

  constructor(private groceryService: GroceryService, private routerExtensions: RouterExtensions) {}

  ngOnInit() {
    this.groceries = this.groceryService.get();
  }

  add() {
    this.groceryService.add(this.grocery);
    this.grocery = "";
  }
}
```

After that, copy and paste the contents of `app.component.html` into `groceries.component.html`, and delete the `app.component.html` file.

Finally, update the following three files as follows.

`app.routing.ts`:

``` TypeScript
import { Routes } from "@angular/router";

import { GroceriesComponent } from "./groceries/groceries.component";

export const appRoutes: Routes = [
  { path: "", component: GroceriesComponent }
];
```

`app.component.ts`:

``` TypeScript
import { Component } from "@angular/core";

@Component({
  selector: "main",
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent { }
```

`main.ts`:

``` TypeScript
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NgModule } from "@angular/core";

import { appRoutes } from "./app.routing";
import { AppComponent } from "./app.component";
import { GroceriesComponent } from "./groceries/groceries.component";

@NgModule({
  declarations: [
    AppComponent,
    GroceriesComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(appRoutes)
  ]
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
```

<div class="exercise-end"></div>

With that your app hasn’t changed, but you’ve moved files around so that you’re setup to add additional routes. Let’s do that!

<h4 class="exercise-start">
    <b>Exercise</b>: Scaffold out a new route
</h4>

Create a new `about` folder within the `app` folder, and add two files named `about.component.html` and `about.component.ts`.

<div class="no-copy-button"></div>

```
app
├── about
│   ├── about.component.html
│   └── about.component.ts
├── groceries
│   └── ...
└── ...
```

Paste the following code in for `about.component.html`:

``` XML
<ActionBar title="About"></ActionBar>

<StackLayout>
  <Label height="100" text="Groceries is a simple grocery management app." textWrap="true"></Label>
</StackLayout>
```

And the following code to your `about.component.ts` file:

``` TypeScript
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "about/about.component.html"
})
export class AboutComponent {}
```

Next, open `groceries.component.html` back up and add the following code to the very top of the file:

``` TypeScript
<ActionBar title="Groceries">
  <ActionItem text="About" (tap)="navigate()"></ActionItem>
</ActionBar>
```

After that, open `groceries.component.ts` and add the method below to the `GroceriesComponent` class:

``` TypeScript
navigate() {
  this.routerExtensions.navigate(["/about"]);
}
```

After that, add `AboutComponent` to the list of `declarations` in the `NgModule` in `main.ts`. The full file should now look like this:

``` TypeScript
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NgModule } from "@angular/core";

import { appRoutes } from "./app.routing";
import { AppComponent } from "./app.component";
import { GroceriesComponent } from "./groceries/groceries.component";
import { AboutComponent } from "./about/about.component";

@NgModule({
  declarations: [
    AppComponent,
    GroceriesComponent,
    AboutComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(appRoutes)
  ]
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
```

And finally, replace the contents of `app.routing.ts` with the code below, which registers the new about route.

``` TypeScript
import { Routes } from "@angular/router";

import { GroceriesComponent } from "./groceries/groceries.component";
import { AboutComponent } from "./about/about.component";

export const appRoutes: Routes = [
  { path: "", component: GroceriesComponent },
  { path: "about", component: AboutComponent }
];
```

<div class="exercise-end"></div>

At this point you now have two routes, but let’s try tweaking how the routing works with a challenge.

<h4 class="exercise-start">
    <b>Challenge</b>: Configure routing
</h4>

You have two tasks in this challenge: first you must make the navigation from the main component to the about component perform a flip animation, and second you must make the “About” button appear on the right-hand side of the ActionBar on iOS. (If you’re only setup to run Android, work with someone nearby on iOS for this one.)

Here are some documentation pages you can refer to for help:

- [Specifying page transitions](https://docs.nativescript.org/angular/core-concepts/angular-navigation.html#specifying-page-transitions)
- [iOS specifics of working with NativeScript ActionBars](https://docs.nativescript.org/angular/ui/action-bar.html#ios-specifics)

<div class="solution-start"></div>

Change the `navigate()` method in `groceries.component.ts` to use the code below:

``` TypeScript
navigate() {
  this.routerExtensions.navigate(["/about"], {
    transition: {
      name: "flip"
    }
  });
}
```

Change the `ActionItem` in `groceries.component.html` to have a new `ios.position` attribute:

``` XML
<ActionItem text="About" (tap)="navigate()" ios.position="right"></ActionItem>
```

<div class="solution-end"></div>

<div class="exercise-end"></div>

With routing out of the way, let’s now look at what is perhaps NativeScript’s coolest feature: the ability to access native iOS and Android APIs.

### Adding additional Angular functionality

Now that you have a bit of Angular experience let’s try adding a few additional features to this groceries app. This section will be a super special ALL CHALLENGES SECTION—meaning, we’re going to suggest some new functionality for the application, and leave it up to you to do the implementations. No worries though, we’ll provide tips to point you in the right direction, as well as the solutions if you’d like to cheat 😀

<h4 class="exercise-start">
    <b>Challenge</b>: Add delete functionality
</h4>

A grocery list is kind of useless if you can’t delete from the list, and your challenge is to implement a UI that allows users to do that. There are many ways you can choose to implement a UI like this. One potential option is laid out in the Solution below, however, you’re free to take any approach you’d like.

<div class="solution-start"></div>

First, update the `<template>` in `groceries.component.html` to use the code below:

``` XML
<template let-item="item">
  <GridLayout columns="*, auto">
    <Label col="0" [text]="item.name"></Label>
    <Label col="1" (tap)="delete(item)" text="Delete" color="red"></Label>
  </GridLayout>
</template>
```

Next, add the following function to the `GroceriesComponent` class in `groceries.component.ts`:

``` TypeScript
delete(grocery: Grocery) {
  this.groceryService.delete(grocery);
}
```

Finally, replace the `groceries.service.ts` file with the code below, which adds a new `delete()` method, as well as a minor refactor to save changes on additions and deletions.

``` TypeScript
import { Injectable } from "@angular/core";
import { getString, setString } from "application-settings";

import { Grocery } from "./grocery";

@Injectable()
export class GroceryService {
  private groceries: Array<Grocery>;

  constructor() {
    this.groceries = [];
    let savedGroceriesString = getString("groceries"); 
    if (savedGroceriesString) {
      savedGroceriesString.split(",").forEach((grocery) => {
        this.groceries.push(new Grocery(grocery));
      });
    }
  }

  get() {
    return this.groceries;
  }

  add(name) {
    this.groceries.unshift(new Grocery(name));
    this.save();
  }

  delete(grocery: Grocery) {
    let index = -1;
    this.groceries.forEach((item: Grocery, i) => {
      if (item === grocery) {
        index = i;
      }
    });
    this.groceries.splice(index, 1);
    this.save();
  }

  private save() {
    let names = this.groceries.map((item: Grocery) => {
      return item.name;
    });
    setString("groceries", names.toString());
  }
}
```

<div class="solution-end"></div>

<div class="exercise-end"></div>

With the ability to delete groceries implemented, let’s try one additional challenge.

<h4 class="exercise-start">
    <b>Challenge</b>: Add groceries on “Enter” presses
</h4>

Currently you can add groceries by tapping on the “Add” button. But it would be nice if you could also add by pressing the DONE button (or Enter/Return when in a simulator). As a hint, try searching for “return” on the [TextField’s API documentation](http://docs.nativescript.org/api-reference/classes/_ui_text_field_.textfield.html).

<div class="solution-start"></div>

Change the `<TextField>` in `groceries.component.html` to use the code below, which adds a new `returnKeyType` property and `returnPress` event handler.

``` XML
<TextField col="0" hint="Enter a grocery" [(ngModel)]="grocery" returnKeyType="done" (returnPress)="add()"></TextField>
```

<div class="solution-end"></div>

<div class="exercise-end"></div>

And that’s it. It’s time for lunch, and then back to more NativeScript and Angular 2!