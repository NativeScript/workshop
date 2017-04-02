## App Challenge Part 1 - Build a List

Now that you’ve got the NativeScript basics down, it’s time to put your skills to the test. Your task in the next three chapters is to build an entire NativeScript app from scratch.

### What you’re building

So what are you building? The ultimate app for finding pets of all shapes and sizes—FurFriendster! At the end of the day you’ll have an app that looks something like this.

![](images/chapter7/0.png?raw=true)
![](images/chapter7/1.png?raw=true)
![](images/chapter7/2.png?raw=true)
![](images/chapter7/3.png?raw=true)

Don’t get too overwhelmed the scope of this app as you’ll be building it one step at a time. Let’s start by building the list page.

### Building the list

Let’s get started building by starting a new project.

<h4 class="exercise-start">
  <b>Exercise</b>: Create FurFriendster
</h4>

Navigate to a folder where you’d like your new project to live in your file system, and run the following command.

```
tns create FurFriendster --ng
```

After that completes, `cd` into your newly created project.

```
cd FurFriendster
```

<div class="exercise-end"></div>

Your task for the first part of building this app is to create a big list of pets. Specifically, you’ll want your UI to look something like this.

![](images/chapter7/1.png?raw=true)

For the most part you will be building this app on your own without any copy-and-paste guidance from us, but we are going to provide a few things.

<h4 class="exercise-start">
  <b>Exercise</b>: Get the starting files
</h4>

FurFriendster is driven by the [Petfinder API](https://www.petfinder.com/developers/api-docs), and we have a pre-configured Angular service and a few model objects you can use to get the data you need. To install it run the following command:

```
npm i petfinder-angular-service --save
```

Alternatively (if npm install doesn't work) you can open the `workshop` folder you’ve been working in today, and find its child `app-challenge-files` folder. Next, copy every file and folder in `app-challenge-files`, and paste them into your new `FurFriendster` app.

<div class="exercise-end"></div>

Eventually in this workshop you’ll allow users to filter which types of pets they’d like to see on the list page, but for now you’ll need to hardcode some really basic animal data.

On your list page you’ll need to call your new service’s `findPets()` method. Here is some data you can pass in for testing.

```
findPets("10001", {    // 10001 is the US zip code for New York City
  age: "",
  animal: "bird",      // you can replace this with "cat", "dog", etc
  breed: "",
  sex: "",
  size: ""
});
```

So now it’s time to get building. Here are your requirements for this part of the workshop.

### Requirements

* **1**: Show the list of pets returned from `findPets` using a `<ListView>` UI component.
* **2**: Each entry in the `<ListView>` should display the pet’s name and its image.

From there it’s up to you. Feel free to implement the design we show in this section’s screenshots, or to build something unique. If you get stuck here are a few tips you can refer to.

### Tips

#### Tip #1: ListView

The NativeScript ListView documentation is available at <https://docs.nativescript.org/angular/ui/list-view.html>.

<h4 class="exercise-start">
  Setup your List
</h4>

Make sure to start work in `app.module.ts`. You will need to import the NativeScriptHttpModule:

```
import { NativeScriptHttpModule } from "nativescript-angular/http";
```
and include that in `imports`. 

Likewise, import your petfinder service that you installed from npm:

```
import { PetFinderService } from "petfinder-angular-service";
```

and include it in your Providers. 

Then, start your work in `items.component.ts` by importing the petfinder service and pet model. 

Change `items` to `pets` and edit ngOnInit() with the new service call, returning a promise:

```
this.petService.findPets("10001", {
  age: "",
  animal: "bird",
  breed: "",
  sex: "",
  size: ""
})
.then(pets => this.pets = pets)
```

Then, get to work on the `items.component.html` file, editing the ListView to display the pets.

<div class="exercise-end"></div> 

#### Tip #2: Images

Our service provides a convenience method for accessing the appropriate pet images. You can bind an `<Image>` tag using the following code.

```
[src]="item.media.getFirstImage(2, 'res://icon')"
```
<h4 class="exercise-start">
  Help loading external images
</h4>

> Note: You may encounter an error when loading images from external sources on iOS. To fix this, add the following code right under the initial `<dict>` key in `App_Resources/iOS/Info.plist`:

```
<key>NSAppTransportSecurity</key>
<dict>
  <key>NSExceptionDomains</key>
  <dict>
    <key>photos.petfinder.com</key>
    <dict>
      <key>NSExceptionAllowsInsecureHTTPLoads</key>
      <true/>
      <key>NSIncludesSubdomains</key>
      <true/>
    </dict>
  </dict>
</dict>
```

> **Hint**: use a GridLayout within your ListView template to layout the image next to the label. 

<div class="exercise-end"></div>

#### Tip #3: Styling

The NativeScript core theme has a few CSS class names for displaying thumbnail images. Check out <https://docs.nativescript.org/ui/theme#listviews> for details.
