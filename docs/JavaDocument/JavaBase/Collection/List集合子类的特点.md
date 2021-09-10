# List 集合的子类

## 1.1 List 集合常见子类的特点

List 集合常见子类：ArrayList 与 LinkedList

- ArrayList：底层数据结构是数组，查询快，增删慢
- LinkedList：底层数据结构，查询慢，增删快

练习：分别使用 ArrayList 和 LinkedList 完成存储字符串并遍历

## 1.2 参考代码

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

