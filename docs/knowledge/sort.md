# <font color=#318a62>冒泡排序</font>
冒泡排序比较所有相邻的两个项，如果第一个比第二个大，则交换它们。元素项向上移动至 正确的顺序，就好像气泡升至表面一样，冒泡排序因此得名。
```javascript
function bubbleSort(array) {
    const { length } = array  //{1}
    for (let i = 0; i < length - 1; i++) {  //{2}
        for (let j = 0; j < length - 1; j++) { //{3}
            if (array[i] > array[j]) { // {4}
                swap(array, j, j + 1) 
            }
        }
    }
    return array
}
```
首先，声明一个名为 length 的变量，用来存储数组的长度{1}。这一步可选，它能帮 助我们在行{2}和行{3}时直接使用数组的长度。接着，外循环{2}会从数组的第一位迭代 至最后一位，它控制了在数组中经过多少轮排序（应该是数组中每项都经过一轮，轮数和数组长 度一致）。然后，内循环将从第一位迭代至倒数第二位，内循环实际上进行当前项和下一项的比 较{4}。如果这两项顺序不对（当前项比下一项大），则交换它们{5}，意思是位置为 j+1 的值将会被换置到位置 j 处，反之亦然。

```javascript
function swap(array, a, b) {
  const temp = array[a]; // {5}
  array[a] = array[b]; // {6} 
  array[b] = temp; // {7} 
}
```
要交换数组中的两个值，我们需要一个辅助变量来复制要交换的第一个元素{5}。然 
后，将第二个元素赋值到第一个元素的位置{6}。最后，将复制的第一个元素的值{5} 
覆盖到第二个元素的位置{7}。

# <font color=#318a62>选择排序</font>
选择排序算法是一种原址比较排序算法。选择排序大致的思路是找到数据结构中的最小值并 将其放置在第一位，接着找到第二小的值并将其放在第二位，以此类推。
```javascript
function selectSort(arr) {
    var len = arr.length;
    var temp;
    for (var i = 0; i < len - 1; i++) {
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[i]) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}
```