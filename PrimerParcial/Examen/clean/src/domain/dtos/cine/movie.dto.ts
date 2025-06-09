export class MovieDto {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    public readonly duration: number,
    public readonly genre: string,
    public readonly rating: string,
    public readonly posterUrl: string,
    public readonly isActive: boolean
  ) {}
}

export class CreateMovieDto {
  constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly duration: number,
    public readonly genre: string,
    public readonly rating: string,
    public readonly posterUrl: string
  ) {}
}

export class UpdateMovieDto {
  constructor(
    public readonly title?: string,
    public readonly description?: string,
    public readonly duration?: number,
    public readonly genre?: string,
    public readonly rating?: string,
    public readonly posterUrl?: string,
    public readonly isActive?: boolean
  ) {}
}