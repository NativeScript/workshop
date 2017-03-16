## App Challenge Part 2 - Master-Detail Pages

With your basic list complete, your next test is to turn your list of pets into a functional master-detail interface.

### What you’re building

The master-detail user interface pattern is a popular way to design mobile applications. Master-detail interfaces work best when you have a large list of some type of data, and the individual items in the list have details associated with them — details that the user needs to view or modify.

The Petfinder API provides exactly this information, so let’s put this user interface into practice with FurFriendster. After you complete this challenge, readers should be able to tap items on the master list of pets, and navigate to a second screen where they can see details about the pet they’re interested in.

Here’s what your master-detail UI might look like after you complete this section.

<img src="/images/chapter8/master-detail.png" class="plain">

### Building the page

Your main task for this workshop will be figuring out how to add a new route to act as the details page, and how to pass data to that new page from the master page.

Don’t worry too much if your details page doesn’t look amazing. You main task is to show the appropriate data for each pet and get the navigation working. Here are the specific requirements for this part of the workshop.

### Requirements

* **1**. Show the following information for each pet on its details screen.
    * `description`
    * `breeds`
    * Two images, which you can access by binding an `<Image>` component’s `src` attribute to the following properties of a `Pet` object: `media.getFirstImage(3, 'res://icon')` and `media.getSecondImage(4, 'res://icon')`.

### Tips

Give a couple of hints. Like:

* Links to the navigation docs.
* Information on how to build that diamond UI with clip-path