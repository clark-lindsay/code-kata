import { Observer } from "./Observer";

export interface Observable {
  registerObserver(observer: Observer): boolean;
  removeObserver(observer: Observer): boolean;
  getState(): any;
}
