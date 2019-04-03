import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pessoa } from '../../interfaces/pessoa';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Input() pessoa: Pessoa = <Pessoa>{};
  @Output() outputPessoa: EventEmitter<Pessoa> = new EventEmitter();

  onSubmit() {
    this.outputPessoa.emit(this.pessoa);
  }
}
