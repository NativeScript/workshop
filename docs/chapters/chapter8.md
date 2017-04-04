## App Challenge Part 2 - Master-Detail Pages

With your basic list complete, your next test is to turn your list of pets into a functional master-detail interface.

### What you’re building

The master-detail user interface pattern is a popular way to design mobile applications. Master-detail interfaces work best when you have a large list of some type of data, and the individual items in the list have details associated with them — details that the user needs to view or modify.

The Petfinder API provides exactly this information, so let’s put this user interface into practice with FurFriendster. After you complete this challenge, readers should be able to tap items on the master list of pets, and navigate to a second screen where they can see details about the pet they’re interested in.

Here’s what your master-detail UI might look like after you complete this section.

![](images/chapter8/master-detail.png?raw=true)

### Building the page

Your main task for this workshop will be figuring out how to add a new route to act as the details page, and how to pass data to that new page from the master page.

Don’t worry too much if your details page doesn’t look amazing. You main task is to show the appropriate data for each pet and get the navigation working. Here are the specific requirements for this part of the workshop.

### Requirements

* **1**. Show the following information for each pet on its details screen.
    * `description`
    * `breeds`
    * Two images, which you can access by binding an `<Image>` component’s `src` attribute to the following properties of a `Pet` object: `media.getFirstImage(3, 'res://icon')` and `media.getSecondImage(4, 'res://icon')`.
* **2**. Add the following two plugins to the details screen.
    * [Font Awesome](https://github.com/NathanWalker/nativescript-ngx-fonticon)
        * After installing this plugin, download <http://fontawesome.io/assets/font-awesome-4.7.0.zip>, unzip the archive. Copy the archive’s `fonts` folder and paste it into your `app` folder. You’ll need those files for Font Awesome to work.
    * [Social Share](https://github.com/tjvantoll/nativescript-social-share)
        * You must allow users to share a pet’s description using the social share plugin.

### Tips

#### Tip #1: clip-path

If you want to try to recreate the diamond shape images we used in our screenshots, give the CSS `clip-path` property a shot. You can use [this tool](http://bennettfeely.com/clippy/) to define your own custom shape.

#### Tip #2: Angular configuration

When adding your new route, make sure to add the appropriate entries to both your `app.routing.ts` and `app.module.ts` files.

#### Tip #3: ScrollView

If your UI components no longer fit on a user’s screen, add a [`<ScrollView>`](https://docs.nativescript.org/cookbook/ui/scroll-view) as a top-level UI component.
