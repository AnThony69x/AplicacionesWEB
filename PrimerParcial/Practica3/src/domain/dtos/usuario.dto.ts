export interface CreateUsuarioDto {
  nombre: string;
  email: string;
  password?: string;
  tipo: string;
}

export interface UpdateUsuarioDto {
  nombre?: string;
  email?: string;
  password?: string;
  tipo?: string;
}