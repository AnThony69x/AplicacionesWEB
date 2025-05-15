import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Presentacion } from "../entities/Presentacion";

export class PresentacionRepository {
  private repository: Repository<Presentacion>;
  
  constructor() {
    this.repository = AppDataSource.getRepository(Presentacion);
  }

  async findAll(): Promise<Presentacion[]> {
    return this.repository.find({
      relations: ["usuario", "slides", "temas", "calificaciones"]
    });
  }

  async findById(id: number): Promise<Presentacion | null> {
    return this.repository.findOne({
      where: { id },
      relations: ["usuario", "slides", "temas", "calificaciones"]
    });
  }
  
  async findByTema(temaId: number): Promise<Presentacion[]> {
    return this.repository.createQueryBuilder("presentacion")
      .innerJoinAndSelect("presentacion.temas", "tema")
      .innerJoinAndSelect("presentacion.usuario", "usuario")
      .where("tema.id = :temaId", { temaId })
      .getMany();
  }

  async create(data: Partial<Presentacion>): Promise<Presentacion> {
    const presentacion = this.repository.create(data);
    return this.repository.save(presentacion);
  }

  async update(id: number, data: Partial<Presentacion>): Promise<Presentacion | null> {
    await this.repository.update(id, data);
    return this.findById(id);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.repository.delete(id);
    return !!result.affected;
  }
}