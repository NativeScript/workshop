import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Pet, Shelter, Options, PetFinderService } from 'petfinder-angular-service';

@Component({
    selector: 'my-test',
    templateUrl: './test/test.component.html'
})
export class TestComponent implements OnInit{
  location: string = 'San Francisco, CA';

  breeds: Array<string> = [];
  pet: Pet;
  shelter: Shelter;

  shelters: Array<Shelter> = [];

  constructor(private petFinder: PetFinderService) {

  }

  ngOnInit() {

  }

  searchBreedList(animal) {
    this.petFinder.breedList(animal)
    .then((breeds: any) => {
      console.log(JSON.stringify(breeds, null, 2));

      this.breeds = breeds;
    }, err => {
      console.log(err.message);
    })
  }

  getRandomPetId() {
    this.petFinder.getRandomPetId()
    .then((petId: number) => {
      console.log(petId);
    }, err => {
      console.log(err.message);
    })
  }

  getRandomPet() {
    this.petFinder.getRandomPet({
      sex: Options.sex.female,
      size: Options.size.small,
      location: this.location
    })
    .then((pet: Pet) => {
      console.log(JSON.stringify(pet, null, 2));
      this.pet = pet;
    }, err => {
      console.log(err.message);
    })
  }

  getPet() {
    this.petFinder.getPet('37173495')
    .then((pet: Pet) => {
      console.log(JSON.stringify(pet, null, 2));
      this.pet = pet;
    }, err => {
      console.log(err.message);
    })
  }

  findPets() {
    this.petFinder.findPets(this.location, {
      sex: Options.sex.male,
      breed:'Great Dane',
      age: Options.age.baby
    })
    .then((pets: Array<Pet>) => {
      console.log(JSON.stringify(pets, null, 2));

      this.pet = pets[0];
    }, err => {
      console.log(err.message);
    })
  }

  findShelters() {
    this.petFinder.findShelters(this.location)
    .then((shelters: Array<Shelter>) => {
      console.log(JSON.stringify(shelters, null, 2));

      this.shelter = shelters[0];
      this.shelters = shelters;
    }, err => {
      console.log(err.message);
    })
  }

  getShelter(id: string | number) {
    this.petFinder.getShelter(id)
    .then((shelter: Shelter) => {
      console.log(JSON.stringify(shelter, null, 2));

      this.shelter = shelter;
    }, err => {
      console.log(err.message);
    })
  }

  findShelterPets() {
    this.petFinder.findShelterPets('CA607')
    .then((pets: Array<Pet>) => {
      console.log(JSON.stringify(pets, null, 2));

      this.pet = pets[0];
    }, err => {
      console.log(err.message);
    })
  }

  findSheltersByBreed() {
    this.petFinder.findSheltersByBreed(Options.animal.dog, 'Great Dane' )
    .then((shelters: Array<Shelter>) => {
      console.log(JSON.stringify(shelters, null, 2));

      this.shelter = shelters[0];
      this.shelters = shelters;
    }, err => {
      console.log(err.message);
    })
  }

  onShelterTap(event) {
    this.shelter = this.shelters[event.index];
  }

}
