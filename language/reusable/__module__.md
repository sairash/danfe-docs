In Danfe the `file you run is the entry point to your program`. But there is a special keyword defined called `__module__` which is initialized at the start. By using that keyword you can check if the file is the entry point or not.

``` danfe
if __module__ == 'main' {
    println("Hello World")
}
```
This makes sure the function is called only if it is the `entry point` to the program. This feature is heavly inspired by the `__name__` feature of [Python](https://docs.python.org/3/library/__main__.html).