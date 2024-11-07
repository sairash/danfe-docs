# Loops
Danfe has only two looping keyword: `for` and `ghum`, with several forms.

## Condtion `for`

::: code-group
``` danfe [English]
sum = 0
i = 0

for i < 100 {     # loop until i is less than 100
    sum = sum + i
    i = i + 1
}

println(sum)      # "4950"
```
``` danfe [Nepali]
sum = 0
i = 0

ghum i < 100 {     # loop until i is less than 100
    sum = sum + i
    i = i + 1
}

dekhauln(sum)      # "4950"
```
:::

## Bare `for`

::: code-group
``` danfe [English]
num = 0

for {     # loops forever until stopped
    num = num + 2
    if num > 10 {
        break
    }
}

println(num)      # "12"
```
``` danfe [Nepali]
num = 0

ghum {            # loops forever until stopped
    num = num + 2
    if num > 10 {
        break     # breaks out of the loop
    }
}

dekhauln(num)      # "12"
```
:::

## `break` & `continue`

::: code-group
``` danfe [English]
num = 0

for {              # loops forever until stopped
    num = num + 1
    if num % 2  {  # num % 2 != 0 
        continue   # does not execute the instructions bellow
    }
    if num > 10 {
        break      # breaks out of the loop
    }
    println(num)
}

```
``` danfe [Nepali]
num = 0

ghum {             # loops forever until stopped
    num = num + 1
    if num % 2  {  # num % 2 != 0 
        xod        # does not execute the instructions bellow
    }
    if num > 10 {
        todh       # breaks out of the loop
    }
    println(num)
}

```
:::

``` md
# Output
2
4
6
8
10
```
::: info
Array and Table `for` where you use the `in` key word is comming soon...
:::