import { Component, OnInit } from '@angular/core';
import {Azienda} from '../../models/azienda'



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

azienda: Azienda = new Azienda();

  constructor() { }

  ngOnInit(): void {
  }

  getVal(val){
    console.log(val)
  }
}
