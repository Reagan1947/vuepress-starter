# 增强 for 循环

## 1.1 增强 for 循环概述

增强 for 循环：简化数组和 Collection 集合的遍历

- 实现 Iterable 接口的类允许其对象成为增强 for 语句的目标

- 它是 JDK5 之后出现的，其内部原理是一个 Iterator 迭代器


增强 for 的格式：

```java
/**
 * 增强 for 格式
 */
for(元素数据类型 变量名 : 数组或 Collection 组合) {
// 在此处使用变量即可，该变量就是元素
}
```

```java
/**
 * 增强 for 范例
 */
int[] arr = {1, 2, 3, 4, 5};
for(int i : arr) {
    System.out.print(i);
}
```

## 1.2 参考代码

```java
import java.util.*;

/**
 * 增强 for ：简化数组和 Collection 集合的遍历
 *  实现 Iterable 接口的类允许其成为增强型 for 语句的目标
 *  它是 JDK5 之后出现的， 其内部原理是一个 Iterator 迭代器
 * 格式：
 *  for(元素数字据类型 变量名 : 数组或者 Collection 集合) {
 *      // 此处使用变量即可，该变量就是元素
 *  }
 */
public class ForDemo {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        for(int i : arr) {
            System.out.println(i);
        }

        System.out.println("--------");

        String[] strArray = {"hello", "world", "java"};
        for(String s : strArray) {
            System.out.println(s);
        }
        System.out.println("--------");

        List<String> list = new ArrayList<>();
        list.add("hello");
        list.add("world");
        list.add("java");

        for(String s : list) {
            System.out.println(s);
        }

        // 内部原理是一个 Iterator 迭代器
        for(String s : list) {
            if(s.equals("world")) {
                list.add("javaee");  // ConcurrentModificationException
            }
        }
    }
}
```
