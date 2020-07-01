import { Observable } from "./Observable";
import { Observer } from "./Observer";

export class StatePublisher implements Observable {
  private state: number[];
  private observers: Observer[];

  getState(): number[] {
    return this.state;
  }

  appendToState(num: number): void {
    this.state.push(num);
    this.notifyObservers();
  }

  constructor(state: number[]) {
    this.state = state;
    this.observers = [];
  }

  registerObserver(observer: Observer): boolean {
    try {
      this.observers.push(observer);
      return true;
    } catch (error) {
      console.error(error);
    }
    return false;
  }

  removeObserver(observer: Observer): boolean {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
      return true;
    }
    return false;
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update();
    }
  }
}
