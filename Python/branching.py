import sys

first = sys.argv[1]
second = sys.argv[2]
result = int(first) + int(second)

if result <= 0:
    print("You have chosen the path of destitution.")
elif result in range(1, 101):
    print("You have chosen the path of plenty")
elif result > 100:
    print("You have chosen the path of excess.")

print(result)
