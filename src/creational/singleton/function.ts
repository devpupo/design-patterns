import { Logger } from './interfaces/index';

export const SingletonFunction = (function () {
  const logs: Logger[] = [];

  return {
    add(log: Logger): void {
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
})();
