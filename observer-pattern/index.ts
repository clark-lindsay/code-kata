import { StatePublisher } from "./StatePublisher";
import { Subscriber } from "./Subscriber";

const publisher = new StatePublisher([1, 1, 2, 3, 5, 8]);
const subOne = new Subscriber(publisher);
const subTwo = new Subscriber(publisher);
const subThree = new Subscriber(publisher);

publisher.appendToState(13);
publisher.appendToState(21);
publisher.appendToState(34);
