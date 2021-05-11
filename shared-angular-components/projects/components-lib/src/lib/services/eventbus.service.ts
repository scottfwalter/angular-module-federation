import { Injectable } from '@angular/core';
import { EventWindow } from './event-window';
// import { Router } from '@angular/router';
// import { NotificationService } from '../notifications/notification.service';
import  Eev  from 'eev';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  constructor(
    // private readonly router: Router,
  ) {}



  initializeEventBus() {
    const eventWindow = window as EventWindow & typeof globalThis;
    if (!eventWindow.eventBus) {
      eventWindow.eventBus = new Eev();
    }
    // eventWindow.router = this.router; // Set up the Eev listeners
    eventWindow.eventBus.on('notification', function (data) {
        alert('Notification:' + data);
    });
  }

  emitEvent(eventName: string, data: any) {
    const eventWindow = window as EventWindow & typeof globalThis;
    eventWindow.eventBus.emit(eventName, data);
  }
}
