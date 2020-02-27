import { Component, OnInit } from '@angular/core';
import { Azienda } from '../../models/azienda'
import {RegisterService} from '../../services/register-service/register.service'
import {GetOptionsService} from '../../services/get-options-service/get-options.service'
import {Message} from 'primeng//api';
import {MessageService} from 'primeng/api';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  azienda: Azienda = new Azienda();

  // categorieX = ['Pizzeria', 'Ristorante', 'Paninoteca', 'Fast food', 'Take away', 'Trattoria', 'Pasticceria', 'Gelateria', 'Rosticceria', 'Pizzeria al taglio'];
  // prodottiX = ['Pizza', 'Primo', 'Secondo', 'Panini e sandwich', 'Dolci'];
  // serviziX = ['Consegna a domicilio', 'Buoni pasto', 'Buoni sconto', 'Accetta animali'];

  // toponimo = ['Via', 'Viale', 'Strada', 'Contrada'];

  categorie = [];
  prodotti = [];
  servizi = [];
  toponimi = [];

  errName = null;
  errTop = null;
  errInd = null;
  errCiv = null;
  errCat = false;
  errProd = false;
  errServ = false;

  errProdServ = false;

  constructor(
    private registerService: RegisterService,
    private getOptionsService: GetOptionsService,
    private messageService: MessageService
    ) {}

  ngOnInit(): void {

    this.getOptionsService.getCategorie().subscribe(
      result =>{
        
    for (let i = 0; i < result.length; i++) {
      this.categorie.push({ label: result[i].categoria, value: result[i].categoria });
    }
      }, 
      err =>{
        console.log(err)
      }
    )

    this.getOptionsService.getProdotti().subscribe(
      result =>{
        
    for (let i = 0; i < result.length; i++) {
      this.prodotti.push({ label: result[i].prodotto, value: result[i].prodotto });
    }
      }, 
      err =>{
        console.log(err)
      }
    )

    this.getOptionsService.getServizi().subscribe(
      result =>{
        
    for (let i = 0; i < result.length; i++) {
      this.servizi.push({ label: result[i].servizio, value: result[i].servizio });
    }
      }, 
      err =>{
        console.log(err)
      }
    )

    
    this.getOptionsService.getToponimi().subscribe(
      result =>{
        
    for (let i = 0; i < result.length; i++) {
      this.toponimi.push(result[i].toponimo);
    }
      }, 
      err =>{
        console.log(err)
      }
    )

    let filtri = {categorie:["Fast Food", "Gelateria"], prodotti:["Pizza"], servizi:["Consegna a domicilio"]};

    this.getOptionsService.Az(filtri).subscribe(res=>{
      console.log(res)

    }, err =>{
      console.log(err)
    })

  }

  verificaNome() {
    !this.azienda.nome ? this.errName = "Il nome è obbligatorio" : this.azienda.nome.length < 3 ? this.errName = "Il nome deve essere composto da almeno 3 caratteri" : this.errName = null;
  }


  verificaToponimo() {
    !this.azienda.toponimo ? this.errInd = "Completa l'indirizzo" : this.errInd = null;
  }
  
  verificaIndirizzo() {
    !this.azienda.indirizzo ? this.errInd = "Completa l'indirizzo" : this.errInd = null;
  }
  
  verificaCivico() {
    !this.azienda.civico ? this.errInd = "Completa l'indirizzo" : this.errInd = null;
  }

  verificaCategorie() {
    !this.azienda.categorie || this.azienda.categorie.length <= 0 ? this.errCat = true : this.errCat = false;

  }

  verificaProdotti() {
    !this.azienda.prodotti || this.azienda.prodotti.length <= 0 ? this.errProd = true : this.errProd = false;
    this.errProd == true && this.errServ == true ? this.errProdServ = true : this.errProdServ = false;
  }

  verificaServizi() {
    !this.azienda.servizi || this.azienda.servizi.length <= 0 ? this.errServ = true : this.errServ = false;
    this.errProd == true && this.errServ == true ? this.errProdServ = true : this.errProdServ = false;
  }

  submit() {

    this.verificaNome();
    this.verificaToponimo();
    this.verificaIndirizzo();
    this.verificaCivico();
    this.verificaCategorie();
    this.verificaProdotti();
    this.verificaServizi();

      if(this.errName == null && this.errInd == null  && this.errCiv == null && this.errCat == false && this.errProdServ == false && this.errInd == null){
        this.registra();
    }

  }

  registra(){
    this.registerService.registraAzienda(this.azienda).subscribe(
      result =>{
        console.log(result)
        this.showMsg("success", "Successo!", result)
      },
      (err) =>{
        console.error(err)
        this.errName = err.error.msg;
        this.showMsg("error", "C'è stato un problema!", err.error.msg)

      }
    )
  }

  rimuoviCategoria(cat) {
    cat = this.azienda.categorie;
    cat.splice(this.azienda.categorie.indexOf(cat), 1);
    this.azienda.categorie = [];
    cat.forEach(element => {
      this.azienda.categorie.push(element)
    });
  }

  rimuoviProdotto(prod) {
    prod = this.azienda.prodotti;
    prod.splice(this.azienda.prodotti.indexOf(prod), 1);
    this.azienda.prodotti = [];
    prod.forEach(element => {
      this.azienda.prodotti.push(element)
    });
  }

  rimuoviServizio(serv) {
    serv = this.azienda.servizi;
    serv.splice(this.azienda.servizi.indexOf(serv), 1);
    this.azienda.servizi = [];
    serv.forEach(element => {
      this.azienda.servizi.push(element)
    });
  }

  showMsg(severity, summary, detail) {
    this.messageService.add({severity:severity, summary:summary, detail:detail});
  }

  hideMsg(){
    this.messageService.clear();
  }  

}