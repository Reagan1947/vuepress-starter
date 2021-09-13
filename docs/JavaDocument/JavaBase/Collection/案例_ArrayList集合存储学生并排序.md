# 案例：ArrayList 存储学生对象并排序

## 1.1 概述

需求：ArrayList 存储学生对象，使用 Collections 对 ArrayList 进行排序

要求：按照年龄从小到大排序，年龄相同时，按照姓名的字母顺序排序

思路：

1. 定义学生类
2. 创建 ArrayList 集合对象
3. 创建学生对象
4. 把学生添加到集合
5. 使用 Collections 对 ArrayList 集合排序
6. 遍历集合

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

==CollectionsDemo==

```java
import java.util.*;

/**
 * 需求：
 *  ArrayList 存储学生对象，使用 Collections 对 ArrayList 进行排序
 *
 * 要求：
 *  按照年龄从小到大排序，年龄相同时，按照姓名的字母顺序排序
 *
 * 思路：
 *  1.定义学生类
 *  2.创建 ArrayList 集合对象
 *  3.创建学生对象
 *  4.把学生添加到集合
 *  5.使用 Collections 对 ArrayList 集合排序
 *  6.遍历集合
 */
public class CollectionsDemo02 {
    public static void main(String[] args) {
        // 创建学生类对象
        Student s1 = new Student("Linda", 30);
        Student s2 = new Student("Mika", 35);
        Student s3 = new Student("Json", 33);
        Student s4 = new Student("Rose", 33);

        List<Student> list = Arrays.asList(s1, s2, s3, s4);

        // 创建ArrayList集合对象
        ArrayList<Student> array = new ArrayList<Student>(list);

        // 使用Collections对ArrayList集合排序
        Collections.sort(array, new Comparator<>() {
            @Override
            public int compare(Student s1, Student s2) {
                // 按照年龄从小到大排序，年龄相同时，按照姓名的字母顺序排序
                int num = s1.getAge() - s2.getAge();
                int num2 = num == 0 ? s1.getName().compareTo(s2.getName()) : num;

                return num2;
            }
        });

        // 遍历集合
        for(Student s : array) {
            System.out.println(s.getName() + "," + s.getAge());
        }
    }
}
```

