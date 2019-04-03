import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ExperienciaProfissional } from 'src/app/interfaces/experiencia-profissional';

@Component({
  selector: 'app-formulario-exp-prof',
  templateUrl: './formulario-exp-prof.component.html',
  styleUrls: ['./formulario-exp-prof.component.css']
})
export class FormularioExpProfComponent {
  @Input() experiencia: ExperienciaProfissional = <ExperienciaProfissional>{};
  @Output() outputExperiencia: EventEmitter<ExperienciaProfissional> = new EventEmitter();

  onSubmit() {
    this.outputExperiencia.emit(this.experiencia);
  }

}
