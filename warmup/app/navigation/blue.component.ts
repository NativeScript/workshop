import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';

@Component({
  selector: 'my-blue',
  templateUrl: './navigation/blue.component.html',
  styleUrls: ['./navigation/color.component.css']
})
export class BlueComponent{

  constructor(private router: RouterExtensions) {
  }

  goRed() {
    this.router.navigate(['/color/red']);
  }

  goPink() {
    this.router.navigate(['/color', '#ff0088']);
  }

  goBack() {
    this.router.back();
  }

  goHome() {
    this.router.navigate(['/color']);
  }
}
