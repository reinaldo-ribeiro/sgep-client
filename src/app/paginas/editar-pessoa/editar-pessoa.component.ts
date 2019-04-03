import { Component, ViewChild } from '@angular/core';
import { ErroMsgComponent } from '../../compartilhado/erro-msg/erro-msg.component';
import { PessoaService } from '../../services/pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../../interfaces/pessoa';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent {
  public pessoa: Pessoa;
  @ViewChild(ErroMsgComponent) erroMsgComponent: ErroMsgComponent;

  constructor(
    private pessoaService: PessoaService,
    private activetedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.getPessoa(this.activetedRoute.snapshot.params.id);
  }

  getPessoa(id: number) {
    this.pessoaService.getPessoa(id)
      .subscribe((pessoa: Pessoa) => {
        this.pessoa = pessoa;
      }, () => { this.erroMsgComponent.setError('Falha ao obter pessoa'); });
  }

  updatePessoa(pessoa: Pessoa) {
    this.pessoaService.updatePessoa(pessoa)
    .subscribe(
      () => { this.router.navigateByUrl('/'); },
      () => { this.erroMsgComponent.setError('Erro ao atualizar pessoa'); });
  }

}
