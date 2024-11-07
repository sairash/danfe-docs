# Module
Module is like a library that can be loaded using require and has a `single global` name containing a table. <br>
This module can consist of a number of `functions` and `variables`. <br>
All these functions and variables are wrapped in to the `table`, which acts as a `namespace`. 

## Speciality of Danfe Modules
Let's assume that we have `4` files `./main.df`, `./rand.df`, `./v_op/v_time_func.df` and ``./v_op/some_v_code.df`` in the same folder.

**Let's check folder and files**
::: code-group
``` md [src/]
src/
├─ v_op/
│  ├─ some_v_code.df
│  ├─ v_time_func.df
├─ main.df
├─ rand.df
```

``` danfe [src/main.df]
import "rand" # You can use file path like import "./rand.df"

length = 5
random_ascii = rand.gen_random_ascii(length)

println(random_ascii)
```

``` danfe [src/rand.df]
# You can alias imports
import "./v_op/some_v_code" as v_mods
import "./v_op/v_time_func.df" as v_mods.time

chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
total_chars = len(chars)

# Very Slow 😞 method will get faster soon 💪
function gen_random_ascii(length){
    result = ''
    i = 0
    for i <= length {
        result = result + chars[int(v_mods.time.get_current_time_nano() % total_chars)]
        i = i + 1
    }
    return result
}
```

<<< @/snippets/code/english/vblock.df#vblock {danfe} [src/v_op/v_time_func.df]

``` danfe [src/v_op/some_v_code.df]
# Some V Blocks Goes Here
:::
Now, If we run the file **main.df**.

``` sh
danfe run main.df
```

``` md
# Output
X68pDj
```

## Import Syntax
There are multiple ways to import a Danfe module.
| Syntax                                | Description                                                                      | Example                          | Named Import        |
| ------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| `import "file_name.df"`               | Imports `file_name.df` from the current folder without specifying a path.        | `import "main.df"`               | Named as `main`     |
| `import "file_name"`                  | Imports `file_name` without `.df` extension if it’s in the current folder.       | `import "main"`                  | Named as `main`     |
| `import "path/file_name.df"`          | Imports a file using its full path, useful for files outside the current folder. | `import "./src/math.df"`         | Named as `src.math` |
| `import "path/file_name.df" as alias` | Imports a file using its path and assigns a custom name specified by `alias`.    | `import "./src/math.df" as math` | Named as `math`     |

### Notes

- **Path Import Required**: Use a relative or absolute path (e.g., `./src/math.df`) if the module isn’t in the current folder.
- **Automatic Naming**: When no alias is specified, the import is named based on its file path.
- **Custom Naming**: Use `as` to specify a custom alias for easier reference.
