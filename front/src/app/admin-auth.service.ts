import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { UserService } from './user.service';

const HttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  
  public token: string;
  authenticate:boolean = false;
  constructor(private myService: HttpClient, 
    private userService:UserService) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }
  
  public authForm(data:any): Observable<any> {
    const loginUrl:string = "http://localhost:8080/authenticate";
    let method = this.myService.post<any>(loginUrl, data , HttpOptions).pipe(
      map(user => {
        // connexion réussie s'il y a un jeton JWT dans la réponse
        if (user && user.token) {
          /* stocke les détails de l'utilisateur et le jeton jwt dans localStorage pour que
           l'utilisateur reste connecté entre les actualisations de la page */
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.userService.setToken(user.token);
        }
        return user;
      })
      );
      return method;
    }
    
    public logout(): void {
      // Efface le jeton en supprimant l'utilisateur du magasin local pour se déconnecter.
      this.token = null;
      localStorage.removeItem('currentUser');
    }
  }
