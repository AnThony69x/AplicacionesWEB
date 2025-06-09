export class UpdateMovieDto {
  private constructor(
    public readonly id: string,
    public readonly title?: string,
    public readonly description?: string,
    public readonly duration?: number,
    public readonly genre?: string,
    public readonly classification?: string,
    public readonly posterUrl?: string,
    public readonly status?: boolean,
  ){}

  get values() {
    const returnObj: {[key: string]: any} = {};
    
    if (this.title) returnObj.title = this.title;
    if (this.description) returnObj.description = this.description;
    if (this.duration) returnObj.duration = this.duration;
    if (this.genre) returnObj.genre = this.genre;
    if (this.classification) returnObj.classification = this.classification;
    if (this.posterUrl) returnObj.posterUrl = this.posterUrl;
    if (this.status !== undefined) returnObj.status = this.status;
    
    return returnObj;
  }

  static create(props: {[key:string]: any}): [string?, UpdateMovieDto?] {
    const { id, title, description, duration, genre, classification, posterUrl, status } = props;
    
    if (!id) return ['Id is required', undefined];
    
    return [undefined, new UpdateMovieDto(
      id,
      title,
      description,
      duration !== undefined ? Number(duration) : undefined,
      genre,
      classification,
      posterUrl,
      status
    )];
  }
}