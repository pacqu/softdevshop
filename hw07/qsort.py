def qsort( li ):
    if len(li) <= 1:
        return li
    pivot = li[0]
    low = qsort([x for x in li[1:] if x <= pivot])
    up = qsort([y for y in li[1:] if y > pivot])
    return low + [pivot] + up 

print qsort([0,5,6,3,2,1,6,7,3])
