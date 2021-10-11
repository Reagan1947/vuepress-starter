# Properties 作为 Map 集合的使用

## 1.1 概述

Properties 概述：

- 是一个 Map 体系的集合类
- Properties 可以保存到流中或从流中加载

练习：Proerties 作为 Map 集合的使用

## 1.2 参考代码

```java
import java.util.Properties;
import java.util.Set;

/**
 * Properties作为Map集合的使用
 */
public class PropertiesDemo01 {
    public static void main(String[] args) {
        // 创建集合对象
        // Properties<String, String> pro = new Properties<String, String>();  // 错误
        Properties prop = new Properties();

        // 存储元素
        prop.put("student01", "Linda");
        prop.put("student02", "Mika");
        prop.put("student03", "John");

        // 遍历集合
        Set<Object> keySet = prop.keySet();
        for(Object key : keySet) {
            Object value = prop.get(key);
            System.out.println(key + ", " + value);
        }
    }
}
```

