'''
p="myNoobPass1234"

print [x for x in p]
['m', 'y', 'N', 'o', 'o', 'b', 'P', 'a', 's', 's', '1', '2', '3', '4']

print [x for x in "1234"]    
['1', '2', '3', '4']


UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

print [ x for x in p if x in UC_LETTERS ]   
['N','P']
print [ 1 for x in p if x in UC_LETTERS ]  
[1, 1]
print [ 1 if x in UC_LETTERS else 0 for x in p ]  
[0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
'''

'''
YOUR TASK The First:
Write a function that uses list comprehension to return whether a password meets a minimum threshold: it contains a mixture of upper- and lowercase letters, and at least one number.
'''
import string

def passCheck(password):
    lc = list(string.ascii_lowercase)
    uc = list(string.ascii_uppercase)
    nums = ['0','1','2','3','4','5','6','7','8','9']

    if ( ( len([x for x in password if x in lc] ) == 0 ) or
         ( len([x for x in password if x in uc] ) == 0 ) ): 
        #print "lc: " + str([x for x in password if x in lc])
        #print "uc: " + str([x for x in password if x in uc])
        return False
    if (len([x for x in password if x in nums]) == 0):
        return False

    return True

print passCheck("hi")
print passCheck("HI")
print passCheck("Hi")
print passCheck("Hi1")

def passStrength(password):

    if (not passCheck(password) ):
        return "Password not valid. Please try another one"

    lc = list(string.ascii_lowercase)
    uc = list(string.ascii_uppercase)
    nums = ['0','1','2','3','4','5','6','7','8','9']
    spec = ['.','?','!','&','#',',',';',':','-','_','*']

    pass_lc = [x for x in password if x in lc]
    pass_uc = [x for x in password if x in uc]
    pass_nums = [x for x in password if x in nums]
    pass_spec = [x for x in password if x in spec]
    score = 1

    score += ( len(pass_lc)/3 ) + ( len(pass_uc)/2 )
    + ( len(pass_nums)/2  + len(pass_spec))
    if (score > 10):
        score = 10

    return score

print passStrength("Hi1")
print passStrength("Thisrandpass4")
print passStrength("MaybeThisHigh33*&")

