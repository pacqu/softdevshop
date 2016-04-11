'''
def wrapper( f ):
   def inner( *arg ):
       return f( *arg )
   return inner

def foo(x, y, s ):
    return s + " " + str(x+y)

closure = wrapper(foo)
print closure( -2, 3, 'hello' )
'''
'''
#a simple example of applying multiple decorators
def make_bold(fn):
    return lambda : "<b>" + fn() + "</b>"

def make_italic(fn):
    return lambda : "<i>" + fn() + "</i>"

@make_bold
@make_italic
def hello():
    return "hello world"

helloHTML = hello()

print helloHTML
'''
import time

def getFuncInfo(fn):
    def args(*arg):
        print fn.func_name + ": " + str([x for x in arg])
        return fn(*arg)
    return args

def getFuncTime(fn):
    start = time.time()
    def args(*arg):
        return fn(*arg)
    print "function runtime: " + str(time.time() - start)
    return args

@getFuncTime
@getFuncInfo
def mult(a,b):
    return a*b

print mult(2,3)
