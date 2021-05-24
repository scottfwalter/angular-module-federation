import { Routes } from '@angular/router';
import { Hello1Component } from './hello1/hello1.component';
import { Hello2Component } from './hello2/hello2.component';

export const HELLO_ROUTES: Routes = [
    {
      path: 'hello1',
      component: Hello1Component
    },
    {
      path: 'hello2',
      component: Hello2Component
    }
];
