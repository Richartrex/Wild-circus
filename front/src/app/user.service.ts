import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userToken:string;
  constructor() {
    this.userToken = null;
   }

  public getToken(){
    return this.userToken;
  }

  public setToken(token:string){
    this.userToken = token;
  }
}
