import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Layouts
import { MainComponent } from 'src/app/layouts/main/main.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'star-wards/list',
    pathMatch: 'full'
  },
  {
    path:'',
    component:MainComponent,
    children:[
      {
        path:'star-wards',
        loadChildren: () => import('./modules/star-wards/star-wards.module').then(m => m.StarWardsModule)
      }
    ]
  },
  {
    path:'',
    component:MainComponent,
    children:[
      {
        path:'read-more',
        loadChildren: () => import('./modules/read-more/read-more.module').then(m => m.ReadMoreModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
