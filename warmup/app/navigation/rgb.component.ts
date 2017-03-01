import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { RouterExtensions, PageRoute } from 'nativescript-angular';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'my-color-paletter',
  templateUrl: './navigation/rgb.component.html',
  styleUrls: ['./navigation/color.component.css']
})
export class RGBComponent implements OnInit{
  rgb: string = '#bad';

  constructor(
    // private route: ActivatedRoute,
    private pageRoute: PageRoute,
    private router: RouterExtensions) {
  }

  ngOnInit() {
    // this.rgb = this.route.params['rgb'];

    this.pageRoute.activatedRoute
      .switchMap(activatedRoute => activatedRoute.params)
      .forEach(params => this.rgb = params['rgb']);
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

  changeToRandom() {
    this.router.navigate(['/color', this.getRandomColor()]);
  }

  getRandomColor(): string {
    const r = Math.floor(Math.random() * 16).toString(16);
    const g = Math.floor(Math.random() * 16).toString(16);
    const b = Math.floor(Math.random() * 16).toString(16);
    return '#' + r+g+b;
  }

  goBack() {
    this.router.back();
  }

  goHome() {
    this.router.navigate(['/color'], { clearHistory: true });
  }
  
}
