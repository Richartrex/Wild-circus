import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  lastname: string;
  firstname: string;
  phoneNumber: number;
  email: string;
  check: any;

  constructor() { }

  ngOnInit() {
  }

}
