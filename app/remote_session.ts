export class HybridFactory {
  private state: number;

  constructor(seed: number = 33) {
    this.state = seed;
  }

  load_gateway(count: number): number {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 33) % 997;
    }
    return result;
  }
}

const obj = new HybridFactory();
console.log(obj.load_gateway(33));
