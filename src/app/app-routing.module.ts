import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineaComponent } from './components/linea/linea.component';
import { BarraComponent } from './components/barra/barra.component';


const routes: Routes = [
  {path: 'lineas', component: LineaComponent},
  {path: 'barras', component: BarraComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'lineas'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
