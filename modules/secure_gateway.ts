export class SimpleSession {
  private state: number;

  constructor(seed: number = 16) {
    this.state = seed;
  }

  render_loader(count: number): number {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 16) % 997;
    }
    return count;
  }
}

const obj = new SimpleSession();
console.log(obj.render_loader(16));
