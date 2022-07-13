//声明一个变量a, 同时指定它的类型为number
let a: number
//a  的类型为number ，在以后的使用过程中  a 的类型只能是数字
a = 123
a = 10
// a = 'hello' 此行代码会报错，a的类型只能是number

//声明完变量可以直接复制
let b: boolean = true

//如果变量声明和赋值是同时的，不固定类型，那么ts会自动对变量进行类型检测
let c = '123'
// c=123   这行代码会报错，c 的数据类型必须是字符串

//声明也可以在函数之中使用
function sum(a: number,b: number): number{
    return a + b
}
//此时要求传参是字符串，返回值也是字符串