import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'home'
    , pathMatch: 'full' 
  },
  {
    path: 'home',
    // canActivate: [AuthGuard],
    component:HomeComponent ,
  },
  {
    path: 'details/:id',
    component: ProductDetailsComponent,

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreComponentRoutingModule {}
