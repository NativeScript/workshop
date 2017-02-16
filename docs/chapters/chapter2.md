## The basics

For our first hands-on workshop, you’ll learn how to build and manage NativeScript apps, as well as how to make simple changes and debug your code.

### How the CLI works
The CLI allows you to perform various tasks from creating a new project, to building an app, to importing plugins, and a whole lot more. All the CLI commands start with a prefix `tns`.

<h4 class="exercise-start">
    <b>Exercise</b>: Create your first project
</h4>

Open your terminal (Mac) or command-line console (Windows) and navigate to the folder where you want to create your first project. Now run the following command:
```
tns create WorkshopOne --ng
```

`WorkshopOne` is the name of the project, while `--ng` tells the CLI to create an ng2 type of project.

When complete, navigate into the created project folder:

```
cd WorkshopOne
```

<div class="exercise-end"></div>


At this point we have a hello world type of project, with a bit of simple logic.
Now we need to add the platforms for which we want to build this app.

<h4 class="exercise-start">
    <b>Exercise</b>: Adding mobile platforms
</h4>

To add Android to your project run:

```
tns platform add android
```

If you’re on a Mac, add iOS with

```
tns platform add ios
```

<div class="exercise-end"></div>


Now we will learn how to build and run your apps.

<h4 class="exercise-start">
    <b>Exercise</b>: Running the app
</h4>

To build an Android app, and run it on a connected device or Genymotion instance, call: 
```
tns run android
```

However, if you want to run the app in an emulator you should call
```
tns run android --emulator
```

The same applies to building and running iOS apps—just swap `android` for `ios`
```
tns run ios --emulator
```

> Note: If you want to stop the build process just press `CTRL+C`.

<div class="exercise-end"></div>


Sometimes waiting for the build process can take some time, especially when you need to rebuild the app every time you make a tiny change to the code.

This is why the CLI has the `livesync` command, which allows you to build the app in a way that whenever you make a change in your code the app will get refreshed really quickly.

To make it more insteresting, if you make a change to your TypeScript code, the CLI will transpile it to JavaScript first, and then refresh the app.

<h4 class="exercise-start">
    <b>Exercise</b>: Livesync
</h4>

Build your app using the `livesync` command and then open your `app.css` file, such as adding `color: red` to the `.title` selector, and save the file.

> Note: You’ll need to stop the previous `run` command with `CTRL+C`.

```
tns livesync android --watch
```

or 
```
tns livesync ios --emulator --watch
```

<div class="exercise-end"></div>

<!--
<h4 class="exercise-start">
    <b>Exercise</b>: Debugging
</h4>

Build your app in debug mode using the following command.
This should launch debugging tools for you. Once that is ready find app.component.js add a breakpoint to `onTap()` then tap on the button and try to explore what you can do with it.

```
tns debug android
```

or
```
tns debug ios --emulator
```

You probably noticed that when you debug your app, the debugging tools operate on JavaScript, not TypeScript. This is because NativeScript runs on JavaScript code, which is transpiled from TypeScript.

Here is an interesting thing. Launching a debugger is a very slow process, but yet again `livesync` comes in to save the day.
You can run the debugger in the livesync mode by adding `--watch` at the end of the command, like this:

```
tns debug android --watch
```

or

```
tns debug ios --watch --emulator
```

<div class="exercise-end"></div>
-->

### NativeScript folder structure

At the root of the project we have `package.json`, which contains all npm dependencies and project configuration.
This is where you can change the id of the project or the app version.

On top of that NativeScript project is made of a number of folders, however you should mainly pay attention to 3 of them.

** the `app` folder** 
This is where the code of the application goes.

Some of the most notable files here are:
 * `main.ts` - is where the application starts. It is also the file where you can initialize the routing configuration for page navigation.
 * `app.css` - is the global css file, the styling contained here is applied accross the whole of the application
 * `app.component.ts` - by default it contains the first angular component that gets loaded when you run the app, however most apps that you will work on will probably use a different component as the starting one.  
 * `App_Resources` - this folder contains platform-specific files, such as icons, splash screens, and Android and iOS configuration files.

**the `node_modules` folder**

This folder contains all npm modules specified in the `package.json`.

This folder can be easily regenerated, this means that you can safely delete it whenever you feel like.

You should also refrain from pushing the folder into git or any source control.

**the `platforms` folder**

This is the build folder for each of your platforms.

Just like the `node_modules` folder, this folder can be regenerated at will, so you should never add it to your source control.

### Working in Visual Studio Code
There are a number of IDEs that you might be used to work with, however for the purpose of this workshop we will focus on working with VS Code, which has a lot of really good features that can help you build NativeScript apps.

<h4 class="exercise-start">
    <b>Exercise</b>: Setting up the IDE
</h4>

Download Visual Studio Code [from its official download page](https://code.visualstudio.com/download) and install it.

Now we will add NativeScript extensions to Visual Studio Code.
Just run VS Code and go to the Extensions tab (on Cac press `shift` + `command` + `x` on windows press `shift` + `ctrl` + `x`). 
From here search for 'nativescript', once the search returns reults install `NativeScript` and `NativeScript + Angular 2 Snippets`.

![Search result and install](https://github.com/NativeScript/developer-day-workshop/blob/gh-pages/images/vscode-nsext-install.png?raw=true)

Installing each them shouldn't take too long, once ready you will be prompted to enable the extensions, just click on “enable” next to one of the modules, which will restart VS Code and you will be ready to go.

![Search result and install](https://github.com/NativeScript/developer-day-workshop/blob/gh-pages/images/vscode-nsext-enable.png?raw=true)

<div class="exercise-end"></div>

Now that VS Code is ready, let's see how it can be of service.
We will start by playing with code snippets.

<h4 class="exercise-start">
    <b>Exercise</b>: Using code snippets
</h4>

First open the `WorkshopOne` project folder in VS Code by using `File` -> `Open`.
Then find `app\app.component.html` (this file contains the UI definition of app.component).

Add a new line just before the closing `</StackLayout>` tag and start typing `ns` immediately you will get a list of available snippets. If you keep typing the list of available snippets will narrow down.

When you select one of the snippets and hit `enter` the text you were typing will be replaced with a snippet. Some snippets will have more than one place where you can type, you can `tab` through them.

For this exercise add the following components using code snippets.
 * Label with the `text` set to `Email:` -> `nslabel `
 * TextField with the `hint` set to `email...` -> `nstextfield`
 * Label with the `text` set to `Passowrd` -> `nslabel`
 * TextField with the `hint` set to `password...` -> `nstextfield`
 * Button with the `text` set `Sign In` and `tap` set to `signIn()` -> `nsbtn`

![Creating login screen](https://github.com/NativeScript/developer-day-workshop/blob/gh-pages/images/vscode-using-snippets.gif?raw=true)

Try to add the snippets on your own, but if you need help show the solution below.

<div class="solution-start"></div>

``` XML
<Label [text]="message" class="message" textWrap="true"></Label>
<Label text="Email:" textWrap="true"></Label>
<TextField hint="email..." text=""></TextField>
<Label text="Password:" textWrap="true"></Label>
<TextField hint="password..." text=""></TextField>
<Button text="Sign In" (tap)="signIn()"></Button>
```
<div class="solution-end"></div>

Now open `app.component.ts` and add the following function to the `AppComponent` class:
``` TypeScript
public signIn() {
    alert("NativeScript is great");
}
```

When done, run the app and see what you got.

<div class="exercise-end"></div>

<!--

You can also create your own snippets.

<h4 class="exercise-start">
    <b>Bonus Exercise</b>: Create your own snippet 
</h4>

Open the `User Snippets` editor and select `TypeScript`.

On a Mac: `Code->Preferences->User Snippets`

![User Snippets on Mac](https://github.com/NativeScript/developer-day-workshop/blob/gh-pages/images/vscode-snippets-mac.png?raw=true) 

On Windows: `File->Preferences->User Snippets`

![User Snippets on](https://github.com/NativeScript/developer-day-workshop/blob/gh-pages/images/vscode-snippets-win.png?raw=true) 

Now add the following snippet
``` TypeScript
"shorthand for console.log": {
    "prefix": "tsprint",
    "body": [
        "console.log('${text}')",
        "$2"
    ]
}
```

This snippet will serve us as a shorthand for `console.log`, you can trigger it by expanding `tsprint` in your TypeScript code.

In `app.component.ts` go to `onTap` function and start typing `tsp` and press `Enter`.
Straight away the cursor will be placed on top of the `text` placeholder. Change it to `hello` and press `tab` which will take you to the new line (`$2`);

You can learn more about VS Code snippets [here](https://code.visualstudio.com/docs/customization/userdefinedsnippets)

<div class="exercise-end"></div>


VS Code can be really helpful with code prediction when you try to work your TypeScript magic.
The Intellisense not only knows about the attributes and functions of your current class, but it can also help you with code predition for any TypeScript based module you use.


You can enhance your Intellisense experience by adding comments to your functions
<h4 class="exercise-start">
    <b>Bonus Exercise</b>: Add Intellisense friendly comments
</h4>

Add the following function at the bottom of `app.componenents.ts` (outside the `AppComponent` class).
``` TypeScript
/**
 * Prints the provided text in uppercase
 * @param text text to be printed 
 */
function largePrint(text: string) {
    console.log(text.toUpperCase());
}
```

Now you can use the `largePrint` function, which will provide you with the description of the function and its parameter. 

<div class="exercise-end"></div>
-->

VS Code also provides support for debugging NativeScript code, and to make it even more interesting, the extension also lets you debug directly in TypeScript. 

<h4 class="exercise-start">
    <b>Exercise</b>: Debugging in VS Code
</h4>

Open the debug tab - click the debug icon on the left-hand side: ![Debug View icon](https://github.com/NativeScript/developer-day-workshop/blob/gh-pages/images/vscode-icon-debug.png?raw=true)

From here press the little gear icon to `Select the build environment` and choose `NativeScript`
![Select the build environment icon](https://github.com/NativeScript/developer-day-workshop/blob/gh-pages/images/vscode-icon-gear.png?raw=true)

When the IDE is ready, click on the drop down next to the gear icon and select:
`Attach on Android` or `Attach on iOS` and press the green play button.

This might take a minute or two, especially when you run it for the first time.

> **NOTE**: If the debugger detaches after the app started, re-select `Attach on iOS` and press play. This should fix the problem.

As part of this exercise open `app.component.ts` and add a breakpoint to the `onTap` function by clicking to the left of the line number where you’d like to add the breakpoint. And then tap on the tap button in your app.
The debugger should stop at your breakpoint.

Here is how I did it:
![Using the debugger in VS Code](https://github.com/NativeScript/developer-day-workshop/blob/gh-pages/images/vscode-configure-debugger.gif?raw=true)

When you are in debug mode you can:
 * hover over variables to check their value or add them to the watch list
 * step in or step over the code
 * use the `Debug Console` on the bottom of the screen to run commands or read/edit variables.

 Try to change the value of the `counter` by running the following command in the `Debug Console`.
 ``` TypeScript
 this.counter = 100;
 ```

<div class="exercise-end"></div>

