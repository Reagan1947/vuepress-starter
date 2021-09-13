## 自然排序 Comparable 的使用

## 1.1 概述

- 存储学生对象并遍历，创建 TreeSet 集合使用「无参构造方法」。
- 要求：按照年龄从小到大排序，年龄相同时，按照姓名的字母顺序排序

- 结论：
  - 用 TreeSet 集合存储自定义对象，无参构造方法使用的是 「自然排序」对元素进行排序的
  - 自然排序，就是让「元素所属类实现 Comparable接口」，重写 `compareTo(T o)` 方法
  - 重写方法时，一定要注意排序顺序必须是按照要求的主要条件和次要条件来写

## 1.2 参考代码

==Student==

```java
public class Student implements Comparable<Student>{
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

    @Override
    public int compareTo(Student o) {
        // return0;
        // return 1;
        // return -1;

        // 按照年龄从小到大排序
        int num = this.age - o.age;
        // int num = o.age - this.age;
        // 年龄相同时，按照姓名的字母顺序排序
        int num2 = num == 0? this.name.compareTo(o.name):num;

        return num2;
    }
}
```

==TreeSetDemo==

```java
import java.util.TreeSet;

public class TreeSetDemo0 {
    public static void main(String[] args) {
        // 创建集合对象
        TreeSet<Student> treeSet = new TreeSet<>();

        // 创建学生对象
        Student s1 = new Student("xishi", 29);
        Student s2 = new Student("wangzhaojun", 28);
        Student s3 = new Student("diaochan", 30);
        Student s4 = new Student("yangyuhuan", 33);

        Student s5 = new Student("linqingxia", 33);
        Student s6 = new Student("linqingxia", 33);

        // 把学生添加到集合
        treeSet.add(s1);
        treeSet.add(s2);
        treeSet.add(s3);
        treeSet.add(s4);
        treeSet.add(s5);
        treeSet.add(s6);

        // 遍历集合
        for(Student s: treeSet) {
            System.out.println(s.toString());
        }
    }
}
```

