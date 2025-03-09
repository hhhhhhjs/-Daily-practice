// 二叉树的后续遍历
// 构造二叉树类
class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

// 前中后序遍历, 这里将后序遍历作为示例
// 使用递归, 左右根

function backendTraverse(root) {
    const result = []
    function traverse(node) {
        if (node === null) {
            return []
        }
        traverse(node.left)
        traverse(node.right)
        result.push(node.value)
    }
    traverse(root)
    return result
}


// 测试用例
const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)

console.log(backendTraverse(root))
