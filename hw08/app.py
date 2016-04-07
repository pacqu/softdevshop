def union(a,b):
    return a + [x for x in b if x not in a]

def intersect(a,b):
    return [x for x in a if x in b]

def setDiff(a,b):
    return [x for x in a if x not in b]

def symDiff(a,b):
    return setDiff(union(a,b),intersect(a,b))

def cartProd(a,b):
    return [(A,B) for A in a for B in b]

l1 = [1,2,3]
l2 = [2,3,4]

print union(l1,l2)
print intersect(l1,l2)
print setDiff(l1,l2)
print symDiff(l1,l2)
print cartProd(l1,l2)
