import { Component } from '@angular/core';

@Component({
  selector: 'my-profile',
  moduleId: module.id,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profile: Profile;

  constructor() {
    this.profile = {
      name: 'Joe',
      password: 'bl0gs',
      angularPro: false,
      dob: new Date(),
      codingPower: 1
    }
  }

  save() {
    console.log(JSON.stringify(this.profile, null, 2));
  }

  clear() {
    this.profile.name = '';
    this.profile.password = '';
    this.profile.angularPro = false;
    this.profile.dob = new Date();
    this.profile.codingPower = 1;
  }

  clearForm() {
    this.profile = {
      name: '',
      password: '',
      angularPro: false,
      dob: new Date(),
      codingPower: 1
    }
  }
}

export interface Profile {
  name: string;
  password: string;
  angularPro: boolean;
  dob: Date;
  codingPower: number;
}