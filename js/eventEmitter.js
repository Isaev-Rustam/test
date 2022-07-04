class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, callback) {
    !this.events[eventName] && (this.events[eventName] = []);
    this.events[eventName].push(callback);
  }
  unsubscribe(eventName, callback) {
    this.events[eventName] = this.events[eventName].filter(eventCallback => callback !== eventCallback);
  }

  emit(eventName, args) {
    const event = this.events[eventName];
    event && event.forEach(callback => callback.call(null, args));
  }
}

//
// let emitter = new EventEmitter();
//
//
// const myFn = data =>  console.log(data * data);
//
//
// emitter.subscribe('btn', myFn);
//
//
// emitter.emit("btn", 5) //?
//
//
// emitter.unsubscribe("btn",  myFn)
//
//
// emitter.emit("btn", 2) //?
//

