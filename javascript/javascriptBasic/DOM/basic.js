/*
DOM 全称Document Object Model 文档对象模型
JS中通过DOM来对HTML文档惊醒操作
文档：
    - 文档表示的就是整个的HTML网页文档
对象：
    - 对象表示将网页中的每个部分都转换为了一个对象
模型：
    - 使用模型来表示对象之间的关系，方便获取对象

节点： Node —— 构成HTML文档最基本的单元
常用的节点分为四类
文档节点：
    nodeName： #document
    nodeType： 9
    nodeValue： null

元素节点：
    nodeName： 标签名
    nodeType： 1
    nodeValue： null

属性节点：
    nodeName： 属性名
    nodeType： 2
    nodeValue： 属性值

文本节点：
    nodeName： #text
    nodeType： 3
    nodeValue： 文本内容
*/ 