# 案例: ArrayList 集合存储学生对象三种遍历方式

## 1.1 案例概述

需求：创建一个存储学生对象的集合，存储三个学生对象，使用程序实现在控制台遍历该集合

思路：

1. 定义学生类
2. 创建ArrayList集合对象
3. 创建学生对象
4. 把学生添加到集合
5. 遍历集合
   - 迭代器：集合特有的遍历方式
   - 普通 for ： 带有索引的遍历方式
   - 增强 for ：最方便的遍历方式

## 1.2 实现代码

```java
import java.util.ArrayList;
import java.util.Iterator;

/**
 * 需求：创建一个存储学生对象的集合，存储三个学生对象，使用程序实现在控制台遍历该集合
 * 思路：
 *      1. 定义学生类
 *      2. 创建ArrayList集合对象
 *      3. 创建学生对象
 *      4. 把学生添加到集合
 *      5. 遍历集合
 *          - 迭代器：集合特有的遍历方式
 *          - 普通 for ： 带有索引的遍历方式
 *          - 增强 for ：最方便的遍历方式
 */
public class ArrayListDemo {
    public static void main(String[] args) {
        // 创建List集合对象
        ArrayList<Student> arrayList = new ArrayList<>();

        // 创建学生对象
        Student s1 = new Student("Linda", 30);
        Student s2 = new Student("Mika", 32);
        Student s3 = new Student("Wing", 33);

        // 把学生添加到集合
        arrayList.add(s1);
        arrayList.add(s2);
        arrayList.add(s3);

        // 迭代器方式：集合特有的遍历方式
        Iterator<Student> it = arrayList.iterator();
        while(it.hasNext()) {
            Student s = it.next();
            System.out.println(s.toString());
        }
        System.out.println("--------");

        // for 循环方式：带有索引的遍历方式
        for(int i = 0; i < arrayList.size(); i++) {
            Student s = arrayList.get(i);
            System.out.println(s.toString());
        }
        System.out.println("--------");

        // 增强 for ： 最方便的遍历方式
        for(Student student : arrayList) {
            System.out.println(student.toString());
        }
    }
}
```
