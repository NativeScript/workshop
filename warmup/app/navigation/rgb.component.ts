import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular'

@Component({
  selector: 'my-color-paletter',
  templateUrl: './navigation/rgb.component.html',
  styleUrls: ['./navigation/color.component.css']
})
export class RGBComponent implements OnInit{
  rgb: string = '#bad';

  constructor(
    private route: ActivatedRoute,
    private router: RouterExtensions) {
  }

  ngOnInit() {
    this.rgb = this.route.snapshot.params['rgb'];
  }

  goBlue() {
    this.router.navigate(['/color/blue'], {
      transition: {
        name: "slideLeft", // see http://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationtransition.html#name
        duration: 2000,
        curve: "easeIn" // see http://docs.nativescript.org/api-reference/modules/_ui_enums_.animationcurve.html
      }
    });
  }

  goRed() {
    this.router.navigate(['/color/red'], {
      transition: {
        name: "slideTop",
        duration: 2000,
        curve: "easeOut"
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
