import { Component, OnInit } from '@angular/core';
import { ImageAsset } from 'image-asset';
import { ImageSource } from 'image-source';
 

@Component({
  selector: 'my-share',
  moduleId: module.id,
  templateUrl: './wizard-profile.component.html'
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

  constructor() {
  }

  ngOnInit() {
    // get camera permissions when loading for the first time
    

    this.reloadPowers();
  }

  share() {
    const messageBody = `name: ${this.name}, powers: ${JSON.stringify(this.powers)}`;

    // Add social shareText code here
    
  }

  sharePicture() {
    if(this.profilePicture) {
      // Call SocialShare.shareImage here

    }
  }

  takeProfilePicture() {
    // call camera.takePicture here
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
    this.powers.forEach(
      power => power.level = Math.round(Math.random()*10)
    );
  }

  onPowerTap(event) {
    this.displayPower(this.powers[event.index]);
  }

  displayPower(power: Power) {
    if(power.level < 5) {
      alert(power.name + ' ' + power.description + ' ' + 'Nice');
    } else if(power.level < 9) {
      alert(power.name + ' ' + power.description + ' ' + 'W00000W!!!');
    } else {
      alert(power.name + ' ' + power.description + ' ' + 'Be careful');
    }
  }
}

export interface Power {
  name: string;
  level: number;
  description?: string;
}
