# Map 集合的遍历 (方式 2)

## 1.1 概述

我们存储的元素都是成对出现的，所以我们把 Map 看成是一个夫妻对的集合

遍历思路：

- 获取所有结婚证的集合
- 遍历结婚证集合，得到每一个结婚证
- 根据结婚证获取丈夫和妻子

转换为 Map 集合中的操作：

- 获取所有键值对对象的集合

  `Set<Map.Entry<K, V>> entrySet()`：获取所有键值对对象的集合

- 遍历键值对对象的集合，得到每一个键值对对象

  用增强 for 实现，得到每一个 `Map.Entry`

- 根据键值对对象获取键和值

  用 `getKey()` 得到键
  用 `getValue()` 得到值

## 1.2 参考代码

```java
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

/**
 * Map集合的遍历(方式2)
 *  1：获取所有键值对对象的集合
 *      Set<Map.Entry<K, V>> entrySet()：获取所有键值对对象的集合
 *  2：遍历键值对对象的集合，得到每一个键值对对象
 *      用增强 for 实现，得到每一个Map.Entry
 *  3：根据键值对对象获取键和值
 *      用getKey()得到键
 *      用getValue()得到值
 */
public class MapDemo02 {
    public static void main(String[] args) {
        // 创建集合对象
        Map<String, String> map = new HashMap<>();

        // 添加元素
        map.put("student01", "Linda");
        map.put("student02", "mika");
        map.put("student03", "Json");

         // 获取所有的键值对对象的集合
        Set<Map.Entry<String, String>> entrySet = map.entrySet();

        // 遍历键值对对象集合，得到没有键值对对象
        for(Map.Entry<String, String> me : entrySet) {
            // 根据键值对对象获取键和值
            String key = me.getKey();
            String value = me.getValue();
            System.out.println(key + ", " + value);

        }
    }
}
```

