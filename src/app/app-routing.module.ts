import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterFinalComponent } from './register-final/register-final.component';
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'register-final', component: RegisterFinalComponent},
  {path: '', redirectTo: '/login', pathMatch:'full'}
]

@NgModule({
  declarations: [

  ],
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
   exports: [RouterModule]
})
export class AppRoutingModule { }
