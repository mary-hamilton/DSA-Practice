def binary_search(my_list, value):
    length = len(my_list)
    minIndex = 0
    maxIndex = length - 1
    midIndex = (minIndex + maxIndex) // 2
    while not minIndex > maxIndex:
        current_element = my_list[midIndex]
        if current_element == value:
            return midIndex
        if value > current_element:
            minIndex = midIndex + 1
        if value < current_element:
            maxIndex = midIndex - 1
        midIndex = (minIndex + maxIndex) // 2
    return -1