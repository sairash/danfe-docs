# Danfe Types <Badge type="warning" text="(Data Types)" />
Danfe is a `dynamically typed` language, so the variables don't have types, only the `values have types`. Values can be stored in `variables`, passed as `parameters` and returned as `results`.

The **list** of data types for values are given below:

<!--@include: ./reusable/type-table.md-->

## String
Strings in Danfe are `UTF-8` encoded binaries. <br> <br>
Strings in Elixir are a sequence of `Unicode characters`, typically written between double quoted strings, such as `"hello"` and `"héllò"`. <br> <br>
In case a string must have a `quote in itself`, the quotes must be escaped with a `backslash`, for example: "this is a string with \\"double quotes\\"" `or` 'this is a string with \\'double quotes\\'. <br> <br>
You can concatenate two strings with the `+` operator:
::: code-group
``` danfe [English]
println("hello"+" "+"world")   # prints "hello world"
```
``` danfe [Nepali]
dekhauln("hello"+" "+"world")   # prints "hello world"
```
:::

::: code-group
``` danfe [English]
name = "Bob"            # also written as 'Bob'
println(len(name))      # prints 3
println(name[0])         # prints 'B'
println(typeof(name))    # prints 'string'
```
``` danfe [Nepali]
name = "Bob"            # also written as 'Bob'
dekhauln(len(name))      # prints 3
dekhauln(name[0])         # prints 'B'
dekhauln(prakar(name))    # prints 'string'
```
:::
<!--@include: ./reusable/string_interpolation.md-->

### Escape Characters
Besides allowing quotes to be escaped with a backslash, strings also support the following escape characters:
* `\0` ->  Null byte
* `\a` ->  Bell
* `\b` ->  Backspace
* `\t` ->  Horizontal tab
* `\n` ->  Line feed (New lines)
* `\v` ->  Vertical tab
* `\f` ->  Form feed
* `\r` ->  Carriage return
* `\e` ->  Command Escape
* `\\` ->  Single backslash

### Repeat String
You can repeate the string for `x` amount of times usnig the `*` operator:
::: code-group
``` danfe [English]
println("a" * 5)   # prints 'aaaaa'
```
``` danfe [Nepali]
dekhauln("a" * 5)   # prints 'aaaaa'
```
:::


## Numbers
**Int :** <br>
Whole numbers (not fractions)
::: code-group
``` danfe [English]
a = 10
println(typeof(a)) # prints 'int'
```
``` danfe [Nepali]
a = 10
dekhauln(prakar(a)) # prints 'int'
```
:::
Danfe also supports writing numbers with `_` as separator:
``` danfe
num = 1_000_000           # same as 1000000
float_num = 69_122.55_66  # same as 69122.5566
```

**Float :** <br>
Assigning floating point numbers works the same way:
::: code-group
``` danfe [English]
a = 10.0
println(typeof(a)) # prints 'float'
```
``` danfe [Nepali]
a = 10.0
dekhauln(prakar(a)) # prints 'float'
```
:::
## Nil
`nil` aka `khali` is just an alias for `int 0`

::: code-group
``` danfe [English]
a = nil            # equivalent to a = 0
println(typeof(a)) # prints 'int'
```
``` danfe [Nepali]
a = khali           # equivalent to a = 0
dekhauln(prakar(a)) # prints 'int'
```
:::
## Boolean
Includes `true` -> `1` and `false` -> `0` as values. Generally used for condition checking.

::: code-group
``` danfe [English]
a = true                           # equivalent to a = 1
b = false                          # equivalent to a = 0
println(typeof(a), " ", typeof(b)) # prints 'int int'
```
``` danfe [Nepali]
a = thik                            # equivalent to a = 1
b = bethik                          # equivalent to a = 0
dekhauln(prakar(a), " ", prakar(b)) # prints 'int int'
```
:::
## Array
An array is a `collection` of data elements of the `any` [danfe types](./danfe-types.md#danfe-types). An array literal is a list of expressions `surrounded` by `square brackets`. An individual element can be accessed using an index expression. Indexes start from `0`:
::: code-group
``` danfe [English]
# Collection of users with their name and age
users = [["Bob", 21], ["Jack", 22], "Charles"]  

# Can be updated using index
users[2] = ["Charles", 35]                      

println(users)
println("Name: ", users[1][0], " , Age: ", users[1][2])
println("Length of array: ", len(users))
```
``` danfe [Nepali]
# Collection of users with their name and age
users = [["Bob", 21], ["Jack", 22], "Charles"]  

# Can be updated using index
users[2] = ["Charles", 35] 

dekhauln(users)
dekhauln("Name: ", users[1][0], " , Age: ", users[1][2])
dekhauln("Length of array: ", ginti(users))
```
:::

``` md
# Output
[[Bob, 21], [Jack, 22], [Charles, 35]]
Name: Jack , Age: 21
Length of array:  3
```

::: details Be carefull! {open}
If you try and update `array` using a `string index` it is going to convert `array` into a `table` and there is no going back! <br>
::: code-group
``` danfe [English]
user = [0, 1, 2]
println(typeof(user))     # prints 'array'

user["abc"] = [3]
println(typeof(user))     # prints 'table'
```
``` danfe [Nepali]
user = [0, 1, 2]
dekhauln(prakar(user))     # prints 'array'

user["abc"] = [3]
dekhauln(prakar(user))     # prints 'table'
```
:::

While creating an array if you use ` multi line` intstead of the seperator `,`.
``` danfe
x = [
    "a"
    "b"
    "c"
]                   # same as x = ["a", "b", "c"]
```
#### Push and Pop
To append (`push`) new value and to delete (`pop`) the last value of an array you can use these opeators ( `<<` and `>>` ) respectively. <br/>
<br/>

While `poping` the `last` value which was `deleted` from the array is `returned`

<<< @/language/reusable/push_pop.df#array{danfe} [Engllish]

<<< @/language/reusable/push_pop.df#array_output{danfe} [Engllish]


## Table
Tables are the "go to" `key-value` data structure in Danfe. Danfe itself uses a form of Table to store it's `identifiers` <br> <br>
Like Arrays Tables too can store any of `Danfe Types` including tables itself. 
Arrays can only use number indexes and Tables can only use string indexes. <br><br>
Tables can be created with the `[]` syntax, and key-value pairs can be expressed as `key => value`: <br> <br>

::: code-group
``` danfe [English]
# Table of users with their name as index
users = ["bob"=>["age"=>21, "likes"=>["fruits" => "apple", "color" => "red"]], 
        "jack"=>["age"=>22, "likes"=>["fruits" => "mango", "color" => "yellow"]]]


println(users)

# Can be updated using index
users["bob"]["likes"]["color"] = "black"

# Print just an index
println(users["bob"]["likes"])

println("Length of Table: ", len(users))
```
``` danfe [Nepali]
# Table of users with their name as index
users = ["bob"=>["age"=>21, "likes"=>["fruits" => "apple", "color" => "red"]], 
        "jack"=>["age"=>22, "likes"=>["fruits" => "mango", "color" => "yellow"]]]


dekhauln(users)

# Can be updated using index
users["bob"]["likes"]["color"] = "black"

# Print just an index
dekhauln(users["bob"]["likes"])

dekhauln("Length of Table: ", ginti(users))
```
:::
<br>

::: info
`Arrays` in Danfe are just tables with certain restrictions, under the hood. 

:::
::: info
Tables are the `only` data structure that helps us create different types like `arrays` and `dictionaries`
:::

While creating an tables if you use `multi line` intstead of the seperator `,`.

``` danfe
users = [
    "bob"=>[
        "age"=>21
        "likes"=>[
            "fruits" => "apple"
            "color" => "red"
        ]
    ]
    "jack"=>[
        "age"=>22
        "likes"=>[
            "fruits" => "mango"
            "color" => "yellow"
        ]
    ]
]       # behaves same as creating it with a ","
```

#### Push and Pop
`Yes` you can use push and pop in tables too, similar to [array](./danfe-types.md#array). You need to use these two operators `<<` and `>>` respectively.
<br>
<br>

While Pushing in table, a random string of `10 characters` is generated and inserted to the `table` with the value. <br>
While Poping the last poped value is `returned`.

<<< @/language/reusable/push_pop.df#table{danfe} [Engllish]

<<< @/language/reusable/push_pop.df#table_output{danfe} [Engllish]