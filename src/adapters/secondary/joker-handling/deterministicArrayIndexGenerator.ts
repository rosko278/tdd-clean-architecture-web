import { ArrayIndexGenerator } from './arrayIndexGenerator';

export class DeterministicArrayIndexGenerator implements ArrayIndexGenerator {
  private _nextRandomIndex: number = 0;

  randomIndex(array: any[]): number {
    return this._nextRandomIndex;
  }

  set nextRandomIndex(value: number) {
    this._nextRandomIndex = value;
  }
}
