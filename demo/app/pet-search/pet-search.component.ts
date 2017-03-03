import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
import { Router } from '@angular/router';
import { Pet, Shelter, Options } from '../models';
import { PetFinderService } from '../pet-finder.service';
import { Observable } from 'rxjs/observable';

import { SelectModalService } from '../select-modal.service';
import { SelectModalComponent } from '../select-modal/select-modal.component';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';

@Component({
  selector: 'my-pet-search',
  templateUrl: './pet-search/pet-search.component.html',
  styleUrls: ['./pet-search/pet-search.component.css']
})
export class PetSearchComponent implements OnInit{
  public location: string = 'Boston, MA';
  public animal: string = '';
  public breed: string = '';
  public age: string = '';
  public sex: string = '';
  public size: string = '';
  
  public pets: Array<Pet> = [];
  public pet$: Observable<any>;

  constructor(
    private petFinder: PetFinderService,
    private modal: SelectModalService,
    private vcRef: ViewContainerRef,
    private router: RouterExtensions,
    private fonticon: TNSFontIconService) {
  }

  ngOnInit() {

  }

  selectAnimal() {
    this.modal.showModal(this.vcRef, Options.animalArray)
    .then(animal => {
      if (this.animal != animal) {
        this.animal = animal
        this.breed = '';
      }
    });
  }

  animalSelected(): boolean {
    return (this.animal.length > 0);
  }

  selectBreed() {
    this.petFinder.breedList(this.animal)
    .then(breeds =>
      this.modal.showModal(this.vcRef, breeds)
      .then(breed => this.breed = breed)
    )
  }

  selectAge() {
    this.modal.showModal(this.vcRef, Options.ageArray)
    .then(result => this.age = result);
  }

  selectSex() {
    this.modal.showModal(this.vcRef, Options.sexArray)
    .then(result => this.sex = result);
  }

  selectSize() {
    this.modal.showModal(this.vcRef, Options.sizeArray)
    .then(result => this.size = result);
  }

  findPets() {
    this.petFinder.findPets(this.location, {
      age: this.age,
      animal: this.animal,
      breed: this.breed,
      sex: this.sex,
      size: this.size
    })
    .then(pets => this.pets = pets)
    this.router.navigate(['petresults']);
  } 

  myFavorites(){
    
  } 
}
