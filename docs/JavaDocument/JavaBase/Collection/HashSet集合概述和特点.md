# HashSet 集合概述和特点

## 1.1 概述与特点

HashSet 集合特点

- 底层数据结构是哈希表
- 对集合的迭代顺序不做任何保证，也就是说不保证存储和取出的元素顺序一致
- 没有带索引的方法，所以不能使用普通 for 循环遍历
- 由于是 Set 集合，所以是不包含重复元素的集合

HashSet 集合练习：存储字符串并遍历

## 1.2 参考代码

```java
import java.util.HashSet;

public class HashSetDemo01 {
    public static void main(String[] args) {
        // 创建集合对象
        HashSet<String> hashSet = new HashSet<>();

        // 添加元素
        hashSet.add("hello");
        hashSet.add("world");
        hashSet.add("java");

        hashSet.add("world");

        // 遍历
        for (String s : hashSet) {
            System.out.println(s);
        }
    }
}
```
