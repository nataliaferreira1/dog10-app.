import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import Endereco from '../domain/endereco';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-finalizar-pedido',
  templateUrl: './finalizar-pedido.page.html',
  styleUrls: ['./finalizar-pedido.page.scss'],
})
export class FinalizarPedidoPage implements OnInit {

  title;
  price;
  image;

  constructor(private alert: AlertController, private nav: NavController, private route:ActivatedRoute) { }

  mostrarHot(){
    const title = this.route.snapshot.params.id;
    const price = this.route.snapshot.params.price;
    const image = this.route.snapshot.params.image;
    this.title=title;
    this.price=price;
    this.image=image;
  }

  ionViewDidEnter(){
    this.mostrarHot();
  }
  

  ngOnInit() {
    
  }
  buscar(cep) {
    const cepString = cep.el.value
    if (cepString === '' || cepString.length !== 8 || !cepString.match(/^\d+$/g)) {
      console.log("CEP Inválido");
    } else {
      console.log("CEP Válido");
      let retorno = fetch('https://viacep.com.br/ws/' + cepString + '/json')
      console.log("Enviando requisição...")
      retorno.then(dados => {
        return dados.json()
      }).then(endereco => {
        if (endereco.erro) {
          console.error('CEP Inexistente')
        } else {
          this.alert.create({
            header: 'Seu endereço está correto?',
            subHeader: `${endereco.logradouro}, ${endereco.bairro}, ${endereco.localidade} - ${endereco.uf.toUpperCase()}`,
            buttons: [{
              text: 'Não'
            }, {
              text: 'Sim',
              handler: () => {
                this.alert.dismiss()
                this.alert.create({
                  header: "Qual seu número?",
                  inputs: [{
                    name: "numero",
                    type: "number"
                  }],
                  buttons: [{
                    text: 'Cancelar'
                  }, {
                    text: 'Salvar',
                    handler: (dados) => {
                      let tempEnd = new Endereco()
                      tempEnd.bairro = endereco.bairro
                      tempEnd.cidade = endereco.localidade
                      tempEnd.estado = endereco.uf
                      tempEnd.numero = dados.numero
                      tempEnd.rua = endereco.logradouro
                      tempEnd.cep = endereco.cep
                      tempEnd.salvar()
                      this.nav.back()
                    }
                  }]
                }).then(alert => {
                  alert.present()
                })
              }
            }]
          }).then(alert => {
            alert.present()
          })
        }
      })
    }
  }
}


