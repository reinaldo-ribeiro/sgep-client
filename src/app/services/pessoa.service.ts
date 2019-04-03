import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../interfaces/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  getListaPessoas(): Observable<Pessoa[]>{
    const url = `${environment.baseUrl}/pessoas`;
    console.log(url);
    return this.http.get<Pessoa[]>(url);
  }

  getPessoa(id: number): Observable<Pessoa> {
    const url = `${environment.baseUrl}/pessoas/${id}`;
    return this.http.get<Pessoa>(url);
  }

  addPessoa(pessoa: Pessoa): Observable<Pessoa> {
    const url = `${environment.baseUrl}/pessoas`;
    return this.http.post<Pessoa>(url, pessoa);
  }

  updatePessoa(pessoa: Pessoa): Observable<Pessoa> {
    const url = `${environment.baseUrl}/pessoas/${pessoa.id}`;
    return this.http.put<Pessoa>(url, pessoa);
  }

  deletePessoa(id: number): Observable<Pessoa> {
    const url = `${environment.baseUrl}/pessoas/${id}`;
    return this.http.delete<Pessoa>(url);
  }

}
