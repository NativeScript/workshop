import { Pet, Media, Contact, Shelter } from './';

export class PetFinderFactory {
    static petFromRaw(rawPet: any): Pet {
        return new Pet(
            rawPet.id.$t !== undefined ? rawPet.id.$t : undefined,
            rawPet.name.$t !== undefined ? rawPet.name.$t : undefined,
            rawPet.animal.$t !== undefined ? rawPet.animal.$t : undefined,
            Array.isArray(rawPet.breeds.breed) ? rawPet.breeds.breed.map(breed => breed.$t) : rawPet.breeds.breed !== undefined ? [rawPet.breeds.breed.$t] : undefined,
            rawPet.mix.$t !== undefined ? rawPet.mix == 'yes' : undefined,
            rawPet.age.$t !== undefined ? rawPet.age.$t : undefined,
            rawPet.sex.$t !== undefined ? rawPet.sex.$t : undefined,
            rawPet.size.$t !== undefined ? rawPet.size.$t : undefined,
            rawPet.description.$t !== undefined ? rawPet.description.$t : undefined,
            Array.isArray(rawPet.options.option) ? rawPet.options.option.map(option => option.$t) : rawPet.options.option !== undefined ? [rawPet.options.option.$t] : undefined ,
            rawPet.status.$t !== undefined ? rawPet.status.$t : undefined,
            rawPet.lastUpdate.$t !== undefined ? new Date(rawPet.lastUpdate.$t) : undefined,
            rawPet.media.photos !== undefined ? PetFinderFactory.mediaFromRaw(rawPet.media) : PetFinderFactory.mediaFromEmpty(),
            rawPet.contact !== undefined ? PetFinderFactory.contactFromRaw(rawPet.contact) : undefined,
            rawPet.shelterId.$t !== undefined ? rawPet.shelterId.$t : undefined,
            rawPet.shelterPetId.$t !== undefined ? rawPet.shelterPetId.$t : undefined,
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

    static mediaFromEmpty(): Media {
        return new Media([]);
    }

    static shelterFromRaw(rawShelter: any): Shelter {
        return new Shelter(
            rawShelter.id.$t !== undefined? rawShelter.id.$t : undefined,
            rawShelter.name.$t !== undefined? rawShelter.name.$t : undefined,
            rawShelter.country.$t !== undefined? rawShelter.country.$t : undefined,
            rawShelter.latitude.$t !== undefined? rawShelter.latitude.$t : undefined,
            rawShelter.longitude.$t !== undefined? rawShelter.longitude.$t  : undefined,
            rawShelter.city.$t !== undefined? rawShelter.city.$t : undefined,
            rawShelter.address1.$t  !== undefined? rawShelter.address1.$t : undefined,
            rawShelter.address2.$t  !== undefined? rawShelter.address2.$t : undefined,
            rawShelter.state.$t !== undefined? rawShelter.state.$t : undefined,
            rawShelter.phone.$t !== undefined? rawShelter.phone.$t : undefined,
            rawShelter.fax.$t !== undefined? rawShelter.fax.$t : undefined,
            rawShelter.email.$ !== undefined? rawShelter.email.$t : undefined,
        );
    }  

}