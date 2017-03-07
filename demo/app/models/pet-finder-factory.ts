import { Pet, Media, Contact } from './';

export class PetFinderFactory {
    static petFromRaw(rawPet: any): Pet {
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
            PetFinderFactory.mediaFromRaw(rawPet.media),
            PetFinderFactory.contactFromRaw(rawPet.contact),
            rawPet.shelterId,
            rawPet.shelterPetId
        );
    }

    static contactFromRaw(rawContact: any): Contact {
        return new Contact(
            rawContact.city.$t !== undefined? rawContact.city.$t : undefined,
            rawContact.address1.$t  !== undefined? rawContact.address1.$t : undefined,
            rawContact.address2.$t  !== undefined? rawContact.address2.$t : undefined,
            rawContact.state.$t !== undefined? rawContact.state.$t : undefined,
            rawContact.zip.$t !== undefined? rawContact.zip.$t : undefined,
            rawContact.phone.$t !== undefined? rawContact.phone.$t : undefined,
            rawContact.fax.$t !== undefined? rawContact.fax.$t : undefined,
            rawContact.email.$ !== undefined? rawContact.email.$t : undefined,
        );
    }  

    static mediaFromRaw(rawMedia: any): Media {
        return new Media(
            rawMedia.photos.photo
        );
    }
}