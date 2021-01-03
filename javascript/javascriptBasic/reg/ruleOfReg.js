/*
使用字面量

let 变量 = /正则表达式/匹配模式
*/ 

let reg = /a/i;
console.log(typeof reg);
console.log(reg.test("abc"));

/*
    使用｜表示 或者 的意思
    reg = /a|b|c/;

    []里的内容也是 或者 的关系
    [ab] == a|b
    [a-z] 任意小写字母
    [A-Z] 任意大写字母
    [A-z] 任意字母
    [0-9] 任意数字
*/ 

/*
检查一个字符串中是否含有 abc 或者 adc 或者 aec
reg = /a[bde]c/
*/ 

/*
[^ ] 除了 的意思

reg = /[^ab]/
*/ 