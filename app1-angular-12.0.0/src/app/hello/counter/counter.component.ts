import { Component, OnInit } from '@angular/core';
import { CounterService, EventBusService } from 'components-lib';
// import { of } from 'rxjs';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor(private counterService: CounterService, private eventBusService: EventBusService) {}

  incrementCounter() {
    this.counterService.incremet(100);
  }

  ngOnInit(): void {
    // const sub$ = of('100');
    // sub$.subscribe(val => console.log(val));
    console.log(format(new Date(), "'Today is a' eeee"));
  }

  sendEvent() {
    this.eventBusService.emitEvent('notification', 'Howdy Partner');
  }

}
