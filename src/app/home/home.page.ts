import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotdogService } from '../services/hotdog.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  hotdogs = []

  constructor(private router:Router, private hotdogService:HotdogService) {}

  ionViewDidEnter(){
    this.hotdogService.getDogs().subscribe(resposta =>{
      this.hotdogs = resposta
    })
  }

  detalhes(title, price, image ){
  this.router.navigate(['/finalizar-pedido', title, price, image ]);
}
}
