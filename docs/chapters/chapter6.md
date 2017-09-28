## Lesson 4 - Plugins

In this Lesson you are going to learn how to use a few out of a generous collection of NativeScript plugins.

Most of the plugins you can install either by calling `npm install` or for those that contain some native iOS and/or Android elements `tns plugin add`.


<h4 class="exercise-start">
  <b>Exercise</b>: Setup
</h4>

In this exercise we will be working on `plugins/wizard-profile.component`.

Let's start with changing the default route in `app.routing.ts` to `'/plugins'`:

``` javascript
{ path: '', redirectTo: '/plugins', pathMatch: 'full' },
````

<div class="exercise-end"></div>

### Exercise: Camera Plugin

<h4 class="exercise-start">
  <b>Exercise</b>: Camera Plugin
</h4>

You can find the [camera plugin here](https://docs.nativescript.org/angular/code-samples/camera).

To install it run:

```
npm i nativescript-camera --save
```

> Remember, every time you make a change to native bits of your app (including adding/removing plugins) you need to rebuild and redeploy your app with `tns run`.

Next, open `wizard-profile.component.ts` and import `nativescript-camera` using the line of code below.

``` javascript
import * as camera from 'nativescript-camera';
```

After that, update the `WizardProfileComponent`’s `takeProfilePicture` function to take a picture and call `this.updateProfilePicture`, passing the `ImageAsset` you got from the camera plugin’s callback function.
Try to figure it out based on the info in the documentation. 
Note that you might need to call `camera.requestPermissions();` from `ngOnInit`.

<div class="solution-start"></div>
``` javascript
ngOnInit() {
  // get camera permissions when loading for the first time
  camera.requestPermissions();

  this.reloadPowers();
}

takeProfilePicture() {
  const options: camera.CameraOptions = {
    width: 300,
    height: 300,
    keepAspectRatio: true,
    saveToGallery: false
  };

  camera.takePicture(options)
  .then((imageAsset: ImageAsset) => {
    this.updateProfilePicture(imageAsset);
  }).catch(err => {
    console.log(err.message);
  });
}
```
<div class="solution-end"></div>

<div class="exercise-end"></div>

### Exercise: Social Share Plugin

<h4 class="exercise-start">
  <b>Exercise</b>: Social Share Plugin
</h4>

You can find the [nativescript-social-share here](https://www.npmjs.com/package/nativescript-social-share)

To install it run:

```
tns plugin add nativescript-social-share
```

Next, open `wizard-profile.component.ts` and import `nativescript-social-share` using the code below:

``` javascript
import * as SocialShare from 'nativescript-social-share';
```

After that, update the `share` function in `WizardProfileComponent` to share the existing `messageBody` variable.

<div class="solution-start"></div>
``` javascript
SocialShare.shareText(messageBody);
```
<div class="solution-end"></div>

Finally, update the `WizardProfileComponent`’s `sharePicture` function to share the component’s `profilePicture` property.

<div class="solution-start"></div>
``` javascript
SocialShare.shareImage(this.profilePicture);
```
<div class="solution-end"></div>


<div class="exercise-end"></div>

### Exercise: Fancy Alert Plugin

<h4 class="exercise-start">
  <b>Exercise</b>: Fancy Alert Plugin
</h4>

You can find the [nativescript-fancyalert plugin here](https://www.npmjs.com/package/nativescript-fancyalert).

To install it run:

```
npm install nativescript-fancyalert --save
```

Open `wizard-profile.component.ts` and import `nativescript-fancyalert` using the line of code below.

``` javascript
import { TNSFancyAlert } from 'nativescript-fancyalert';
```

Next, replace the 3 `alert` calls in `displayPower` with `TNSFancyAlert.showNotice`, `TNSFancyAlert.showInfo`, `TNSFancyAlert.showWarning`.
You can pass in `power.name` and `power.description` as the parameters.

<div class="solution-start"></div>
``` javascript
displayPower(power: Power) {
  if(power.level < 5) {
    TNSFancyAlert.showNotice(power.name, power.description, 'Nice');
  } else if(power.level < 9) {
    TNSFancyAlert.showInfo(power.name, power.description, 'W00000W!!!');
  } else {
    TNSFancyAlert.showWarning(power.name, power.description, 'Be careful');
  }
}
```
<div class="solution-end"></div>


<div class="exercise-end"></div>

### Exercise: Pull To Refresh Plugin

<h4 class="exercise-start">
  <b>Exercise</b>: Pull To Refresh Plugin
</h4>

<!--main.ts
import {registerElement} from "nativescript-angular/element-registry";
registerElement("PullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh);-->

You can find the [nativescript-pulltorefresh plugin here](https://www.npmjs.com/package/nativescript-pulltorefresh).

To install it run:

```
tns plugin add nativescript-pulltorefresh
```

This plugin is slightly different, as it needs to be added directly to the UI, which requires you to register it first.

Open `main.ts`, import `element-registry` and then call `registerElement` (Just make sure to add it before `platformNativeScriptDynamic().bootstrapModule(AppModule);`):

``` javascript
import {registerElement} from "nativescript-angular/element-registry";
registerElement("PullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh);
```

<div class="solution-start"></div>
``` javascript
import { platformNativeScriptDynamic } from 'nativescript-angular/platform';

import { AppModule } from './app.module';

import {registerElement} from "nativescript-angular/element-registry";
registerElement("PullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh);

platformNativeScriptDynamic().bootstrapModule(AppModule);
```
<div class="solution-end"></div>

Once that is done, open `wizard-profile.component.html` and wrap the `PullToRefresh` around the `ListView`

``` XML
<PullToRefresh (refresh)="onPull($event)">
  <ListView 
    ...
  </ListView>
</PullToRefresh>
```

<div class="solution-start"></div>
``` XML
<PullToRefresh (refresh)="onPull($event)">
  <ListView [items]="powers" class="list-group" (itemTap)="onPowerTap($event)">
    <ng-template let-power="item">
      <StackLayout>
        <Label [text]="power.name + ': ' + power.level" class="list-group-item"></Label>
      </StackLayout>
    </ng-template>
  </ListView>
</PullToRefresh>
```
<div class="solution-end"></div>


<div class="exercise-end"></div>
