import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, from} from 'rxjs';
import {Azienda} from '../../models/azienda'
import {api} from '../../constants/api'




@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  constructor(private http: HttpClient) { }

  registraAzienda(azienda: Azienda): Observable<any>{
    return this.http.post(api.registraAzienda, {azienda:azienda});
  }


}
