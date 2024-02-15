class LinkedListNode:


    def __init__(self, value):
        self.value = value
        self.nextNode = None


class LinkedList:

    def __init__(self):
        self.top = None

    def push(self, node):
        node.nextNode = self.top
        self.top = node


    def pop(self):
        self.top = self.top.nextNode