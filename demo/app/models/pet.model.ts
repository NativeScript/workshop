import { Contact, Media } from './';

export class Pet {

  constructor(
    public id: string,
    public name: string,
    public animal: string, // Pet type ,possible values: barnyard, bird, cat, dog, horse, pig, reptile, smallfurry
    public breeds: Array<any>,
    public mix: boolean, // Indicates wheter the pet is a mixed breed or not 
    public age: string, // Possible values: Baby, Young, Adult, Senior
    public sex: string, //  Possible values: m or f
    public size: string, // Possible values: S, M, L, XL
    public description: string,
    public options: Array<string>, // Addtional info about the pet, like: vacinations
    public status: string, // Possible values: A=adoptable, H=hold, P=pending, X=adopted/removed
    public lastUpdate: Date,
    public media: Media,
    public contact: Contact, // Shelter contact info that holds the pet
    public shelterId: string,
    public shelterPetId: string
  ){};
}
