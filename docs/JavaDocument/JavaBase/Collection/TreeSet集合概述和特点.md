# TreeSet 集合概述和特点

## 1.1 概述

TreeSet 集合特点

- 元素有序，这里的顺序不是指存储和取出的顺序，而是按照一定的规则进行排序具体排序方式取决于构造方法
  - `TreeSet()`：根据其元素的自然排序进行排序
  - `TreeSet(Comparator comparator)`：根据指定的比较器进行排序
- 没有带索引的方法，所以不能使用普通 for 循环遍历
- 由于是 Set 集合，所以不包含重复元素的集合

TreeSet 集合练习：存储整数并遍历

## 1.2 参考代码

```java
import java.util.TreeSet;

/**
 * TreeSet 集合特点
 *
 * 1. 元素有序，这里的顺序不是指存储和取出的顺序，而是按照一定的规则进行排序具体排序方式取决于构造方法
 *      TreeSet()：根据其元素的自然排序进行排序
 *      TreeSet(Comparator comparator)：根据指定的比较器进行排序
 * 2. 没有带索引的方法，所以不能使用普通 for 循环遍历
 * 3. 由于是 Set 集合，所以不包含重复元素的集合
 */
public class TreeSetDemo01 {
    public static void main(String[] args) {
        // 创建集合对象
        TreeSet<Integer> treeSet = new TreeSet<>();

        // 添加元素
        treeSet.add(10);
        treeSet.add(40);
        treeSet.add(30);
        treeSet.add(50);
        treeSet.add(20);
        
        treeSet.add(30);

        // 遍历集合
        for(Integer i : treeSet) {
            System.out.println(i);
        }
    }
}
```
