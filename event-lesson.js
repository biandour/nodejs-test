/**
 * Created by EX-RUIZHOU001 on 2018/7/17.
 */
'use strict';

const EventEmitter = require('events').EventEmitter;

//class MyEvent extends EventEmitter {}

//let myEvent = new MyEvent();

// 使用事件触发器
//myEvent.on('test', function () {
//
//  console.log('emmit a test event!');
//
//});
//
//myEvent.on('test', function () {
//
//  console.log('emmit a test event again!');
//
//});
//
//myEvent.emit('test'); // 事件上绑定的监听函数依次执行
//console.log('start emit');


//let newEvent = new MyEvent();
//
//let login = function () {
//  console.log('Successfully login!');
//  newEvent.emit('showPrice');
//};
//
//newEvent.once('login', login);
//
//newEvent.on('showPrice', function () {
//  console.log('What a terrible price!');
//});
//
//newEvent.emit('login');
//
//console.log('login again');
//newEvent.emit('login');

//let myEvent = new MyEvent();
//myEvent.on('plus', function (a, b) {
//  if(a && b) {
//    console.log((a+b) + '');
//  } else {
//    console.log('not enough param');
//  }
//});
//
//myEvent.on('error', function (e) { //  设置‘error’监听之后，emitter对象的异常可以触发‘error’事件，用于处理异常
//  console.log('Error: ' + e);
//});
//
//myEvent.emit('plus', 222, 666);

//const util = require('util');
//
//class Pulse extends EventEmitter {
//  constructor() {
//    super()
//  }
//
//  start() {
//    let self = this;
//    setInterval(function () {
//      util.log('>>>>pulse');
//      self.emit('pulse');
//      util.log('<<<<pulse');
//    }, 1000);
//  }
//}
//
//let pulse = new Pulse();
//
//pulse.on('pulse', function () {
//  util.log('pulse received');
//});
//
//pulse.start();


let myEvent = new EventEmitter();

function listener1() {
  console.log('this is listener one');
}

function listener2() {
  console.log('this is listener two');
}

function listener3() {
  console.log('this is listener three');
}

myEvent.on('event', listener1);
myEvent.on('event', listener2);
myEvent.on('event', listener3);
myEvent.emit('event');

myEvent.removeListener('event', listener2); // 参数分别为注册的事件名，和事件上的回调函数
myEvent.emit('event');

myEvent.removeAllListeners('event'); // 若没有传参，则移除所有监听器
myEvent.emit('event');

/**
超过10个监听时，不设置EventEmitter的最大监听数会提示：
 (node) warning: possible EventEmitter memory leak detected. 11 listeners added.
 Use emitter.setMaxListeners() to increase limit.
 设计者认为侦听器太多，可能导致内存泄漏，所以存在这样一个警告*/
for (let i = 0; i < 12; i++) {
  myEvent.on('event', function() {
    console.log(`this is the ${i} listener`);
  });
}
console.log(myEvent.listeners('event')); // 返回事件上注册的监听器列表




