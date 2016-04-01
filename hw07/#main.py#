def inc(x):
    return x + 1

f = inc

#print f(10)

def h(x):
    return lambda y: x + y

#print h(1)
#print h(2)
#print h(1)(3)
#print h(2)(5)

b=h(1)
#print b
#print b(3)

def f(x):
    def g(y):
        return x + y
    return g

#print f(1)
#print f(1)(3)



a=f(1)
b=h(1)

print a(1)
print b(1)

#TASK:
def repeat(word):
    return lambda count: word * count

#print repeat("hi")
#print repeat("hi")(3)

'''
def r1(count):
    return repeat("hello")(count)

def r2(count):
    return repeat("goodbye")(count)
'''

r1 = repeat("hello")
r2 = repeat("goodbye")

print r1(2) #hellohello
print r2(2) #goodbyegoodbye
print repeat('cool')(3) #coolcoolcool

