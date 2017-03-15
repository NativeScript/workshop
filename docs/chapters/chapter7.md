## App Challenge Part 1 - Build a List

Now that you’ve got the NativeScript basics down, it’s time to put your skills to the test. Your task in the next three chapters is to build an entire NativeScript app from scratch.

### What you’re building

So what are you building? The ultimate app for finding pets of all shapes and sizes—FurFriendster! At the end of the day you’ll have an app that looks something like this.

![](/images/chapter7/0.png)
![](/images/chapter7/1.png)
![](/images/chapter7/2.png)

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

<div class="exercise-end"></div>

Your task for the first part of building this app is to create a big list of pets. Specifically, you’ll want your UI to look something like this.

![](/images/chapter7/1.png)

For the most part you will be building this app on your own without any copy-and-paste guidance from us, but we are going to provide one thing.

<h4 class="exercise-start">
  <b>Exercise</b>: Create the app’s service
</h4>

FurFriendster is driven by the [Petfinder API](https://www.petfinder.com/developers/api-docs), and we have a preconfigured Angular service you can use to get the data you need.

Create a file somewhere in your app named `pet-finder.service.ts`, and copy-and-paste in the code from the following link.

* [`pet-finder.service.ts` source code](https://raw.githubusercontent.com/NativeScript/workshop/master/demo/app/pet-finder.service.ts)

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

#### Tip #2: Images

Our service provides a convenience method for accessing the appropriate pet images. You can bind an `<Image>` tag using the following code.

```
[src]="item.media.getFirstImage(2, 'res://icon')"
```