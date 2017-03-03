import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from '../models';

@Component({
  selector: 'my-pet-search-results',
  templateUrl: './pet-results/pet-results.component.html'
})
export class PetResultsComponent implements OnInit{

    constructor(
        private router: Router
        ) {}
    
    ngOnInit(){
       //get results 
    }

    onPetSelect(event) {
        //const selectedPet = this.pets[event.index];
        //this.router.navigate(['petresults', selectedPet.id]);
    }

}
