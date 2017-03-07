import { Contact, Media } from './';

export class Pet {

  constructor(
    public id: string,
    public name: string,
    public animal: string,
    public breeds: Array<any>,
    public mix: boolean,
    public age: string,
    public sex: string,
    public size: string,
    public description: string,
    public options: Array<string>,
    public status: string,
    public lastUpdate: Date,
    public media: Media,
    public contact: Contact,
    public shelterId: string,
    public shelterPetId: string
  ){};
}
