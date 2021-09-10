# 案例：Collection 集合存储学生对象并编列

## 1.1 案例概述

需求：创建一个存储学生对象的集合，存储三个学生对象，使用程序实现在控制台遍历该集合

思路：

1.  定义学生类
2.  创建 Collection 集合对象
3.  创建学生对象
4.  把学生添加到集合
5.  遍历集合 (迭代器方式)

## 1.2 代码实现

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

==CollectionDemo==

```java
public class CollectionDemo {
    public static void main(String[] args) {
        // 创建 Collection 集合对象
        Collection<Student> collection = new ArrayList<>();

        // 创建学生对象
        Student s1 = new Student("Linda", 20);
        Student s2 = new Student("Mika", 35);
        Student s3 = new Student("Wing", 33);

        // 把学生添加到集合
        collection.add(s1);
        collection.add(s2);
        collection.add(s3);

        // 遍历集合(迭代器方式)
        Iterator<Student> iterator = collection.iterator();
        while(iterator.hasNext()) {
            Student student = iterator.next();
            System.out.println(student.toString());
        }

    }
}
```

