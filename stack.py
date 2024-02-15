from array import array

# As implemented, for holding positive integers only
# Hacky because of the "empty value"

EMPTY_VALUE = -1


class Stack:

    def __init__(self, length):
        self.length = length
        self.array = array('i', [EMPTY_VALUE] * length)
        self.top = -1


    def push(self, value):
        self.top += 1
        if self.top > (self.length -1):
            raise IndexError("STACK OVERFLowWw")
        self.array[self.top] = value


    def pop(self):
        if self.top < 0:
            raise IndexError("STACK UNDERFLOW??")
        self.array[self.top] = EMPTY_VALUE
        self.top -= 1

    def print_stack(self):
        for element in self.array:
            if element is not EMPTY_VALUE:
                print(element)