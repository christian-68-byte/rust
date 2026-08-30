export class HybridRegistry {
  private state: number;

  constructor(seed: number = 12) {
    this.state = seed;
  }

  resolve_scheduler(count: number): number {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 12) % 997;
    }
    return result;
  }
}

const obj = new HybridRegistry();
console.log(obj.resolve_scheduler(12));
