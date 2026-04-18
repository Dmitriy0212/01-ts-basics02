interface Container<T> {
  items: T[];
  addItem(item: T): void;
  getItem(index: number): T;
}

const numberContainer: Container<number> = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};

const stringContainer: Container<string> = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};

function getLastElement<T>(arr: T[]): T {
  return arr[arr.length - 1];
}
