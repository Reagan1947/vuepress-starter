# for 循环语句

## 1.1 概述

- 循环结构的组成：

  - 初始化语句：用于表示循环开启时的初始状态，简单说就是循环开始的时候什么样。

  - 条件判断语句：用于表示循环反复执行的条件，简单说就是判断循环是否能一直执行下去。

  - 循环体语句：用于表示循环反复执行的内容，简单说就是循环反复执行的事情。

  - 条件控制语句：用于表示循环执行中每次变化的内容，简单说就是控制循环是否能执行下去。

    

<br>

- 循环结构对应的语法：

  - 初始化语句：这里可以是一条或多条语句，这些语句可以完成一些初始化操作。

  - 条件判断语句：这里使用一个结果值为 boolean 类型的表达式，这个表达式能决定是否执行循环体，

    例如：`a < 3`

  - 循环体语句：这里可以是任意语句，这些语句将反复执行

  - 条件控制语句：这里通常使用一条语句来改变变量的值，从每个人达到控制循环是否继续向下执行的效果。

    常见 `i++`，`i -- ` 这样的操作。

### 1.1.1 for循环语句格式:

```java
for (初始化语句; 条件判断语句; 条件控制语句) {
    循环体语句;
}
```

- 执行流程：

  1. 执行初始化语句

  2. 执行条件判断语句，看其结构是 true 还是 false

  3. 如果是false，循环结束

     如果是true，继续执行

  4. 执行循环体语句
  5. 执行条件控制语句
  6. 回到流程2继续

### 1.1.2 while循环语句格式

==基本格式==：

```java
while (条件判断语句) {
    循环体语句;
}
```

==完整格式==：

```java
初始化语句;

while(条件判断语句) {
    循环体语句;
    条件控制语句;
}
```

- 执行流程：

  1. 执行初始化语句

  2. 执行条件判断语句，看其结果是true还是false

  3. 如果是false，循环结束

     如果是true，继续执行

  4. 执行循环体语句
  5. 执行条件控制语句
  6. 回到流程2继续

### 1.1.3 do...while 循环语句

==基本格式==：

```java
do {
    循环体语句;
}while(条件判断语句);
```

==完整格式==：

```java
初始化语句;
do {
    循环体语句;
    条件控制语句;
}while(条件判断语句);
```

- 执行流程

  1. 执行初始化语句

  2. 执行循环体语句

  3. 执行条件控制语句

  4. 执行条件判断语句，看其结果是 true 还是 false

  5. 如果是false，循环体结束

     如果是true，继续执行

  6. 回到流程 2 继续

### 1.1.4  三种循环的区别

```java
public class main
{
    public static void main(String[] args) {
        // for循环
        for(int i = 3; i < 3; i++) {
            System.out.println("我爱Java");
        }
        System.out.println("-------");

        // while循环
        int j = 3;
        while(j < 3) {
            System.out.println("我爱Java");
            j++;
        }
        System.out.println("-------");

        // do...while循环
        int  k = 3;
        do {
            System.out.println("我爱Java");
            k++;
        } while(k < 3);
    }
}

```

```java
public class main
{
    public static void main(String[] args) {
        // for循环
        for(int i = 1; i < 3; i++) {
            System.out.println("我爱Java");
        }
        System.out.println("i in for loop is: " + i);
        System.out.println("-------");

        // while循环
        int j = 1;
        while(j < 3) {
            System.out.println("我爱Java");
            j++;
        }
        System.out.println("j in while is: " + j);
        System.out.println("-------");
    }
}
```

```java
java: 找不到符号
  符号:   变量 i
  位置: 类 main
```

- 三种循环的区别：

  - for循环和while循环先判断条件是否成立，然后决定是否执行循环体(先判断后执行)

  - do...while循环线执行一次循环体，然后判断条件是否成立，是否继续执行循环体(先执行后判断)

- for 和 while 的区别：

  - 条件控制语句所控制的自增变量，因为归属for循环的语法结构中，在for循环结束后，就不能再次被访问到了

  - 条件控制语句所控制的自增变量，对于while循环来说不归属于其语法结构中，在while循环结束后，该变量还可以继续使用。

- 死循环的格式：

  1. `for(::){}`

  2. `while(true){}`

  3. `do{}while(true)`

### 1.1.5 跳转控制语句

- continue 用在循环中，基于条件控制，跳过某次循环体内容的执行(不执行循环体剩下的内容)，直接进入下一次循环
- break 用在循环中，基于条件控制，终止循环体内容的执行，也就是说结束当前的整个循环。

