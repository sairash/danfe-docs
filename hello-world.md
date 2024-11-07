# Hello World

<!--@include: /snippets/small/print_hello_world.md-->

Save this snippet into a file named `hello.df`. Now do: `./danfe run hello.df`. <br>

**Congratulations :tada:** - you just wrote and executed your first Danfe program! <br>

<!--@include: /language/reusable/__module__.md-->


`println` is one of the few [built-in functions](/built-in-functions). It prints the value passed to it to standard output.

## Intresting Fact:
Most of the keyword is mapped to it's `nepali counterpart`. You can write the same `hello world` program as:
``` danfe
# yedi is the nepali counterpart of if
yedi __module__ == "main" {
    # dekhau is the nepali couterpart of print
    dekhau("Hello World")
}
```
Learn more about keywords [here](/keywords).