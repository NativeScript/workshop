import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PetFinderService } from '../pet-finder.service';
import { Pet } from '../models';

import * as SocialShare from "nativescript-social-share";
import * as ImageSource from "image-source";

@Component({
  selector: 'my-pet-details',
  templateUrl: './pet-details/pet-details.component.html',
  styleUrls: ['./pet-details/pet-details.component.css']
})
export class PetDetailsComponent implements OnInit{
  public pet: Pet;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private petFinder: PetFinderService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.petFinder.getPet(id)
      .then(pet => this.pet = pet)
  }

  share(text:string){
    SocialShare.shareText(text);
  }

  favorite(){
    
  }
}
