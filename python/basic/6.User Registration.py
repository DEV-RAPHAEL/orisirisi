# A quick registration form
print('Welcome To Our Online Registration Portal')
print('Kindly fill up the form to proceed')

name = input('Input your full name ')
print('Welcome', name)
user = input('Create a new username ')
mail = input('Enter your E-maill Address ')
phone = input('Enter Your Phone Number ')
print('Thanks for filling up this information')
print('Here is your Login Details')
print('Your username is', name + 'Your Email address is', mail )
print('Check Your mail for account confirmation and password')
print('I want to change my username')
print('your username is', user)
userNew = input('Enter New username:' )
print(user.replace(user, userNew))
print('Your new username is ', userNew)


