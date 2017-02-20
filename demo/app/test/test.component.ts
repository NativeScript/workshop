import { Component, OnInit, NgZone } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Pet, Shelter, Options } from '../models';
import { PetFinderService } from '../pet-finder.service';

@Component({
    selector: 'my-test',
    templateUrl: './test/test.component.html'
})
export class TestComponent implements OnInit{
  location: string = 'Boston, MA';

  breeds: Array<string> = [];
  pet: Pet;
  shelter: Shelter;

  constructor(private petFinder: PetFinderService, private zone: NgZone) {

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
      // console.log(JSON.stringify(pet, null, 2));
      this.pet = pet;

      console.log(JSON.stringify( pet.breeds, null, 2));

    }, err => {
      console.log(err.message);
    })
  }

  getPet() {
    this.petFinder.getPet('36796635')
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
    }, err => {
      console.log(err.message);
    })
  }

  getShelter() {
    this.petFinder.getShelter('CA607')
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
    }, err => {
      console.log(err.message);
    })
  }

}
