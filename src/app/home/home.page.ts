import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {}


hotdogList: Array<Object> = [
  {
    "title": "DOGÃO 1",
    "description": "1 Salsicha, 1 Folha de alface, Tomate, Cebola e Ketchup",
    "price": "R$ 5,50",
    "image": "../assets/img/dogao2.jfif",
  },
  {
    "title": "DOGUINHO",
    "description": "1 Salsicha, 1 Folha de alface e mostarda",
    "price": "R$ 3,50",
    "image": "assets/img/dogao1.jfif",
  },
  {
    "title": "Hot Dog Vegetariano",
    "description": "1 Beringela, Pepino fatiado, alface e tomate",
    "price": "R$ 8,50",
    "image": "assets/img/dogao3.jpg",
  }
];
  detalhes(title, price, image ){
  this.router.navigate(['/finalizar-pedido', title, price, image ]);
}
}
