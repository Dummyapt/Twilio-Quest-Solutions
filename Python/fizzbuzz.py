import sys

numbers = sys.argv
numbers.pop(0)

for i in numbers:
    number = int(i)
    if number % 3 == 0 and number % 5 == 0:
        print("fizzbuzz")
    elif number % 5 == 0:
        print("buzz")
    elif number % 3 == 0:
        print("fizz")
    else:
        print(number)
