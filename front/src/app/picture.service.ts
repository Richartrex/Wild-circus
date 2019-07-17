import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const HttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  private service: HttpClient;
  constructor(param_service: HttpClient) {
    this.service = param_service;
  }

  public getPicture(): Observable<any>{
    const url:string = "http://localhost:8080/picture"
    return this.service.get<any>(url,HttpOptions)
  }
}
