// demo1
// 不推荐
// export var userName = 'xiaoming';
// export var userAge = 22;


// 推荐
// var userName = 'xiaoming';
// var userAge = 25;
// export {userName,userAge}


// export class Cat {
//     constructor(){
//         this.name = 'xh'
//     }
// }

// export function test() {
//     alert(123);
// }




// demo2
// function f1() {
//     alert(111);
// }
// function f2() {
//     alert(222);
// }
// export {
//     f1 as test1,
//     f2 as test2,
//     f2 as test3
// }



// demo3

// 报错写法
// export 123;

// var a = 'qwe';
// export a;

// function fn() {}
// export fn;

// 正确写法
// export var a = 'qwe';

// var abc = 123;
// export {abc}

// function fn() {}
// export {fn}



// demo4
// export var abc = 123;
// setTimeout(function () {
//     abc = 456;
// },1000)

// var my = 'xiaocuo';

// export var obj = {
//     name: 'xm',
//     age: 29
// }




// demo5
export var a1 = 11;
export var a2 = 22;
export var obj = {abc:123,fn: function () {alert(123)}}



// demo6
// export default var userName = 'xioaming' 报错
// var userName = 'xioaming'
// export default userName;//一个模块默认导出只能有一个
export default 123;
