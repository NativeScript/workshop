import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Pet, PetFinderService } from 'petfinder-angular-service';
import { PetStorageService } from '../pet-storage.service';

import * as SocialShare from "nativescript-social-share";

import { Image } from "tns-core-modules/ui/image";

@Component({
  selector: 'my-pet-details',
  templateUrl: './pet-details/pet-details.component.html',
  styleUrls: ['./pet-details/pet-details.component.css']
})
export class PetDetailsComponent implements OnInit{
  public pet: Pet;
  public position: number;
  public isFavorite: boolean = false;

  @ViewChild("petImage", {static: false}) img: ElementRef;

  petImage: Image;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private petFinder: PetFinderService,
    private petStorage: PetStorageService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    //tried to handle placement of diamond image on large iOS screens
    /*this.position = platformModule.screen.mainScreen.widthPixels/2;
    this.petImage = this.img.nativeElement;
    this.petImage.translateX = this.position;*/
    this.petFinder.getPet(id)
      .then(pet => {
        this.pet = pet;
        this.isFavorite = this.petStorage.isPetFavorite(pet);
      })
  }

  share(text:string){
    SocialShare.shareText(text);
  }

  favorite(){
    this.isFavorite = !this.isFavorite;
    if (this.isFavorite) {
      this.petStorage.addPetToFavorites(this.pet);
    } else {
      this.petStorage.removePetFromFavorites(this.pet);
    }
  }

  myFavorites(){
      this.router.navigate(['favorites']);
  }
}
