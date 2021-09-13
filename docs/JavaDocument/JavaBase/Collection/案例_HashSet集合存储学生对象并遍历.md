# 案例：HashSet 集合存储学生对象并遍历

## 1.1 案例概述

需求：创建一个存储学生对象的集合，存储三个学生对象，使用程序实现在控制台遍历该集合

思路：

1. 定义学生类
2. 创建HashSet集合对象
3. 创建学生对象
4. 把学生添加到集合
5. 遍历集合(增强 for)
6. 在学生类中重写两个方法
   - `hashCode()` 和 `equals()`
   - 自动生成即可

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

==HashSetDemo02==

```java
import java.util.HashSet;

/**
 * 需求：创建一个存储学生对象的集合，存储三个学生对象，使用程序实现在控制台遍历该集合
 *      学生对象的成员变量值相同，我们就认为是同一个对象
 * 思路：
 *      1. 定义学生类
 *      2. 创建 HashSet 集合对象
 *      3. 创建学生对象
 *      4. 把学生添加到集合
 *      5. 遍历集合(增强 for)
 */
public class HashSetDemo02 {
    public static void main(String[] args) {
        // 创建 HashSet 集合对象
        HashSet<Student> hs = new HashSet<>();

        // 创建学生对象
        Student s1 = new Student("Linda", 30);
        Student s2 = new Student("Mika", 35);
        Student s3 = new Student("Wing", 33);

        Student s4 = new Student("Wing", 33);

        // 把学生添加到集合
        hs.add(s1);
        hs.add(s2);
        hs.add(s3);
        hs.add(s4);

        // 遍历集合(增强 for)
        for(Student s : hs) {
            System.out.println(s.toString());
        }

    }
}
```
