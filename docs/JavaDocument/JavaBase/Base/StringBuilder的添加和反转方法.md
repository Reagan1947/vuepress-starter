#### 2.30 StringBuilder 的添加和反转方法

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

##### 2.30.1 StringBuilder和String相互转换

1. StringBuilder转换为String(): 通过toString()就可以实现把StringBuilder转换为String

2. String 转换为StringBuilder：public StringBuilder(String s)， 通过构造方法就可以实现把String转换为StringBuilder

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

   #### 2.31 集合基础

   ##### 2.31.1 集合概述

   集合类的特点：提供一种存储空间可变的存储模型，存储的数据容量可以发生改变
   集合类有很多，目前我们先学习一个：`ArrayList`

   **ArrayList\<E\>：**

   - 可调整大小的数组实现
   - \<E\>：是一种特殊类型，泛型

   **怎么用呢？**

   - 在出现E的地方我们使用引用数据类型替换即可
   - 举例：ArrayList\<String\>, ArrayList\<Student\>

   ##### 2.31.2 ArrayList构造方法和添加方法

   | 方法名                                | 说明                         |
   | ------------------------------------- | ---------------------------- |
   | public ArrayList()                    | 创建一个空的集合对象         |
   | public boolean add(E e)               | 将指定的元素追加到集合的末尾 |
   | public void add(int index, E element) | 在此集合的指定位置上         |

   ```java
   import java.util.ArrayList;
   
   public class HelloWorld {
   
       public static void main(String[] args) {
           // public Array(): 创建一个空的集合对象
           // ArrayList<String> array = new ArrayList<>();
   
           ArrayList<String> array = new ArrayList<>();
   
           // public boolean add(E e), 将指定的元素追加到集合的末尾
           // System.out.println(array.add("hello"));
   
           array.add("hello");
           array.add("world");
           array.add("java");
   
           // public void add(int index, E element)：在此集合中的指定位置插入指定的元素
           // array.add(1, "java se");
           // array.add(3, "java ee");
           array.add(4, "java ee");
   
           // 输出集合
           System.out.println("array: " + array);
       }
   }
   ```

   ```java
   Exception in thread "main" java.lang.IndexOutOfBoundsException: Index: 4, Size: 3
   	at java.util.ArrayList.rangeCheckForAdd(ArrayList.java:667)
   	at java.util.ArrayList.add(ArrayList.java:479)
   	at HelloWorld.main(HelloWorld.java:24)
   ```

   ##### 2.30.2 ArrayList集合常用方法

   | 方法名                             | 说明                                   |
   | ---------------------------------- | -------------------------------------- |
   | public boolean remove(Object)      | 删除指定的元素，返回删除是否成功       |
   | public E remove(int index)         | 删除指定索引处的元素，返回被删除的元素 |
   | public E set(int index, E element) | 修改指定索引处的元素，返回被修改的元素 |
   | public E get(int index)            | 返回指定索引出的元素                   |
   | public int size()                  | 返回集合中的元素个数                   |

​	

```javva
import java.util.ArrayList;

public class HelloWorld {

    public static void main(String[] args) {
        // 创建集合
        ArrayList<String> array = new ArrayList<>();

        // 添加元素
        array.add("hello");
        array.add("world");
        array.add("java");

        // public boolean remove(Object o): 删除指定的元素，返回是否删除成功
        // System.out.println(array.remove("world"));
        // System.out.println(array.remove("java ee"));

        // public E remove(int index)：删除指定索引位置的元素，返回被删除的元素
        // System.out.println(array.remove(1));
        // System.out.println(array.remove(3)); 索引越界

        // public E set(int index, E element): 修改指定索引处的元素，返回被修改的元素
        // System.out.println(array.set(1, "java ee"));
        // System.out.println(array.set(3, "java ee"));

        // public E get(int index)：返回指定索引处的元素
        // System.out.println(array.get(1));
        // System.out.println(array.get(2));
        // System.out.println(array.get(3));

        // public int size(): 返回集合中元素的个数
        System.out.println(array.size());

        // 输出集合
        System.out.println("array:" + array);
    }
}
```



