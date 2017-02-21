import { PetFinderModel, Contact, Media } from './';

export class Pet extends PetFinderModel {

  constructor(model: any) {
    super(model);
  }

  /** 
   * Pet id
   */
  get id(): string {
    return this.get('id.$t');
  }

  /** 
   * Shelter id that holds the pet
   */
  get shelterId(): string {
    return this.get('shelterId.$t');
  }

  /**
   * The shelter specific id of the pet
   */
  get shelterPetId(): string {
    return this.get('shelterPetId.$t');
  }

  /** 
   * Pet name
   */
  get name(): string {
    return this.get('name.$t');
  }

  /** 
   * Pet type
   * Possible values: barnyard, bird, cat, dog, horse, pig, reptile, smallfurry
   */
  get animal(): string {
    return this.get('animal.$t');
  }

  /** 
   * Pet breeds
   */
  get breeds(): Array<any> {
    return this.getArray('breeds.breed');
  }


  /**
   * Indicates wheter the pet is a mixed breed or not 
   * Possible values: yes or no 
   */
  get mix(): string {
    return this.get('mix.$t');
  }

  /**
   * Pet age
   * Possible values: Baby, Young, Adult, Senior
   */
  get age(): string {
    return this.get('age.$t');
  }

  /** 
   * Pet gender
   * Possible values: m or f
   */
  get sex(): string {
    return this.get('sex.$t');
  }

  /** 
   * Pet size 
   * Possible values: S, M, L, XL
   */
  get size(): string {
    return this.get('size.$t');
  } 

  /** 
   * Addtional info about the pet, like: vacinations
   */
  get options(): Array<string> {
    return this.getArray('options.option');
  }

  /** 
   * Pet description
   */
  get description(): string {
    return this.get('description.$t');
  }

  /** 
   * The last update date of the pet record
   */
  get lastUpdate(): Date {
    return new Date(this.get('lastUpdate.$t'));
  }

  /** 
   * Pet status
   * Possible values: A=adoptable, H=hold, P=pending, X=adopted/removed
   */
  get status(): string {
    return this.get('status.$t');
  }

  /** 
   * Pictures of the pet.
   * Use getImages() function to get the urls
   */
  get media(): Media {
    return new Media(this.model.media);
  }

  /** 
   * Shelter contact info that holds the pet
   */
  get contact(): Contact {
    return new Contact(this.model.contact);
  }
}
