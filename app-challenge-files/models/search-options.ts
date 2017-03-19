export class Options {
  static ageArray: Array<string> = ['Baby', 'Young', 'Adult', 'Senior'];
  static animalArray: Array<string> = ['barnyard', 'bird', 'cat', 'dog', 'horse', 'pig', 'reptile', 'smallfurry']
  static sexArray: Array<string> = ['M', 'F'];
  static sizeArray: Array<string> = ['S', 'M', 'L', 'XL'];

  /** age of the animal (Baby, Young, Adult, Senior) */
  static age = {
    baby: 'Baby',
    young: 'Young',
    adult: 'Adult',
    senior: 'Senior'
  }

  /** type of animal (barnyard, bird, cat, dog, horse, pig, reptile, smallfurry) */
  static animal = {
    barnyard: 'barnyard',
    bird: 'bird',
    cat: 'cat',
    dog: 'dog',
    horse: 'horse',
    pig: 'pig',
    reptile: 'reptile',
    smallfurry: 'smallfurry'
  };

  /** A=adoptable, H=hold, P=pending, X=adopted/removed */
  static character = {
    adoptable: 'A',
    hold: 'H',
    pending: 'P',
    adopted_removed: 'X'
  };

  /** How much of the pet record to return: id, basic, full */
  static output = {
    id: 'id',
    basic: 'basic',
    full: 'full'
  }

  /** M=male, F=female */
  static sex = {
    male: 'M',
    female: 'F'
  };
  
  /** size of animal (S=small, M=medium, L=large, XL=extra-large) */
  static size = {
    small: 'S',
    medium: 'M',
    large: 'L',
    extraLarge: 'XL'
  };
}

export interface RandomSearchOptions {
  /** type of animal (barnyard, bird, cat, dog, horse, pig, reptile, smallfurry) */
  animal?: string;

  /** breed of animal (use breeds.list for a list of valid breeds) */
  breed?: string;

  /** size of animal (S=small, M=medium, L=large, XL=extra-large) */
  size?: string;

  /** M=male, F=female */
  sex?: string;

  /** the ZIP/postal code or city and state the animal should be located (NOTE: the closest possible animal will be selected) */
  location?: string;

  /** ID of the shelter that posted the pet */
  shelterid?: string;
}

export interface PetSearchOptions {
  /** type of animal (barnyard, bird, cat, dog, horse, pig, reptile, smallfurry) */
  animal?: string;

  /** breed of animal (use breeds.list for a list of valid breeds) */
  breed?: string;

  /** size of animal (S=small, M=medium, L=large, XL=extra-large) */
  size?: string;

  /** M=male, F=female */
  sex?: string;

  /** the ZIP/postal code or city and state the animal should be located (NOTE: the closest possible animal will be selected) */
  // location: string;

  /** age of the animal (Baby, Young, Adult, Senior) */
  age?: string;

  /** ID of the shelter that posted the pet */
  shelterid?: string;

  /** How much of the pet record to return: id, basic, full */
  output?: string;

  /** set this to the value of lastOffset returned by a previous call to findPets, and it will retrieve the next result set */
  offset?: number;

  /** how many records to return for this particular API call (default is 25) */
  count?: number;
}

export interface ShelterSearchOptions {
  /** full or partial shelter name */
  name?: string;

  /** set this to the value of lastOffset returned by a previous call to searchShelters, and it will retrieve the next result set */
  offset?: number;

  /** how many records to return for this particular API call (default is 25) */
  count?: number;
}

export interface ShelterPetSearchOptions {
  /** (default) A=adoptable, H=hold, P=pending, X=adopted/removed */
  status?: string;

  /** set this to the value of lastOffset returned by a previous call to findShelterPets, and it will retrieve the next result set */
  offset?: number;

  /** how many records to return for this particular API call (default is 25) */
  count?: number;

  /** How much of the pet record to return: id, (default) basic (no description), full */
  output?: string;
}

export interface ShelterSearchByBreedOptions {
  /** set this to the value of lastOffset returned by a previous call to searchShelters, and it will retrieve the next result set */
  offset?: number;

  /** how many records to return for this particular API call (default is 25) */
  count?: number;
}