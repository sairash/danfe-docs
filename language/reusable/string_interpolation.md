### String Interplation <br>
`String Interplation` can be achieved in `Danfe` by using `%i{` before a variable name and `}` after. The variable will be converted to a string and embedded into the literal:
::: code-group
``` danfe [English]
name = "Danfe"
println("Hello from %i{name}!")
```
``` danfe [Neplai]
name = "Danfe"
dekhauln("Hello from %i{name}!")
```
:::

``` md
# Output
Hello from Danfe!
```