import { ExperienciaProfissional } from './experiencia-profissional';

export class Pessoa {
    id: number;
    nome: string;
    data_nascimento: string;
    email: string;
    experienciasProfissionais: ExperienciaProfissional[];
}
