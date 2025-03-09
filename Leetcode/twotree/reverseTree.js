// 反转二叉树
// 使用递归
class TreeNode {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

const reverseTree = (root) => {
    // 递归终止条件
    if(root === null){
        return root
    }
    // 递归遍历左右节点
    const left = reverseTree(root.left)
    const right = reverseTree(root.right)
    // 交换左右子树
    root.left = right
    root.right = left
    return root
}

// 测试用例
const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.right.left = new TreeNode(4)
root.right.right = new TreeNode(5)

console.log(reverseTree(root))