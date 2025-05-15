import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Tema } from "../entities/Tema";

export class TemaRepository {
  private repository: Repository<Tema>;
  
  constructor() {
    this.repository = AppDataSource.getRepository(Tema);
  }

  async findAll(): Promise<Tema[]> {
    return this.repository.find({
      relations: ["presentaciones"]
    });
  }

  async findById(id: number): Promise<Tema | null> {
    return this.repository.findOne({
      where: { id },
      relations: ["presentaciones"]
    });
  }

  async create(data: Partial<Tema>): Promise<Tema> {
    const tema = this.repository.create(data);
    return this.repository.save(tema);
  }

  async update(id: number, data: Partial<Tema>): Promise<Tema | null> {
    await this.repository.update(id, data);
    return this.findById(id);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.repository.delete(id);
    return !!result.affected;
  }
}