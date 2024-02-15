class LinkedListNode:

    def __init__(self, value, nextNode=None):
        self.value = value
        self.nextNode = nextNode


class LinkedList:

    def __init__(self, head):
        self.head = head


    def get_node_by_index(self, target_index):
        current_node = self.head
        current_index = 0
        try:
            while current_node is not None:
                if current_index == target_index:
                    return current_node
                current_node = current_node.nextNode
                current_index += 1
        except:
            raise IndexError("Index out of bounds")



    def insert_node_after_target_index(self, new_node, target_index):
        if target_index == -1:
            new_node.nextNode = self.head
            self.head = new_node
            return
        previous_node = self.get_node_by_index(target_index)
        new_node.nextNode = previous_node.nextNode
        previous_node.nextNode = new_node



    def delete_node_at_target_index(self, target_index):

        if target_index == 0:
            self.head = self.head.nextNode
            return
        # I need to traverse the list until I reach the target index, then make the node at the previous index's pointer refer to the node at the
        # following index
        # Because it's a singly linked list, that's all I need to do I think
        previous_node = self.get_node_by_index(target_index - 1)
        node_to_delete = previous_node.nextNode
        next_node = node_to_delete.nextNode
        previous_node.nextNode = node_to_delete.nextNode


    def print_list(self):
        value_list = []
        currentNode = self.head
        while currentNode.nextNode is not None:
            value_list.append(currentNode.value)
            currentNode = currentNode.nextNode
        print(value_list)