export class DynamicCollector {
  private state: number;

  constructor(seed: number = 52) {
    this.state = seed;
  }

  handle_service(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 52) % 997;
    }
    return value;
  }
}

const obj = new DynamicCollector();
console.log(obj.handle_service(52));
