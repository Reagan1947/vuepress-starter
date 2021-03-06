# Collections

##  1.1 Collections 概述和使用

Collections 类的概述

- 是针对集合操作的工具类

Collections 类的常用方法

- `public static<T extends Comparable<? super T>> void sort(List<T> list)`：将指定的列表按升序排列
- `public static void reverse(List<?> list)`：反转指定列表中元素的顺序
- `public static void shuffle(List<?> list)`：使用默认的随机源随机排列指定的列表

## 1.2 参考代码

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Collections 类的概述
 *      是针对集合操作的工具类
 *
 *  Collections 类的常用方法
 *      public static<T extends Comparable<? super T>> void sort(List<T> list)：将指定的列表
 *按升序排列
 *      public static void reverse(List<?> list)：反转指定列表中元素的顺序
 *      public static void shuffle(List<?> list)：使用默认的随机源随机排列指定的列表
 */
public class CollectionDemo01 {
    public static void main(String[] args) {
        // 创建集合对象
        List<Integer> list = new ArrayList<>();

        // 添加元素
        list.add(30);
        list.add(20);
        list.add(50);
        list.add(10);
        list.add(40);

        // public static<T extends Comparable<? super T>> void sort(List<T> list)：
        // 将指定的列表按升序排列
        Collections.sort(list);

        // public static void reverse(List<?> list)：
        // 反转指定列表中元素的顺序
        Collections.reverse(list);

        // public static void shuffle(List<?> list)：
        // 使用默认的随机源随机排列指定的列表
        Collections.shuffle(list);

        System.out.println(list);
    }
}
```

