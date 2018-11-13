## What is NativeScript?

Below please find slides describing NativeScript:

* [Download the _Introduction to NativeScript_ slides](https://github.com/NativeScript/workshop/blob/master/Introduction.pptx)

### The NativeScript CLI

Now that you have the basics down, let’s look at how to actually build NativeScript apps.

<h4 class="exercise-start">
    <b>Exercise 1</b>: Creating an app
</h4>

Navigate to a folder you’d like to store apps in as you go through this workshop, and then run the following two commands.

```
tns create HelloWorld --ng
cd HelloWorld
```

<div class="exercise-end"></div>

<h4 class="exercise-start">
    <b>Exercise 2</b>: Running your app
</h4>

You can use the `tns preview` command to run NativeScript apps in the {N} Companion apps.
For Android, you can download the apps from:

 * [Google Play - {N} Playground](https://play.google.com/store/apps/details?id=org.nativescript.play&hl=en)
 * [Google Play - {N} Preview](https://play.google.com/store/apps/details?id=org.nativescript.preview&hl=en)

For iOS, you can download the apps from:

 * [iTunes - {N} Playground](https://itunes.apple.com/us/app/nativescript-playground/id1263543946?mt=8)
 * [iTunes - {N} Preview](https://itunes.apple.com/us/app/nativescript-preview/id1264484702?mt=8)


Alternatively, you can perform the builds locally. To do so, use the `tns run` command to run NativeScript apps. If you’d like to complete this workshop on iOS, run the following command.

```
tns run ios
```

And if you’d like to complete this workshop on Android, run the following command instead.

```
tns run android
```

<div class="exercise-end"></div>

<h4 class="exercise-start">
    <b>Exercise 3</b>: Making some changes
</h4>

Open your `app/item/items.component.html` file and change the `title` attribute of the `<ActionBar>`.

<div class="exercise-end"></div>

### Debugging NativeScript apps

Together we’ll go through [the instructions to debug NativeScript apps in Visual Studio Code](https://docs.nativescript.org/tooling/visual-studio-code-extension#debugging).