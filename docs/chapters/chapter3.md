## The user interface

Now that you’ve gotten a feel for how NativeScript apps work, let’s shift our focus to the user interface. In our second hands-on workshop, you’ll learn about using UI components, styling them with CSS, and animating them with NativeScript’s robust animation library. In this workshop, we'll create an adorable Kitten Adoption app with a card interface.

### Adding UI components

<h4 class="exercise-start">
    <b>Exercise</b>: Create a new app
</h4>

Let's create a new NativeScript app for this workshop:

```
tns create WorkshopTwo --ng
```

Next, change directories into your new project:

```
cd WorkshopTwo
```

<div class="exercise-end"></div>

Open this new project up in Visual Studio Code (you can type `code .`).

First, let's take a look at the files we will need to work with. Notice in the `/app` folder of your project there is a file called `app.component.ts`. This is where you put the functions that are called by the front-end file, `app.component.html`.

Open <code>app.component.html</code> and delete everything there.

Start your app's livesyncing process on iOS by typing into the command line:

```
tns livesync ios --watch
```

For Android, we recommend using Genymotion; open Genymotion and start livesync by typing

```
tns livesync android --watch
```

Now, when you make changes to your code, your app will refresh in the emulator.

<h4 class="exercise-start">
    <b>Exercise</b>: Add your first UI element
</h4>

Native apps need native-looking controls. We will create a native ActionBar using XML markup. In `app.component.html`, put this line at the top:

``` XML
<ActionBar title="Adopt A Kitten!"></ActionBar>
```

<div class="exercise-end"></div>

Before we go further, we need some data that we can layout on the screen. Let's grab ten kitten images from [placekitten.com](http://placekitten.com) to have them ready to place on our app screen.

<blockquote>
    <p><strong>Note</strong>: If your iOS app complains about not being able to load insecure content, follow the instructions [here](https://www.thepolyglotdeveloper.com/2015/12/fix-ios-9-app-transport-security-issues-in-nativescript/) and rebuild your app by running `tns run ios`.</p>
</blockquote>

<h4 class="exercise-start">
    <b>Exercise</b>: Get some data ready
</h4>

We won't go into the details now of binding your data to UI as you'll cover this in the next workshop.

Open `app.component.ts` and delete everything there. Replace it with the code below:

``` TypeScript
import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    public kittens: Array<any>;
    public url: string;
    public counter:number = 200;

    constructor() {
        this.kittens = [];
        this.url = 'https://placekitten.com/200/';

        for (var i = 0; i < 10; i++) {
            this.counter++;
            this.kittens.push(this.url+this.counter);
        }
    }
}
```

We'll use this data in our layout in the next section.

<div class="exercise-end"></div>

### Types of layouts

There are five basic layouts offered by NativeScript that correspond to standard native ways of laying elements out onto a page: StackLayout, GridLayout, WrapLayout, DockLayout, and AbsoluteLayout. Let's take a look at these, and, as a bonus, a ListView.

<h4 class="exercise-start">
    <b>Exercise</b>: Experiment with layouts
</h4>

One of the simplest layouts is a StackLayout, which simply stacks elements on top of each other. Paste this code under the ActionBar: 

``` XML
<StackLayout horizontalAlignment="center">
    <Image [src]="kittens[0]" stretch="none"></Image>
    <Image [src]="kittens[1]" stretch="none"></Image>
    <Image [src]="kittens[2]" stretch="none"></Image>
</StackLayout>
```

If you want your content to simply wrap, use WrapLayout. Delete the StackLayout and replace it with this snippet:

``` XML
<WrapLayout>
    <Image src="https://placekitten.com/100/100" stretch="none"></Image>
    <Image src="https://placekitten.com/100/100" stretch="none"></Image>
    <Image src="https://placekitten.com/100/100" stretch="none"></Image>
    <Image src="https://placekitten.com/100/100" stretch="none"></Image>
    <Image src="https://placekitten.com/100/100" stretch="none"></Image>
    <Image src="https://placekitten.com/100/100" stretch="none"></Image>
    <Image src="https://placekitten.com/100/100" stretch="none"></Image>
    <Image src="https://placekitten.com/100/100" stretch="none"></Image>
    <Image src="https://placekitten.com/100/100" stretch="none"></Image>
    <Image src="https://placekitten.com/100/100" stretch="none"></Image>
</WrapLayout>
```

If you need to position your element in an exact spot, use AbsoluteLayout. Delete the WrapLayout and replace it with the following snippet:

``` XML
<AbsoluteLayout>
     <Image [src]="kittens[0]" left="100" top="100" width="200" height="200" ></Image>
</AbsoluteLayout>
```

Delete the AbsoluteLayout, and try a grid layout by replacing the AbsoluteLayout with the snippet below. You can have control over the format of your grid by tweaking the '*' values. Note the columns/rows vs col/row values.

``` XML
<GridLayout columns="*,*,*" rows="*,*,*,*">
    <Image [src]="kittens[0]" col="0" row="0" colSpan="2" rowSpan="2" stretch="aspectFill" class="img"></Image>
    <Image [src]="kittens[1]" col="2" row="0" stretch="aspectFill" class="img"></Image>
    <Image [src]="kittens[2]" col="2" row="1" stretch="aspectFill" class="img"></Image>
    <Image [src]="kittens[3]" col="0" row="2" stretch="aspectFill" class="img"></Image>
    <Image [src]="kittens[4]" col="1" row="2" stretch="aspectFill" class="img"></Image>
    <Image [src]="kittens[5]" col="2" row="2" rowSpan="2" stretch="aspectFill" class="img"></Image>
    <Image [src]="kittens[7]" col="0" row="3" colSpan="2" stretch="aspectFill" class="img"></Image>
</GridLayout>
```

If you need elements 'docked' onto the top, bottom, and/or sides of your app interface, try a DockLayout by overwriting the GridLayout with this snippet:

``` XML
<DockLayout>
    <Image dock="left" width="80" [src]="kittens[0]" stretch="aspectFill"></Image>
    <Image dock="top" height="80" [src]="kittens[1]" stretch="aspectFill"></Image>
    <Image dock="right" width="80" [src]="kittens[2]" stretch="aspectFill"></Image>
    <Image dock="bottom" height="80" [src]="kittens[3]" stretch="aspectFill"></Image>
    <Image [src]="kittens[4]" stretch="aspectFill"></Image>
</DockLayout>
```

<b>Bonus!</b> Finally, try a ListView by overwriting the DockLayout snippet with the snippet below. ListViews aren't a layout per se, but deserve to be tried out. This one has some fancy layouting with left and right alignment:

``` XML
<ListView [items]="kittens">
    <template let-item="item" let-odd="odd" let-even="even">
        <DockLayout>
            <Image [src]="item" width="50" height="50" dock="{{ odd ? 'left' : 'right' }}"></Image>
            <Label text="minou" textWrap="true" horizontalAlignment="{{ odd ? 'left' : 'right' }}"></Label>
        </DockLayout>
    </template>
</ListView>
```
<div class="exercise-end"></div>

You can mix and match layouts, and have full control over the way your app looks using proper layouting.

### Create a card layout

Now it's time to have some fun with creating a little functional layout for our kitten adoption app. We're going to create a card layout by combining StackLayout and WrapLayout.

<h4 class="exercise-start">
    <b>Exercise</b>: Place the kitten images in a scrolling StackLayout
</h4>

What happens if you just put an array of kitten images within a StackLayout?

In `app.component.html`, replace any code you have under the ActionBar with this snippet: 

``` XML
<StackLayout>
    <Image src="https://placekitten.com/300/300"></Image>
    <Image src="https://placekitten.com/300/300"></Image>
    <Image src="https://placekitten.com/300/300"></Image>
    <Image src="https://placekitten.com/300/300"></Image>
    <Image src="https://placekitten.com/300/300"></Image>
</StackLayout>
```

The images are stacked, but they don't scroll.

Nest your StackLayout into a ScrollView:

``` XML
<ScrollView>
  <StackLayout>
      <Image src="https://placekitten.com/300/300"></Image>
      <Image src="https://placekitten.com/300/300"></Image>
      <Image src="https://placekitten.com/300/300"></Image>
      <Image src="https://placekitten.com/300/300"></Image>
      <Image src="https://placekitten.com/300/300"></Image>
  </StackLayout> 
</ScrollView>
```

<div class="exercise-end"></div>

It's all fine to add images manually to an app, but any data-driven app will need to have data loaded dynamically. Let's get our StackLayout to loop, so we can start creating cards.

<h4 class="exercise-start">
    <b>Exercise</b>: Create the kitten cards
</h4>

In `app.component.html`, replace the current ScrollView with a layout that is generated dynamically:

``` XML
<ScrollView>
    <StackLayout *ngFor="let kitten of kittens">
       <Image [src]="kitten"></Image>
    </StackLayout>
</ScrollView>
```

<div class="exercise-end"></div>

Notice the actual images (there should be 10) aren't laid out in a loop. We need to nest our layout to do this.

<h4 class="exercise-start">
    <b>Exercise</b>: Dynamically layout the cards
</h4>

In `app.component.html`, replace the current ScrollView with a WrapLayout that will allow the StackLayout to loop.

``` XML
<ScrollView>
    <WrapLayout>
        <StackLayout *ngFor="let kitten of kittens">
           <Image [src]="kitten"></Image>
        </StackLayout>
    </WrapLayout>
</ScrollView>
```

This allows the layout to loop, but the cards don't look very good. Let's control the width of the cards by making their width a percentage and align them horizontally:

``` XML
<StackLayout width="40%" *ngFor="let kitten of kittens" horizontalAlignment="center">
```

Next, align the cards to the center by controlling the alignment of the WrapLayout:

``` XML
<WrapLayout horizontalAlignment="center">
```

Now we have a wrapping layout of cards dynamically loaded onto the screen!

The final thing we want to do to these cards is to add a caption underneath the image. Add a caption of your own under the image:

``` XML
<Label text="p'tit minou" horizontalAlignment="center" class="text"></Label>
```

<div class="exercise-end"></div>

<blockquote>
    <p><strong>CHALLENGE!</strong>: Can you find a nicer way to layout these cards? Experiment with GridLayouts and AbsoluteLayouts. Show us your results!</p>
</blockquote>

### Styling apps with CSS

The cards are laid out properly, but they don't look very good. Time to add some styles!

<h4 class="exercise-start">
    <b>Exercise</b>: Add some color
</h4>

Choose a pallette of color from [Coolors.co](http://coolors.co) or another pallette generator of your choice.

The style sheet in the `app` folder is automatically associated to your project by its naming convention, so we just have to edit it.

Delete everything in `app.css`. Add some color to the ActionBar and the Page background by adding a few styles to this file:

``` CSS
Page {
    background-color: #EBEBD3;
}

ActionBar {
    background-color: #083D77;
    color: #EBEBD3;
}
```

Style the card by adding a css class to the StackLayout in `app.component.html`:

``` XML
<StackLayout width="40%" *ngFor="let kitten of kittens" horizontalAlignment="center" class="card">
```

Finally, add styles to the card and its label by adding these styles to `app.css`:

``` CSS
.card {
    background-color: #DA4167;
    margin: 10;
    border-radius: 5;
}
.text {
    color: #EBEBD3;
}
```
<div class="exercise-end"></div>

Congratulations! With a bit of code, you've succesfully created a nice card interface!

### Creating robust animations

The more mobile app development you do, the more you realize that clean animations are not just a 'nice-to-have', they are a 'must-have'. Fortunately, NativeScript makes animating components really easy!

<h4 class="exercise-start">
    <b>Exercise</b>: Animate a card
</h4>

First, we need to pass through a reference to the card we want to animate, and we do that in the `app.component.html` XML by giving it an id and adding a function that will fire when we tap the card:

``` XML
<StackLayout (tap)="animate(card)" #card width="40%" *ngFor="let kitten of kittens" horizontalAlignment="center" class="card">
```

Next, open `app.component.ts` and import the Animation library at the top:

``` TypeScript
import { Animation } from "ui/animation";
```

Then, build out the `animate()` function. Add this function under the constructor:

``` TypeScript
animate(card) {
    card.animate({ opacity: 0 })
        .then(function () { return card.animate({ opacity: 1 }); })
        .then(function () { return card.animate({ translate: { x: 100, y: 100 } }); })
        .then(function () { return card.animate({ translate: { x: 0, y: 0 } }); })
        .then(function () { return card.animate({ scale: { x: 3, y: 3 } }); })
        .then(function () { return card.animate({ scale: { x: 1, y: 1 } }); })
        .then(function () { return card.animate({ rotate: 180 }); })
        .then(function () { return card.animate({ rotate: 0 }); })
        .then(function () {
        console.log("Animation finished");
    })
    .catch(function (e) {
        console.log(e.message);
    });
}
```

As you can see, we are chaining several animations together using promises. When one completes, the next fires. Test your animation by clicking a card.

<div class="exercise-end"></div>

<blockquote>
    <p><strong>CHALLENGE!</strong>: Create a different animation using the Animation library as documented here: [https://docs.nativescript.org/ui/animation](https://docs.nativescript.org/ui/animation)</p>
</blockquote>

Now, let's take a look at the other way of animating elements on the screen—by using CSS keyframe animation. Let's make the cards fade in during the page loading process. 

<h4 class="exercise-start">
    <b>Exercise</b>: Add a keyframe animation
</h4>

To do this, we simply need to tweak the CSS, so open `app.css` and add a `@keyframes` rule named `card`:

``` CSS
@keyframes card {
    from { opacity: 0 }
    to { opacity: 1}
}
```

Then, add these lines to the `.card` class:

``` CSS
animation-name: card;
animation-duration: 4s;
opacity: 0;
```

The app should refresh and the cards will fade in. 

<div class="exercise-end"></div>
