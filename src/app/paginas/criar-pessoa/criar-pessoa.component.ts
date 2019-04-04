import { Component, ViewChild } from '@angular/core';
import { ErroMsgComponent } from '../../components/erro-msg/erro-msg.component';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/model/pessoa';

@Component({
  selector: 'app-criar-pessoa',
  templateUrl: './criar-pessoa.component.html',
  styleUrls: ['./criar-pessoa.component.css']
})
export class CriarPessoaComponent {
  @ViewChild(ErroMsgComponent) erroMsgComponent: ErroMsgComponent;

  constructor(private pessoaService: PessoaService, private router: Router) { }

  idPessoa: number = null;

  addPessoa(pessoa: Pessoa) {
    pessoa.data_nascimento = this.formatData(pessoa.data_nascimento);
    this.pessoaService.addPessoa(pessoa)
      .subscribe(res => {
        this.idPessoa = res.id;
        this.router.navigateByUrl('/');
      }, error => {
        this.erroMsgComponent.setError(`${error.error.msg}: ${error.error.errors[0].message}`);
      });
  }

  formatData = data => {
    return data.substring(0, 2) + "/" + data.substring(2, 4) + "/" + data.substring(4, 8);
  }

}
