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