# Keywords 

Most of the keywords / reserved identifiers have it's `alias`. Which just means that you can use any of these keywords to do the `same operations`.
<br>
<br>

| **Reserved**                             | **Alias**                       | **Operation**                                                           |
| ---------------------------------------- | ------------------------------- | ----------------------------------------------------------------------- |
| [`true`](/language/danfe-types#boolean)  | `thik`                          | Holds 1                                                                 |
| [`false`](/language/danfe-types#boolean) | `bethik`                        | Holds 0                                                                 |
| [`nil`](/language/danfe-types#nil)       | `khali`, `null`, `sunna`        | Holds no value or 0                                                     |
| [`if`](/language/operators)              | `yedi`                          | Create conditional statements                                           |
| [`else`](/language/operators#else)       | `natra`                         | Conditional statement which executes if the boolean expression is false |
| [`loop`](/language/loop)                 | `ghum`, `for`                   | Create a block of code that executes until it's stopped                 |
| [`break`](/language/loop#break)          | `todh`                          | Terminates the loop from executing any further                          |
| [`continue`](/language/loop#continue)    | `xod`                           | Skips the remaining loop and starts from the top                        |
| [`import`](/language/module)             | `prayog`                        | Import file that ends with .df                                          |
| [`as`](/language/module)                 | `naam`                          | Custom alias name of import statement                                   |
| [`function`](/language/function)         | `karya`                         | Create a block of code that can be called as name_of_function()         |
| [`return`](/language/function#return)    | `pathau`                        | Return statement to send value from function                            |
| [`v`](/language/vblock)                  |                                 | Start Vlang Code Block (used to execute valng code)                     |
| [`endv`](/language/vblock#endv)          |                                 | End Vlang Code Block                                                    |
| [`del`](/language/del)                   | `hatau`                         | manually remove identifier from memory                                  |
| [`__module__`](/language/module)         |                                 | Get current module name                                                 |



## Built in functions
Some functions are builtin like `println`. Here is the complete list:

<!--@include: ./built-in-functions-table.md-->
