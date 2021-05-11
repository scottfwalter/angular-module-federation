import { OnInit, VERSION } from '@angular/core';
import { Component } from '@angular/core';
import { EventBusService } from 'components-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit  {
  title = 'container-module-federation';
  toggleValue = false;
  version = VERSION;

  constructor(private  eventBusService: EventBusService) {}

  ngOnInit() {
    this.eventBusService.initializeEventBus();
  }

  toggle() {
    this.toggleValue = !this.toggleValue;
  }
}
