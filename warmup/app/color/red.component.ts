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
    
  }

  goGray() {
    
  }

  goBack() {
    
  }

  goHome() {
    
  }
}
