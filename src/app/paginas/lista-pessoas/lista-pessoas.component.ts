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

  constructor(private pessoaService: PessoaService ) { }

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

  existemPessoas(): boolean {
    return this.pessoas && this.pessoas.length > 0;
  }

}
