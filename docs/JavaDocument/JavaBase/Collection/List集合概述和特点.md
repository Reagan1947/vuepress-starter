# List 集合的概述和特点

## 1.1 概述

1. List 集合概述
   - 有序集合(也称为序列)，用户可以精确控制列表中每个元素的插入位置。用户可以通过整数索引访问元素。
     并搜索列表中的元素
   - 与 Set 集合不同，列表通常允许重复的元素

2.  List 集合特点
   - 有序：存储和取出元素的顺序一致
   - 可重复：存储的元素可以重复

## 1.2参考代码

```java
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * List 集合特点
 *  有序：存储和取出元素的顺序一致
 *  可重复性：存储的元素可以重复
 */
public class ListDemo01 {
    public static void main(String[] args) {
        // 创建集合对象
        List<String> list = new ArrayList<>();

        // 添加元素
        list.add("hello");
        list.add("world");
        list.add("java");
        list.add("world");

        // 输出集合对象
        System.out.println(list);
        
        // 迭代器的方式遍历
        Iterator<String> it = list.iterator();
        while(it.hasNext()) {
            String s = it.next();
            System.out.println(s);
        }
    }
}
```
