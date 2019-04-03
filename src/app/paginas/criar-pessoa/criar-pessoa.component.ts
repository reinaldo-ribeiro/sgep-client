import { Component, ViewChild } from '@angular/core';
import { ErroMsgComponent } from '../../compartilhado/erro-msg/erro-msg.component';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/interfaces/pessoa';

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
    this.pessoaService.addPessoa(pessoa)
      .subscribe(res => {
        this.idPessoa = res.id;
        console.log(this.idPessoa);
        this.router.navigateByUrl('/');
      }, error => {
        this.erroMsgComponent.setError(`${error.error.msg}: ${error.error.errors[0].message}`);
      });
  }

  addExperiencia(pessoaId: number) {
    
  }

  /*
   .subscribe(
        () => { this.router.navigateByUrl('/'); },
        (error) => { this.erroMsgComponent.setError(`${ error.error.msg }: ${error.error.errors[0].message}`); });
   */
}
