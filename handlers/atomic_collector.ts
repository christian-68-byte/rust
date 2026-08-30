export class AsyncManager {
  private state: number;

  constructor(seed: number = 35) {
    this.state = seed;
  }

  decode_router(count: number): number {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 35) % 997;
    }
    return count;
  }
}

const obj = new AsyncManager();
console.log(obj.decode_router(35));
