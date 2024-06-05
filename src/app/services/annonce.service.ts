import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Annonce} from "../models/annonce.module";

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  private apiUrl = 'http://localhost:9003/api/annonces';

  constructor(private http: HttpClient) { }

  getAllAnnonces(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.apiUrl);
  }
  getNewestSixAnnonces():Observable<Annonce[]>{
    return this.http.get<Annonce[]>(`${this.apiUrl}/latest`)
  }
  getSliderAnnonces():Observable<Annonce[]>{
    return this.http.get<Annonce[]>(`${this.apiUrl}/slider`)
  }
  getAnnonceBySlug(slug:string): Observable<Annonce>{
    return this.http.get<Annonce>(`${this.apiUrl}/slug/${slug}`);
  }
  getAnnonceById(id: number): Observable<Annonce> {
    return this.http.get<Annonce>(`${this.apiUrl}/${id}`);
  }

  createAnnonce(annonce: any): Observable<Annonce> {
    return this.http.post<Annonce>(this.apiUrl, annonce);
  }

  updateAnnonce(id: number, annonce: Annonce): Observable<Annonce> {
    return this.http.put<Annonce>(`${this.apiUrl}/${id}`, annonce);
  }

  deleteAnnonce(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/${id}`);
  }
}
