import { Observable } from "./Observable";
import { Observer } from "./Observer";

export class Listener implements Observer {
  observable: Observable;
  state: number;

  constructor(observable: Observable) {
    this.observable = observable;
  }

  update() {
    const latestSourceState = this.observable.getState();
    try {
      this.state = latestSourceState[latestSourceState.length - 1];
    } catch (error) {
      console.error(error);
    }
  }
}
