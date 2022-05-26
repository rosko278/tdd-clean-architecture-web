import { ArrayIndexGenerator } from './arrayIndexGenerator';

export class RandomArrayIndexGenerator implements ArrayIndexGenerator {
  randomIndex(array: any[]): number {
    return Math.floor(Math.random() * array.length);
  }
}
