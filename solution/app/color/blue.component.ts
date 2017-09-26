import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular';

@Component({
  selector: 'my-blue',
  templateUrl: './color/blue.component.html',
  styleUrls: ['./color/color.component.css']
})
export class BlueComponent{
  private pink: string = '#ff0088';

  constructor(private router: RouterExtensions) {
  }

  goRed() {
    this.router.navigate(['/color/red']);
  }

  goPink() {
    this.router.navigate(['/color/rgb', this.pink]);
  }

  goBack() {
    this.router.back();
  }

  goHome() {
    this.router.navigate(['/color'], { clearHistory: true });
  }
}
