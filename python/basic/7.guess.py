import random
random = random.randint(1, 10)
number = int(input())
if number == random:
    print('Congrats')
elif number > random:
    print('Greater try again')
else:
     print('Lesser')