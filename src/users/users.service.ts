import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository, Connection, DeepPartial } from 'typeorm';
import { CreateUserDto } from './dtos/create-users.dto';
import { UserRole } from './users.role';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async add(user: CreateUserDto): Promise<void> {
    this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async update(id: any, dados: any): Promise<User> {
    const u = await this.userRepository.findOneOrFail({ id });
    this.userRepository.merge(u, dados)
    return await this.userRepository.save(u);
  }

  async login(username: string): Promise<User> {
    try {
      return await this.userRepository.findOneOrFail({ username });
    } catch(error) {
      return null
    }
  }

  async altUser(id: any) {
    
    await this.userRepository.manager.transaction(async (manager) => {
      const u = await this.userRepository.findOneOrFail({ id });

      const consultas = u.consultas + 1;

      const dados = {
        'nome': u.nome,
        'nascimento': u.nascimento,
        'cpf': u.cpf,
        'sus': u.sus,
        'username': u.username,
        'password': u.password,
        'perfil': u.perfil,
        'consultas': consultas
      };

      this.userRepository.merge(u, dados);

      this.userRepository.save(u);
      
    });
  }

}
