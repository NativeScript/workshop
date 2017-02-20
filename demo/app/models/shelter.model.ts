import { PetFinderModel, Contact, Media } from '.';

export class Shelter extends PetFinderModel {

  constructor(model: any) {
    super(model);
  }

  /**
   * Shelter id
   */
  get id(): string {
    return this.get('id.$t', '');
  }

  /**
   * Shelter name
   */
  get name(): string {
    return this.get('name.$t', '');
  }

  /**
   * Shelter address1
   */
  get address1(): string {
    return this.get('address1.$t', '');
  }

  /**
   * Shelter address2
   */
  get address2(): string {
    return this.get('address2.$t', '');
  }

  /**
   * Shelter city
   */
  get city(): string {
    return this.get('city.$t', '');
  }

  /**
   * Shelter state
   */
  get state(): string {
    return this.get('state.$t', '');
  }

  /**
   * Shelter country
   */
  get country(): string {
    return this.get('country.$t', '');
  }

  /**
   * Shelter latitude
   */
  get latitude(): number {
    return +this.get('latitude.$t', 0);
  }

  /**
   * Shelter longitude
   */
  get longitude(): number {
    return +this.get('longitude.$t', 0);
  }

  /**
   * Shelter phone
   */
  get phone(): string {
    return this.get('phone.$t', '');
  }

  /**
   * Shelter fax
   */
  get fax(): string {
    return this.get('fax.$t', '');
  }

  /**
   * Shelter email
   */
  get email(): string {
    return this.get('email.$t', '');
  }
}