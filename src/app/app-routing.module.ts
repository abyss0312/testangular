import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './auth/authentication.guard';

const routes: Routes = [
  {
    path:"login",
    loadChildren: () => import('./pages').then(m => m.LoginModule)
  },
  {
    path:"profile",
    loadChildren:() => import('./pages').then(m => m.ProfileModule),
    canActivate: [AuthenticationGuard]

  },
  {
    path:"**",
    loadChildren:() => import('./pages').then(m => m.NotFoundModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
