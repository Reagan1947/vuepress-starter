#### 2.24 String 概述

String 类再java.lang包下，所以使用的时候不需要导包。
String类代表字符串，Java程序中所有的字符串文字(例如"abc")都被实现为此类实例，也就是说，Java程序中所有的双引号字符串都是String类的对象。

**字符串的特点**

- 字符串不可变，它们的值再创建后不能更改
- 虽然String的值是不可变的，但他们可以被共享
- 字符串在效果上相当于字符数组(char[ ])，但在底层原理上是字节数组(byte[ ])  ==JDK8及以前是字符数组，JDK9以后是字节数组==

##### 2.21.1 String 构造方法

| 方法名                      | 说明                                      |
| --------------------------- | ----------------------------------------- |
| public String()             | 创建一个空白字符串对象，不包含任何内容    |
| public String(char[ ]  chs) | 根据字符数组的内容，来创建字符串对象      |
| public String(byte[ ] bys)  | 根据字节数组的内容，来创建字符串对象      |
| String s = "abc";           | 直接赋值的方法创建字符串对象，内容就是abc |

```java
public class main
{
    public static void main(String[] args) {
        // public String(): 创建一个空白字符串对象，不包含任何内容
        String s1 = new String();
        System.out.println("s1:" + s1);

        // public String(char[] chs), 根据字符数组内容，来创建字符串对象
        char[] chs = {'a', 'b', 'c'};
        String s2 = new String(chs);
        System.out.println("s2:" + s2);

        // public String(byte[] bys): 根据字节数组的内容，来创建字符串对象
        byte[] bys = {97, 98, 99};
        String s3 = new String(bys);
        System.out.println("s3:" + s3);

        // String s = "abc"; 直接赋值的方式创建字符串对象，内容就是abc
        String s4 = "abc";
        System.out.println("s4:" + s4);
    }
}
```

```java
s1:
s2:abc
s3:abc
s4:abc
```

##### 2.21.2 String 对象的特点

1. 通过new创建的字符串对象，没一次new都会申请一个内存空间，虽然内容相同，但是地址不同

   ```java
   char[] chs = {'a', 'b', 'c'};
   String s1 = new String(chs);
   String s2 = new String(chs);
   ```

   上面的代码中，JVM会首先创建一个字符数组，每一次new都会有一个新的地址，只不过s1和s2参考的字符串内容是相同的。

2. 以" "双引号方式直接给出的字符串，只要字符序列相同(顺序和大小写)，无论程序代码中出现几次，JVM都只会简历一个String对象，并在字符串池中维护 。

   ```java
   String s3 = "abc";
   String s4 = "abc";
   ```

   在上面的代码中，针对第一行代码，JVM会简历一个String对象放在字符串池中，并给s3参考；第二行则让s4直接参考字符串池中的String对象，也就是说它们本质上是同一个对象。

   ![image-20210804160258373](C:\Users\buwan\AppData\Roaming\Typora\typora-user-images\image-20210804160258373.png)

