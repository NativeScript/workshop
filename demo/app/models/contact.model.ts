import { PetFinderModel } from '.';

export class Contact extends PetFinderModel {
  constructor(contact: any) {
    super(contact);
  }

  get name(): string {
    return this.get('name.$t', '');
  }
  get address1(): string {
    return this.get('address1.$t', '');
  }
  get address2(): string {
    return this.get('address2.$t', '');
  }
  get state(): string {
    return this.get('state.$t', '');
  }
  get zip(): string {
    return this.get('zip.$t', '');
  }
  get phone(): string {
    return this.get('phone.$t', '');
  }
  get fax(): string {
    return this.get('fax.$t', '');
  }
  get email(): string {
    return this.get('email.$t', '');
  }
}
