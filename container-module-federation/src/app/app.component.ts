import { OnInit, VERSION } from '@angular/core';
import { Component, NgZone } from '@angular/core';
import { shareNgZone } from '@angular-architects/module-federation-tools';
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

  constructor(private ngZone: NgZone, private  eventBusService: EventBusService) {
    shareNgZone(ngZone);
  }

  ngOnInit() {
    this.eventBusService.initializeEventBus();
  }

  toggle() {
    this.toggleValue = !this.toggleValue;
  }
}
