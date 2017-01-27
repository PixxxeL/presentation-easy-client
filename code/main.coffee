console.log var1?

number = -42 if true
string = "Number is #{number}"
dir = if number then -1 else 1

dict =
    key1 : "value1"
    key2 : "value2"
list1 = ("#{key} is #{val}" for key, val of dict)

list2 = [0..4]
square = (x) -> x * x
squares = (square num for num in list2)

[first, ..., last] = "Word1 word2 word3 word4 word5".split " "

class Person
    constructor: (options) ->
        {@name, @age, @height = 'average'} = options
tim = new Person name: 'Tim', age: 4
