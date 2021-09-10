# 案例：HashMap 集合存储学生对象并遍历 <br>(String - Student)

## 1.1 概述

需求：创建一个 HashMap 集合，键是学号 (String)，值是学生对象 (Student)。存储三个键值对元素，并遍历

思路：

1. 定义学生类
2. 创建 HashMap 集合对象
3. 创建学生对象
4. 把学生添加到集合
5. 遍历方式：
   - 方式 1：键找值
   - 方式 2：键值对对象找键和值

## 1.2 参考代码

==Student==

```java
public class Student {
    private String name;
    private int age;

    public Student() {
    }

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
```



==HashMap==

```java
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

/**
 * 需求：
 * 创建一个 HashMap 集合，键是学号 (String)，值是学生对象 (Student)。存储三个键值对元素，并遍历
 * <p>
 * 思路：
 * 1.定义学生类
 * 2.创建 HashMap 集合对象
 * 3.创建学生对象
 * 4.把学生添加到集合
 * 5.遍历方式：键找值、键值对对象找键和值
 */
public class HashMapDemo {
    public static void main(String[] args) {
        // 创建 HashMap 集合对象
        HashMap<String, Student> hm = new HashMap<>();

        // 创建学生对象
        Student s1 = new Student("Linda", 30);
        Student s2 = new Student("Mika", 35);
        Student s3 = new Student("Json", 33);

        // 把学生添加到集合
        hm.put("student01", s1);
        hm.put("student02", s2);
        hm.put("student03", s3);

        // 方式1：键找值
        Set<String> keySet = hm.keySet();
        for(String key : keySet) {
            Student value = hm.get(key);
            System.out.println(key + ", " + value.getName() + ", " + value.getAge());
        }
        System.out.println("--------");

        // 方式2：键值对对象找键和值
        Set<Map.Entry<String, Student>> entrySet = hm.entrySet();
        for(Map.Entry<String, Student> me : entrySet) {
            String key = me.getKey();
            Student value = me.getValue();
            System.out.println(key + ", " + value.getName() + ", " + value.getAge());
        }
    }
}
```

