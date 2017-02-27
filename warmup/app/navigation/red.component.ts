import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';

@Component({
  selector: 'my-red',
  templateUrl: './navigation/red.component.html',
  styleUrls: ['./navigation/color.component.css']
})
export class RedComponent {

  constructor(private router: RouterExtensions) {

  }

  goBlue() {
    this.router.navigate(['/color/blue'], {
      transition: {
        name: "slideTop",
        duration: 2000,
        curve: "spring"
      }
    });
  }

  goGray() {
    this.router.navigate(['/color', 'gray'], {
      transition: {
        name: "fade",
        duration: 1000
      }
    });
  }

  goBack() {
    this.router.back();
  }

  goHome() {
    this.router.navigate(['/color'], { clearHistory: true });
  }
}
