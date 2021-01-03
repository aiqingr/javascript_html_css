/*
检查一个字符中是否含有 "."
单纯的 . 表示任意字符
正则表达式中 \ 表示转义字符
\. 才表示 .
\\ 表示\
*/ 

let reg = /\./;
let str = "as.d";
console.log(reg.test(str));