---
sidebarDepth: 2
sidebar: auto
---
# 面试题
### 手写一个JS深拷贝
```javascript
function deepCopy(obj){
    //判断是否是简单数据类型，
    if(typeof obj == "object"){
        //复杂数据类型
        var result = obj.constructor == Array ? [] : {};
        for(let i in obj){
            result[i] = typeof obj[i] == "object" ? deepCopy(obj[i]) : obj[i];
        }
    }else {
        //简单数据类型 直接 == 赋值
        var result = obj;
    }
    return result;
}

```

### 实现一个new操作符
1. 它创建了一个全新的对象。
2. 它会被执行[[Prototype]]（也就是__proto__）链接。
3. 它使this指向新创建的对象。。
4. 通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上。
5. 如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用将返回该对象引用。
```javascript
function New(func) {
    var res = {};
    if (func.prototype !== null) {
        res.__proto__ = func.prototype;
    }
    var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
    if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
        return ret;
    }
    return res;
}
var obj = New(A, 1, 2);
// equals to
var obj = new A(1, 2);
```
###  斐波纳契数实现

```javascript
function fibonacciIterative(n) {
    if (n < 1) return 0;
    if (n <= 2) return 1;
    let fibNMinus2 = 0;
    let fibNMinus1 = 1;
    let fibN = n;
    for (let i = 2; i <= n; i++) { // n >= 2
        fibN = fibNMinus1 + fibNMinus2; // f(n-1) + f(n-2)
        fibNMinus2 = fibNMinus1;
        fibNMinus1 = fibN;
    }
    return fibN;
}
```

### 数组扁平化

```javascript
const arr = [1, 2, 3, {
	a: 4,
	b: 5,
	c: [6, 7, 8, Number(10)]
},
12, '20']

function merge(arr) {
	if (arr.length == 0) return let newArr = []
	function loop(array) {
		array.forEach(element = >{
			if (Object.prototype.toString.call(element).indexOf('Object') > -1) {
				for (const key in element) {
					if (Object.hasOwnProperty.call(element, key)) {
						if (Object.prototype.toString.call(element[key]).indexOf('Array') > -1) {
							loop(element[key])
						} else {
							newArr.push(element[key])
						}
					} else if (Object.prototype.toString.call(element[key]).indexOf('Number') > -1) {
						newArr.push(element[key].value())
					}
				}
			}
			if (Object.prototype.toString.call(element).indexOf('Array') > -1) {
				loop(element)
			}
			if (Object.prototype.toString.call(element).indexOf('Number') > -1 || Object.prototype.toString.call(element).indexOf('String') > -1) {
				newArr.push(element)
			}
		})
	}
	loop(arr) return newArr
}
```

###  遍历页面所有标签

```javascript
var map = {};
     //采用递归调用的方法，比较方便和简单。
     function fds(node) {
         
         if (node.nodeType === 1) {
             //这里我们用nodeName属性，直接获取节点的节点名称
             var tagName = node.nodeName;
             //判断对象中存在不存在同类的节点，若存在则添加，不存在则添加并赋值为1
             map[tagName] = map[tagName] ? map[tagName] + 1 : 1;
         }
             //获取该元素节点的所有子节点
         var children = node.childNodes;
         for (var i = 0; i < children.length; i++) {
             //递归调用
             fds(children[i])
         }
     }
     fds(document);
```

### vue 父子组件的生命周期顺序

```javascript
   // 加载渲染过程

    父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted
   // 子组件更新过程

    父beforeUpdate->子beforeUpdate->子updated->父updated
   // 父组件更新过程

    父beforeUpdate->父updated
   // 销毁过程

    父beforeDestroy->子beforeDestroy->子destroyed->父destroyed
```

### 什么是事件代理

事件代理，又称事件委托，是JS绑定事件的常用技巧。顾名思义就是把原来需要绑定的事件委托给父元素，让父元素负责事件监听。事件代理的原理是DOM元素的时间冒泡。使用事件代理的好处是可以提高性能。

### 什么是事件冒泡
javascript允许DOM元素嵌套在一起。在这种情况下，如果点击子级的处理程序，父级的处理程序也将执行同样的工作。

### cookie与session
* cookie保存在客户端（浏览器）；session保存在服务端（redis）
* Session是由应用服务器维持的一个服务器端的存储空间，用户在连接服务器时，会由服务器生成一个唯一的SessionID,用该SessionID 为标识符来存取服务器端的Session存储空间
* cookie的优点：
* 1.极高的扩展性和可用性 2.通过良好的编程，控制保存在cookie中的session对象的大小。 3.通过加密和安全传输技术（SSL），减少cookie被破解的可能性。 4.只在cookie中存放不敏感数据，即使被盗也不会有重大损失。 5.控制cookie的生命期，使之不会永远有效。偷盗者很可能拿到一个过期的cookie。
* cookie的缺点：
* cookie数量和长度的限制。每个domain最多只能有20条cookie，每个cookie长度不能超过4KB，否则会被截掉。 2.安全性问题。如果cookie被人拦截了，那人就可以取得所有的session信息。即使加密也与事无补，因为拦截者并不需要知道cookie的意义，他只要原样转发cookie就可以达到目的了。 3.有些状态不可能保存在客户端。例如，为了防止重复提交表单，我们需要在服务器端保存一个计数器。如果我们把这个计数器保存在客户端，那么它起不到任何作用。
### 输入网址到现实的过程
1. 重定向
2. 查看缓存
3. DNS解析，获取IP地址
4. TCP连接建立
5. 发送报文请求
6. 响应报文数据
7. 浏览器解析数据
8. 渲染

### vue组件通信方式
* props / $emit 适用 父子组件通信
* ref 与 $parent / $children 适用 父子组件通信
* EventBus （$emit / $on） 适用于 父子、隔代、兄弟组件通信
* $attrs/$listeners 适用于 隔代组件通信
* provide / inject 适用于 隔代组件通信
* Vuex 适用于 父子、隔代、兄弟组件通信

### 什么是防抖和节流？有什么区别？如何实现？
###### 防抖
触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
```javascript
function debounce(fn) {
      let timeout = null; // 创建一个标记用来存放定时器的返回值
      return function () {
        clearTimeout(timeout); // 每当用户输入的时候把前一个 setTimeout clear 掉
        timeout = setTimeout(() => { // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
          fn.apply(this, arguments);
        }, 500);
      };
    }
```
###### 节流
高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率。
```javascript
function throttle(fn) {
      let canRun = true; // 通过闭包保存一个标记
      return function () {
        if (!canRun) return; // 在函数开头判断标记是否为true，不为true则return
        canRun = false; // 立即设置为false
        setTimeout(() => { // 将外部传入的函数的执行放在setTimeout中
          fn.apply(this, arguments);
          // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
          canRun = true;
        }, 500);
      };
    }
```
### 页面渲染html的过程？
1.浏览器解析html源码，然后创建一个 DOM树。并行请求 css/image/js在DOM树中，每一个HTML标签都有一个对应的节点，并且每一个文本也都会有一个对应的文本节点。DOM树的根节点就是 documentElement，对应的是html标签。
2.浏览器解析CSS代码，计算出最终的样式数据。构建CSSOM树。对CSS代码中非法的语法它会直接忽略掉。解析CSS的时候会按照如下顺序来定义优先级：浏览器默认设置 < 用户设置 < 外链样式 < 内联样式 < html中的style。
3.DOM Tree + CSSOM --> 渲染树（rendering tree）。渲染树和DOM树有点像，但是是有区别的。
DOM树完全和html标签一一对应，但是渲染树会忽略掉不需要渲染的元素，比如head、display:none的元素等。而且一大段文本中的每一个行在渲染树中都是独立的一个节点。渲染树中的每一个节点都存储有对应的css属性。
4.一旦渲染树创建好了，浏览器就可以根据渲染树直接把页面绘制到屏幕上。
以上四个步骤并不是一次性顺序完成的。如果DOM或者CSSOM被修改，以上过程会被重复执行。实际上，CSS和JavaScript往往会多次修改DOM或者CSSOM。

### 强缓存和协商缓存
1. 浏览器在加载资源时，先根据这个资源的一些http header判断它是否命中强缓存，强缓存如果命中，浏览器直接从自己的缓存中读取资源，不会发请求到服务器。比如某个css文件，如果浏览器在加载它所在的网页时，这个css文件的缓存配置命中了强缓存，浏览器就直接从缓存中加载这个css，连请求都不会发送到网页所在服务器
2. 当强缓存没有命中的时候，浏览器一定会发送一个请求到服务器，通过服务器端依据资源的另外一些http header验证这个资源是否命中协商缓存，如果协商缓存命中，服务器会将这个请求返回，但是不会返回这个资源的数据，而是告诉客户端可以直接从缓存中加载这个资源，于是浏览器就又会从自己的缓存中去加载这个资源
3. 强缓存与协商缓存的共同点是：如果命中，都是从客户端缓存中加载资源，而不是从服务器加载资源数据；区别是：强缓存不发请求到服务器，协商缓存会发请求到服务器
4. 当协商缓存也没有命中的时候，浏览器直接从服务器加载资源数据

### this 对象的理解
* this 总是指向函数的直接调用者
* 如果有 new 关键字，this 指向 new 出来的实例对象
* 在事件中，this 指向触发这个事件的对象
* IE 下 attachEvent 中的 this 总是指向全局对象 Window
* 箭头函数中，函数体内的this对象，就是定义时所在作用域的对象，而不是使用时所在的作用域的对象。
* 首先箭头函数其实是没有 this 的，箭头函数中的 this 只取决包裹箭头函数的第一个普通函数的 this。在这个例子中，因为包裹箭头函数的第一个普通函数是 a，所以此时的 this 是 window。另外对箭头函数使用 bind这类函数是无效的。

### new操作符具体干了如何实现？
1) 创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。
2) 属性和方法被加入到 this 引用的对象中。
3) 新创建的对象由 this 所引用，并且最后隐式的返回 this 。
```javascript
function objectFactory() {

    var obj = new Object(),//从Object.prototype上克隆一个对象

    Constructor = [].shift.call(arguments);//取得外部传入的构造器

    var F=function(){};
    F.prototype= Constructor.prototype;
    obj=new F();//指向正确的原型

    var ret = Constructor.apply(obj, arguments);//借用外部传入的构造器给obj设置属性

    return typeof ret === 'object' ? ret : obj;//确保构造器总是返回一个对象

};

```

### 变量声明提升
* 在 JavaScript 中，函数声明（function aa(){}）与变量声明（var）经常被 JavaScript 引擎隐式地提升到当前作用域的顶部。
* 函数声明的优先级高于变量，如果变量名跟函数名相同且未赋值，则函数声明会覆盖变量声明
* 声明语句中的赋值部分并不会被提升，只有变量的名称被提升

### 什么是 csrf 攻击
使登录用户访问攻击者的网站，发起一个请求，由于 Cookie 中包含了用户的认证信息，当用户访问攻击者准备的攻击环境时，攻击者就可以对服务器发起 CSRF 攻击。
在这个攻击过程中，攻击者借助受害者的 Cookie 骗取服务器的信任，但并不能拿到 Cookie，也看不到 Cookie 的内容。而对于服务器返回的结果，由于浏览器同源策略的限制，攻击者也无法进行解析。（攻击者的网站虽然是跨域的，但是他构造的链接是源网站的，跟源网站是同源的，所以能够携带cookie发起访问）。
但是攻击者无法从返回的结果中得到任何东西，他所能做的就是给服务器发送请求，以执行请求中所描述的命令，在服务器端直接改变数据的值，而非窃取服务器中的数据。例如删除数据、修改数据，新增数据等，无法获取数据。

### 手写Promisee.all()
```javascript
function pall(arr) {
    const result = []
    if (arr.length == 0) return Promise.resolve()
    for (let i = 0; i < arr.length; i++) {
        if ((!(arr[i] instanceof Promise))) {
            arr[i] = Promise.resolve(arr[i])
        }
    }
    return new Promise((resolve, reject) => {
        for (let i = 0; i < arr.length; i++) {
            arr[i].then(res => {
                result.push(res)
                if (i == arr.length - 1) {
                    resolve(result)
                }
            }).catch((err) => {
                reject(err)
            })
        }
    })
}

```

### Javascript 的作用域和作用域链
* 作用域： 作用域是定义变量的区域，它有一套访问变量的规则，这套规则来管理浏览器引擎如何在当前作用域以及嵌套的作用域中根据变量（标识符）进行变量查找。
* 作用域链： 作用域链的作用是保证对执行环境有权访问的所有变量和函数的有序访问，通过作用域链，我们可以访问到外层环境的变量和
函数。

作用域链的本质上是一个指向变量对象的指针列表。变量对象是一个包含了执行环境中所有变量和函数的对象。作用域链的前
端始终都是当前执行上下文的变量对象。全局执行上下文的变量对象（也就是全局对象）始终是作用域链的最后一个对象。
当我们查找一个变量时，如果当前执行环境中没有找到，我们可以沿着作用域链向后查找。
作用域链的创建过程跟执行上下文的建立有关....