import { Component, OnInit, ViewChild } from '@angular/core';
import { Pessoa } from '../../interfaces/pessoa';
import { ErroMsgComponent } from 'src/app/compartilhado/erro-msg/erro-msg.component';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css']
})
export class ListaPessoasComponent implements OnInit {

  public pessoas: Pessoa[];
  @ViewChild(ErroMsgComponent) erroMsgComponent: ErroMsgComponent;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.getListaPessoas();
  }

  getListaPessoas() {
    this.pessoaService.getListaPessoas()
      .subscribe((pessoas: Pessoa[]) => {
        this.pessoas = pessoas;
      }, () => { this.erroMsgComponent.setError('Falha ao listar pessoas'); })
  }

  deletePessoa(id: number) {
    console.log(id);
    this.pessoaService.deletePessoa(id)
      .subscribe(() => {
        this.getListaPessoas();
      }, () => { this.erroMsgComponent.setError('Erro ao deletar pessoa!'); });
  }

  getIdadePessoa(data_nascimento: string) {
    let arrData = data_nascimento.split('/');

    const current_date = new Date();
    const current_day = current_date.getDay();
    const current_month = current_date.getMonth();
    const current_year = current_date.getFullYear();

    const birth_day = +arrData[arrData.length - 1];
    const birth_month = +arrData[arrData.length - 1];
    const birth_year = +arrData[arrData.length - 1];

    let years = current_year - birth_year;

    if (current_month < birth_month || current_month === birth_month && current_day < birth_day) {
      years--;
    }

    return years;
  }

  existemPessoas(): boolean {
    return this.pessoas && this.pessoas.length > 0;
  }

}
