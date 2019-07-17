import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {

  display:boolean = false;
  modalsrc = "";
  constructor() { }

  ngOnInit() {
  }

  modal(event:Event):void{
    let img:HTMLImageElement = event.target as HTMLImageElement
    this.modalsrc = img.src;
    this.toggleModal();
  }

  toggleModal():void{
    let modalcontainer:HTMLElement = document.getElementById("myModal");
    this.display = !this.display;

    if( this.display ){
      modalcontainer.style.display = "block";
    }
    else{
      modalcontainer.style.display = "none";
    }
  }

}
