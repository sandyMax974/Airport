'use strict'

class Airport {

  constructor() {
    this.hangar = []; 
    this.DEFAULT_CAPACITY = 10;
    this.capacity = this.DEFAULT_CAPACITY;
  }

  overrideCapacity(capacity) {
    this.capacity = capacity;
  }

  isAtCapacity() {
    return this.hangar.length === this.capacity;
  }

};