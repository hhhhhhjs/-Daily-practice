// 判断链表是否有环 
// 使用快慢指针

class ListNode {
    constructor(val){
        this.val = val
        this.next = null
    }
}


const hasCycle = (head) => {
    // 首先判断是否是空链表以及是单个节点的链表
    if(!head || !head.next){
        return false // 空链表或一个节点的链表肯定没有环
    }
    let slow = head
    let fast = head
    while(fast && fast.next){
        // 慢指针一次移动一步，快指针一次移动两步，如果两个指针相遇，那么说明该链表有环
        slow = slow.next
        fast = fast.next.next
        if(slow === fast){
            return true 
        }
    }
    return false
}

// 测试用例
const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
const node4 = new ListNode(4)
const node5 = new ListNode(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node1

console.log(hasCycle(node1))