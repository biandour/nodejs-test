/**
 * Created by EX-RUIZHOU001 on 2018/7/17.
 */
"use strict";

// util.inherits 源码
var inherits = function(ctor, superCtor) {
  //严格相等测试:undefined/null
  //子类构造函数必须存在
  if (ctor === undefined || ctor === null)
    throw new TypeError('The constructor to "inherits" must not be ' +
      'null or undefined');
  //严格相等测试:undefined/null
  //父类构造函数必须存在
  if (superCtor === undefined || superCtor === null)
    throw new TypeError('The super constructor to "inherits" must not ' +
      'be null or undefined');

  //要点: 如果要继承的话，父类必须要有prototype对象
  //这也是为什么将所有成员方法都定义在prototype对象中！！！
  if (superCtor.prototype === undefined)
    throw new TypeError('The super constructor to "inherits" must ' +
      'have a prototype');

  //让子类构造函数对象增加一个super_指针，指向父类，这样就形成继承链
  ctor.super_ = superCtor;

  //调用Object.setPrototypeOf(子类的prototype,父类的prototype)
  Object.setPrototypeOf(ctor.prototype, superCtor.prototype);
};
/** 继承2要素： 1、子类继承父类的原型链，即获得父类的属性和方法以及关联关系
 *             2、子类的super指向父类
 */

function Base() {
  if (!(this instanceof Base)) {
    return new Base();
  }

  this.className = 'Base';
}

function Child() {
  if (!(this instanceof Child)) {
    return new Child();
  }

  Base.call(this); //在构造函数中调用 父类.call(this)，实现父类成员变量的继承

  this.className = 'Child';
}

inherits(Child, Base);

let child  = new Child();

console.log(child.className);
