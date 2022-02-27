import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlainTextDirective } from './plain-text.directive';

@NgModule({
  declarations: [
    PlainTextDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PlainTextDirective
  ]
})
export class DirectivesModule { }
