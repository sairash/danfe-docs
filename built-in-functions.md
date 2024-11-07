# Built In Functions

Some functions are builtin like `println`. Here is the complete list:


<!--@include: ./built-in-functions-table.md-->


<br>

## Println
`println` is a simple yet powerful builtin function, that can print anything: strings, int, f64, arrays, tables
::: code-group
``` danfe [English]
# print and println are same
println(1)    # "1"
println("Hello ", 'Hi')    # "Hello Hi"
println([1,2,3])    # "[1, 2, 3]"
println(["user"=>["name"=>"bob", "courses"=>["cs","ml"]]])    # "[user => [name => bob, courses => [cs, ml]]]"
```
``` danfe [Nepali]
# print and println are same
dekhauln(1)    # "1"
dekhauln("Hello ", 'Hi')    # "Hello Hi"
dekhauln([1,2,3])    # "[1, 2, 3]"
dekhauln(["user"=>["name"=>"bob", "courses"=>["cs","ml"]]])    # "[user => [name => bob, courses => [cs, ml]]]"
```
:::

## Input
`input` this function provides a simple way to prompt the user for questions
::: code-group
``` danfe [English]
input("How are you? ")    # "How Are you"
```
``` danfe [Nepali]
sodha("How are you? ")    # "How Are you"
```
:::

## Typeof
`type` this function returns the type of the value
::: code-group
``` danfe [English]
x = 10
println(x, ", ", typeof(x), ", ", typeof(typeof(x))) # 10, int, string
```
``` danfe [Nepali]
x = 10
dekhauln(x, ", ", prakar(x), ", ", prakar(prakar(x))) # 10, int, string
```
:::

## Len
`len` this function returns the length of the value, only works with `string`, `array`, `table`
::: code-group
``` danfe [English]
x = [10, 20, 30]
println("Length of x is: ", len(x)) # Length of x is: is 3
```
``` danfe [Nepali]
x = [10, 20, 30]
dekauln("Length of x is: ", ginti(x)) # Length of x is: is 3
```
:::

## Int, Float, String
`int` this function converts value of type `string`, `float` -> `int` <br/>
`float` this function converts value of type `string`, `int` -> `float` <br/>
`string` this function converts `any` value  -> `string`
::: code-group
``` danfe [English]
a = 10
b = float(a)
c = string(a)
d = int(c)
println(typeof(a), ", ", typeof(b), ", ", typeof(c), ", ", typeof(d))
```
``` danfe [Nepali]
a = 10
b = float(a)
c = sabda(a)
d = aanka(c)
dekhauln(prakar(a), ", ", prakar(b), ", ", prakar(c), ", ", prakar(d))
```
:::

``` md
# Output
int, float, string, int
```
## Testing 
You can write test cases for with Danfe: which will run only when you add the `-t` flag. 

``` danfe

x = 1
y = 1

function function_to_panic() {
    panic("This function panics!")
}

assert('start', "test_case_start") # marker for start


assert('', "test_case_", x, y) # only shows error
assert('print', 'test_case_to_print_on_pass', x, y) # shows errors and also success


# expect the function to fail
# assert can have 1 or 2 test value
assert('error', 'test_case_to_expect_an_error', function_to_panic())

assert('info', "test_case_change_y_value") # marker for info

y = 0

# there shouldn't be any errors but expect the right and left value to not match
assert('mismatch', 'test_case_to_mismatch', y, x) 


assert('end', "test_case_end") # marker for end
assert('success', "Successfully completed all the tests!") # marker for success
```

``` md
# Output

🟢 Start : test_case_start
✅ PASS  : test_case_to_print_on_pass
❎ PASS  : test_case_to_expect_an_error
🛈 INFO   : test_case_change_y_value
✅ PASS  : test_case_to_mismatch
🟩 END   : test_case_end
👌 : Successfully completed all the tests!
```

## Panic
You can manually exit out of the program using the `panic` keyword.

``` danfe
panic("User wan't to exit the program!")
```

``` md
# Output

                                      
Error Encountered when system -> panic: 
:0:0: Error: User wan't to exit the program                                 
```

## Random Generator
`rand_int` to generate random numbers and `rand_str` to generate random strings. <br>

If you don't send in the `length` in `rand_str` it is going to generate string of 10 characters

``` danfe
println(rand_int())   # generates i64
println(rand_str())   # generates string of 10 characters
println(rand_str(20)) # generates string of 20 characters
```

``` md
# Output

178855189130093954
UHsFgWpfrH
HlZhFzVDpERimTYUuwJN
```

:warning: **Many More Coming Soon** :warning: