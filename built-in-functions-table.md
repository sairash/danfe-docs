| **Function**                                           | **Syntax**                                                         | **Info**                                                          |
| ------------------------------------------------------ | ------------------------------------------------------------------ | ----------------------------------------------------------------- |
| [`print`](./built-in-functions.md#println)             | print("Hello ", "from ", "Sairash!")                               | prints anything on stdout                                         |
| [`println`](./built-in-functions.md#println)           | print("Hello ", "from ", "Sairash!")                               | prints anything and a newline on stdout                           |
| [`input`](./built-in-functions.md#input)               | input("How was your day? ")                                        | lets you await and read user input from a terminal                |
| [`typeof`](./built-in-functions.md#typeof)             | typeof(identifier)                                                 | the type of argument is returned                                  |
| [`len`](./built-in-functions.md#len)                   | len(array)                                                         | the length of array, table and string is returned                 |
| [`int`](./built-in-functions.md#int-float-string)      | int(identifier)                                                    | converts the given argument into an int type                      |
| [`float`](./built-in-functions.md#int-float-string)    | float(identifier)                                                  | converts the given argument into an float type                    |
| [`string`](./built-in-functions.md#int-float-string)   | string(identifer)                                                  | converts the given argument into an string type                   |
|[`chr`](./built-in-functions.md#chr)| chr(identifier)| converts the given int into a ascii equivalent string and string into it's ascii number|
|[`table`](./built-in-functions.md#table)| table(identifier)| converts the given string into a table|
| [`assert`](./built-in-functions.md#testing)            | assert("type", "test_name", "test_case_1", "test_case_2 optional") | Tests that the program is doing exactly what it's supposed to do. |
| [`panic`](./built-in-functions.md#panic)               | panic("manually throw an error")                                   | can manually throw an error                                       |
| [`rand_int`](./built-in-functions.md#random-generator) | rand_int()                                                         | generates a random i64 number                                     |
| [`rand_str`](./built-in-functions.md#random-generator) | rand_str(length) # length is optional                              | generates a random string                                         |
