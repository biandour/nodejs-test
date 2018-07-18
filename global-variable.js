/**
 * Created by EX-RUIZHOU001 on 2018/7/18.
 */
'use strict';

// global是全局对象。所有在node进程里的对象都挂在global上
global.name = '';
name = 'biandour';
console.log(name);

delete global.name;
try {
  console.log(name);
} catch (e) {
  console.log(e + '');
}

//常用变量
console.log(__dirname); //当前路径
console.log(__filename); // 当前执行的js文件的路径
// console.log(process.env); // 环境变量

process.on('exit', function (code) {
  setTimeout(function () {
    console.log("this won't be excuted");
  }, 0);
  console.log('exit code is ' + code);
});
console.log('this is the end.');

// 如果使用var关键字声明的变量将会保留在本地模块里；这些声明的变量没有附加到global对象里

/**
 * 引用一个已经被其他模块引用过的模块时，仅仅创建一个指向之前包体的引用，因此这意味着不会极度消耗内存。
 * 也因为没有重新创建一个真正的包体，在module里的所有初始化方法没有再执行。
 */
