import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CounterService } from 'components-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  // options = {
  //   remoteEntry: 'http://localhost:4201/remoteEntry.js',
  //   remoteName: 'mfe1',
  //   exposedModule: './Component',
  //   displayName: 'Pricing Trends',
  //   componentName: 'Hello1Component',
  // };

  components: any[] = [];

  constructor(private counterService: CounterService) {}

  ngOnInit() {}

  // addComponent() {
  //   this.components.push({
  //     remoteEntry: 'http://localhost:4201/remoteEntry.js',
  //     remoteName: 'mfe1',
  //     exposedModule: './Component',
  //     displayName: 'Pricing Trends',
  //     componentName: 'Hello1Component',
  //   });
  // }

  addComponent() {
    this.components.push({
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      remoteName: 'mfe1',
      exposedModule: './HelloModule',
      displayName: 'Pricing Trends',
      componentName: 'Hello1Component',
    });
  }

  incrementCounter() {
    this.counterService.incremet(100);
  }
}
