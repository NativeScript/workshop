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

Eventually in this workshop you’ll allow users to filter which types of pets they’d like to see on the list page, but for now you’ll need to hardcode some data.


Tell readers about the backend service we’ve provided, and tell them what method to call in the provided service to get that data they need. Tell the reader to hardcode the data they pass to the service for now, and give them some options for hardcoding.

(This would also be a good idea to give instructions for the offline fallback, in case the internet died down too.)

List the hard requirements of this challenge. Should be pretty simple for this one. Build a list and show the pet’s name? Anything else?

Remind readers how to start new NativeScript apps.

Give a couple of hints. Like:

* Links to the ListView docs
* Make sure to register the new service in your NgModule.