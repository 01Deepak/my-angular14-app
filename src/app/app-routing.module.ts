import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { NoPageComponent } from './components/no-page/no-page.component';
import { UserDetailsComponent } from './components/users/reuseble/user-details/user-details.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"users", component: UsersComponent},
  {path:"users/:id", component: UserDetailsComponent},
  {path:"**", component:NoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
