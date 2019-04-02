import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPessoasComponent } from './paginas/lista-pessoas/lista-pessoas.component';

const routes: Routes = [
  {path: '', component: ListaPessoasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
