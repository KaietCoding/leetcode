var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let slow = head;
  let fast = head.next;

  while (fast && fast.next.next) {
    if (slow === fast) return true;
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
};
