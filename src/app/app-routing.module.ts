import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { NoPageComponent } from './components/no-page/no-page.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"users", component: UsersComponent},
  {path:"**", component:NoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
