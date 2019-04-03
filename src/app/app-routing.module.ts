import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPessoasComponent } from './paginas/lista-pessoas/lista-pessoas.component';
import { CriarPessoaComponent } from './paginas/criar-pessoa/criar-pessoa.component';
import { EditarPessoaComponent } from './paginas/editar-pessoa/editar-pessoa.component';

const routes: Routes = [
  {path: '', component: ListaPessoasComponent},
  {path: 'pessoa/inserir', component: CriarPessoaComponent },
  {path: 'pessoa/editar/:id', component: EditarPessoaComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
