class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function isPalindrome(head) {
    if (!head || !head.next) return true;
  
    // 1. 快慢指针找到中点
    let slow = head, fast = head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    // 2. 反转后半部分链表
    let reversedSecondHalf = reverseList(slow);
  
    // 3. 比较前半部分和反转后的后半部分
    let p1 = head, p2 = reversedSecondHalf;
    while (p2 !== null) {  // 后半部分可能比前半部分短
      if (p1.val !== p2.val) {
        return false;
      }
      p1 = p1.next;
      p2 = p2.next;
    }
  
    return true;
  }
  
  // 反转链表的辅助函数
  function reverseList(head) {
    let prev = null;
    let curr = head;
    while (curr !== null) {
      let nextTemp = curr.next; // 暂存下一个节点
      curr.next = prev;         // 反转当前节点指向
      prev = curr;              // prev 前进
      curr = nextTemp;          // curr 前进
    }
    return prev;
  }
  