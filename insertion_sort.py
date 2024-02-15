def insertion_sort(my_list):
    for index in range(1, len(my_list)):
        currentElement = my_list[index]
        previousIndex = index - 1
        while previousIndex >= 0 and currentElement < my_list[previousIndex]:
            my_list[previousIndex + 1] = my_list[previousIndex]
            previousIndex -= 1
        my_list[previousIndex + 1] = currentElement
    print( my_list)
