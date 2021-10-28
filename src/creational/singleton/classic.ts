import { Logger } from './interfaces/index';

export class SingletonClassic {
  private static _instance: SingletonClassic | null = null;
  private logs: Logger[] = [];

  private constructor() {}

  static get instance(): SingletonClassic {
    if (SingletonClassic._instance === null) {
      SingletonClassic._instance = new SingletonClassic();
    }

    return SingletonClassic._instance;
  }

  add(log: Logger) {
    this.logs.push(log);
  }

  remove(index: number): void {
    this.logs.splice(index, 1);
  }

  show(): void {
    for (const log of this.logs) {
      console.log(log);
    }
  }
}

/*
 Exemplo de implementação
*/
const singletonClassic = SingletonClassic.instance;
singletonClassic.add({ id: 1, message: 'sucess' });
singletonClassic.add({ id: 2, message: 'error' });
singletonClassic.add({ id: 3, message: 'failed' });
singletonClassic.show();
