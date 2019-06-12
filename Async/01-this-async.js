class Contact {
  constructor(name) {
    this.name = name;
  }
  helloSync() {
    console.log(`Hello, my name is ${this.name}`);
  }
  helloAsyncClosure() {
    setTimeout(() => {
      console.log(`Hello, my name is ${this.name}`);
    }, 100);
  }
  helloAsyncMethod() {
    setTimeout(this.helloSync.bind(this), 100);
  }
}

const contact = new Contact('Romain');
contact.helloSync();
contact.helloAsyncClosure();
contact.helloAsyncMethod();
