import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-red',
  templateUrl: './color/red.component.html',
  styleUrls: ['./color/color.component.css']
})
export class RedComponent {
  
  constructor(private router: RouterExtensions, private route: ActivatedRoute) {
  }

  goBlue() {
    this.router.navigate(['/color/blue'], {
      transition: {
        name: 'slideTop',
        duration: 2000,
        curve: 'spring'
      }
    });
  }

  goGray() {
    this.router.navigate(['/color/rgb', 'gray'], {
      transition: {
        name: 'fade',
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
