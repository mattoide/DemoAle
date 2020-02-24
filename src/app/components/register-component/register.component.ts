import { Component, OnInit } from '@angular/core';
import {Azienda} from '../../models/azienda'



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

azienda: Azienda = new Azienda();

categorieX = ['Pizzeria', 'Ristorante', 'Paninoteca', 'Fast food', 'Take away', 'Trattoria', 'Pasticceria', 'Gelateria', 'Rosticceria', 'Pizzeria al taglio'];
prodottiX = ['Pizza', 'Primo', 'Secondo', 'Panini e sandwich', 'Dolci'];
serviziX = ['Consegna a domicilio', 'Buoni pasto', 'Buoni sconto', 'Accetta animali'];

categorie = [];
prodotti = [];
servizi = [];

errName = false;
errCat = false;
errProd = false;
errServ = false;

errProdServ = false;


  constructor() { 
    
  }

  ngOnInit(): void {

    for (let i = 0; i < this.categorieX.length; i++) {
        this.categorie.push({label: this.categorieX[i], value: this.categorieX[i]});
    }
    for (let i = 0; i < this.prodottiX.length; i++) {
      this.prodotti.push({label: this.prodottiX[i], value: this.prodottiX[i]});
    }
  for (let i = 0; i < this.serviziX.length; i++) {
    this.servizi.push({label: this.serviziX[i], value: this.serviziX[i]});
  }
  }

  verificaNome(){
    !this.azienda.nome ? this.errName = true : this.errName = false;
  }

verificaCategorie(){
  !this.azienda.categorie || this.azienda.categorie.length <= 0 ? this.errCat = true : this.errCat = false;

}

verificaProdotti(){
  !this.azienda.prodotti || this.azienda.prodotti.length <= 0 ? this.errProd = true : this.errProd = false;
  this.errProd == true && this.errServ == true ? this.errProdServ = true : this.errProdServ = false;
}

verificaServizi(){
  !this.azienda.servizi || this.azienda.servizi.length <= 0 ? this.errServ = true : this.errServ = false;
  this.errProd == true && this.errServ == true ? this.errProdServ = true : this.errProdServ = false;
}

submit(){
  this.verificaNome();
  this.verificaCategorie();
  this.verificaProdotti();
  this.verificaServizi();
  console.log(this.azienda)
}
}
