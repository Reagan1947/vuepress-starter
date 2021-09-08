# Map 集合的基本功能

## 1.1 概述

| 方法名                                | 说明                                 |
| ------------------------------------- | ------------------------------------ |
| `V put(K key, V value)`               | 添加元素                             |
| `V remove(Object key)`                | 根据键删除键值对元素                 |
| `void clear()`                        | 移除所有键值对元素                   |
| `boolean containsKey(Object key)`     | 判断集合是否包含指定的键             |
| `boolean containsValue(Object value)` | 判断集合是否包含指定的值             |
| `boolean isEmpty()`                   | 判断集合是否为空                     |
| `int size()`                          | 集合的长度，也就是集合中键值对的个数 |

## 1.2 参考代码

```java
import java.util.HashMap;
import java.util.Map;

/**
 * Map集合的基本功能：
 *  V put(K key, V value)  添加元素
 *  V remove(Object key)   根据键删除键值对元素
 *  void clear()           移除所有键值对元素
 *  boolean containsKey(Object key)    判断集合是否包含指定的键
 *  boolean containsValue(Object value) 判断集合是否包含指定的值
 *  boolean isEmpty()      判断集合是否为空
 *  int size()             集合的长度，也就是集合中键值对的个数
 */
public class MapDemo02 {
    public static void main(String[] args) {
        // 创建集合对象
        Map<String, String> map = new HashMap<>();

        // V put(K key, V value)  添加元素
        map.put("student01","Linda");
        map.put("student02","Mika");
        map.put("student03","Json");

        // V remove(Object key)   根据键删除键值对元素
        // System.out.println(map.remove("student02"));
        // System.out.println(map.remove("student04"));

        // void clear()           移除所有键值对元素
        // map.clear();

        // boolean containsKey(Object key)    判断集合是否包含指定的键
        System.out.println(map.containsKey("student02"));
        System.out.println(map.containsKey("student04"));

        // boolean containsValue(Object value) 判断集合是否包含指定的值
        System.out.println(map.containsValue("Linda"));
        System.out.println(map.containsValue("Jhon"));

        // boolean isEmpty()  判断集合是否为空
        System.out.println(map.isEmpty());
        
        // int size()  集合的长度，也就是集合中键值对的个数
        System.out.println(map.size());

        // 输出集合
        System.out.println(map);
    }
}
```

