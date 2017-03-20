import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PetStorageService } from '../pet-storage.service';
import { Pet } from '../models';

import { Image } from "ui/image";

@Component({
  selector: 'my-pet-favorites',
  templateUrl: './pet-favorites/pet-favorites.component.html',
  styleUrls: ['./pet-favorites/pet-favorites.component.css']
})
export class PetFavoritesComponent implements OnInit{
  
  public pets: Array<Pet> = [];

  constructor(
    private petStorageService: PetStorageService,
    private router: Router) {
  }

  ngOnInit() {
    this.pets = this.petStorageService.getStoredPets()
  }
  removeFavorite(pet:Pet) {
    this.petStorageService.removePetFromFavorites(pet);
    this.pets = this.petStorageService.getStoredPets();
  }
  goHome(){
      this.router.navigate(['']);
    }
}
