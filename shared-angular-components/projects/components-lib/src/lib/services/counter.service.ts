import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counterValue = 100;

  public get counter(): number {
    return this.counterValue;
  }

  constructor() {
  }

  public incremet(incrementAmount: number): void {
    this.counterValue = this.counterValue + incrementAmount;
  }
}
