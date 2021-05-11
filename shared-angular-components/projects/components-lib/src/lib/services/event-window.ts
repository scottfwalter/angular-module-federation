// import { Router } from '@angular/router';
import { Eev } from 'eev';

export interface EventWindow extends Window {
  eventBus: Eev;
  // router: Router;
}
