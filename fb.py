#! /usr/local/bin/python3

def isInvalidString(nextTwoChars):
	return int(nextTwoChars) == 0 or (int(nextTwoChars) > 26 and nextTwoChars.endswith('0'))

def solve(inputString):
	result = previousResult = 1
	for i in range(0, len(inputString) - 1):
		nextTwoChars = inputString[i : i+2]
		if isInvalidString(nextTwoChars): return 0
		if int(nextTwoChars) > 26: previousResult = result
		elif '0' in nextTwoChars : result = previousResult
		else : result, previousResult = previousResult + result, result
	return result

while True:
	inputString = input()
	if inputString.startswith('0') : break
	print(solve(inputString))