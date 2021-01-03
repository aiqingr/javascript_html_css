/*
split()
    可以将一个字符串拆分为一个数组
    方法中可以传递一个正则表达式作为参数 这样方法将会根据正则表达式去拆分字符串
    这个方法即使不指定全局匹配 也会全都拆分
*/ 
let reg = /[a-z]/;
let str = "1a2b3c4d5e6f";
let result = str.split(reg);

console.log(result);
console.log(typeof result);
console.log(Array.isArray(result));
console.log("-------------");

/*
search()
    可以搜索字符串中是否含有指定内容
    如果搜索到指定内容 则会返回第一次出现的索引 如果没有就返回-1
    他可以接受一个正则表达式作为参数 然后会根据正则表达式去检索字符串
    即使用了全局匹配 也只能返回第一个
*/ 

str = "hello nihaowa abc";
result = str.search(/a[bef]c/);
console.log(result);
console.log(typeof result);
console.log(Array.isArray(result));
console.log("-------------");

/*
match()
    可以根据正则表达式 从一个字符串中将符合的内容提取出来
    默认情况下 match只会找到第一个符合要求的模式 找到以后就会停止检索
        我们可以设置正则表达式为全局匹配模式 这样就会匹配到所有的内容
        可以为一个正则表达式设置多个匹配模式 而且顺序无所谓
    match()会将匹配到的内容封装到一个数组中返回 即使只查询一个内容
*/ 

str = "1a2b3c4d5e6A7B8C";
result = str.match(/[a-z]/ig);
console.log(result);
console.log(typeof result);
console.log(Array.isArray(result));
console.log("-------------");

/*
replace()
    可以将字符串中指定的内容替换成新的内容
    参数
        被替换的内容 可以接受一个正则表达式作为参数
        新的内容
    默认只会替换第一个
*/  

result = str.replace(/[a-z]/gi, "");
console.log(result);
console.log(typeof result);
console.log(Array.isArray(result));
console.log("-------------");