import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExperienciaProfissional } from '../interfaces/experiencia-profissional';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaProfissionalService {

  constructor(private http: HttpClient) { }

  getListaExperienciasProfissionais(idPessoa: number): Observable<ExperienciaProfissional[]>{
    const url = `${environment.baseUrl}/experiancias_profissionais/pessoa/${idPessoa}`;
    return this.http.get<ExperienciaProfissional[]>(url);
  }

  getExperienciaProfissional(id: number): Observable<ExperienciaProfissional> {
    const url = `${environment.baseUrl}/experiancias_profissionais/${id}`;
    return this.http.get<ExperienciaProfissional>(url);
  }

  addExperienciaProfissional(experiencia: ExperienciaProfissional): Observable<ExperienciaProfissional> {
    const url = `${environment.baseUrl}/experiancias_profissionais`;
    return this.http.post<ExperienciaProfissional>(url, experiencia);
  }

  updateExperienciaProfissional(experiencia: ExperienciaProfissional): Observable<ExperienciaProfissional> {
    const url = `${environment.baseUrl}/experiancias_profissionais/${experiencia.id}`;
    return this.http.put<ExperienciaProfissional>(url, experiencia);
  }

  deleteExperienciaProfissional(id: number): Observable<ExperienciaProfissional> {
    const url = `${environment.baseUrl}/experiancias_profissionais/${id}`;
    return this.http.delete<ExperienciaProfissional>(url);
  }

}
