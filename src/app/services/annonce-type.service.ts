import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AnnonceType} from "../models/annonce-type.module";

@Injectable({
  providedIn: 'root'
})
export class AnnonceTypeService {
  private apiUrl = 'http://localhost:9003/api/annonceTypes';

  constructor(private http: HttpClient) { }

  getAllAnnonceTypes(): Observable<AnnonceType[]> {
    return this.http.get<AnnonceType[]>(this.apiUrl);
  }
  getAnnonceTypeById(id: number): Observable<AnnonceType> {
    return this.http.get<AnnonceType>(`${this.apiUrl}/${id}`);
  }

  createAnnonceType(annonceType: AnnonceType): Observable<AnnonceType> {
    return this.http.post<AnnonceType>(this.apiUrl, annonceType);
  }

  updateAnnonceType(id: number, annonceType: AnnonceType): Observable<AnnonceType> {
    return this.http.put<AnnonceType>(`${this.apiUrl}/${id}`, annonceType);
  }

  deleteAnnonceType(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/${id}`);
  }
}
