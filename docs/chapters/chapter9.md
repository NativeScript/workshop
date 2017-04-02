## App Challenge Part 3 - Setting up a Form

With a master/detail interface complete, your app is almost ready to go. Your next step is to remove your hardcoded data, and let users filter and find exactly the pet they’re looking for.

### What you’re building

In the third and final part of this challenge you’ll be building a third screen for your app. The app will be the new starting screen of your app, and will look something like the screenshot below.

![](images/chapter9/0.png?raw=true)

### Building the form

There are many different ways you can implement the filters that help users find specific pets. As a first step, start with a `<TextField>` for accepting a user’s location, and a `<SegmentedBar>` for allowing the user to choose between dogs and cats. Your task will then be passing that data from the form to the list page, so that the filters can be sent to the Petfinder API.

Here are the specific things you need to do.

### Requirements

* **1**: Build a form that allows the user to input the following data
    * Pet type: “dog” or “cat”
    * Location: Free-form text
* **2**: Pass that data to your list screen, and only show pets that match the user-selected filters.

If you have extra time, there are a lot more filters you might want to implement. Check out the list of values in [`search-options.ts`](NativeScriptFhttps://github.com/NativeScript/workshop/blob/master/demo/app/models/search-options.tsormsModule) for a full list of values you can pass to the Petfinder API.

### Tips

#### Tip #1: NativeScriptFormsModule

Since your app now has a form, you need to include the following import in your `app.module.ts` file.

```
import { NativeScriptFormsModule } from "nativescript-angular/forms";
```

And then include `NativeScriptFormsModule` in the `imports` array of your main `NgModule`.

#### Tip #2: SegmentedBar

The easiest way to implement radio-button-like controls in native apps is with SegmentedBars. [Here are the docs on how to use them in NativeScript](https://docs.nativescript.org/angular/code-samples/ui/segmented-bar.html)