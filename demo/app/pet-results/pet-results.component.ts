import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pet } from '../models';
import { PetFinderService } from '../pet-finder.service';

@Component({
  selector: 'my-pet-search-results',
  templateUrl: './pet-results/pet-results.component.html',
  styleUrls: ['./pet-results/pet-results.component.css']
})
export class PetResultsComponent implements OnInit{

    public location: string;
    public age: string;
    public animal: string;
    public breed: string;
    public sex: string;
    public size: string;

    public pets: Array<Pet> = [];

    
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private petFinder: PetFinderService    
        ) {}
    
    ngOnInit(){
       //get results
       this.location = this.activatedRoute.snapshot.queryParams['location'];
       this.age = this.activatedRoute.snapshot.queryParams['age'];
       this.animal = this.activatedRoute.snapshot.queryParams['animal'];
       this.breed = this.activatedRoute.snapshot.queryParams['breed'];
       this.sex = this.activatedRoute.snapshot.queryParams['sex'];
       this.size = this.activatedRoute.snapshot.queryParams['size'];

       this.petFinder.findPets(this.location, {
            age: this.age,
            animal: this.animal,
            breed: this.breed,
            sex: this.sex,
            size: this.size
        })
      .then(pets => this.pets = pets)
    }

    onPetSelect(event) {
        const selectedPet = this.pets[event.index];
        this.router.navigate(['petresults', selectedPet.id]);
    }

}
