# Magic Methods
These are the variables which provide hooks into Danfe's `core` functionalities and can be used to customize behaviors.

| method | Info |
| -- | -- |
| [`__module__`](/) | Provides the current module name |
| `__args__` | Provides the arguments given by the user |


## \_\_module__
<!--@include: ./reusable/__module__.md-->

## \_\_args__
You can get the values that users provide when excuting the program.

``` danfe
println(__args__)
println(typeof(__args__))
```
**run:**
``` sh
danfe run ./main.df ./next_args.js --test
```

``` md
# output
[./hello.df => 0, ./next_args.js => 1, --test => 2]
table
```