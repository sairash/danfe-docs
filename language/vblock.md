# V Block
You can run [V](https://vlang.io/) code from Danfe. It is not the fastest as it is evaluating using the `v binary` nevertheless still you can run v code directly from `danfe` program. <br>

To acheave that you need to write your v code in between `v {` and `} endv` in danfe. <br><br>
The value evaluated from v is returned using this special function `return()`

::: warning
As the v code is evaluated in a different process using `os terminal`. If you try to `stdout` in the terminal (`print`, `println`) then that is picked up and returned to the danfe identifier.
:::

<!--@include: ./reusable/vblock.md-->

<<< @/snippets/code/english/vblock.df#output {md} [Nepali]
