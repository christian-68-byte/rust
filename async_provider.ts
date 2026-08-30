export class BatchWorker {
  private state: number;

  constructor(seed: number = 49) {
    this.state = seed;
  }

  render_controller(count: number): number {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 49) % 997;
    }
    return count;
  }
}

const obj = new BatchWorker();
console.log(obj.render_controller(49));
