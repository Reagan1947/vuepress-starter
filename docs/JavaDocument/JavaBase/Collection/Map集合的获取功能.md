# Map 集合的获取功能

## 1.1 概述

| 方法名                           | 说明                       |
| -------------------------------- | -------------------------- |
| `V get(Object key)`              | 根据键获取值               |
| `Set<K> keySet()`                | 获取所有键的集合           |
| `Collection<V> values()`         | 获取所有的值               |
| `Set<Map.Entry<K,V>> entrySet()` | 获取所有的键值对对象的集合 |

## 1.2 参考代码

```java
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

/**
 *  Map集合获取功能：
 *  V get(Object key)：根据键获取值
 *  Set<K> keySet()：获取所有的键的集合
 *  Collection<V> values()：获取所有值的集合
 */
public class MapDemo03 {
    public static void main(String[] args) {
        // 创建集合对象
        Map<String, String> map = new HashMap<>();

        // 添加元素
        map.put("student01", "Linda");
        map.put("student02", "Mika");
        map.put("student03", "Json");

        // V get(Object key)：根据键获取值
        // System.out.println(map.get("student01"));
        // System.out.println(map.get("student04"));
        
        // Set<K> keySet()：获取所有的键的集合
        Set<String> strings = map.keySet();
        for(String key : strings) {
            System.out.println(key);
        }

        // Collection<V> values()：获取所有值的集合
        Collection<String> values = map.values();
        for(String value : values) {
            System.out.println(value);
        }
    }
}
```

