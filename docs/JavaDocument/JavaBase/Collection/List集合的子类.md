# List 集合的子类

## 1.1 List 集合常见子类的特点

### 1.1.1 List 集合常见子类特点概述

List 集合常见子类：ArrayList 与 LinkedList

- ArrayList：底层数据结构是数组，查询快，增删慢
- LinkedList：底层数据结构，查询慢，增删快

- 练习：分别使用 ArrayList 和 LinkedList 完成存储字符串并遍历

### 1.1.2 参考代码

```java
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.ListIterator;

/**
 * List 集合常用子类：ArrayList， LinkedList
 *  ArrayList：底层数据结构是数组，查询快，增删慢
 *  LinkedList：底层数据结构是链表，查询慢，增删快
 *
 * 练习：
 *  分别使用 ArrayList 和 LinkedList 完成字符串的存储并遍历
 */
public class ListDemo {
    public static void main(String[] args) {
        // 创建集合对象
        ArrayList<String> arrayList = new ArrayList<>();

        arrayList.add("hello");
        arrayList.add("world");
        arrayList.add("java");

        // 增强 for 遍历
        for(String s : arrayList) {
            System.out.println(s);
        }
        System.out.println("--------");

        // 普通 for 遍历
        for(int i = 0; i < arrayList.size(); i++) {
            System.out.println(arrayList.get(i));
        }
        System.out.println("--------");

        // 迭代器遍历
        ListIterator<String> listIterator = arrayList.listIterator();
        while(listIterator.hasNext()) {
            System.out.println(listIterator.next());
        }

        // LinkedList
        LinkedList<String> linkedList = new LinkedList<>();
        linkedList.add("hello");
        linkedList.add("world");
        linkedList.add("java");

        // 增强 for 遍历
        for(String s : linkedList) {
            System.out.println(s);
        }
        System.out.println("--------");

        // 普通 for 遍历
        for(int j = 0; j < linkedList.size(); j++) {
            System.out.println(linkedList.get(j));
        }
        System.out.println("--------");

        // 迭代器遍历
        ListIterator<String> iterator = linkedList.listIterator();
        while(iterator.hasNext()) {
            System.out.println(iterator.next());
        }
    }
}
```

## 1.2 案例: ArrayList 集合存储学生对象三种遍历方式

### 1.2.1 案例概述

- 需求：创建一个存储学生对象的集合，存储三个学生对象，使用程序实现在控制台遍历该集合
- 思路：
  1. 定义学生类
  2. 创建ArrayList集合对象
  3. 创建学生对象
  4. 把学生添加到集合
  5. 遍历集合
     - 迭代器：集合特有的遍历方式
     - 普通 for ： 带有索引的遍历方式
     - 增强 for ：最方便的遍历方式

### 1.2.2 实现代码

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

## 1.3 LinkedList 集合的特有功能

### 1.3.1 特有功能

| 方法名                      | 说明                             |
| --------------------------- | -------------------------------- |
| `public void addFirst(E e)` | 在该列表开头插入指定的元素       |
| `public void addLast(E e)`  | 将指定的元素追加到此列表的末尾   |
| `public E getFirst()`       | 返回此列表中的第一个元素         |
| `pulic E getLast()`         | 返回此列表中的最后一个元素       |
| `public E removeFirst()`    | 从此列表中删除第一个元素并返回   |
| `public E removeLast()`     | 从此列表中删除最后一个元素并返回 |

### 1.3.2 参考代码

```java
import java.util.LinkedList;

/**
 * LinkedList集合的特有功能:
 *  public void addFirst(E e): 在该列表开头插入指定的元素
 *  public void addLast(E e): 将指定元素追加到此列表的末尾
 *
 *  public E getFirst(): 返回此列表中的最后一个元素
 *  public E getLast(): 返回此列表中的最后一个元素
 *
 *  public E removeFirst(): 从此列表中删除并返回第一个元素
 *  public E removeLast(): 从此列表中删除并返回最后一个元素
 */
public class LinkedListDemo {
    public static void main(String[] args) {
        // 创建集合对象
        LinkedList<String> linkedList = new LinkedList<>();

        linkedList.add("hello");
        linkedList.add("world");
        linkedList.add("java");

        // public void addFirst(E e): 在该列表开头插入指定的元素
        // public void addLast(E e): 将指定元素追加到此列表的末尾
        linkedList.addFirst("java-se");
        linkedList.addLast("java-se");

        // public E getFirst(): 返回此列表中的最后一个元素
        // public E getLast(): 返回此列表中的最后一个元素
        System.out.println(linkedList.getFirst());
        System.out.println(linkedList.getLast());

        // public E removeFirst(): 从此列表中删除并返回第一个元素
        // public E removeLast(): 从此列表中删除并返回最后一个元素
        System.out.println(linkedList.removeFirst());
        System.out.println(linkedList.removeLast());

        System.out.println(linkedList);

    }
}
```