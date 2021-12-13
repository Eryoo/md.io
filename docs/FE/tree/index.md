## 二叉树

```javascript
export class Node {
    constructor (key) {
        this.key = key  //节点的值
        this.left = [] //左侧子节点引用
        this.right = [] //右侧子节点引用
    }
}
```
```javascript
class BinarySearchTree {
    constructor () {
        this.root = null
        this.array = []
    }
    //向树中插入一个新的键
    insert(key) {
        if (this.root == null) {
            this.root = new Node(key)
        } else {
            this.insertNode(this.root, key)
        }
    }
    //在树中查找一个键。如果节点存在，则返回true,否则返回false
    search(key) {
        return this.searchNode(this.root, key)
    }
    //寻找一棵树或其他子树的特定值
    searchNode(node, key) {
        if (node == null) return false
        if (node.key < key) {
            return this.searchNode(node.left, key)
        } else if (node.key < key) {
            return this.searchNode(node.right, key)
        } else {
            return true
        }
    }

     //通过中序遍历方式遍历所有节点 - 就是从最小到最大排序节点
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback); 
    }
    inOrderTraverseNode(node, callback) { 
        if (node !== null) {
        this.inOrderTraverseNode(node.left, callback);
        callback(node.key);
        this.inOrderTraverseNode(node.right, callback); 
    } 
    //通过先序遍历方式遍历所有节点
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root,callback)
    }
    // 优先于后代节点的顺序访问每个节点
    preOrderTraverseNode(node, callback) {
        if (node != null) {
            callback(node.key); 
            this.preOrderTraverseNode(node.left, callback); 
            this.preOrderTraverseNode(node.right, callback);
        }
    }
    //通过后序遍历方式遍历所有节点
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback);
    }
    //先访问节点的后续节点，在访问本身节点。
    postOrderTraverseNode(node, callback) {
        if (node != null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback); 
            callback(node.key); 
        }
    }
    // 删除树中的某个键
    remove(key) {
        this.root = this.removeNode(this.root, key);
    }
    removeNode(node,key) {
        if(node == null) return
        if(node.key < key){
            node.left = this.removeNode(node.left,key)
            return node
        }else if (node.key > key) {
             node.right = this.removeNode(node.right,key)
             return node
        }else{
            // 移除子叶节点
            if(node.left == null && node.right == null){
                node = null
                return node
            }
            //如果这个节点没有左侧子节点，
            //也就是说它有一个右侧子节点，
            //因此我们把它的有引用改为它右侧的节点
            if(node.left == null){
                node = node.right
                return node
            }

            if(node.right == null){
                node = node.left
                return node
            }
        }
    }
    console() {
        return this.root
    }

    //将节点添加到根节点以外的位置
    insertNode(node, key) {
        if (key < node.key) {
            if (node.left === null) {
                node.left = new Node(key)
            } else {
                this.insertNode(node.left, key)
            }
        } else {
            if (node.right === null) {
                node.right = new Node(key)
            } else {
                this.insertNode(node.right, key)
            }
        }
    }
}

```
