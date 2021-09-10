# 案例：HashMap 集合存储学生对象并遍历 <br>(Student - String)

## 1.1 概述

需求：创建一个 HashMap 集合，键是学生对象 (Student)，值是居住地 (String) 。存储多个键值对元素，并遍历。要求保证键的唯一性：如果学生对象的成员变量值相同，我们就认为是同一个对象

思路：

1. 定义学生类
2. 创建 HashMap 集合对象
3. 创建学生对象
4. 把学生对象添加到集合
5. 遍历集合
6. 在学生类中重写两个方法：`hashCode()`、`equals()`

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Student student = (Student) o;

        if (age != student.age) return false;
        return name != null ? name.equals(student.name) : student.name == null;
    }

    @Override
    public int hashCode() {
        int result = name != null ? name.hashCode() : 0;
        result = 31 * result + age;
        return result;
    }
}
```

==HashMapDemo==

```java
import java.util.*;

/**
 * 需求：
 *  创建一个 HashMap 集合，键是学生对象 (Student)，值是居住地 (String) 。存储多个键值对元素，并遍历。要求保证键的唯一性：如果学生对象的成员变量值相同，我们就认为是同一个对象
 *
 * 思路：
 *  1. 定义学生类
 *  2. 创建 HashMap 集合对象
 *  3. 创建学生对象
 *  4. 把学生对象添加到集合
 *  5. 遍历集合
 *  6. 在学生类中重写两个方法：hashCode()、equals()
 */
public class HashMapDemo {
    public static void main(String[] args) {
        // 创建 HashMap 集合对象
        HashMap<Student, String> hashMap = new HashMap<>();

        // 创建学生对象
        Student s1 = new Student("Linda", 30);
        Student s2 = new Student("Mika", 35);
        Student s3 = new Student("Json", 33);
        Student s4 = new Student("Json", 33);

        // 把学生添加到集合
        hashMap.put(s1, "China");
        hashMap.put(s2,"Singapore");
        hashMap.put(s3,"UK");
        hashMap.put(s4,"American");  // 键相同，值被覆盖


        // 遍历集合
        Set<Student> keySet = hashMap.keySet();
        for(Student key : keySet) {
            String value = hashMap.get(key);
            System.out.println(key.getName() + ", " + key.getAge() + ", " + value);
        }
    }
}
```
