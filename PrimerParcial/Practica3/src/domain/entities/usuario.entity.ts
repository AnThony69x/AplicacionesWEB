export interface Usuario {
  id?: number;
  nombre: string;
  email: string;
  password: string;
  fechaCreacion?: Date;
  fechaActualizacion?: Date;
  activo?: boolean;
}

export class UsuarioEntity implements Usuario {
  constructor(
    public nombre: string,
    public email: string,
    public password: string,
    public id?: number,
    public fechaCreacion?: Date,
    public fechaActualizacion?: Date,
    public activo: boolean = true
  ) {}

  // Métodos de dominio
  validarEmail(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }

  validarPassword(): boolean {
    return this.password.length >= 6;
  }

  estaActivo(): boolean {
    return this.activo === true;
  }
}