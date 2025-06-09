export class ScreeningDto {
  constructor(
    public readonly id: string,
    public readonly movieId: string,
    public readonly theaterId: string,
    public readonly date: Date,
    public readonly startTime: string,
    public readonly endTime: string,
    public readonly availableSeats: number,
    public readonly status: 'scheduled' | 'in-progress' | 'finished' | 'cancelled'
  ) {}
}

export class CreateScreeningDto {
  constructor(
    public readonly movieId: string,
    public readonly theaterId: string,
    public readonly date: Date,
    public readonly startTime: string,
    public readonly endTime: string
  ) {}
}

export class UpdateScreeningDto {
  constructor(
    public readonly date?: Date,
    public readonly startTime?: string,
    public readonly endTime?: string,
    public readonly status?: 'scheduled' | 'in-progress' | 'finished' | 'cancelled'
  ) {}
}