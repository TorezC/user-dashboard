import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UserListComponent
  },
  {path: '', component: UserListComponent},
  {path: 'user/:id', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
