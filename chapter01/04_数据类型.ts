//数据类型包含
// number strig boolean 字面量（限制变量的值就是该字面量的值） 
//any（任意类型） 
//unknown（类型安全的any） 
//void（空值undefined,没有值） 
//never(没有值，不能是任何值) object array tuple enum
 
//一、字面量赋值，复制完之后变量不能为任何别的值
let a:10;
a=10
let b:'zhangsan' | 123
b = 'zhangsan'
b=123
// b= 'abc'  此时就会报错,现在b 只能是这两个值
//可以使用 |  连接多个类型（联合类型）
let c:boolean|string//c的值可以是布尔值也可以是字符串

//二、any表示的是任意数据类型，一般不用，用了就和js差不多了
// let d:any   //显示any
let d   //当我们定义一个变量不定义类型，相当于  隐式的any
d=123
d="444"
d=true

//二者区别：any可以赋值给任意变量，类型也会赋值给别的变量
//unknown  不能赋值给任意变量

//三、unknown 表示未知类型的值,效果和any一样，
//但是是一个类型安全的any，不能赋值给其他变量
let e:unknown;
e=10
e="123"
e=false
//如果想要赋值，可以判断类型后赋值
//类型断言 告诉解析器变量的类型
e as string  //e必须是字符串类型,这样就能给字符串类型的变量赋值了
let f:string="123"  
f=<string>e  //第二种写法

//四、void 用来表示空，以函数为例子，就表示没有返回值的函数
function fn():void{

}

//五、never表示永远不会返回结果
function fn1():never{
    throw new Error('报错了')

}