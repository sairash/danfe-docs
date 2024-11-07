# Conditions
Danfe assumes that `1` -> `true` and `0` -> `false`. And also for `string type`, if the string is empty `''` -> `false` and if the string has value it is considered `true`
## `If`
`if` statements are pretty straightforward and similar to most other languages. Unlike other C-like languages, there are `no parentheses` surrounding the condition and the `braces` are always required.

::: code-group
``` danfe [English]
a = 10
b = 20

if (a < b) {   # can also be written as if a < b  with the ()
    println('%i{a} < %i{b}')
} else if a > b {
    println('%i{a} > %i{b}')
} else {
    println("%i{a} == %i{b}")
}
```

``` danfe [Nepali]
a = 10
b = 20

yedi (a < b) {   # can also be written as yedi a < b  with the ()
    dekhauln('%i{a} < %i{b}')
} natra yedi a > b {
    dekhauln('%i{a} > %i{b}')
} natra {
    dekhauln("%i{a} == %i{b}")
}
```
:::

## `If` expressions

Unlike C, Danfe does not have a ternary operator, that would allow you to do: `x = c ? 1 : 2` . Instead, it has a bit more verbose, but also clearer to read, ability to use `if` as an expression. The direct translation in V of the ternary construct above, assuming `c` is a boolean condition, would be: `x = if c { 1 } else { 2 }`.

::: code-group
``` danfe [English]
num = 777

s = if num % 2 == 0 {'even'} else {'odd'}

println(s)
```

``` danfe [Nepali]
num = 777

s = yedi num % 2 == 0 {'even'} natra {'odd'}

dekhauln(s)
```
:::