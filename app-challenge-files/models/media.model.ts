export class Media {

  constructor(private photos: Array<any>) {
  }

  /**
   * Returns collection of urls for a given image size
   * @param size of the required image
   */
  getImages(size: ImageSize): Array<string> {
    return this.photos.filter(
      val => {
        return val['@size'] === ImageSize[size];
      })
      .map(item => item.$t);
  }

  getFirstImage(size: ImageSize, defaultUrl: string) {
    const images = this.getImages(size);

    return (images.length > 0) ? images[0] : defaultUrl;
  }
  getSecondImage(size: ImageSize, defaultUrl: string) {
    const images = this.getImages(size);

    return (images.length > 0) ? images[1] : defaultUrl;
  }
}

export enum ImageSize {
  /** thumbnail (max 50 pixels high) */
  t,

  /** petnote thumbnail (max 60 pixels wide) */
  pnt,

  /** featured pet module (max 95 pixels wide) */
  fpm,

  /** petnote (max 300x250) */
  pn,

  /** large (max 500x500) */
  x
}