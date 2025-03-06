// 反转链表

class ListNode{
    constructor(value){
        this.value = value
        this.next = null
    }
}

const reverseList = (head) => {
    if(head === null || head.next === null){
        return head
    }
    // 保存前一个节点
    let prev = null
    // 当前节点
    let curr = head
    while(curr){
        const next = curr.next // 保存下一个节点
        curr.next = prev // 改变当前节点的指向，指向前一个节点
        prev = curr
        curr = next
    }
    return prev // 最终指向新的头节点
}

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
const node4 = new ListNode(4)
const node5 = new ListNode(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

// 反转链表
const newHead = reverseList(node1);

// 输出反转后的链表
let current = newHead;
console.log(current)
while (current) {
    console.log(current.value); // 输出: 5 4 3 2 1
    current = current.next;
}