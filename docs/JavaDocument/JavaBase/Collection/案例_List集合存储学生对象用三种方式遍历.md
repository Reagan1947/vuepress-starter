# 案例：List 集合存储学生对象用三种方式遍历

## 1.1 案例概述

需求：创建一个存储学生对象的集合，存储三个学生对象，使用程序实现在控制台遍历该集合

思路：

1. 定义学生类

2. 创建List集合对象

3. 创建学生对象

4. 把学生添加到集合

5. 遍历集合

   其中遍历集合的方法有：

   - 迭代器：集合特有的遍历方式

   - 普通 for ： 带有索引的遍历方式

   - 增强 for ：最方便的遍历方式

## 1.2 实现代码

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
    public String toString() {
        return "Student{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
```

==ListDemo==

```java
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * 需求：创建一个存储学生对象的集合，存储三个学生对象，使用程序实现在控制台遍历该集合
 * 思路：
 *      1. 定义学生类
 *      2. 创建List集合对象
 *      3. 创建学生对象
 *      4. 把学生添加到集合
 *      5. 遍历集合
 *          - 迭代器：集合特有的遍历方式
 *          - 普通 for ： 带有索引的遍历方式
 *          - 增强 for ：最方便的遍历方式
 */
public class ListDemo {
    public static void main(String[] args) {
        // 创建List集合对象
        List<Student> list = new ArrayList<>();

        // 创建学生对象
        Student s1 = new Student("Linda", 30);
        Student s2 = new Student("Mika", 32);
        Student s3 = new Student("Wing", 33);

        // 把学生添加到集合
        list.add(s1);
        list.add(s2);
        list.add(s3);

        // 迭代器方式：集合特有的遍历方式
        Iterator<Student> it = list.iterator();
        while(it.hasNext()) {
            Student s = it.next();
            System.out.println(s.toString());
        }
        System.out.println("--------");

        // for 循环方式：带有索引的遍历方式
        for(int i = 0; i < list.size(); i++) {
            Student s = list.get(i);
            System.out.println(s.toString());
        }
        System.out.println("--------");

        // 增强 for ： 最方便的遍历方式
        for(Student student : list) {
            System.out.println(student.toString());
        }
    }
}
```

