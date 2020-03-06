import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { api } from '../../constants/api'

@Injectable({
  providedIn: 'root'
})
export class GetOptionsService {

  constructor(private http: HttpClient) { }

  getCategorie(): Observable<any> {
    return this.http.get(api.getCategorie);
  }

  getProdotti(): Observable<any> {
    return this.http.get(api.getProdotti);
  }

  getServizi(): Observable<any> {
    return this.http.get(api.getServizi);
  }

  getToponimi(): Observable<any> {
    return this.http.get(api.getToponimi);
  }

}
