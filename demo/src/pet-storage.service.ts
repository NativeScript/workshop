import { Injectable } from '@angular/core';
import { Pet } from 'petfinder-angular-service';

import * as appSettings from "tns-core-modules/application-settings";

@Injectable()
export class PetStorageService {
    //NB: This service should probably use a reasonable structured storage, rather than string-serialising complex objects :S

    private storedPets: Array<Pet>;

    constructor() {
        this.storedPets = this.getPetFavorites();
    }

    private getPetFavorites(): Array<Pet> {
        return JSON.parse(appSettings.getString("pet-favorites", "[]"));
    };

    private serializePetsToStore() {
        appSettings.setString("pet-favorites", JSON.stringify(this.storedPets));
    }

    public getStoredPets(): Array<Pet> {
        return this.storedPets;
    }

    public isPetFavorite(pet: Pet): boolean {
        return this.storedPets.some(thePet => thePet.id == pet.id);
    }

    public addPetToFavorites(pet: Pet) {
        if (pet) {
            this.storedPets.push(pet);
            this.serializePetsToStore();
        }
    };

    public removePetFromFavorites(pet: Pet) {
        if (pet) {
            this.storedPets = this.storedPets.filter(thePet => thePet.id != pet.id);
            this.serializePetsToStore();

        }
    };

}