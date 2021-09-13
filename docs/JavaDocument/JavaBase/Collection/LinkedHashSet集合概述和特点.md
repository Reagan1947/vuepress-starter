# LinkedHashSet 集合概述和特点

## 1.1 概述

LinkedHashSet 集合特点

- 由哈希表和链表实现 Set 接口，具有可预测的迭代次序
- 由链表保证元素有序，也就是说元素的存储和取出顺序是一致的
- 由哈希表保证元素唯一，也就是说没有重复的元素

LinkedHashSet 集合练习：存储字符串并遍历

## 1.2 代码实现

```java
import java.util.LinkedHashSet;

/**
 * LinkedHashSet 集合特点
 *  1. 哈希表和链表实现的 Set 接口，具有可预测的迭代次序
 *  2. 由链表保证元素有序，也就是说元素的存储和取出顺序是一致的
 *  3. 由哈希表保证元素唯一，也就是说没有重复元素
 */
public class LinkedHashSetDemo {
    public static void main(String[] args) {
        // 创建集合对象
        LinkedHashSet<String> linkedHashSet = new LinkedHashSet<String>();

        // 添加元素
        linkedHashSet.add("hello");
        linkedHashSet.add("world");
        linkedHashSet.add("java");

        linkedHashSet.add("world");

        // 遍历集合
        for(String s: linkedHashSet) {
            System.out.println(s);
        }
    }
}
```
