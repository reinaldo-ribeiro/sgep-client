import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErroMsgComponent } from './compartilhado/erro-msg/erro-msg.component';
import { ListaPessoasComponent } from './paginas/lista-pessoas/lista-pessoas.component';
import { FormularioComponent } from './compartilhado/formulario/formulario.component';
import { CriarPessoaComponent } from './paginas/criar-pessoa/criar-pessoa.component';
import { EditarPessoaComponent } from './paginas/editar-pessoa/editar-pessoa.component';
import { FormularioExpProfComponent } from './compartilhado/formulario-exp-prof/formulario-exp-prof.component';
@NgModule({
  declarations: [
    AppComponent,
    ErroMsgComponent,
    ListaPessoasComponent,
    FormularioComponent,
    CriarPessoaComponent,
    EditarPessoaComponent,
    FormularioExpProfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
