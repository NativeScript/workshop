export class PetFinderModel {
  constructor(protected model: any) {
  }

  // get(param: string, defaultValue = undefined) {
  //   const item = this.model[param]['$t'];
  //   if (item === undefined) {
  //     return defaultValue;
  //   }

  //   return item;
  // }

  protected get(key, defaultValue = undefined) {
    // split the path into key elements. i.e key -> 'home.pets.pet'
    const keys: Array<string> = key.split(".")

    // extract the value from thee model based on the key i.e. 'model.home.pets.pet'
    // if the key doesn't exist then return undefined
    const val = keys.reduce((o, key) => {
        return (typeof o == "undefined" || o === null) ? o : o[key];
    }, this.model);

    // if the key value found then return the value otherwise return the defaultValue
    return (val) ? val : defaultValue;
  }

  protected getArray(key: string): Array<any> {
    // const item = this.model[param][array];
    const item = this.get(key, []);
    
    // check if the provided attribute is an array 
    if (Array.isArray(item)) {
      return item.map(item => item.$t);
    }
    else {
      return [item.$t];
    }
  }
  
}