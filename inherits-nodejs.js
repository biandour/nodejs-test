/**
 * Created by EX-RUIZHOU001 on 2018/7/17.
 */
"use strict";

//借用构造函数,借助call或apply,使用Superclass构造函数,缺少函数复用

function Superclass(name = 'default') {
  this.name = name;
}

function Subclass(age = 22, name) {
  this.age = age;
  Superclass.call(this, name);
  this.say = function () {
    console.log(`this.name=${this.name}...this.age=${this.age}`);
  };
}

const test = new Subclass(23);
test.say();
console.log(`test instanceof Subclass`, test instanceof Subclass);
console.log(`test instanceof Superclass`, test instanceof Superclass);
console.log(test.__proto__.constructor);
console.log(Subclass.prototype.constructor);


// 原型链继承,使用prototype指向Superclass对象,子类无法给父类传递参数,无法使用字面量添加新方法,所有子类对象共享父类所有方法和属性(引用类型)
function Superclass(name = 'default') {
  this.name   = name;
  this.colors = ['r', 'y'];
}

function Subclass(age = 22) {
  this.age = age;
  this.say = function () {
    console.log(`this.name=${this.name}...this.age=${this.age}`);
  };
}

Subclass.prototype             = new Superclass();
Subclass.prototype.constructor = Subclass;

const test  = new Subclass(23);
const test1 = new Subclass(24);
test.colors.push('b');
console.log(test.colors);
console.log(test1.colors);
test.say();
test1.say();
console.log(`test instanceof Subclass`, test instanceof Subclass);
console.log(`test instanceof Superclass`, test instanceof Superclass);
console.log(test.__proto__.constructor);
console.log(Subclass.prototype.constructor);


//组合继承,prototype+call/apply,借用构造函数对实例属性继承,prototype对共享方法继承,会调用两次父类构造函数
function Superclass(name = 'default') {
  this.name = name;
}

Superclass.prototype.say = function () {
  console.log(this.name);
};

function Subclass(age = 22, name) {
  this.age = age;
  Superclass.call(name);
}

Subclass.prototype             = new Superclass();
Subclass.prototype.constructor = Subclass;

const test = new Subclass(23);
test.say();
console.log(`test instanceof Subclass`, test instanceof Subclass);
console.log(`test instanceof Superclass`, test instanceof Superclass);
console.log(test.__proto__.constructor);
console.log(Subclass.prototype.constructor);


// ES6 Class继承
class Superclass {
  constructor(name = 'default') {
    this.name = name;
  }
}
class Subclass extends Superclass {
  constructor(age = 22, name) {
    super(name);
    this.age = age;
  }

  say() {
    console.log(`this.name=${this.name}...this.age=${this.age}`);
  }
}

const test = new Subclass(23);
test.say();
console.log(`test instanceof Subclass`, test instanceof Subclass);
console.log(`test instanceof Superclass`, test instanceof Superclass);
console.log(test.__proto__.constructor);
console.log(Subclass.prototype.constructor);


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
  //在构造函数中调用 父类.call(this)，实现父类成员变量的继承
  Base.call(this);

  this.className = 'Child';
}

inherits(Child, Base);

let child  = new Child();
console.log(child.className);
