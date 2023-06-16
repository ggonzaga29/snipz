## EventEmitter Guide

The EventEmitter class is a basic implementation of an event emitter in Java. It allows you to register event listeners and emit events to trigger those listeners.

### Constructor

The EventEmitter class has a constructor that creates a new instance of the class. It initializes an empty map to store the event listeners.

### Method: on

The on method is used to register an event listener for a specific event. It takes two parameters: the event name and the listener function. The listener function will be invoked when the event is emitted.

### Method: emit

The emit method is used to emit an event, triggering all the registered listeners for that event. It takes the event name as a parameter.
