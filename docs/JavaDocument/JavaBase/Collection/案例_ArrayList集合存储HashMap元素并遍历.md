# 案例：ArrayList 集合存储 HashMap 元素并遍历

## 1.1 概述

需求：创建一个 ArrayList 集合，存储三个元素，每一个元素都是 HashMap，每一个 HashMap 的键和值都是 String，并遍历

思路：

1. 创建 ArrayList 集合
2. 创建 HashMap 集合，并添加键值对元素
3. 把 HashMap 作为元素添加到 ArrayList 集合
4. 遍历 ArrayList 集合

## 1.2 参考代码

```java
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Set;

/**
 * 需求：
 *  创建一个 ArrayList 集合，存储三个元素，每一个元素都是 HashMap，
 *每一个 HashMap 的键和值都是 String，并遍历
 *
 * 思路：
 *  1.创建 ArrayList 集合
 *  2.创建 HashMap 集合，并添加键值对元素
 *  3.把 HashMap 作为元素添加到 ArrayList 集合
 *  4.遍历 ArrayList 集合
 *
 * 给出如下的数据：
 *  第一个HashMap集合的元素：
 *      student01       Linda
 *      student02       Mika
 *  第二个HashMap集合的元素：
 *      student03       Json
 *      student04       Jhon
 *  第三个HashMap集合的元素：
 *      student05       Siri
 *      student06       Rose
 */

public class ArrayListIncludeHashMap {
    public static void main(String[] args) {
        // 创建ArrayList集合
        ArrayList<HashMap<String, String>> array = new ArrayList<HashMap<String, String>>();

        // 创建HashMap集合，并添加键值对元素
        HashMap<String, String> hm1 = new HashMap<>();
        hm1.put("student01", "Linda");
        hm1.put("student02", "Mika");
        array.add(hm1);

        HashMap<String, String> hm2 = new HashMap<>();
        hm1.put("student03", "Json");
        hm1.put("student04", "Jhon");
        array.add(hm2);

        HashMap<String, String> hm3 = new HashMap<>();
        hm1.put("student05", "Siri");
        hm1.put("student06", "Rose");
        array.add(hm3);

        // 遍历ArrayList集合
        for(HashMap<String, String> hm : array) {
            Set<String> keySet = hm.keySet();
            for(String key : keySet) {
                String value = hm.get(key);
                System.out.println(key + ", " + value);
            }
        }
    }
}
```

