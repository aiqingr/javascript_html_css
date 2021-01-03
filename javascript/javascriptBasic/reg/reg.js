/*
正则表达式
用于定义一些字符串的规则
    计算机可以根据正则表达式来检查一个字符串是否和符合规则
    获取将字符串中符合规则的内容提取出来

创建正则表达式的对象
语法 let 变量 = new RegExp(“正则表达式”， “匹配模式”)
使用typeof检查正则对象 会返回object
构造函数中可以传递一个匹配模式作为第二个参数
可以是 
    i 忽略大小写
    g 全局匹配模式
*/ 

let reg = new RegExp("a", "i");
let str = "A";

/*
正则表达式的方法
test()
    使用这个方法可以检查一个字符串是否符合正则表达式的规则
    如果符合返回true
*/ 
let result = reg.test(str)
console.log(result)
