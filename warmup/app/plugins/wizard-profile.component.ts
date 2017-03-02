import { Component, OnInit, NgZone } from '@angular/core';
import { ImageAsset } from "image-asset";
import { ImageSource } from 'image-source';

//https://docs.nativescript.org/angular/code-samples/camera
//npm i nativescript-camera --save
import * as camera from 'nativescript-camera';

//https://www.npmjs.com/package/nativescript-social-share
import * as SocialShare from 'nativescript-social-share';

//https://www.npmjs.com/package/nativescript-fancyalert
import { TNSFancyAlert, TNSFancyAlertButton } from 'nativescript-fancyalert';
 

@Component({
  selector: 'my-share',
  templateUrl: './plugins/wizard-profile.component.html'
})
export class WizardProfileComponent implements OnInit{
  public name: string = 'Sebastian';

  public powers: Power[] = [
    { name: 'Cosmic Manipulation', level: 1, description: 'The power to manipulate all cosmic forces.'},
    { name: 'Magic Resistance', level: 1, description: 'The power to be highly resistant to Magic. Not to be confused with Magic Immunity.'},
    { name: 'Telekinesis', level: 1, description: 'User can influence/manipulate/move objects/matter with their mind.'},
    { name: 'Alchemy', level: 1, description: 'The mystic and scientific pursuit of the power of the Philosopher\'s Stone and Universal Panacea.'},
    { name: 'Invocation', level: 1, description: 'The ability to gain control over the target\'s life or actions by speaking their name or phrases.'},
    { name: 'Magic Detection', level: 1, description: 'The ability to sense the presence of magic in one\'s vicinity.'},
    { name: 'Fiction Manipulation', level: 1, description: 'The power to manipulate anything invented through imaginative and theoretical ideologies.'}
  ];
  
  public profilePicture: ImageSource;

  constructor(private zone: NgZone) {
  }

  ngOnInit() {
    // get camera permissions when loading for the first time
    camera.requestPermissions();

    TNSFancyAlert.shouldDismissOnTapOutside = false;
    TNSFancyAlert.useLargerIcon = false;

    this.reloadPowers();
  }

  share() {
    const messageBody = `name: ${this.name}, twitter: ${this.twitter}, powers: ${JSON.stringify(this.powers)}`;

    SocialShare.shareText(messageBody);
  }

  sharePicture() {
    SocialShare.shareImage(this.profilePicture);
  }

  takeProfilePicture() {
  const options: camera.CameraOptions = {
    width: 300,
    height: 300,
    keepAspectRatio: true,
    saveToGallery: false
  };


  camera.takePicture(options)
    .then((imageAsset: ImageAsset) => {
      this.updateProfilePicture(imageAsset);
    }).catch(err => {
      console.log(err.message);
    });
  }

  updateProfilePicture(asset: ImageAsset) {
    const imageSource = new ImageSource();
    imageSource.fromAsset(asset)
      .then(image => {
        this.profilePicture = image;
      })
  }

  onPull(args) {
    this.reloadPowers();
    
    args.object.refreshing = false;
  }

  reloadPowers() {
    // this.zone.run(() => {
      this.powers.forEach(
        power => power.level = Math.round(Math.random()*10)
      );
    // })
  }

  onPowerTap(event) {
    this.displayPower(this.powers[event.index]);
  }

  displayPower(power: Power) {
    if(power.level < 5) {
      TNSFancyAlert.showNotice(power.name, power.description, 'Nice');
    } else if(power.level < 9) {
      TNSFancyAlert.showInfo(power.name, power.description, 'W00000W!!!');
    } else {
      TNSFancyAlert.showWarning(power.name, power.description, 'Be careful');
    }
  }

  updateFrameRate() {
    this.zone.run(() => {
      // the code to run outside of the zone
    });
  }
}

export interface Power {
  name: string;
  level: number;
  description?: string;
}
