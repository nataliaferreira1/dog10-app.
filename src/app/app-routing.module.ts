import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'finalizar-pedido/:id/:price/:image', loadChildren: './finalizar-pedido/finalizar-pedido.module#FinalizarPedidoPageModule' },
  { path: 'add-dog', loadChildren: './add-dog/add-dog.module#AddDogPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
