import { Logger } from './interfaces/index';

const logs: Logger[] = [];

export const SingletonModule = {
  add(log: Logger) {
    logs.push(log);
  },

  remove(index: number): void {
    logs.splice(index, 1);
  },

  show(): void {
    for (const log of logs) {
      console.log(log);
    }
  },
};
