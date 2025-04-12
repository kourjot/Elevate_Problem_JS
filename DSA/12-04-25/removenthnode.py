# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# def removeNthFromEnd(self, head:[ListNode], n: int) ->[ListNode]:
#         x=ListNode(0)
#         x.next=head
#         slow=x
#         fast=x
#         for i in  range(n+1):
#             if fast:
#                 fast=fast.next
#         while fast:
#             slow=slow.next
#             fast=fast.next
#         slow.next=slow.next.next
#         return x.nex