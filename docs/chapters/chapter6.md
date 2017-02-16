## Code sharing

### The case for code sharing

If you have a use case that requires sharing code between a web site and a mobile app, have I got the tool for you! Introducing Nathan Walker's [https://github.com/NathanWalker/angular2-seed-advanced](Advanced Angular2 Seed) project. This project is based on Minko Geshev's [https://github.com/mgechev/angular2-seed](Angular 2 Seed) project which allows you to quickly spin up a web site, but it takes this project vastly forward with the introduction of allowing code to be shared between web, desktop via Electron, and mobile via NativeScript. You can quickly spin up three apps in one fell swoop.

The Advanced Seed project also integrates i18n support for multilingual apps by leveraging ngTranslate, as well as analytics via Angulartics and a test harness so you can test your code...and more!

This technological advancement is brought to you by the advent of Angular 2, which decoupled the DOM so that we can start sharing large parts of our codebase for various platforms.

In this workshop, we're going to work with the [http://pokeapi.co/](PokeAPI) to populate a list on the web as well as iOS and Android.

### Getting started with the Advanced-Angular2-Seed repo

Let's get up and running with the Advanced Seed. Please refer to the [https://github.com/NathanWalker/angular2-seed-advanced](Readme) to ensure that your environment is ready.

```
git clone --depth 1 https://github.com/NathanWalker/angular2-seed-advanced.git
cd angular2-seed-advanced
npm install
npm start
```
Start the mobile workflow

```
iOS:                      npm run start.ios
iOS (livesync emulator):  npm run start.livesync.ios
iOS (livesync device):    npm run start.livesync.ios.device

// or...using AVD or Genymotion Android emulator

Android:                      npm run start.android
Android (livesync emulator):  npm run start.livesync.android
Android (livesync device):    npm run start.livesync.android.device
```

You should have a web site and either an iOS or Android simulator running. You can also run two simulators at once if you like. 

> Note, on occasion your mobile livesyncing may fail when using this seed. On occasion, you may need to restart the process, so press Ctrl>C in your terminal and restart the `npm run start.livesync...` routine.

### Exploring the architecture

Open the root folder of your app in your IDE of choice. Let's take a look at all the moving parts. Navigate to the `src/client` folder.

`app/frameworks`: contains your shared application architecture code. 

  - `core`: foundation layer (decorators and low-level services)
  - `analytics`: analytics provided by [Segment](https://segment.com/)
  - `i18n`: internationalization features
  - `electron`: [Electron](http://electron.atom.io/) specific code
  - `test`: test specific code providing conveniences to make testing your code easier and faster

The code we will be editing in this workshop is:

  - `sample`: contains shared navigational components like navbar and toolbar and `sample.module.ts` which is the app's 'switchboard'
  - `sample/services`: contains services that can communicate with a backend
  - `app/components`: contains pages (home and about) and base app code

The NativeScript app is found in the `nativescript` folder. Make any mobile-specific edits in this folder, such as adding icons and splash screen images to your `app/App_Resources` folder.

 - To edit both web and mobile apps, you can make changes to files in `src/client` or `nativescript` folders. 
 - A symbolic link exists between the web `src/client` and the `nativescript` folder so changes in either location are mirrored because they are the same directory inside.

>Note: Normally when greenfielding a project using this seed, it's best for maintenance ease to create a fresh folder for your new app code in `src/client/app/frameworks` - for example the PocketRave app is located in `src/client/app/frameworks/pocketrave` - and then change any paths that point to the `app` folder. This way, you can upgrade your project by checking out a new copy of the Advanced Seed and then dropping your app's folder into `/frameworks`. For this workshop, however, we will simply be editing files in `src/client/app/components`. Reference [PocketRave](http://www.github.com/jlooper/pocketrave) as an example of this type of setup. Visit [http://PocketRave.me](PocketRave) online for a full demo of this app.
 
### Making a cross-platform edit

Let's change this app from being a shout-out to great scientists to being a celebration of Pokemon! Because we can!

<h4 class="exercise-start">
    <b>Exercise</b>: Edit the app's structure
</h4>

Let's remove the language switcher component, which is a dropdown on the web and a segmented bar on mobile. Let's also edit the app's title.

First, let's make some edits on the web. Navigate in VSCode to `src/client/app/frameworks/sample/components/`. In this folder are stored the navigation type files (toolbar and navbar) for this app. 

Open `toolbar.component.html`. The language-switcher is included here as `<lang-switcher></lang-switcher>`. Delete that line.
 
Change the `<h1></h1>` tag in this file for the web as well to "I love Pokemon!".

Your web app should refresh and you will see the site without the language switcher.

Second, let's make these same edits on mobile.

Now take a look at `src/client/app/frameworks/sample/components/toolbar.component.tns.html` - note it has intentionally been left blank. 

Normally this type of file would have corresponding code to match web and mobile layouts. Note the naming conventions of these files. Anything with `.tns.` is destined to be used in a `Telerik NativeScript` app. For our case, however, we need to navigate to `src/client/app/components/app.component.tns.html` to remove the <lang-switcher></lang-switcher> component. Edit the ActionBar as well with the new title.

In this file, change the title of the app in the `<ActionBar>` markup to be "I love Pokemon!".

Note how the app title is contained in an `<h1>` on web and an `<ActionBar>` on mobile. This illustrates the limited ability, currently, of the app to share every bit of code between web and mobile, as the layouting mechanism is very different on these two platforms. We will see tighter codesharing in a minute, however.

By removing the language switcher, we've broken the i18n translations, so let's delete everything in the body of the home page and rebuild it. Go to `src/client/app/components/home` and delete everything in `home.component.tns.html` and `home.component.html`.

<div class="exercise-end"></div>

The takeaway from this exercise is that you have full control over where your code goes, but there are some patterns that start to manifest themselves. Most importantly, note the naming conventions that allow you to separate your code per platform.


### Adding a service

Let's add a service to consume data brought in from the PokeAPI. We're going to display a list of pokemon on all platforms. 

<h4 class="exercise-start">
    <b>Exercise</b>: Add a service
</h4>

Add a new file to `src/client/app/frameworks/sample/services/` called `pokemon.service.ts` and paste in the following:

``` TypeScript
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { LogService } from '../../core/services/log.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class PokemonService {
    private requestURL: string;

    constructor(
        private logger: LogService,
        private http: Http) {
        logger.debug(`pokemon service initializing...`);
        this.requestURL = 'http://pokeapi.co/api/v2/pokemon';
    }

    public getPokemon(): Observable<any> {
        let pokemonURL = this.requestURL;
        return this.http.get(pokemonURL)
            .map((res) => {
                let pokemon = res.json();
                return pokemon.results || [];
            })
            .catch(this.handleError);
    }


    private handleError(error: Response) {
        return Observable.throw(error);
    }
}

```

Now, let's integrate this service into the app:

Navigate to `src/client/app/frameowrks/sample/sample.module.ts` to include service like this:

Paste this line under the multilingualReducer line:

```
import { PokemonService } from './services/pokemon.service';
```
and ensure that it's listed as a provider by adding it to the list of providers under `NameListService`:
```
providers: [
    NameListService,
    PokemonService
  ],
```
Add this service into the `index.ts` list of available services by adding this export to the bottom of `src/client/app/frameworks/sample/index.ts`:

``` TypeScript
export * from './services/pokemon.service';
```

Finally, you need to import this service into your frontend files, so that your home pages can leverage it. Navigate to `src/client/app/components/home/home.component.ts` and replace the content of this file with this:

``` TypeScript
// libs
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { OnInit } from '@angular/core';

// app
import { BaseComponent } from '../../frameworks/core/index';
import { PokemonService } from '../../frameworks/sample/index';

@BaseComponent({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit { 
  
  public pokemon$: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
   
  constructor(
    public pokemonService: PokemonService
    ) {}

  ngOnInit() {
    this.pokemonService.getPokemon()
      .subscribe((pokemon: Array<any>) => {
          this.pokemon$.next(pokemon);
      });
  }
}
```

<div class="exercise-end"></div>

You now have a service that returns an array via an http call to the PokeAPI. Notice, you only have one service and it's sent to the frontend in one call. Now, you can display the data as you like, using web and mobile layouts!

### Rebuilding the home screen

We are going to show a list of Pokemon, as returned by the service, on both web and mobile screens. On mobile, we will simply display a ListView, and on the web, we will show a simple set of `<p>` tags. 

<h4 class="exercise-start">
    <b>Exercise</b>: Edit the frontend
</h4>

Delete everything in `src/client/app/components/home/home.component.tns.html` and paste in the following code to add a ListView for the mobile app:

``` XML
<StackLayout class="container-content">
    <GridLayout columns="*" rows="*">
        <ListView [items]="pokemon$ | async" row="1" height="300">
            <template let-item="item">
                <StackLayout>
                    <Label [text]="item.name"></Label>
                </StackLayout>
            </template>
        </ListView>
    </GridLayout>
</StackLayout>
```

Then, replace the code in `src/client/app/components/home/home.component.html` with the code below to create a simple list on native:

``` XML
<ul *ngFor="let pokemon of pokemon$ | async">
    <li>{{ pokemon.name }}</li>
</ul>
```
<div class="exercise-end"></div>

With just a few lines of code, you've built a cross-platform presentation screen to show a list of Pokemon! 

<blockquote>
    <p><strong>SUPER CHALLENGE!</strong>:  Make this app into a master-detail screen. You will need to use the url that this API passes to you, pass it through a (tap) function on the front end, and switch the screen to display the detail of the Pokemon, which will require another API call. Good luck! Take a look at [PracticeBuddy](https://github.com/jlooper/practice-buddy-mobile-app-2.0) for tips.</p>
</blockquote>

### Customize the CSS by platform

You can truly fine-tune the look of your web and native mobile app by isolating certain elements of the CSS associated to each file, simply by paying attention to the the names of the files. 

In the `src/client/app/components/home` folder, note the naming convention of the css files. CSS for the web for the home page, for example, is handled by `home.component.css` and CSS for mobile is handled by `home.component.tns.css`. 

<h4 class="exercise-start">
    <b>Exercise</b>: Tweak the CSS
</h4>

The listview looks a little crunched on mobile, so edit the  `src/client/app/components/home/home.comonent.tns.css`:

``` CSS
.list-item {
  padding: 10;
  margin: 10;
}
```
<div class="exercise-end"></div>

<blockquote>
    <p><strong>CHALLENGE!</strong>:  Do some more CSS tweaks to personalize your apps. Try to make both global and local css changes and see how it looks.</p>
</blockquote>


### Using OpaqueTokens

It's easy enough to create shared services and forked frontend code with this Seed, but soon enough you will need to integrate a plugin that can only be used on mobile. This integration must be shielded from the web, as it will break the web frontend if not done properly. Enter the wonderful world of [OpaqueTokens](http://blog.thoughtram.io/angular/2016/05/23/opaque-tokens-in-angular-2.html)!

If, for example, you wanted to use a special Audio plugin in your NativeScript app, but didn't want that plugin to be exposed to the web view, you would inject a string token representing that plugin at runtime. For the token to be available during the dependency injection process you setup providers for the token. 

Let's use a Loader plugin that will only be available for the mobile app.  

<h4 class="exercise-start">
    <b>Exercise</b>: Setup a plugin and a token
</h4>

First, install the plugin in your NativeScript app: 

```
cd nativescript
tns plugin add nativescript-loading-indicator 
```

>Note, you may need to rebuild the app to make the plugin install properly (`npm run start.ios/android`)

Now set up the token system. First, take a look at the 'switchboard' of your app: ` src/app/frameworks/sample/sample.module.ts`. This is the main ngModule of your app and it needs to include a master file of tokens that we are going to call token.ts. 
In `sample.module.ts`, make the following edits:

At the top, under the block of imports for 'app', add this line:

``` TypeScript
import { TOKENS_SHARED } from '../core/tokens';
```

Then, edit the Providers array:

``` TypeScript
providers: [
  NameListService,
  PokemonService,
  TOKENS_SHARED
],
```

Now, create a file in `src/app/frameworks/core` called `tokens.ts` and paste the following code in this file:

``` TypeScript
import { OpaqueToken } from '@angular/core';

export const LOADER: OpaqueToken = new OpaqueToken('LoadingIndicator');

export const TOKENS_SHARED: Array<any> = [
  { provide: LOADER, useValue: {} }
];
```

Then, edit `nativescript/app/native.module.ts` in a similar way to add a reference to tokens only available to the mobile app:

At the bottom of the 'app' block of imports, import a native token file reference:

``` TypeScript
import { TOKENS_NATIVE } from './tokens.native';
```

Edit the import block at the bottom as well:

``` TypeScript
CoreModule.forRoot([
    TOKENS_NATIVE,
    { provide: WindowService, useClass: WindowNative },
    { provide: ConsoleService, useValue: console }
  ]),
```

Now create a file in this folder called `tokens.native.ts`.

``` TypeScript
import { LOADER } from './app/frameworks/core/tokens';
import { LoadingIndicator } from 'nativescript-loading-indicator';

export const TOKENS_NATIVE: Array<any> = [
  { provide: LOADER, useClass: LoadingIndicator}
];
```

Similarly, edit the web module: `src/client/web.module.ts`, adding a reference to web tokens at the top, in the 'app' block of imports:

``` TypeScript
import { TOKENS_WEB } from './tokens.web';
```

Complete the integration by adding the tokens as a provider:

``` TypeScript
CoreModule.forRoot([
    TOKENS_WEB,
    { provide: WindowService, useValue: window },
    { provide: ConsoleService, useValue: console }
  ]),
```

Add a file called `src/client/tokens.web.ts` with a blank array (you could populate this later with other types of tokens)

``` TypeScript
export const TOKENS_WEB: Array<any> = [
  //empty for now
];
```

Now you can reference the native tokens you built in your mobile code. Replace the current code in `src/client/app/component/home/home.component.ts` with the following:

``` TypeScript
// libs
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { OnInit, Inject } from '@angular/core';
import { LOADER } from '../../frameworks/core/tokens';
import { Config } from '../../frameworks/core/utils/config';

// app
import { BaseComponent } from '../../frameworks/core/index';
import { PokemonService } from '../../frameworks/sample/index';

@BaseComponent({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit { 
  
  public pokemon$: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
   
  constructor(
    public pokemonService: PokemonService,
    @Inject(LOADER) private LoadingIndicator: any
    ) {}

  ngOnInit() {
    if (Config.IS_MOBILE_NATIVE()) {
      this.LoadingIndicator.show();
    }
    this.pokemonService.getPokemon()
      .subscribe((pokemon: Array<any>) => {
          this.pokemon$.next(pokemon);
          if (Config.IS_MOBILE_NATIVE()) {
            this.LoadingIndicator.hide();
          }
      });
  }
}
``` 

Now you are able to view the loading indicator on mobile only; it is shielded from the web view. 

<div class="exercise-end"></div>

<blockquote>
    <p><strong>CHALLENGE!</strong>:  Play with tokens - add a new web-only token, or a new mobile only token. Several tokens are integrated into [PocketRave](http://www.github.com/jlooper/pocketrave).</p>
</blockquote>


### Bonus: Running a test

As a brief demo, we're going to look at how unit tests can be integrated into this app. There is already built-in functionality to test; we simply need to edit what we're testing so the tests will pass. All we're actually testing for is that our `<h1>` contains the words 'I love Pokemon!'

<h4 class="exercise-start">
    <b>Exercise</b>: Write a test
</h4>

Unit tests are associated to each folder; there are a few in the `src/cient/app/components/home` folder, so navigate there and paste the following into the `home.component.spec.ts` file:

``` TypeScript
import {TestComponentBuilder, TestBed} from '@angular/core/testing';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

// libs
import {provideStore} from '@ngrx/store';
import {TranslateModule} from 'ng2-translate/ng2-translate';

import {t} from '../../frameworks/test/index';
import {TEST_CORE_PROVIDERS, TEST_HTTP_PROVIDERS, TEST_ROUTER_PROVIDERS} from '../../frameworks/core/testing/index';
import {NameListService, nameListReducer, PokemonService} from '../../frameworks/sample/index';
import {TEST_MULTILINGUAL_PROVIDERS} from '../../frameworks/i18n/testing/index';
import {HomeComponent} from './home.component';

// test module configuration for each test
const testModuleConfig = () => {
  TestBed.configureTestingModule({
    imports: [FormsModule, RouterModule, TranslateModule.forRoot()]
  });
};

export function main() {
  t.describe('@Component: HomeComponent', () => {

    t.be(testModuleConfig);

    t.it('should work',
      t.async(t.inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        tcb.createAsync(TestComponent)
          .then((rootTC: any) => {

            rootTC.detectChanges();

          });
      })));
  });
}

@Component({
  providers: [
    TEST_CORE_PROVIDERS(),
    TEST_HTTP_PROVIDERS(),
    TEST_ROUTER_PROVIDERS(),
    provideStore({ names: nameListReducer }),
    NameListService,
    PokemonService,
    TEST_MULTILINGUAL_PROVIDERS()
  ],
  selector: 'test-cmp',
  directives: [HomeComponent],
  template: '<sd-home></sd-home>'
})
class TestComponent {

}
```

Then, in the same folder, paste this code into `home.component.e2e-spec.ts`:

``` TypeScript
import {t} from '../../frameworks/test/index';

declare var browser: any, element: any, by: any;

t.describe('Home', function () {

  t.be(function () {
    browser.get('/');
  });

  t.it('should have correct h1', function () {
    t.e(element(by.css('sd-app sd-home h1')).getText()).toEqual('I love Pokemon!');
  });


});
```

You should now be able to run a test to check whether the `<h1>` tag is correct by typing `npm test` into a terminal at the root of your project.

>Note: Delete the files `app.component.spec.ts` and `app.component.e2e-spec.ts` to get these tests to pass 

<div class="exercise-end"></div>

<blockquote>
    <p><strong>CHALLENGE!</strong>:  Test something else!</p>
</blockquote>

Congratulations! You have built a service, customized a web and mobile app at the same time, tweaked its UI, and tested it! Just think of all the amazing web sites and apps you'll be able to spin up in the near future.