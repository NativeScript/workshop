import { Contact, Media } from './';

export class Pet {

  constructor(
    public id: string,
    public name: string,
    /**
     * Pet type ,possible values: barnyard, bird, cat, dog, horse, pig, reptile, smallfurry
     */
    public animal: string,
    public breeds: Array<any>,
    /**
     * Indicates wheter the pet is a mixed breed or not 
     * Possible values: yes or no 
     */
    public mix: boolean,
    /**
     * Possible values: Baby, Young, Adult, Senior
     */
    public age: string,
    /**
     * Possible values: m or f
     */
    public sex: string,
    /**
     * Possible values: S, M, L, XL
     */
    public size: string,
    public description: string,
    /**
     * Addtional info about the pet, like: vacinations
     */
    public options: Array<string>,
    /**
     * Possible values: A=adoptable, H=hold, P=pending, X=adopted/removed
     */
    public status: string,
    public lastUpdate: Date,
    public media: Media,
    /**
     * Shelter contact info that holds the pet
     */
    public contact: Contact,
    /**
     * Shelter id that holds the pet
     */
    public shelterId: string,
    /**
     * The shelter specific id of the pet
     */
    public shelterPetId: string
  ){};
}
