import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { ReadMoreComponent } from './read-more.component';

const routes: Routes = [
  {
    path:'',
    component:ReadMoreComponent,
    data:{
      title: 'Saber más'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadMoreRoutingModule { }
