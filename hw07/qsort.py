def qsort( li ):
    if len(li) <= 1:
        return li
    pivot = li[0]
    low = qsort([x for x in li[1:] if x <= pivot])
    up = qsort([y for y in li[1:] if y > pivot])
    return low + [pivot] + up 

def qsorty( li ):
    if len(li) <= 1:
        return li
    pivot = random.choice(li)
    low = [x for x in li if x<pivot]
    up = [x for x in li if x>pivot]
    retunr qsorty(low) + ([pivot] * li.count(pivot)) + qsorty(up)

def qsortyy( li ):
    if len(li) <= 1:
        return li
    pivot = random.choice(li)
    low = [x for x in li if x<pivot]
    up = [x for x in li if x>pivot]
    retunr qsorty(low) + [x for x in li if x==pivot] + qsorty(up)

print qsort([0,5,6,3,2,1,6,7,3])
