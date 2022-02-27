import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'list',
    pathMatch: 'full'
  },
  {
    path:'',
    children:[
    {
      path:'list',
      component:ListComponent,
      data:{
        title:'Lista'
      }
    },{
      path:'detail/:id',
      component:DetailComponent,
      data:{
        title:'Detalle'
      }
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarWardsRoutingModule { }
