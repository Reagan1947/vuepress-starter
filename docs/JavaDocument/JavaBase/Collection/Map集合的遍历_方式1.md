# Map 集合的遍历 (方式 1)

## 1.1 概述

我们存储的元素都是成对出现的，所以我们把 Map 看成是一个夫妻对的集合

遍历思路：

- 把所有的丈夫给集中起来
- 遍历丈夫的集合，获取到每一个丈夫
- 根据丈夫去找对应的妻子

转换为 Map 集合中的操作：

- 获取所有键的集合，用 `KeySet()` 方法实现
- 遍历键的集合，获取每一个键，用增强 for 实现
- 根据键去找值，用 `get(Object key)` 方法实现

## 1.2 参考代码

```java
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

/**
 * Map集合的遍历(方式1)
 *     1.获取所有键的集合，用KeySet()方法实现
 *     2.遍历键的集合，获取每一个键，用增强for实现
 *     3.根据键去找值，用get(Object key)方法实现
 */
public class MapDemo01 {
    public static void main(String[] args) {
        // 创建集合对象
        Map<String, String> map = new HashMap<String, String>();

        // 添加元素
        map.put("student01", "Linda");
        map.put("student02", "mika");
        map.put("student03", "Json");

        // 获取所有键的集合。用keySet()方法实现
        Set<String> keySet = map.keySet();
        for(String key : keySet) {
            // 根据键去找值，用get(Object key)方法实现
            String value = map.get(key);
            System.out.println(key + ", " + value);
        }
    }
}
```

