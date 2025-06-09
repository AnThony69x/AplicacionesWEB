export class CreateMovieDto {
  constructor(
    public title: string,
    public description: string,
    public duration: number,
    public genre: string,
    public classification: string,
    public posterUrl: string,
    public status?: boolean
  ) {}

  static create(props: {[key:string]: any}): [string?, CreateMovieDto?] {
    const { title, description, duration, genre, classification, posterUrl, status } = props;
    
    if (!title) return ['Title is required', undefined];
    if (!description) return ['Description is required', undefined];
    if (!duration || isNaN(Number(duration))) return ['Duration must be a valid number', undefined];
    if (!genre) return ['Genre is required', undefined];
    if (!classification) return ['Classification is required', undefined];
    
    return [undefined, new CreateMovieDto(
      title, 
      description, 
      Number(duration), 
      genre, 
      classification, 
      posterUrl || '', 
      status ?? true
    )];
  }
}