import { Observable } from "./Observable";
import { Observer } from "./Observer";

export class Subscriber implements Observer {
  observable: Observable;
  state: [number];

  constructor(publisher: Observable) {
    this.observable = publisher;
  }

  update(): void {
    this.state = this.observable.getState();
  }
}

