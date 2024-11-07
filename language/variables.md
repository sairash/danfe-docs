# Variables
A variable is a `name` given to a `storage` area that our programs can `manipulate`. It can hold different types of values including tables, arrays and litreals.
<br>
<br>
The name of a variable can be composed of `letters`, `digits`, and the `underscore` character. It must begin with either a letter or an underscore. Upper and lowercase letters are distinct because Danfe is case-sensitive. There are eight basic types of values in Danfe
<br>
<br>

:::warning Info
* **`Global variables` -** `All variables` in Danfe `global`. Which means it can be controlled updated and created from anywhere in the program.
::::

## Variable Definition in Danfe
A variable definition means to tell `Danfe` where and how much to create the storage for the variable.

``` danfe
a = 0                              # int value
b = "10"                            # string value
c = 10.0                            # float value
d = [10, c, "danfe"]                # array value
e = ["x" => a, "y" => b, "z" => d]  # table value
```

## Conditional Assignment
By the use of `Existential Operator` -> `?=` you can assign value to a variable if the variable is null.

::: warning
This `operator` can only be used after assignment of variable
:::
``` danfe 
a ?= 15     # Assigns the value of a as 15 if a is 0
c ?= 15.0   # Assigns the value of c as 15.0 if a is 0
```
---
Let's `print` out the value from variable:
c
::: code-group
``` danfe  [English]
println("Value of a: %i{a}")
println("Value of b: %i{b}")
println("Value of c: %i{c}")
println("Value of d: %i{d}")
println("Value of e: %i{e}")
```
``` danfe  [Nepali]
dekhauln("Value of a: %i{a}")
dekhauln("Value of b: %i{b}")
dekhauln("Value of c: %i{c}")
dekhauln("Value of d: %i{d}")
dekhauln("Value of e: %i{e}")
```
:::

``` md
# Output
Value of a: 15
Value of b: 10
Value of c: 10.0
Value of d: [10, 10.0, danfe]
Value of e: [x => 0, y => 10, z => [10, 10.0, danfe]]
```

Learn about `"Value of a: $i{a}"` -> [`String Interplation`](./danfe-types.md#string-interplation) <br> 

There are 7 [Danfe types](./danfe-types.md) and variables can be one of them.

<!--@include: ./reusable/type-table.md-->

## Lvalues and Rvalues Danfe
There are two kinds of expressions.

:::warning Info
* **`Lvalues` -** Expression that refers to `memory location`. Lvalues always appear as the left-hand side of assignment.
* **`Rvalues` -** The term rvalue refers to a data value that is stored at some address in memory.
::::
Variables are lvalues and so may appear on the left-hand side of an assignment. Numeric literals are rvalues and so may not be assigned and cannot appear on the left-hand side. Following is a valid statement −

``` danfe
g = 20
```
But following is not a valid statement and would generate a build-time error −
``` danfe
10 = 20
```


### Push an Pop
Push and pop only works for **Array and Tables**.


::: code-group
<<< @/language/reusable/push_pop.df#array{danfe} [Array]
<<< @/language/reusable/push_pop.df#table{danfe} [Table]
:::

::: code-group
<<< @/language/reusable/push_pop.df#array_output{danfe} [Array Output]
<<< @/language/reusable/push_pop.df#table_output{danfe} [Table Output]
:::

You can refrence theses links to learn more about it 
[**Array**](./danfe-types.md#push-and-pop) and [**Table**](./danfe-types.md#push-and-pop-1)

<!--@include: ./reusable/string_interpolation.md-->

## Derefrence identifier
After Assignment you can manually deassign an identifier using the keyword [`del`](/language/del.md)
