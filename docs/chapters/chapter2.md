### Project set up
`Instructions on how to clone the application.`

`Instructions how to run the project.`


## Lesson 1 - UI

In this lesson we are going to familiarise ourselves with some of the most commonly used UI components in NativeScript.

For this exercise we will use the contents of the `app/profile` folder, which already contains some pieces of the app that we need.

If you open `profile.component.ts` you will notice that our component has an attribute `profile` with some populated values. In the next few steps we will create a screen that will allow us to display and edit these values.

Here are some examples of UI components:

``` html
<Label text="name"></Label>
<TextField hint="your name here" text="Jack"></TextField>
<Switch checked="true"></Switch>
<DatePicker [day]="2" [month]="2" [year]="2002"></DatePicker>
<Slider [minValue]="0" [maxValue]="10" [value]="3"></Slider>
<Button text="Do Something" (tap)="clear()"></Button>
```

### Attribute binding

The above example uses hardcoded values, but you can also use one way binding (with `[]` around the attribute you want to bind to) to display the values in the profile.

For example:

``` html
<Label [text]="profile.name"></Label>
<TextField [text]="profile.name" hint="name"></TextField>
```

### Events

Also to attach to a component's event like: `tab`, `doubleTap`, `pinch`, `pan`, `swipe`, `rotation`, `longPress`, `touch`, just use the `(eventName)` notation.

For example:

``` html
<StackLayout (longPress)="clearForm()">
  <Label text="Action:" (swipe)="printDirection($event)"></Label>
  <Button text="Do Something" (tap)="doSomething()"></Button>
</StackLayout>
```

<h4 class="exercise-start">
  <b>Exercise</b>: Use Label, TextField, Switch, DatePicker, Slider, Button
</h4>

Recreate the below UI and bind the input components to the profile attributes.
Additionally, make sure that the two buttons call `save()` and `clear()` respectively.

<b>HINT</b> To make a TextField password friendly just use `secure="true"`.


<!--![Recreate UI](https://github.com/NativeScript/workshop/blob/gh-pages/images/warmup-01.png?raw=true)-->
![Recreate UI](http://127.0.0.1:4000/images/warmup-01.png?raw=true)

Edit `profile.component.html` and have fun.

<div class="solution-start"></div>

``` html
<ActionBar title="Profile" class="action-bar">
</ActionBar>

<StackLayout>
  <Label text="Name:"></Label>
  <TextField
    [text]="profile.name"
    hint="name">
  </TextField>

  <Label text="Password:"></Label>
  <TextField
    [text]="profile.password"
    hint="password"
    secure="true">
  </TextField>

  <Label text="Angular Pro:"></Label>
  <Switch
    [checked]="profile.angularPro"
    class="switch">
  </Switch>

  <Label text="Date of Birth:"></Label>
  <DatePicker 
    [day]="profile.dob.getDate()"
    [month]="profile.dob.getMonth()+1"
    [year]="profile.dob.getYear() + 1900">
  </DatePicker>
  
  <Label text="Coding power:"></Label>
  <Slider
    [value]="profile.codingPower"
    [minValue]="0"
    [maxValue]="10"
    class="slider">
  </Slider>

  <Button text="Save" (tap)="save()"></Button>
  <Button text="Clear" (tap)="clear()"></Button>
</StackLayout>
```

<div class="solution-end"></div>

<div class="exercise-end"></div>

<!--#### Two way binding with [(ngModel)]=”name” -> including the required changes to app.module.ts-->
One way binding is not particularly useful for input forms. This is where `[(ngModel)]` comes in handy.
Each of the input components you used a moment ago, allows you to use `[(ngModel)]` to configure two-way binding. Just like this:

``` html
<TextField [(ngModel)]="email" hint="your name here"></TextField>
<Switch [(ngModel)]="optIn"></Switch>
<DatePicker [(ngModel)]="dob"></DatePicker>
<Slider [(ngModel)]="size" [minValue]="0" [maxValue]="10"></Slider>
```

However before you use `[(ngModel)]` in your app, you need to `NativeScriptFormsModule` to `@NgModule` => `imports`


<h4 class="exercise-start">
    <b>Exercise</b>: Two-way binding
</h4>

#### Step 1

Open `app.modules.ts` and import `NativeScriptFormsModule`

``` html
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
```

Then add it to `@NgModule` imports:

``` html
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        NativeScriptFormsModule
    ],
```


#### Step 2

Update all input components to use two-way binding.
Test it with clear() and save() to see what happens.

<b>HINT</b> To keep an eye on the slider value, just print it in the label above it, like:

``` html
<Label [text]="'Coding power:' + profile.codingPower"></Label>
```

<div class="solution-start"></div>

``` html
<ActionBar title="Profile" class="action-bar">
</ActionBar>

<StackLayout>
  <Label text="Name:"></Label>
  <TextField
    [(ngModel)]="profile.name"
    hint="name">
  </TextField>

  <Label text="Password:"></Label>
  <TextField
    [text]="profile.password"
    hint="password"
    secure="true">
  </TextField>

  <Label [text]="'Angular Pro: ' + ((profile.angularPro) ? 'Yes': 'No')"></Label>
  <Switch
    [(ngModel)]="profile.angularPro"
    class="switch">
  </Switch>

  <Label [text]="'Date of Birth: ' + profile.dob.toLocaleDateString()"></Label>
  <DatePicker
    [(ngModel)]="profile.dob">
  </DatePicker>
  
  <Label [text]="'Coding power:' + profile.codingPower"></Label>
  <Slider
    [(ngModel)]="profile.codingPower"
    [minValue]="0"
    [maxValue]="10">
  </Slider>
  
  <Button text="Save" (tap)="save()"></Button>
  <Button text="Clear" (tap)="clear()"></Button>
</StackLayout>
```

<div class="solution-end"></div>

<div class="exercise-end"></div>



<!--#### Changing themes and using theme attributes-->
<!--#### Basic css animations-->

### Theme

Now that we have the profile page doing something `sort of` useful ;)
Let's make it look a little bit better.

The good news is that NativeScript comes with a buncho of built in `Themes`.
![Color Schemes](http://docs.nativescript.org/img/theme/color-schemes-all.png)

Most of the standard UI components come with styles that you can use for a really quick styling improvements.


#### Text based components can use:

 * `text-primary`, `text-muted`, `text-danger` to change the text color,
 * `text-center`, `text-left`, `text-right` to change the alignment of the text,
 * `text-lowercase`, `text-uppercase`, `text-capitalize` to apply text transformation

For example:

``` html
<Label text="Name" class="text-primary text-right"></Label>
<Label text="Email" class="text-danger"></Label>
```

#### Buttons can use:

 * `btn`, `btn-primary`, `btn-outline`, `btn-active` - to change the general style
 * `btn-rounded-sm` and `btn-rounded-lg` - to make the buttons rounded
 * `btn-blue`, `btn-brown`, `btn-forest`, `btn-grey`, `btn-lemon`, `btn-lime`, `btn-ruby`, `btn-sky` - to change the primary color (this only works in conjunction with `btn-primary`) 

For example:

``` html
<Button text="Primary" class="btn btn-primary"></Button>
<Button text="Outline" class="btn btn-outline"></Button>
<Button text="Orange" class="btn btn-primary btn-ornage"></Button>
<Button text="Rounded Grey" class="btn btn-primary btn-grey btn-rounded-sm"></Button>
```

<!--![Recreate UI](https://github.com/NativeScript/workshop/blob/gh-pages/images/warmup-theme-01.png?raw=true)-->
![Recreate UI](http://127.0.0.1:4000/images/warmup-theme-01.png?raw=true)


#### Other components can use

 * `action` - for the default `<Slider>` styling
 * `slider` - for the default `<Slider>` styling
 * `action-bar` - for the default `<ActionBar>` styling

#### Margins and padding

You can use predefined styles for margins and padding.
Use `m` for margin and `p` for padding. Then optionaly add:

 * `-t`: top
 * `-b`: bottom
 * `-l`: left
 * `-r`: right
 * `-x`: horizontal (i.e. both left and right)
 * `-y`: vertical (i.e. both top and bottom)

Finally add the size: `0`, `2`, `4`, `5`, `8`, `10`, `12`, `15`, `16`, `20`, `24`, `25`, `28`, `30`

For example:

``` html
<StackLayout class="m-x-10 p-5">
  <Label text="name" class="m-l-10"></Label>
  <Button text="Go" class="btn btn-primary p-20"></Button>
</StackLayout>
```

#### To read more about themes
Go to [NativeScript theme docs](https://docs.nativescript.org/ui/theme)


<h4 class="exercise-start">
  <b>Exercise</b>: NativeScript Theme
</h4>

#### Step 1

Update the UI to make it look more like the one in the picture below.

<!--![Recreate UI](https://github.com/NativeScript/workshop/blob/gh-pages/images/warmup-02.png?raw=true)-->
![Recreate UI](http://127.0.0.1:4000/images/warmup-02.png?raw=true)

<b>HINT</b> You may need to update the margin on the `StackLayout`, so that the UI components don't stay too close to the edge of the screen.

<div class="solution-start"></div>

``` html
<ActionBar title="Profile" class="action-bar">
</ActionBar>
  
<StackLayout class="form m-l-5">
  <Label text="Name:" class="text-primary"></Label>
  <TextField
    [(ngModel)]="profile.name"
    hint="name">
  </TextField>

  <Label text="Password:" class="text-primary"></Label>
  <TextField
    [text]="profile.password"
    hint="password"
    secure="true">
  </TextField>

  <Label [text]="'Angular Pro: ' + ((profile.angularPro) ? 'Yes': 'No')" class="text-primary"></Label>
  <Switch
    [(ngModel)]="profile.angularPro"
    class="switch"
    horizontalAlignment="left">
  </Switch>

  <Label [text]="'Date of Birth: ' + profile.dob.toLocaleDateString()" class="text-primary"></Label>
  <DatePicker
    [(ngModel)]="profile.dob">
  </DatePicker>
  
  <Label [text]="'Coding power:' + profile.codingPower" class="text-primary" [class.zoom]="profile.codingPower > 7"></Label>
  <Slider
    [(ngModel)]="profile.codingPower"
    [minValue]="0"
    [maxValue]="10"
    class="slider"
    [class.danger-slider]="profile.codingPower > 7">
  </Slider>

  <Button text="Save" (tap)="save()" class="btn btn-primary"></Button>
  <Button text="Clear" (tap)="clear()" class="btn btn-outline"></Button>
</StackLayout>
```

<div class="solution-end"></div>

#### Step 2

Open `app.css` and change the imported style to each of the values below and see which one you like the most:

 * `aqua.css`
 * `blue.css`
 * `brown.css`
 * `core.dark.css`
 * `core.light.css`
 * `forest.css`
 * `grey.css`
 * `lemon.css`
 * `lime.css`
 * `orange.css`
 * `purple.css`
 * `ruby.css`
 * `sky.css`

<div class="exercise-end"></div>


### Animations 

<h4 class="exercise-start">
  <b>Exercise</b>: Animations
</h4>
Instruction of the exercise

<div class="solution-start"></div>


``` html
  <Label [text]="'Coding power:' + profile.codingPower" class="text-primary" [class.zoom]="profile.codingPower > 7"></Label>
  <Slider
    [(ngModel)]="profile.codingPower"
    [minValue]="0"
    [maxValue]="10"
    class="slider"
    [class.danger-slider]="profile.codingPower > 7">
  </Slider>
```

``` css
.danger-slider {
  background-color: red;
}

.zoom {
  animation-name: zoom;
  animation-duration: 2s;
}

@keyframes zoom {
  from { transform: scale(0.5, 0.5) }
  40% { transform: scale(1.6, 1.6) }
  to {  transform: scale(1.0,1.0) }
}

@keyframes spin {
  from { transform: rotate(-30) }
  40% { transform: rotate(420) }
  to {  transform: rotate(0)}
}
```

<div class="solution-end"></div>

<div class="exercise-end"></div>



### Create your own theme ???
(Bonus exercise) - This to be covered by Jen
Build your own theme at [NativeScript theme builder](http://www.nativescriptthemebuilder.com/#)

--- Do we need instructions on how to do this? ---



