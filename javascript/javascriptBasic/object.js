/*
    JS中的数据类型
    -String
    -Number
    -Boolean
    -Null
    -undefined
    以上五种类型属于基本数据类型
    只要不是上边的五种 全都是对象
    Object
    对象属于一种复合的数据类型 在对象中可以保存多个不同的数据类型的属性

    1 内建对象
    - 由ES标准中定义的对象 在任何的ES的实现中都可以使用
    - 比如 Math String Number Boolean Function Object

    2 宿主对象
    - 由JS的运行环境提供的对象 目前来讲主要指浏览器提供的对象
    - 比如BOM DOM

    3 自定义对象
    -由开发人员自己创建的对象
*/

// Null类型的值只有一个 就是null
// null这个值专门用来表示一个为空的对象
// 使用typeof检查一个null值的时候 会返回object
let a = null;
console.log(typeof(a));
// Undefined（未定义）类型的值只有一个 就是undefined
// 当声明一个变量 但是并不给变量赋值的时候 他的值就是undefined
// 使用typeof检查的一个undefined时也会返回undefined

let b;
console.log(typeof(b));

let obj = new Object();
obj.name = "Nick";
obj.age = 16;
obj.gender = "male";
console.log(obj)

/*
    函数
    - 函数也是一个对象
    - 函数中可以封装一些功能（代码），在需要时可以执行这些功能（代码）
    - 函数中可以保存一写代码在需要的时候调用
*/

/* 
    创建一个函数对象
    可以将要封装的代码以字符串的形式传递给构造函数
*/

let func = new Function("console.log('This is my first function!');");
func();
/*
封装到函数中的代码不会立刻执行
函数中的代码会在函数调用的时候执行
调用函数语法： 函数对象()
当调用函数的时候 函数中的代码会按照顺序执行
*/ 

function func2(){
    console.log("This is my second function!");
}

func2();

let func3 = function(){
    console.log("This is my third function!");
};

func3();