/**
 * Created by EX-RUIZHOU001 on 2018/7/17.
 */
'use strict';

const eventEmitter = require('events').EventEmitter;

//class MyEvent extends eventEmitter {}

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

const util = require('util');

class Pulse extends eventEmitter {

}

Pulse.prototype.start = function () {
  let self = this;
  this.id = setInterval(function () {
    util.log('>>>>pulse');
    self.emit('pulse');
    util.log('<<<<pulse');
  }, 1000);
};

let pulse = new Pulse();

pulse.on('pulse', function () {
  util.log('pulse received');
});

pulse.start();
