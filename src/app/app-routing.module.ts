import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'pets', loadChildren: () => import('./features/pets/pets.module').then(m => m.PetsModule) }, { path: 'agendamentos', loadChildren: () => import('./features/agendamentos/agendamentos.module').then(m => m.AgendamentosModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
