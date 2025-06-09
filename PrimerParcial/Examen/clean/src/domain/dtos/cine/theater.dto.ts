export class TheaterDto {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly capacity: number,
    public readonly rows: number,
    public readonly seatsPerRow: number,
    public readonly isActive: boolean
  ) {}
}

export class CreateTheaterDto {
  constructor(
    public readonly name: string,
    public readonly capacity: number,
    public readonly rows: number,
    public readonly seatsPerRow: number
  ) {}
}

export class UpdateTheaterDto {
  constructor(
    public readonly name?: string,
    public readonly capacity?: number,
    public readonly rows?: number,
    public readonly seatsPerRow?: number,
    public readonly isActive?: boolean
  ) {}
}