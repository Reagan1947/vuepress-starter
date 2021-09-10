# Collection 集合概述和使用

## 1.1 概述

1. Collection 集合概述
   - 是单列集合的顶层接口，它表示一组对象，这些对象也称为 Collection 元素
   - JDK 不提供此接口的任何直接实现，它提供更具体的子接口(如 Set 和 List )实现

2. 创建 Collection 集合的对象
   - 多态的方式
   - 具体的实现类 ArrayList

## 1.2 参考代码

```java
import java.util.ArrayList;
import java.util.Collection;

/**
 * 创建Collection集合的对象
 * 多态的方式
 * ArrayList()
 */
public class CollectionDemo01 {
    public static void main(String[] args) {
        // 创建Collection集合的对象
        Collection<String> c = new ArrayList<String>();

        // 添加元素：boolean add(E e)
        c.add("hello");
        c.add("world");
        c.add("java");

        // 输出集合对象
        System.out.println(c);
    }
}
```

