type SeatType = 'normal' | 'vip' | 'disabled';

export class SeatDto {
  constructor(
    public readonly id: string,
    public readonly theaterId: string,
    public readonly row: string,
    public readonly number: number,
    public readonly type: SeatType,
    public readonly isAvailable: boolean
  ) {}
}

export class CreateSeatDto {
  constructor(
    public readonly theaterId: string,
    public readonly row: string,
    public readonly number: number,
    public readonly type: SeatType
  ) {}
}

export class UpdateSeatDto {
  constructor(
    public readonly row?: string,
    public readonly number?: number,
    public readonly type?: SeatType,
    public readonly isAvailable?: boolean
  ) {}
}