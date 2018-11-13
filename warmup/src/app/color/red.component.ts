import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-red',
  moduleId: module.id,
  templateUrl: './red.component.html',
  styleUrls: ['./color.component.css']
})
export class RedComponent {
  
  constructor(private router: RouterExtensions, private route: ActivatedRoute) {
  }

  goBlue() {
    
  }

  goGray() {
    
  }

  goBack() {
    this.router.back();
  }

  goHome() {
    this.router.navigate(['/color'], { clearHistory: true });
  }
}
