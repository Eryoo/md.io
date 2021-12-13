## 冒泡排序
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
首先，声明一个名为`length`的变量，用来存储数组的长度{1}。这一步可选，它能帮 助我们在行{2}和行{3}时直接使用数组的长度。接着，外循环{2}会从数组的第一位迭代 至最后一位，它控制了在数组中经过多少轮排序（应该是数组中每项都经过一轮，轮数和数组长 度一致）。然后，内循环将从第一位迭代至倒数第二位，内循环实际上进行当前项和下一项的比 较{4}。如果这两项顺序不对（当前项比下一项大），则交换它们{5}，意思是位置为`j+1`的值将会被换置到位置`j`处，反之亦然。

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

## 选择排序
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
## 插入排序
插入排序每次排一个数组项，以此方式构建最后的排序数组。假定第一项已经排序了。接着， 它和第二项进行比较——第二项是应该待在原位还是插到第一项之前呢？这样，头两项就已正确 排序，接着和第三项比较（它是该插入到第一、第二还是第三的位置呢），以此类推。

```javascript
function insertSort(arr) {
    var len = arr.length;
    var temp;
    for (var i = 1;i < len;i++){
        temp = arr[i]
        for (var j = i;j > 0 && temp < arr[j-1];j--){
            // 当前值和之前的每个值进行比较，发现有比当前值小的值就进行重新赋值
            arr[j] = arr[j-1];
        }
        arr[j] = temp;
    }
    return arr;
}
````
## 归并排序
归并排序是一种分而治之算法。其思想是将原始数组切分成较小的数组，直到每个小数组只 有一个位置，接着将小数组归并成较大的数组，直到最后只有一个排序完毕的大数组。 由于是分治法，归并排序也是递归的。我们要将算法分为两个函数：第一个负责将一个大数 组分为多个小数组并调用用来排序的辅助函数。我们来看看在这里声明的主要函数。

```javascript
function MergeSort(array) {
    let len = array.length;
    if (len <= 1) {   //{1}
      return array;
    }
    }
    let num = Math.floor(len / 2); //{2}
    let left = MergeSort(array.slice(0, num)); // {3}
    let right = MergeSort(array.slice(num, array.length));//{4}
    return merge(left, right); //{5}
  
    function merge(left, right) {
      let [l, r] = [0, 0]; //{6}
      let result = [];
      while (l < left.length && r < right.length) { //{7}
        if (left[l] < right[r]) { //{8}
          result.push(left[l]);
          l++;
        } else {
          result.push(right[r]);
          r++;
        }
      }
      result = result.concat(left.slice(l, left.length));
      result = result.concat(right.slice(r, right.length));
      return result; //{9}
    }
  }
````
归并排序将一个大数组转化为多个小数组直到其中只有一个项。由于算法是递归的，我们需 要一个停止条件，在这里此条件是判断数组的长度是否为 1{1}。如果是，则直接返回这个 长度为 1 的数组，因为它已排序了。 如果数组长度比 1 大，那么得将其分成小数组。为此，首先得找到数组的中间位{2}， 找到后我们将数组分成两个小数组，分别叫作 `left`{3}和 `right`{4}。`left` 数组由 索引 0 至中间索引的元素组成，而`right`数组由中间索引至原始数组最后一个位置的元素组成。 行{3}和行{4}将会对自身调用`mainSort`函数直到`left`数组和`right`数组的大小小于等于 1。

`merge`函数接收两个数组作为参数，并将它们归并至一个大数组。排序发生在归并过程中。 首先，需要声明归并过程要创建的新数组以及用来迭代两个数组（`left` 和 `right` 数组）所需的 两个变量{6}。迭代两个数组的过程中{7}，我们比较来自`left`数组的项是否比来 自`right`数组的项小。如果是，将该项从 `left` 数组添加至归并结果数组，并递增用于迭代数 组的控制变量{8}；否则，从`right`数组添加项并递增用于迭代数组的控制变量。 接下来，将`left`数组所有剩余的项添加到归并数组中,`right`数组也是一样{9}。最 后，将归并数组作为结果返回。

# 快速排序
快速排序也许是最常用的排序算法了。它的复杂度为 `O(nlog(n))`，且性能通常比其他复杂度 为`O(nlog(n))`的排序算法要好。和归并排序一样，快速排序也使用分而治之的方法，将原始数组 分为较小的数组（但它没有像归并排序那样将它们分割开）。

```javascript
function quickSort(array) {
	return quick(array, 0, array.length - 1);
};
```

就像归并算法那样，开始声明一个主方法来调用递归函数，传递待排序数组，以及索引0及其最末的位置（因为我们要排整个数组，而不是一个子数组）作为参数。
```javascript
function quick(array, left, right) {
	let index; // {1} 
	if (array.length > 1) { // {2}
		index = partition(array, left, right); // {3}
		if (left < index - 1) { // {4} 
			quick(array, left, index - 1); // {5} } 
			if (index < right) { // {6} 
				quick(array, index, right); // {7} 
			}
		}
		return array;
	};
```
首先声明`index`{1}，该变量能帮助我们将子数组分离为较小值数组和较大值数组。 这样就能再次递归地调用`quick`函数了。`partition`函数返回值将赋值给`index`{3}。 如果数组的长度比 1 大（因为只有一个元素的数组必然是已排序了的——行{2}），我们将对 给定子数组执行`partition`操作（第一次调用是针对整个数组）以得到`index`{3}。如果 子数组存在较小值的元素{4}），则对该数组重复这个过程{5}。同理，对存在较大值 的子数组也是如此，如果有子数组存在较大值{6}，我们也将重复快速排序过程{7}。

## 计数排序
计数排序是一个分布式排序。分布式排序使用已组织好的辅助数据结构（称为桶），然后进行合并，得到排好序的数组。计数排序使用一个用来存储每个元素在原始数组中出现次数的临时数组。在所有元素都计数完成后，临时数组已排好序并可迭代以构建排序后的结果数组。
它是用来排序整数的优秀算法（它是一个**整数排序算法**），时间复杂度为 `O(n+k)`，其中 k 是临时计数数组的大小。但是，它确实需要更多的内存来存放临时数组。
```javascript
function countingSort(array) {
	if (array.length < 2) { // {1} 
		return array;
	}
	const maxValue = findMaxValue(array); // {2} 
	const counts = new Array(maxValue + 1); // {3}
	array.forEach(element => {
		if (!counts[element]) { // {4}
			counts[element] = 0;
		}
		counts[element]++; // {5}
	});
	let sortedIndex = 0;
	counts.forEach((count, i) = >{
		while (count > 0) { // {6}
			array[sortedIndex++] = i; // {7} 
			count--; // {8}
		}
	});
	return array;
}
```
如果待排序的数组为空或只有一个元素{1}，则不需要运行排序算法。
对于计数排序算法，我们需要创建计数数组，从索引0开始直到最大值索引 value + 1 {3}。因此，我们还需要找到数组中的最大值{2}。要找到数组中的最大值，我们只需要迭代并找到值最大的一项即可。
```javascript
function findMaxValue(array) {
	let max = array[0];
	for (let i = 1; i < array.length; i++) {
		if (array[i] > max) {
			max = array[i];
		}
	}
	return max;
}
```
然后，我们迭代数组中的每个位置并在`counts`数组中增加元素计数值{5}。为了确保递增操作成功，如果`counts`数组中用来计数某个元素的位置一开始没有用0初始化的话，我们 将其赋值为0{4}。

::: tip
JavaScript数据结构预算法（第三版）
:::












