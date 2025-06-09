export class Movie {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public duration: number,
    public genre: string,
    public classification: string,
    public posterUrl: string,
    public status: boolean
  ) {}

  static fromObject(object: {[key: string]: any}): Movie {
    return new Movie(
      object.id,
      object.title,
      object.description,
      object.duration,
      object.genre,
      object.classification,
      object.posterUrl,
      object.status ?? true
    );
  }
}