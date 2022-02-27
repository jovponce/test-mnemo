import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReadMoreRoutingModule } from './read-more-routing.module';

//Directives
import { DirectivesModule } from 'src/app/directives/directives.module';

//Components
import { ReadMoreComponent } from './read-more.component';

@NgModule({
  declarations: [ReadMoreComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule, 
    DirectivesModule,
    ReactiveFormsModule,
    ReadMoreRoutingModule
  ]
})
export class ReadMoreModule { }
