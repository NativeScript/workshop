## SUPER ULTIMATE CHALLENGE

It’s the end of the day, therefore you’re more ready than ever for the SUPER MEGA ULTIMATE CHALLENGE. That’s right, get ready to test your NativeScript skills against the biggest and baddest data form that we can reaslistically tackle in an hour. Get pumped.

### What’s the challenge?

Your challenge, should you choose to accept it, is to build a form that collects four pieces of information from the user: a name, an email address, a date of birth, and whether they’d like to sign up for a newsletter. You’re welcome to design this form however you’d like, and you totally might want to use the [new NativeScript theme](https://docs.nativescript.org/ui/theme), but here’s one lackluster UI you can try to replicate:

<img src="images/ios-form.png" style="height: 450px; border: 0;">
<img src="images/android-form.png" style="height: 450px; border: 0;">

The form should send a POST request to the following endpoint:

```
https://api.everlive.com/v1/GWfRtXi1Lwt4jcqK/Accounts
```

The body of the request should be a JSON stringified object that has the following four keys: `Name`, `Email`, `DOB`, and `Newsletter`. (Don’t worry about the specific formatting of the individual paramters; aka, send an date format you’d like for `DOB`, and any boolean format you’d like for `Newsletter`.)

There’s a simple listing of all data that has come through hosted at <https://jsfiddle.net/dLvz083w/>. If you see your data on this list you’ve completed the challenge successfully.

And if you finish, there are some super special [bonus challenges](#chapter7.3) for you to tackle.

### Starting up the challenge

<h4 class="exercise-start">
    <b>Exercise</b>: Start up a new app
</h4>

Every good challenge starts with a new app. For this challenge go ahead and start a new blank project with the `tns create` command.

```
tns create CHALLENGE --ng
```

Next, change directories into your new project:

```
cd CHALLENGE
```

After that, open your `main.ts` file and replace its contents with the code below, as you’ll be needing both the `NativeScriptFormsModule` and `NativeScriptHttpModule` to complete this challenge.

``` TypeScript
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule
  ]
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
```

Finally, create a `account.service.ts` file in your `app` folder and paste in the following code. You’ll need this service to hit this challenge’s backend that we’ll discuss momentarily. You’ll have to figure out how to use this service like you did in [chapter 4.0](#chapter4.0). 

``` TypeScript
import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import { Account } from "./account";

@Injectable()
export class AccountService {
  constructor(private http: Http) {}

  add(account: Account) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.post(
      "https://api.everlive.com/v1/GWfRtXi1Lwt4jcqK/Accounts",
      JSON.stringify({
        "Name": account.name,
        "Email": account.email,
        "DOB": account.dob,
        "Newsletter": account.newsletter
      }),
      { headers: headers }
    )
    .catch((error) => {
      console.log(error);
      return Observable.throw(error);
    })
  }
}
```

<div class="exercise-end"></div>

And with that, you’re ready to get started.

### Tips to help you out

Below you’ll find a few tips if you find yourself getting stuck, and a few suggestions for how you improve this little app if you have some extra time. Towards the end of the hour we’ll share a full solution that you can refer to later.

<h4 class="exercise-start">
    <b>Exercise</b>: TIPS
</h4>

Stuck? Here are a few tips that might help you get this form up and running.

<div class="solution-start"></div>

* **Tip #1**: You can use `[(ngModel)]` to bind to `<TextField>`, `<DatePicker>`, and `<Switch>` UI components. You’re going to want to use something like this:

``` XML
<TextField [(ngModel)]="account.name"></TextField>
<DatePicker [(ngModel)]="account.dob"></DatePicker>
<Switch [(ngModel)]="account.newsletter"></Switch>
```

* **Tip #2**: You can create a divider in your UI with the following bit of XML and CSS.

``` XML
<StackLayout class="divider"></StackLayout>
```

``` CSS
.divider {
  height: 1;
  background-color: black;
  margin-top: 20;
  margin-bottom: 20;
}
```

<div class="solution-end"></div>

<div class="exercise-end"></div>

Here’s a full solution you can refer to if you’d like: https://gist.github.com/tjvantoll/5d16e7f81de3d73573c7cb79752721e3.

### Bonus challenges!

Finish the challenge? Most excellent. But wait, there’s more! Here are some ways you can improve this form. See how many of these things you can finish in an hour.

- While saving the form disable all form fields so the user cannot interact with them. Hint: You can bind to the `isEnabled` property that all form fields have.
- Show an activity indicator while the form is submitting. There’s a handy [ActivityIndicator UI component](https://docs.nativescript.org/angular/code-samples/activity-indicator.html) that’ll work nicely for this.
- Show an alert after the form successfully submits, and also when something goes wrong. Refer to the [dialogs module](https://docs.nativescript.org/angular/ui/dialogs.html) for more information.
- Don’t allow the user to submit with an empty name or email. Show an alert, or even find a more custom way to display an error message on your form.

And that’s it. When you’re done make sure to show us how far you made it 😀
