import { StatePublisher } from "./StatePublisher";
import { Listener } from "./Listener";
import { Subscriber } from "./Subscriber";

describe("The Observer/ Observable interaction", () => {
  it("can add an observer", () => {
    const observable = new StatePublisher([0, 1]);
    const observer = new Subscriber(observable);

    expect(observable.registerObserver(observer)).toBeTruthy();
  });

  it("can remove an observer", () => {
    const observable = new StatePublisher([0, 1]);
    const observer = new Subscriber(observable);
    observable.registerObserver(observer);

    expect(observable.removeObserver(observer)).toBeTruthy();
  });

  it("can notify its observers", () => {
    const observable = new StatePublisher([0, 1]);
    const observer = new Subscriber(observable);
    observable.registerObserver(observer);
    observable.appendToState(1);

    expect(observer.state).toEqual([0, 1, 1]);
  });

  it("can register any object that implements the observer interface", () => {
    const observable = new StatePublisher([0, 1]);
    const observer = new Subscriber(observable);
    const listener = new Listener(observable);

    expect(observable.registerObserver(observer)).toBeTruthy();
    expect(observable.registerObserver(listener)).toBeTruthy();
  });
});
