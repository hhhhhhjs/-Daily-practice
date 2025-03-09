// 二叉树的最大深度
// 直接递归即可, 最后加上一是因为需要带上正在遍历的根节点
// 使用深度有限搜索
const maxdeep = (root) => {
    // 判断 root 是否为 null
    if(!root){
        return 0
    }
    const deepleft = maxdeep(root.left)
    const deepright = maxdeep(root.right)
    return Math.max(deepleft,deepright) + 1
}
