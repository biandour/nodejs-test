/**
 * Created by EX-RUIZHOU001 on 2018/7/18.
 */
'use strict';

/**
 * this关键字是在真正被执行到的时候才会发挥作用
 * this对象仍然是指代函数被执行时执行该函数的对象
 */

// 全局中的this指向的是module.exports
console.log(this);
this.num = 10;
console.log(global.num);
console.log(this.num);
console.log(module.exports.num);


// 在函数中this指向的是global对象，和全局中的this不是同一个对象
function myFunc() {
  this.num = 22;
}
myFunc();
console.log(global.num);
