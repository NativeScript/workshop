import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PetFinderService } from '../pet-finder.service';
import { PetStorageService } from '../pet-storage.service';

import { Pet } from '../models';

import * as SocialShare from "nativescript-social-share";
import platformModule = require("platform");

import { Image } from "ui/image";

@Component({
  selector: 'my-pet-details',
  templateUrl: './pet-details/pet-details.component.html',
  styleUrls: ['./pet-details/pet-details.component.css']
})
export class PetDetailsComponent implements OnInit{
  public pet: Pet;
  public position: number;
  public isFavorite: boolean = false;

  @ViewChild("petImage") img: ElementRef;

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
}
