/**
 * enum 枚举
 * 
 */
//定义一个枚举类，将可能的情况一个一个的枚举出来
enum Gender{   //性别有男有女
    Male = 0,
    Female = 1
}
let i:{name:string,age:number}
i={
    name:'孙悟空',
    age:Gender.Male
}

//&表示同时  连接两个对象
let j :{name:string } &{age:number}
j={name:'sd',age:16
}

//类型的别名  可以简化类型的使用

type mytype = String
let oo:mytype
oo='wueue'
 
type mytype02 = 1|3|2|33|6
let qq:mytype02
qq=1
qq=2