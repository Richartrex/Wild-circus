import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from '../admin-auth.service';
import { UserService } from '../user.service';
import { PictureService } from '../picture.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  private router: Router

  access:boolean = true;
  showpic:boolean = false;
  public picture:any[];

  constructor(public loginService: AdminAuthService,
    public userService: UserService, 
    public pictureService: PictureService ) { }
  
  ngOnInit() {
  }

  showPicture(){
    this.pictureService.getPicture().subscribe(
      (p_picture: any[]) => {
        this.picture = p_picture;
       
        if (this.showpic == false){
          this.showpic = true;
        }else{
          this.showpic = false;
        }
      } 
    )
  }
  onSubmit(value:any){
    let jsonObject = {
      "username": value.username,
      "password": value.password
    }
    this.loginService.authForm(jsonObject).subscribe(
      () => {
        if (this.userService.getToken()!= null){
          this.access = false;
        }
      }
    );
  }
  
  logout(){
    this.loginService.logout();
    location.reload();
  }
}