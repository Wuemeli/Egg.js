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
          this.currentKeys = [];
        }
      });
    }
  }
  
  // Add a method to remove an egg
  removeEgg(keys) {
    this.eggs = this.eggs.filter(egg => egg.keys.join(",") !== keys.join(","));
  }
  
  // Add a method to clear all eggs
  clearEggs() {
    this.eggs = [];
  }
  
  // Add a method to change the ignored keys
  setIgnoredKeys(keys) {
    this.ignoredKeys = keys;
    
  }
  
  // Add a method to check if a specific egg exists
  hasEgg(keys) {
    return this.eggs.some(egg => egg.keys.join(",") === keys.join(","));
  }
  
  // Add a method to execute a specific egg
  executeEgg(keys) {
    const egg = this.eggs.find(egg => egg.keys.join(",") === keys.join(","));
    if(egg) egg.fn();
  }
}
