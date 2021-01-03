/*
量词
    可以通过量词设置一个内容出现的次数
    量词只对前边的一个内容起作用
    {n} 正好出现n次
    {m,n} m-n次
    {m,} m次以上
    + 至少一个 相当于{1,}
    * 零个或者多个 相当于{0,}
    ？零个或者一个 相当于{0,1}
    ^表示开头 ^a 以a开头
    $表示结尾 a$ 以a结尾
    如果正则表达式中同时出现^ $ 则要求字符串完全符合正则表达式
    如果要要分开表示 则需要加上 ｜
*/ 
let reg = /a{1,5}/;
let str = "aaaaaaaabc";
console.log(reg.test(str));
console.log("*************");

let reg1 = /^a/;
let str1 = "aaaaaaabc";
console.log(reg1.test(str1));
console.log("*************");

let reg2 = /a$/;
let str2 = "aaaaaaabc";
console.log(reg2.test(str2));
console.log("*************");

let reg3 = /^a$/;
let str3 = "aaaaaaa";
console.log(reg3.test(str3));
console.log("*************");

let reg4 = /^a|a$/;
let str4 = "aaadsadaaaa";
console.log(reg4.test(str4));
console.log("*************");

/*
电话号码规则练习
1 以1开头
2 第二位不可以是0或者1
3 总共十一位
*/ 

let teleNumReg = /^1[^01][0-9]{9}$/;
let teleNum = 11456789345;
console.log(teleNumReg.test(teleNum));


