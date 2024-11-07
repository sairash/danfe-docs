# Operators
An operator is a symbol that tells **Danfe** to perform specific `mathematical` or `logical manipulations`. Danfe is `rich` in built-in operators and provides the following type of operators −

::: details Available Operators {open}
* [**`Arithmetic Operators`** ](./operators.md#arithmetic-operators)
* [**`Relational Operators`** ](./operators.md#relational-operators)
* [**`Logical Operators`** ](./operators.md#relational-operators)
* [**`Unary Operators`** ](./operators.md#unary-operators)
:::

## Arithmetic Operators
Following table shows all the `arithmetic operators` supported by Danfe. Assume variable __A__ holds `10` and variable __B__ holds `20` then -
| **Operator**     | **Description**                                             | **Example**         |
|------------------|-------------------------------------------------------------|---------------------|
| __+__            | Adds two operands                                           | A + B will give 30  |
| __-__            | Subtracts second operand from the first                     | A - B will give -10 |
| __*__            | Multiply both operands                                      | A * B will give 200 |
| __/__            | Divide numerator by de-numerator                            | B / A will give 2   |
| __%__            | Modulus Operator and remainder of after an integer division | B % A will give 0   |
| __^__            | Exponent Operator takes the exponents                       | A^2 will give 100   |

## Relational Operators
Following table shows all the `relational operators` supported by Danfe. Assume variable __A__ holds `10` and variable __B__ holds `20` then -
| **Operator** | **Description**                                                                                                                 | **Example**           |
|--------------|---------------------------------------------------------------------------------------------------------------------------------|-----------------------|
| __==__           | Checks if the value of two operands are equal or not, if yes then condition becomes true.                                       | (A == B) is not true. |
| __!=__           | Checks if the value of two operands are equal or not, if values are not equal then condition becomes true.                      | (A != B) is true.     |
| __>__            | Checks if the value of left operand is greater than the value of right operand, if yes then condition becomes true.             | (A > B) is not true.  |
| __<__            | Checks if the value of left operand is less than the value of right operand, if yes then condition becomes true.                | (A < B) is true.      |
| __>=__           | Checks if the value of left operand is greater than or equal to the value of right operand, if yes then condition becomes true. | (A >= B) is not true. |
| __<=__           | Checks if the value of left operand is less than or equal to the value of right operand, if yes then condition becomes true.    | (A <= B) is true.     |

## Logical Operators
Following table shows all the `logical operators` supported by Danfe. Assume variable __A__ holds `true` and variable __B__ holds `false` then −
| **Operator**     | **Description**                                                                                 | **Example**         |
|------------------|-------------------------------------------------------------------------------------------------|---------------------|
| __&&__           | Called Logical AND operator. If both the operands are non zero then condition becomes true.     | (A && B) is false.  |
| __\|\|__         | Called Logical OR Operator. If any of the two operands is non zero then condition becomes true. | (A \|\| B) is true. |

## Unary Operators
Following table shows all the `unary operators` supported by Danfe. Assume variable __A__ holds `1`
| **Operator** | **Description**                                         | **Example** |
|--------------|---------------------------------------------------------|-------------|
| __-__            | Negation, Convert positive into negative and vice versa | -A is -1    |
| __!__            | NOT Operator, Convert true into false and vice versa    | !A is 0.    |

## Operators Precedence
Operator precedence determines the `grouping` of terms in an expression. This `affects` how an expression is `evaluated`. Certain operators have higher precedence than others; for example, the `multiplication` operator has higher precedence than the `addition` operator − <br>

For example, `x = 7 + 3 * 2`; Here x is assigned `13`, not `20` because operator `*` has higher precedence than `+` so it first get multiplied with `3*2` and then adds into `7`. <br>

Here, operators with the highest precedence appear at the top of the table, those with the lowest appear at the bottom. Within an expression, higher precedence operators will be evaluated first. <br>

::: info 
Using brackets `()` always takes the highest presidence.
:::

| **Category**   | **Operator**       | **Associativity** |
|----------------|--------------------|-------------------|
| Unary          | ! -                | Right to left     |
| Multiplicative | * / %              | Left to right     |
| Additive       | + -                | Left to right     |
| Relational     | < > <= >= == !=    | Left to right     |
| Equality       | == !=              | Left to right     |
| Logical AND    | &&                 | Left to right     |
| Logical OR     | \|\|               | Left to right     |