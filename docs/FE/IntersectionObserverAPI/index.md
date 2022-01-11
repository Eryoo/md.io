#### 初识 Intersection Observer API

###### 使用场景：

1.图片懒加载-当图片滚动到可见时进行加载
2.内容无限滚动

**示例功能： 当元素出现在可视区域变换颜色**

```html
//先添加10000个div搞点事
<div class='list'>
	<div v-for="i in 10000" class='item'>{{i}}</div>
</div>
```

```javascript
//定义一个方法 isInViewPort 判断当前target是否在可视区域中
//这里的 getBoundingClientRect 方法 返回当前dom的 width,height,top,left,bottom,right
function isInViewPort (element) {
  const viewWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewHeight =  window.innerHeight || document.documentElement.clientHeight;
  const { top, right, bottom, left } = element.getBoundingClientRect();
  return top >= 0 && left >= 0 && right <= viewWidth && bottom <= viewHeight;
}
```

```javascript
//获取所有.item
let itemList = document.getElementsByClassName('item');

//创建观察者 Intersection Observer
// new IntersectionObserver(callBack,options);
// 第一个参数callback回调方法，第二个是对应的options参数
/*
const options = {
  root:"",  指定根元素,必须是目前元素的父元素，未指定为null
  rootMargin:"", 指定根元素的外边距，类似margen属性 “10px 20px 30px 40px”,默认0
  threshold:""该值为1.0含义是当target完全出现在root元素中回调函数才会执行，如果你想target元素在root元素中的可见性超过50%时候，可以设置为0.5.
}
*/

const observer = new IntersectionObserver(changeBgHandle,{ threshold: 1.0 });

//为每个观察者配置一个目标
for(let i = 0; i itemList.length; i++){
   observer.observe(itemList[i]);
}

//每当目标满足该IntersectionObserver指定的threshold值，回调被调用。
function changeBgHandle (elementList) {
  for ( let i = 0; i < elementList.length; i++){
    if(isInViewPort(elementList[i].target)){
       elementList[i].target.style.backgroundColor = "yellow"
       }
    }
}
```

## 参考文献
https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect
https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API

