# Properties 作为 Map 集合的特有方法

## 1.1 概述

Properties 作为集合的特有方法：

| 方法名                                         | 说明                                                         |
| ---------------------------------------------- | ------------------------------------------------------------ |
| `Object setProperty(String key, String value)` | 设置集合的键和值，都是 String 类型，底层调用 Hashtable 的 put 方法 |
| `String getProperty(String key)`               | 使用此属性列表中指定的键搜索属性                             |
| `Set<String> stringPropertyNames()`            | 从该属性列表中返回一个不可修改的键集，其中的键及其对应的值是字符串 |

## 1.2 参考代码

```java
import java.util.*;

/**
 * Properties 作为集合的特有方法：
 *  Object setProperty(String key, String value): 设置集合的键和值，都是 String 类型，底层调用
 *  Hashtable 的 put 方法
 *  String getProperty(String key): 使用此属性列表中指定的键搜索属性
 *  Set<String> stringPropertyNames(): 从该属性列表中返回一个不可修改的键集，其中的键及其对应的值是
 *  字符串
 */
public class PropertiesDemo02 {
    public static void main(String[] args) {
        // 创建集合对象
        Properties prop = new Properties();

        // Object setProperty(String key, String value): 设置集合的键和值，都是 String 类型，底
        // 层调用 Hashtable 的 put 方法
        prop.setProperty("student01", "Linda");

        /*
            Object setProperty(String key, String value) {
                return put(key, value);
            }

            Object put(Object key, object value) {
                return map.put(key, value);
            }
         */
        prop.setProperty("student02", "Mika");
        prop.setProperty("student03", "John");

        // String getProperty(String key): 使用此属性列表中指定的键搜索属性
        // System.out.println(prop.getProperty("student01"));
        // System.out.println(prop.getProperty("student04"));

        // Set<String> stringPropertyNames(): 从该属性列表中返回一个不可修改的键集，其中的键及其对
        // 应的值是字符串
        Set<String> names = prop.stringPropertyNames();
        for(String key : names) {
            // System.out.println(key);
            String value = prop.getProperty(key);
            System.out.println(key + "," + value);
        }
    }
}
```

