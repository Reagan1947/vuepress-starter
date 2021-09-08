# Map 集合的概述和特点

## 1.1 Map 集合概述

- `interface Map<K, V>`  K: 键的类型；V: 值的类型
- 将键映射到值的对象；不包含重复的键；每个键可映射到最多一个值
- 举例：学生的学号和姓名
  - student01：Linda
  - student02：Mika
  - student03：Json

创建 Map 集合的对象

- 多态的方式
- 具体的实现类 HashMap

## 1.2 参考代码

```java
import java.util.HashMap;
import java.util.Map;

/**
 * Map 集合概述
 *  interface Map<K, V>    K: 键的类型；V: 值的类型
 *  将键映射到值的对象；不包含重复的键；每个键可映射到最多一个值
 *  举例：学生的学号和姓名
 *      student01：林青霞
 *      student02：张曼玉
 *      student03：王祖贤
 *  创建 Map 集合的对象
 *      多态的方式
 *      具体的实现类 HashMap
 */
public class MapDemo01 {
    public static void main(String[] args) {
        // 创建集合对象
        Map<String, String> map = new HashMap<String, String>();

        // V put(key, V value) 将指定的值与该映射中的指定键相关联
        map.put("student01", "Linda");
        map.put("student02", "Mika");
        map.put("student03", "Json");

        map.put("student03", "Siri");


        // 输出集合对象
        System.out.println(map);
    }
}
```

