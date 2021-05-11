import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HELLO_ROUTES } from './hello.routes';
import { Hello1Component } from './hello1/hello1.component';
import { Hello2Component } from './hello2/hello2.component';
import { CounterComponent } from './counter/counter.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HELLO_ROUTES)
  ],
  declarations: [
    Hello1Component,
    Hello2Component,
    CounterComponent
  ]
})
export class HelloModule { }
