# Function
A `function` is a group of statements that together perform a task. You can divide up your code into separate functions.
<br>
<br>
`Dnafe` provides numerous built-in methods that your program can call. For example, method [`println()`](/built-in-functions) to print the argument passed in stdout.

## Defining Function
::: code-group

``` danfe [English]
function function_name( argument1, argument2..., argumentn){
    function_body
    return result_params_comma_separated
}
```

``` danfe [Nepali]
karya function_name( argument1, argument2..., argumentn){
    function_body
    pathau result_params_comma_separated
}
```
:::

## Example
Following is the source code for a function called `max()`. This function takes two parameters `num1` and `num2` and returns the maximum between the two numbers.

::: code-group
<<< @/snippets/code/english/max_number_func.df#max{danfe} [Engllish]

<<< @/snippets/code/nepali/max_number_func.df#max{danfe} [Nepali]
:::

## Function Arguments
Function Arguments aka `formal parameters` are local variables inside the function and are created upon entry into the function and destroyed upon exit.

## Calling Function
While creating a `Danfe function`, you give a definition of what the function has to do. To use a method, you will have to call that function to perform the defined task. <br>
When a program calls a function, program control is `transferred` to the called function.
### main.df
::: code-group
<<< @/snippets/code/english/max_number_func.df{danfe} [Engllish]
<<< @/snippets/code/nepali/max_number_func.df{danfe} [Nepali]
:::
``` md
# Output:
The maximum of the two numbers is 10
The maximum of the two numbers is 6
```

## Nested Function
`Danfe` allows the declaration of one function inside another function. Following section shows few examples to illustrate the concept.
::: code-group
<<< @/snippets/code/english/nested_function.df#function{danfe} [Engllish]
<<< @/snippets/code/nepali/nested_function.df#function{danfe} [Nepali]
:::

<<< @/snippets/code/english/nested_function.df#output{md}