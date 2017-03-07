import { Pet, Media, Contact } from './';

export class PetFactory {

    static fromPetFinderAPI(rawPet: any): Pet {
        return new Pet(
            rawPet.id.$t,
            rawPet.name.$t,
            rawPet.animal.$t,
            Array.isArray(rawPet.breeds.breed) ? rawPet.breeds.breed.map(breed => breed.$t) : [rawPet.breeds.breed.$t],
            rawPet.mix == 'yes',
            rawPet.age.$t,
            rawPet.sex.$t,
            rawPet.size.$t,
            rawPet.description.$t,
            Array.isArray(rawPet.options.option) ? rawPet.options.option.map(option => option.$t) : [rawPet.options.option.$t],
            rawPet.status,
            new Date(rawPet.lastUpdate.$t),
            new Media(rawPet.media), //Media
            new Contact(rawPet.media), //Contact
            rawPet.shelterId,
            rawPet.shelterPetId
        );
    }
}