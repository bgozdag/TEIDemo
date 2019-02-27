import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Document } from '../Model/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  private headers: HttpHeaders;
  private apiUrl: string = '/api/document';
  public documents: Document[] = [];


  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public getAllDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>(this.apiUrl, { headers: this.headers });
  }

  public getDocument(id): any {
    return this.http.get(this.apiUrl + '/' + id, { headers: this.headers });
  }

  public addDocument(payload) {
    return this.http.post(this.apiUrl, payload, { headers: this.headers });
  }

  public removeDocument(id) {
    return this.http.delete(this.apiUrl + '/' + id, { headers: this.headers });
  }

  public updateDocument(payload) {
    return this.http.put(this.apiUrl + '/' + payload.id, payload, { headers: this.headers });
  }

}
