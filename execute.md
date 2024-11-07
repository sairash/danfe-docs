# Execute
Currently there are `few ways` to exeucte a Danfe Program.
* Directly execute it in [Danfe REPL](/repl.md)
* Save the program in a file ending with `.df` extension and run the command `./danfe run file_name.df`.
* By using Shebang #! in Linux Scripts.
---
### Example
1. Open file ending with `.df` extension to `edit`.
<!--@include: /snippets/nano_main.md-->
2. Write your [Hello World](/hello-world.md) `Danfe` program in the file. 
<!--@include: /snippets/small/print_hello_world.md-->
3. Execute the file using the `danfe` binary.
<!--@include: /snippets/run_main.md-->
4. After executing the program.
<!--@include: /snippets/small/output_hello_world.md-->

---
### You can even use Shebang #! in Linux Scripts
In Linux, you can convert a Danfe program into a `self executable script`. The first statement in the code should be a `shebang #!`. It must contain the path to `Danfe Executable`.

``` danfe
#!/usr/bin/danfe run

println("Hello World")
```
You also need to give the file executable permission by using the `chmod +x` command
``` bash
$ chmod +x hello.df
```
Then, you can run the program with following command line −
``` bash
$ ./hello.df
```
This will display the following output
<!--@include: /snippets/small/output_hello_world.md-->
