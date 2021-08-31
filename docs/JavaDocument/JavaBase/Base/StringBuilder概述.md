#### 2.29 StringBuilder概述

![image-20210804231813684](C:\Users\buwan\AppData\Roaming\Typora\typora-user-images\image-20210804231813684.png)

如果对字符串进行拼接操作，每次拼接，都会构建一个新的String对象，既耗时又浪费内存空间，而这种操作还不可避免，那么有没有一种较好的方式可以解决这个问题呢？答案是肯定的，我们可以通过Java提供的StringBuilder类来解决这个问题。

**概述**

StringBuilder是一个可变的字符串类，我们可以把它看成一个容器，这里的可变指的是StringBuilder对象中的内容是可变的。

String和StringBuilder的区别：

- String：内容是不可变的
- StringBuilder：内容是可变的

**StringBuilder构造方法**

| 方法名                           | 说明                                       |
| -------------------------------- | ------------------------------------------ |
| public StringBuilder()           | 创建一个空白可变字符串对象，不含有任何内容 |
| public StringBuilder(String str) | 根据字符串的内容，来创建可变字符串对象     |

```java
public class main
{
    public static void main(String[] args) {
       // public StringBuilder(): 创建又给空白可变字符串对象，不含有任何内容
       StringBuilder sb = new StringBuilder();
        System.out.println("sb: " + sb);
        System.out.println("sb.length(): " + sb.length());

        // public StringBuilder(String str): 根据字符串内容，来创建可变字符串对象
        StringBuilder sb2 = new StringBuilder("hello");
        System.out.println("sb2: " + sb);
        System.out.println("sb2.length(): " + sb2.length());
    }
}
```

