# StringBuilder 的添加和反转方法

## 1.1 概述


```java
public class main
{
    public static void main(String[] args) {
        // 创建对象
        StringBuilder sb = new StringBuilder();

        // public StringBuilder append(任意类型)：添加数据，并返回对象本身
        StringBuilder sb2 = sb.append("hello");

        System.out.println("sb: " +sb);
        System.out.println("sb2: " + sb2);
        System.out.println(sb == sb2);

        sb.append("hello");
        sb.append("world");
        sb.append("java");
        sb.append("100");

        // 链式编程
        sb.append("hello").append("world").append("java").append(100);

        System.out.println("sb: " + sb);

        // public String Builder reverse(): 返回相反的字符序列
        sb.reverse();
        System.out.println("sb: " + sb);
    }
}
```

```java
sb: hello
sb2: hello
true
sb: hellohelloworldjava100helloworldjava100
sb: 001avajdlrowolleh001avajdlrowolleholleh
```

## 1.2 StringBuilder 和 String 相互转换

1. StringBuilder 转换为 String: 通过 `toString()` 就可以实现把 `StringBuilder`转换为 `String`

2. String 转换为 StringBuilde：`public StringBuilder(String s)`， 通过构造方法就可以实现把 String 转换为StringBuilder

```java
   public class main
   {
       public static void main(String[] args) {
           // StringBuilder 转换为 String
           StringBuilder sb = new StringBuilder();
           sb.append("hello");
   
           // String s = sb;  // 这个是错误的做法
   
           // public String toString()：通过toString()就可以实现把StringBuilder转换为String
           String s =sb.toString();
           System.out.println(s);
   
           // String 转换为 StringBuilder
           String s2 = "hello";
   
           // StringBuilder sb = s;
   
           // public StringBuilder(String s): 通过构造方法就可以实现把String 转换为 StringBuilder
           StringBuilder sb2 = new StringBuilder(s2);
   
           System.out.println(sb2);
       }
   }
```

   ```java
   hello
   hello
   ```

   
