class EasterEgg {
  constructor() {
    this.eggs = [];
    this.currentKeys = [];
    this.ignoredKeys = [16];
    document.addEventListener("keydown", this.handleEvent.bind(this));
  }

  addEgg(keys, fn) {
    this.eggs.push({ keys: keys, fn: fn });
  }

  handleEvent(e) {
    // check if key pressed is not in ignored keys
    if (!this.ignoredKeys.includes(e.keyCode)) {
      this.currentKeys.push(e.keyCode);
      // check if current keys match any egg key sequence
      this.eggs.forEach(egg => {
        if (this.currentKeys.join(",") === egg.keys.join(",")) {
          egg.fn();
        }
      });
    }
  }
}
