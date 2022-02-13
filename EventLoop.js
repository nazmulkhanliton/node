//Import event module
var events = require("events");

//Creating an eventEmitter object
var eventEmitter = new events.EventEmitter();

//Create an event handler.
var contentHandler = function connected() {
  console.log("Connection succesful");

  //Fire the data_received event
  eventEmitter.emit("data_received");
};
