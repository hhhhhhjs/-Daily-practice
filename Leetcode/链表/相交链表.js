/**
 * 实现思路：
 * 通过双指针遍历两个链表来实现最终结果，如果两个链表有交点，那么一定会在遍历的过程中相遇，因为两个指针都走了相同的路径
 * 循环条件为 pa !== pb ，如果有焦点，退出循环，返回 pa，如果没有焦点，最后也会相等， pa = pb = null 退出循环，返回 null
 */


class ListNode {
    constructor(val){
        this.val = val
        this.next = null
    }
}
const intersect = (headA, headB) => {
    // 首先判断两个链表是否是为空,如果有一个为空，直接返回 null
    if(!headA || !headB){
        return null
    }
    let pA = headA
    let pB = headB
    while(pA !== pB){
        pA = pA ? pA.next : headB
        pB = pB ? pB.next : headA
    }
    return pA.val
}

// 有相交
const a1 = new ListNode('a1')
const a2 = new ListNode('a2')

const b1 = new ListNode('b1')
const b2 = new ListNode('b2')
const b3 = new ListNode('b3')

const c1 = new ListNode('c1')
const c2 = new ListNode('c2')
const c3 = new ListNode('c3')

a1.next = a2
a2.next = c1
c1.next = c2
c2.next = c3

b1.next = b2
b2.next = b3
b3.next = c1

console.log(intersect(a1,b1))


