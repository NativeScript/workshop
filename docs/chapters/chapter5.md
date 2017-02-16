## Extensibility and plugins

In this workshop you will learn how to create your own UI components and also how to create plugins which will use native iOS and Android functionality.


### Your first UI Custom UI Component

Start by creating a new ng project.

```
tns create WorkshopFive --ng
cd WorkshopFive
```

We will start be creating a `hello world` type component first, then add it to the `app.component`.

<h4 class="exercise-start">
    <b>Exercise</b>: Set up the first component
</h4>

First create a new file called `fun-label.ts` in your `app` folder and add the following code. 

``` TypeScript
import { Component } from "@angular/core";

@Component({
    selector: "FunLabel",
    template: `
    <Label text="FunLabel">
    </Label>
    `
})
export class FunLabel {

}
```

This component is a simple `@Component` that contains NativeScript label saying "FunLabel".

Now let's add `FunLabel` to `app.component.html`. Add the following line below the label:

``` XML
<FunLabel> </FunLabel>
```

But that is not enough to make it work just yet.
The final step is to add the `FunLabel` declaration to the `@NgModule` in `main.ts`
First add this import line to the rest of the imports.

``` TypeScript
import { FunLabel } from "./fun-label";
```

and now add `FunLabel` to declarations

``` TypeScript
declarations: [AppComponent, FunLabel],
```

<div class="solution-start"></div>

``` TypeScript
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FunLabel } from "./fun-label";

@NgModule({
    declarations: [AppComponent, FunLabel],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule],
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
```

<div class="solution-end"></div>

Now build the app and you should see the nice and shiny `FunLabel`.

<div class="exercise-end"></div>


The next step is to add binding property to our FunLabel.
<h4 class="exercise-start">
    <b>Exercise</b>: Property Binding
</h4>

Open `fun-label.ts`
We will call the new property `line` and bind it to the `text` of the underlying `<Label>`.

This can be accomplished in three steps.

1) Add Input to the imports

``` TypeScript
import { Component, Input } from "@angular/core
```

2) Change the `text="FunLabel"` to

``` XML
<Label 
    [text]="line">
</Label>
```

3) Add `@Input` property inside the `FunLabel` class.

> You can read more about `@Input`s properties in the [Angular docs](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#inputs-outputs)

``` TypeScript
export class FunLabel {
    @Input() public line: string = "";
}
```

<div class="solution-start"></div>

This is how the `fun-label.ts` should look now.

``` TypeScript
import { Component, Input } from "@angular/core";

@Component({
    selector: "FunLabel",
    template: `
    <Label 
        [text]="line">
    </Label>
    `
})
export class FunLabel {
    @Input() public line: string = "";
}
```

<div class="solution-end"></div>

To test it out, update the `FunLabel` in `app.component.html` to the below code and run the app.
``` XML
    <FunLabel 
        [line]="message"
        class="message">
    </FunLabel>
```

<div class="exercise-end"></div>


Now let's make the FunLabel a bit fun and add some animations.


<h4 class="exercise-start">
    <b>Exercise</b>: Add animations
</h4>

To perform animations we need to get hold of the `Label` object first.

We will do it in few steps:

1) Add the required imports for ViewChild, ElementRef and View.

``` TypeScript
import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { View } from "ui/core/view";
```

2) Add a variable `#myLabel` definion to the label and call animate on tap

``` XML
<Label #myLabel
    [text]="line"
    (tap)="animate()">
</Label>
```

3) Add the label reference to the call

``` TypeScript
export class FunLabel {
    @Input() public line: string = "";
    @ViewChild("myLabel") labelRef: ElementRef;
}
```

4) Next we can create a getter that will return the NativeScript label object

``` TypeScript
export class FunLabel {
    @Input() public line: string = "";
    @ViewChild("myLabel") labelRef: ElementRef;

    private get view() : View {
        return <View>this.labelRef.nativeElement;
    }    
}
```

5) Finally we need the function to animate.

Add the following code to the `FunLabel` class
``` TypeScript
private animate() {
    this.zoom();
}

public zoom() {
    this.view.animate({ scale: { x: 0.5, y: 0.5 }  })
        .then(() => 
            this.view.animate({ scale: { x: 2, y: 2 }  })
        )
        .then(() => 
            this.view.animate({ scale: { x: 0, y: 0 }  })
        )
        .then(() => 
            this.view.animate({ scale: { x: 1, y: 1 }, duration: 2000  })
        )
}
```

<div class="solution-start"></div>

This is how `fun-label.ts` should look at this point.
``` TypeScript
import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { View } from "ui/core/view";

@Component({
    selector: "FunLabel",
    template: `
    <Label #myLabel
        [text]="line"
        (tap)="animate()">
    </Label>
    `
})
export class FunLabel {
    @Input() public line: string = "";
    @ViewChild("myLabel") labelRef: ElementRef;

    private get view() : View {
        return <View>this.labelRef.nativeElement;
    }

    private animate() {
        this.zoom();
    }

    public zoom() {
        this.view.animate({ scale: { x: 0.5, y: 0.5 }  })
            .then(() => 
                this.view.animate({ scale: { x: 2, y: 2 }  })
            )
            .then(() => 
                this.view.animate({ scale: { x: 0, y: 0 }  })
            )
            .then(() => 
                this.view.animate({ scale: { x: 1, y: 1 }, duration: 2000  })
            )
    }
}
```

<div class="solution-end"></div>

<div class="exercise-end"></div>

<h4 class="exercise-start">
    <b>Bonus Exercise</b>: Add animationType property
</h4>

Using the below animation functions, add `animationType` @Input property.
Now the `animate` function should play one of the below functions.

``` TypeScript
public zoom() {
    this.view.animate({ scale: { x: 0.5, y: 0.5 }  })
        .then(() => 
            this.view.animate({ scale: { x: 2, y: 2 }  })
        )
        .then(() => 
            this.view.animate({ scale: { x: 0, y: 0 }  })
        )
        .then(() => 
            this.view.animate({ scale: { x: 1, y: 1 }, duration: 2000  })
        )
}

public spin() {
    this.view.animate({ rotate: 1080, duration: 750 })
        .then(() => 
            this.view.animate({ rotate: 0, duration: 750 } )
        )
}

public move() {
    this.view.animate({ translate: { x: 100, y: 0 }  })
        .then(() => 
            this.view.animate({ translate: { x: 100, y: 100 }  })
        )
        .then(() => 
            this.view.animate({ translate: { x: 0, y: 100 }  })
        )
        .then(() => 
            this.view.animate({ translate: { x: 0, y: 0 }  })
        )
}
public fade() {
    this.view.animate({ opacity: 0  })
        .then(() => 
            this.view.animate({ opacity: 1  })
        )
}
```

This is how the property should be set in `app.component.html`:

``` XML
<FunLabel 
    [line]="message"
    class="message"
    animationType="fade">
</FunLabel>
```

<div class="solution-start"></div>

Here is the full solution:

``` TypeScript
import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { View } from "ui/core/view";

@Component({
    selector: "FunLabel",
    template: `
    <Label #myLabel
        [text]="line"
        (tap)="animate()">
    </Label>
    `
})
export class FunLabel {
    @Input() public line: string = "";
    @ViewChild("myLabel") labelRef: ElementRef;
    @Input() public animationType: string = "fade";

    private get view() : View {
        return <View>this.labelRef.nativeElement;
    }

    private animate() {
        switch(this.animationType.toLowerCase()) {
            case "spin":
                this.spin();
                break;
            case "zoom":
                this.zoom();
                break;
            case "move":
                this.move();
                break;
            case "fade":
                this.fade();
                break;
            default:
                this.spin();
        }
    }

    public zoom() {
        this.view.animate({ scale: { x: 0.5, y: 0.5 }  })
            .then(() => 
                this.view.animate({ scale: { x: 2, y: 2 }  })
            )
            .then(() => 
                this.view.animate({ scale: { x: 0, y: 0 }  })
            )
            .then(() => 
                this.view.animate({ scale: { x: 1, y: 1 }, duration: 2000  })
            )
    }

    public spin() {
        this.view.animate({ rotate: 1080, duration: 750 })
            .then(() => 
                this.view.animate({ rotate: 0, duration: 750 } )
            )
    }

    public move() {
        this.view.animate({ translate: { x: 100, y: 0 }  })
            .then(() => 
                this.view.animate({ translate: { x: 100, y: 100 }  })
            )
            .then(() => 
                this.view.animate({ translate: { x: 0, y: 100 }  })
            )
            .then(() => 
                this.view.animate({ translate: { x: 0, y: 0 }  })
            )
    }
    public fade() {
        this.view.animate({ opacity: 0  })
            .then(() => 
                this.view.animate({ opacity: 1  })
            )
    }
}
```

<div class="solution-end"></div>

<div class="exercise-end"></div>


The final part of creating the `FunLabel` is to raise an event every time the animation is finished.

<h4 class="exercise-start">
    <b>Exercise</b>: Adding event handlers
</h4>

1) Let's start with the usual of adding new imports `Output` and `EventEmitter`

``` TypeScript
import { Component, Input, ViewChild, ElementRef, Output, EventEmitter } from "@angular/core";
```

2) Now we need to add `@Output` event property.

When defining an Output property, you can give it a `prop-name` (this is how it will referenced in the parent component) and `return-type` (this is the type that is expected to be returned)

@Output public `prop-name`: EventEmitter<`return-type`> = new EventEmitter<`return-type`>();

Add the following `@Output` property below all the `@Input` properties—the order is not really important.
``` TypeScript
@Output() public animateFinished: EventEmitter<number> = new EventEmitter<number>();
```

3) In order to raise the event we just need to call `eventname.next(param)`.

For this exercise we will add a `counter` property and return a new value each time an animation is complete.

Then we will wrap it nicely in an `emitAnimateFinished()` function:

``` TypeScript
private counter: number = 0;
private emitAnimateFinished() {
    this.counter++;
    this.animateFinished.next(this.counter);
}
```

4) Now the only thing that we have left is to call `this.emitAnimateFinished()` each time the `animation()` function is complete.

Here is how to do it for `spin()`

And your task is to do the same for the rest of them (zoom, move and fade).

``` TypeScript
public spin() {
    this.view.animate({ rotate: 1080, duration: 750 })
        .then(() => 
            this.view.animate({ rotate: 0, duration: 750 } )
        )
        .then(() => 
            this.emitAnimateFinished()
        )
}
```

<div class="solution-start"></div>

The `FunLabel` class should look like this:

``` TypeScript
import { Component, Input, ViewChild, ElementRef, Output, EventEmitter } from "@angular/core";
import { View } from "ui/core/view";

@Component({
    selector: "FunLabel",
    template: `
    <Label #myLabel
        [text]="line"
        (tap)="animate()">
    </Label>
    `
})
export class FunLabel {
    @Input() public line: string = "";
    @ViewChild("myLabel") labelRef: ElementRef;
    @Input() public animationType: string = "fade";
    @Output() public animateFinished: EventEmitter<number> = new EventEmitter<number>();

    private get view() : View {
        return <View>this.labelRef.nativeElement;
    }

    private counter: number = 0;
    private emitAnimateFinished() {
        this.counter++;
        this.animateFinished.next(this.counter);
    }

    private animate() {
        switch(this.animationType.toLowerCase()) {
            case "spin":
                this.spin();
                break;
            case "zoom":
                this.zoom();
                break;
            case "move":
                this.move();
                break;
            case "fade":
                this.fade();
                break;
            default:
                this.spin();
        }
    }

    

    public spin() {
        this.view.animate({ rotate: 1080, duration: 750 })
            .then(() => 
                this.view.animate({ rotate: 0, duration: 750 } )
            )
            .then(() => 
                this.emitAnimateFinished()
            )
    }

    public move() {
        this.view.animate({ translate: { x: 100, y: 0 }  })
            .then(() => 
                this.view.animate({ translate: { x: 100, y: 100 }  })
            )
            .then(() => 
                this.view.animate({ translate: { x: 0, y: 100 }  })
            )
            .then(() => 
                this.view.animate({ translate: { x: 0, y: 0 }  })
            )
            .then(() => 
                this.emitAnimateFinished()
            )
    }

    public zoom() {
        this.view.animate({ scale: { x: 0.5, y: 0.5 }  })
            .then(() => 
                this.view.animate({ scale: { x: 2, y: 2 }  })
            )
            .then(() => 
                this.view.animate({ scale: { x: 0, y: 0 }  })
            )
            .then(() => 
                this.view.animate({ scale: { x: 1, y: 1 }, duration: 2000  })
            )
            .then(() => 
                this.emitAnimateFinished()
            )
    }
    public fade() {
        this.view.animate({ opacity: 0  })
            .then(() => 
                this.view.animate({ opacity: 1  })
            )
            .then(() => 
                this.emitAnimateFinished()
            )
    }
}
```

<div class="solution-end"></div>

To put the new event property to test we need to:

a) add an `onFinished(val)` function to `AppComponent` in `app.component.ts`

``` TypeScript
    public onFinished(val: boolean) {
        alert("Finished Animation:" + val);
    }
```

b) add `animateFinished` handler to `FunLabel` in  `app.compnent.html`

Notice the `$event` attribute passed in as the parameter. This is how you pass the value returned by the component.
``` XML
    <FunLabel 
        [line]="message"
        class="message"
        animationType="fade"
        (animateFinished)="onFinished($event)">
    </FunLabel>
```

Now run the app. Each time an animation is complete you should get a nice popup with a counter.

<div class="exercise-end"></div>

NativeScript UI components can respond to other events like `Double Tap`, `Long Press`, `Swipe`, `Pan`, `Pinch`, `Rotation`, `Touch`

<h4 class="exercise-start">
    <b>Bonus Exercise</b>: Animate on swipe
</h4>

Read in the documenation how [Swipe](https://docs.nativescript.org/ui/gestures#swipe) works and implement different animation for swipe left, right, up and down.

<div class="solution-start"></div>


Here is the full solution. Have fun.

``` TypeScript
import { Component, Input, ViewChild, ElementRef, Output, EventEmitter } from "@angular/core";
import { View } from "ui/core/view";
import { SwipeGestureEventData } from "ui/gestures";

@Component({
    selector: "FunLabel",
    template: `
    <Label #myLabel
        [text]="line"
        (tap)="animate()"
        (swipe)="onSwipe($event)">
    </Label>
    `
})
export class FunLabel {
    @Input() public line: string = "";
    @ViewChild("myLabel") labelRef: ElementRef;
    @Input() public animationType: string = "fade";
    @Output() public animateFinished: EventEmitter<number> = new EventEmitter<number>();

    private get view() : View {
        return <View>this.labelRef.nativeElement;
    }

    private counter: number = 0;
    private emitAnimateFinished() {
        this.counter++;
        this.animateFinished.next(this.counter);
    }

    private animate() {
        switch(this.animationType.toLowerCase()) {
            case "spin":
                this.spin();
                break;
            case "zoom":
                this.zoom();
                break;
            case "move":
                this.move();
                break;
            case "fade":
                this.fade();
                break;
            default:
                this.spin();
        }
    }

    

    public spin() {
        this.view.animate({ rotate: 1080, duration: 750 })
            .then(() => 
                this.view.animate({ rotate: 0, duration: 750 } )
            )
            .then(() => 
                this.emitAnimateFinished()
            )
    }

    public move() {
        this.view.animate({ translate: { x: 100, y: 0 }  })
            .then(() => 
                this.view.animate({ translate: { x: 100, y: 100 }  })
            )
            .then(() => 
                this.view.animate({ translate: { x: 0, y: 100 }  })
            )
            .then(() => 
                this.view.animate({ translate: { x: 0, y: 0 }  })
            )
            .then(() => 
                this.emitAnimateFinished()
            )
    }

    public zoom() {
        this.view.animate({ scale: { x: 0.5, y: 0.5 }  })
            .then(() => 
                this.view.animate({ scale: { x: 2, y: 2 }  })
            )
            .then(() => 
                this.view.animate({ scale: { x: 0, y: 0 }  })
            )
            .then(() => 
                this.view.animate({ scale: { x: 1, y: 1 }, duration: 2000  })
            )
            .then(() => 
                this.emitAnimateFinished()
            )
    }
    public fade() {
        this.view.animate({ opacity: 0  })
            .then(() => 
                this.view.animate({ opacity: 1  })
            )
            .then(() => 
                this.emitAnimateFinished()
            )
    }

    private onSwipe(args: SwipeGestureEventData) {
        switch(args.direction) {
            case 1: //Right
                this.view.animate({ translate: { x: 100, y: 0 }, rotate: 90  })
                .then(() => 
                    this.view.animate({ translate: { x: 0, y: 0 }, rotate: 0  })
                )
                break;
            case 2: //Left
                this.view.animate({ translate: { x: -100, y: 0 }, rotate: -90  })
                .then(() => 
                    this.view.animate({ translate: { x: 0, y: 0 }, rotate: 0  })
                )
                break;
            case 4: //Up
                this.view.animate({ translate: { x: 0, y: -100 }, scale: { x: 1, y: 3}  })
                .then(() => 
                    this.view.animate({ translate: { x: 0, y: 0 }, scale: { x: 1, y: 1}   })
                )
                break;
            case 8: //Down
                this.view.animate({ translate: { x: 0, y: 100 }, scale: { x: 1, y: -1}   })
                .then(() => 
                    this.view.animate({ translate: { x: 0, y: 0 }, scale: { x: 1, y: 1}   })
                )
                break;
        }
    }

}
```

<div class="solution-end"></div>

<div class="exercise-end"></div>


### Using npm modules


Now that we know how to create our own components, let's learn how to one created by someone else.
In this exercise you will learn how to add an npm module to the project to get access to additional functionality.

But how do you go about finding one that could work for you?
You can go to:
 * [NativeScript Plugins page](http://plugins.telerik.com/nativescript), which contains a set of plugins that have been verified by Telerik. 
 * [`npmjs` and search for `nativescript`](https://www.npmjs.com/search?q=nativescript), which contains a much bigger list of community-written plugins for NativeScript.

Let's learn how to add an npm module.

<h4 class="exercise-start">
    <b>Exercise</b>: Installing a NativeScript plugin from npm
</h4>

The usual way to add an npm module would be to call `npm i module-name`, however when it comes to installing NativeScript-specific plugins it is better to call `tns plugin add module-name`. That is because `tns plugin add` will do all that `npm install` does plus it configures any native dependencies that the plugin may need to use. This might include installing additional native iOS and/or components.

Let's add the [appinfo plugin](https://www.npmjs.com/package/nativescript-appinfo), which will allow us to get info like the `version name`, `build number` and `app ID`.

Run the following CLI command:
```
tns plugin add nativescript-appinfo
```

Once you run this command you should be able to see the `nativescript-appinfo` module inside the `node_modules` folder and also the dependency to the module should be added to the `package.json` at the root of the project (not the one in the `app` folder)

Now let's try to use the `nativescript-appinfo` module.

Open `app.component.ts` and add the following line to the top of the file (or anywhere before `@Component` starts):

``` TypeScript
var appinfo = require("nativescript-appinfo");
```

This will give us access to the appinfo module in this area of code.

Now we can call the `appinfo` instance to get some app information. Add the following piece of code inside the `onTap()` function:

``` TypeScript
appinfo.getAppId()
    .then((id) => {
        alert("Your app's id is: " + id);
    });
```

Now build the app and see what happens when you tap the button.

As a bonus exercise: run this app in the `debug mode` and add a break point at `getAppId()` and try to step in to `getAppId()` function to see what happens.

<div class="exercise-end"></div>

There are also visual modules that you could use in your app.

<h4 class="exercise-start">
    <b>Exercise</b>: Use ColorPicker
</h4>

For this exercise we will use `ColorPicker`, for more info go to [npmjs](https://www.npmjs.com/package/nativescript-color-picker).

First we need to import it nativescript-color-picker. To do so run the following command in the CLI:

```
tns plugin add nativescript-color-picker
```

Next open `app.components.ts` and add a couple of imports. One for the `ColorPicker` and the other for the `Color` component.

``` TypeScript
import { ColorPicker } from "nativescript-color-picker";
import { Color } from "color";
```

Then let's add few bits to the `AppComponent` class.
We need an instance of the `ColorPicker` and a `selectedColor` property.

``` TypeScript
private picker = new ColorPicker();
private selectedColor: Color = new Color("Red");
``` 

We also need a function that will show the `ColorPicker` and then passing the result to the `selectedColor`.

``` TypeScript
public showColorPicker() {
    this.picker.show('#3489db', 'ARGB')
        .then( (result: number) => {
            this.selectedColor = new Color(result);
        });
}
```

Finally add a Button to `app.component.html`, which will call `showColorPicker()` and also with a `backgroundColor` bound to `selectedColor`. 

``` XML
<Button
    text="ColorPicker Demo"
    (tap)="showColorPicker()"
    [backgroundColor]="selectedColor">
</Button>
```

Now build the app and enjoy the new plugin.

<div class="exercise-end"></div>


The final exercise is to use a UI Component which can be added in html by using its tag.

<h4 class="exercise-start">
    <b>Exercise</b>: Use DropDown
</h4>

For this exercise we will use [nativescript-drop-down](https://www.npmjs.com/package/nativescript-drop-down).
Let's add the plugin by calling 

```
tns plugin add nativescript-drop-down
```

Now in order to make the UI Compoent available in html we need to register it as an element.
This needs to be done in `main.ts`. We need to import `registerElement` function and then register the UI component we need.

The first parameter we pass in is the name we want to use for the component, in this case let's use `NSDropDown`.
The second parameter we pass is a callback that requires the UI component we want to use.

``` TypeScript
import { registerElement } from "nativescript-angular/element-registry";
registerElement("NSDropDown", () => require("nativescript-drop-down/drop-down").DropDown);
```

Next let's add the necessary bits to `app.component.ts`

``` TypeScript
public fruits: Array<string> = [
    "apple", "banana", "coconut", "date", "elderberry"
];

public selectedFruitIndex = 0;
public get selectedFruit() {
    return this.fruits[this.selectedFruitIndex];
}

public itemChanged(selectedIndex){
    this.selectedFruitIndex = selectedIndex;
}
```

And now we can use the new component in `app.component.html`. Notice how we use `NSDropDown`, as it is defined in `main.ts`.

``` XML
<Label [text]="selectedFruit"></Label>
<NSDropDown #fruitDropDown
    backroundColor="red"
    [items]="fruits"
    (selectedIndexChange)="itemChanged(fruitDropDown.selectedIndex)">
</NSDropDown>
```

Now build the app and enjoy.

<div class="exercise-end"></div>


### Managing `platforms` and `node_modules`

When you clone an existing NativeScript app from GitHub, the project will already contain a list of required npm modules (which you can view the `package.json` file) together with selected platforms (Android and/or iOS) it is designed to work for.

These will get automatically downloaded when you build the project, however until the modules get loaded TypeScript won't be able to provide you with the support for these modules.

The best thing to do at this stage is to call:
```
tns install
```
Which will download and configure all the required modules and platforms.

**Changing npm module version**

When you want to change the version of an npm module, just find it in `package.json` change the version to the one you need, then delete it from the `node_modules` folder and finally run `tns install`.

**Trouble shooting new npm installs not working as expected.**

Sometimes freshly installed modules with native dependencies don't seem to work.
This usually happens when you built your app once already. Then you add a new npm module (which requires native Android or iOS support). And you are trying to use the module and run the app again. 

The best thing to do is to either delete the `platforms` folder and rerun the build or you could use the CLI to help you with the task by calling `tns platform add` and then `remove`.
Just like this:

For Android:
```
tns platform remove android
tns platform add android
```

For iOS:
```
tns platform remove ios
tns platform add ios
```

### Creating a component with two-way binding

The final task will be to create a custom component with a two-way binding.
How many times do you get tired of creating a Label and a TextField to capture data?
How about we create a component that will contain both a Label and a TextField in one go.


Let's first scaffold the component.
<h4 class="exercise-start">
    <b>Exercise</b>: Scaffold LabelTextField.
</h4>

Create a new file called `label-text-field.ts` and add the following code. By now this code should be self explanatory.

``` TypeScript
import { Component, Input } from "@angular/core";

@Component({
    selector: "LabelTxt",
    template: `
    <StackLayout orientation="horizontal">
        <Label
            [text]="label"
            width="30%">
        </Label>
        <TextField #tf
            [text]="text"
            width="60%"></TextField>
    </StackLayout>
    `
})
export class LabelTextField {
    @Input() public label: string;
    @Input() public text: string;
}
```

Now let's register the component in `main.ts`.
First we need to import the new component.
Since `LabelTextField` is meant to provide two-way binding we also need to import `NativeScriptFormsModule`.

``` TypeScript
import { LabelTextField } from "./label-text-field";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
```

Next we need to add `LabelTextField` to declarations and `NativeScriptFormsModule` to imports.

Replace the current `@NgModule` with:

``` TypeScript
@NgModule({
    declarations: [AppComponent, FunLabel, LabelTextField],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, NativeScriptFormsModule],
})
```

Finally let's add the few `LabelTextFields` to the UI.
Add a couple of properties to the `AppComponent` class in `app.component.ts`: 

``` TypeScript
public name: string = "annonymous";
public telephone: string ="0123456789";
```

Open `app.components.html` and add the following code.
Note that our compenent uses `LabelTxt` tag.

``` XML
<LabelTxt
    label="Name"
    [text]="name">
</LabelTxt>
<LabelTxt
    label="Telephone"
    [text]="telephone">
</LabelTxt>

<FunLabel
    [line]="name">
</FunLabel>
<FunLabel
    [line]="telephone">
</FunLabel>
```

Build the app and you should be able to see a bunch of Labels with TextFields next to them, together with the FunLabels, which display the same value. However if you edit any of the TextFields the FunLabels won't get updated.

<div class="exercise-end"></div>

Now let's add two way binding on `TextField.text` property to `LabelTextField`.
Add the end of this exercise you will be able to use `LabelTextField` with `[(ngModel)]`.

<h4 class="exercise-start">
    <b>Exercise</b>: Implement ControlValueAccessor
</h4>

Open `label-text-field.ts`.

Let's start with adding the necessary imports.

``` TypeScript
import { Component, Input, Inject, Optional } from '@angular/core';
import { NgControl, ControlValueAccessor } from '@angular/forms';
```

Next we need to extend `LabelTextField` class so that it implements `ControlValueAccessor`.

``` TypeScript
export class LabelTextField implements ControlValueAccessor {
```

> At this point Visual Studio Code will complain that `writeValue` (it is called when the bound property is changed outside of this component), `registerOnChange` (it is called at the beginning to provide an onChange function) and `registerOnTouched` (it is called at the beginning to provide onTouched function) functions are missing. Also in order to use `LabelTextField` with `[(ngModel)]` we need to set up a value accessor in the constructor.

Update `LabelTextField` class to:

``` TypeScript
export class LabelTextField implements ControlValueAccessor {
    private _changeFn: any;

    @Input() public label: string;
    @Input() public text: string;

    constructor(@Inject(NgControl) @Optional() ngc: NgControl) {
        if (ngc) {
            ngc.valueAccessor = this;
        }
    }

    // Write a new value to the element.
    writeValue(obj: any): void {
        this.text = obj;
    }

    // Set the function to be called when the control receives a change event.
    registerOnChange(fn: any): void {
        this._changeFn = fn;
    }

    // Set the function to be called when the control receives a touch event.
    registerOnTouched(fn: any): void {
    }
}
```

At this point you should be able to update `LabelText` components in html to use `[(ngModel)]` instead of `[text]`, but still editing the `TextField` won't update the bound properties.
That is because we need to add change detection to the TextField -> Text.

We will do it in two steps.

1) Add the following function to `LabelTextField` class, which will call `_changeFn` (ngModel's onChanged function provided through `registerOnChange` ).

``` TypeScript
updateTextProperty(newText) {
    if (this._changeFn) {
        if (this.text + "" !== newText + "") {
            this._changeFn(newText);
        }
    }
}
```

2) Add `textChange` handler to TextField in the `template`, so that every time the user types something in the `TextField` this will call `updateTextProperty` and ultimately update `ngModel`.

``` XML
<TextField #tf
    [text]="text"
    (textChange)="updateTextProperty(tf.text)"
    width="60%">
</TextField>
```

Now let's just update `LabelTxt` in `app.component.html` to use `ngModel`

``` XML
<LabelTxt
    label="Name"
    [(ngModel)]="name">
</LabelTxt>
<LabelTxt
    label="Telephone"
    [(ngModel]="telephone">
</LabelTxt>
```

Build the app and enjoy.

<div class="exercise-end"></div>


<h4 class="exercise-start">
    <b>Bonus Exercise</b>: Derive TextField hint from label text property
</h4>

TextField has a `hint` property, which provides a hint to the user as to what they could type. Which you can you like this:

``` XML
<TextField #tf
    [text]="text"
    (textChange)="updateTextProperty(tf.text)"
    [hint]="label"
    width="60%">
</TextField>
```

Can you update `LabelTextField` so that it automatically takes value of `label` puts it to lower case and appends ... ?
For example if the `label` value is "Email" then the `hint` value should be `email...`.


<div class="solution-start"></div>

In order to solve this puzzle we need a property getter, which will return the transformed label value

``` TypeScript
public get simpleHint() {
    return this.label.toLowerCase() + "...";
}
```

And then bind `hint` of the `TextField` to `simplehint`

``` xml
<TextField #tf
    [text]="text"
    (textChange)="updateTextProperty(tf.text)"
    [hint]="simplehint"
    width="60%">
</TextField>
```

<div class="solution-end"></div>


<div class="exercise-end"></div>