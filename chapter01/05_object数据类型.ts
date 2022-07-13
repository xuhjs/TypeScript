//object表示一个js对象
let aa: Object;
aa={}   //可以是对象
aa=()=>{  //可以是函数
}

//{} 用来指定对象中可以包含哪些属性
//语法  {属性名：属性值，属性名：属性值}
//在属性名后面加上?表示可选
let bb :{name:string ,age?:number}
bb={name:'122'}    //此时赋值的数据类型必须和上面一致
//由于上面有局限性
let cc:{name:string,[propName: string]:any} //any为任意类型
//此时赋值可以在后面写很多的属性

/**
 * 设置函数结构的类型声明:
 * 语法：（形参：类型，形参：类型...）=> 返回值 * 
 */
let dd: (x:number,y:number)=>number