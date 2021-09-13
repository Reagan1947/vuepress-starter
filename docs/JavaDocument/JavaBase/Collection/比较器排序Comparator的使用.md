# 比较器排序 Comparator 的使用

## 1.1 案例概述

存储学生对象并遍历，创建 TreeSet 集合使用「带参构造方法」。

要求：

- 按照年龄从小到大排序，年龄相同时，按照姓名的字母顺序排序

结论：

- 用 TreeSet 集合存储自定义对象，带参构造方法使用的是「比较器排序」对元素进行排序的。
- 比较器排序：就是让「集合构造方法接收 Comparator 的实现类对象」，重写 `compare(T o1, T o2)` 方法
- 重写方法时，一定要注意排序规则必须按照要求的主要条件和次要条件来写

\*备注：其中使用了匿名内部类

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
    public String toString() {
        return "Student{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
```

==TreeSetDemo==

```java
import java.util.Comparator;
import java.util.TreeSet;

/**
 * 存储学生对象并遍历，创建 TreeSet 集合使用「带参构造方法」。
 * 要求：按照年龄从小到大排序，年龄相同时，按照姓名的字母顺序排序
 */
public class TreeSetDemo {
    public static void main(String[] args) {
        // 创建集合对象
        TreeSet<Student> treeSet = new TreeSet<Student>(new Comparator<Student>() {
            @Override
            public int compare(Student s1, Student s2) {
                // this.age 等于 s1
                int num = s1.getAge() - s2.getAge();
                int num2 = num == 0 ? s1.getName().compareTo(s2.getName()) : num;
                return num2;
            }
        });

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

