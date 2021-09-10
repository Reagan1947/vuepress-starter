# 案例：HashMap 集合存储 ArrayList 元素并访问

## 1.1 概述

需求：创建又给 HashMap 集合，存储三个键值对元素，每一个键值对元素的键是 String， 值是 ArrayList，每一个ArrayList 的元素都是 String，并编列。

思路：

1. 创建 HashMap 集合
2. 创建 ArrayList 集合，并添加元素
3. 把 ArrayList 作为元素添加到 HashMap 集合
4. 遍历 HashMap 集合

## 1.2 参考代码

```java
import java.util.*;

/**
 * 需求：
 *  创建又给 HashMap 集合，存储三个键值对元素，
 *  每一个键值对元素的键是 String， 值是 ArrayList，每一个ArrayList 的元素都是 String，并编列。
 *
 * 思路：
 *  1.创建 HashMap 集合
 *  2.创建 ArrayList 集合，并添加元素
 *  3.把 ArrayList 作为元素添加到 HashMap 集合
 *  4.遍历 HashMap 集合
 *
 * 给出如下的数据：
 *  第一个ArrayList集合的元素：
 *      Linda
 *      Mika
 *  第二个ArrayList集合的元素：
 *      Json
 *      Jhon
 *  第三个ArrayList集合的元素：
 *      Rose
 *      Sire
 */
public class HashMapIncludeArrayListDemo {
    public static void main(String[] args) {
        // 创建HashMap集合
        HashMap<String, ArrayList<String>> hm = new HashMap<>();

        // 创建ArrayList集合，并添加元素
        List<String> list1 = Arrays.asList("Linda", "Mika");
        ArrayList<String> array1 = new ArrayList<>(list1);
        hm.put("array1",array1);

        List<String> list2 = Arrays.asList("Linda", "Mika");
        ArrayList<String> array2 = new ArrayList<>(list2);
        hm.put("array2",array2);

        List<String> list3 = Arrays.asList("Linda", "Mika");
        ArrayList<String> array3 = new ArrayList<>(list3);
        hm.put("array3",array3);

        // 遍历HashMap集合
        Set<String> keySet = hm.keySet();
        for(String key : keySet) {
            System.out.println(key);
            ArrayList<String> value = hm.get(key);
            for(String s : value) {
                System.out.println("\t" + s);
            }
        }
    }
}
```

