# List 概述

## 1.1 List 集合的概述和特点

### 1.1.1 List 集合概述

有序集合(也称为序列)，用户可以精确控制列表中每个元素的插入位置。用户可以通过整数索引访问元素。
并搜索列表中的元素

与 Set 集合不同，列表通常允许重复的元素

### 1.1.2 List 集合特点

- 有序：存储和取出元素的顺序一致
- 可重复：存储的元素可以重复

### 1.1.3 参考代码

```java
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * List 集合特点
 *  有序：存储和取出元素的顺序一致
 *  可重复性：存储的元素可以重复
 */
public class ListDemo01 {
    public static void main(String[] args) {
        // 创建集合对象
        List<String> list = new ArrayList<>();

        // 添加元素
        list.add("hello");
        list.add("world");
        list.add("java");
        list.add("world");

        // 输出集合对象
        System.out.println(list);
        
        // 迭代器的方式遍历
        Iterator<String> it = list.iterator();
        while(it.hasNext()) {
            String s = it.next();
            System.out.println(s);
        }
    }
}
```

<br>

<br>

## 1.2 List 集合特有方法

### 1.2.1 List集合特有方法

| 方法名                           | 说明                                     |
| -------------------------------- | ---------------------------------------- |
| `void add(int index, E element)` | 此集合中的指定位置插入指定               |
| `E remove(int index)`            | 删除指定索引处的元素，返回被删除的元素   |
| `E set(int index, E element)`    | 修改指定索引位置的元素，返回被修改的元素 |
| `E get(int index)`               | 返回指定索引处的元素                     |

### 1.2.2 参考代码

```java
import java.util.ArrayList;
import java.util.List;

/**
 * List 集合特有方法
 *  void add(int index, E element)：在此集合中的指定位置插入指定的元素
 *  E remove(int index)：删除指定索引处的元素，返回被删除的元素
 *  E set(int index, E element)：修改指定索引处的元素，返回被修改的元素
 *  E get(int index)：返回指定索引处的元素
 */
public class ListDemo02 {
    public static void main(String[] args) {
        // 创建集合对象
        List<String> list = new ArrayList<>();

        // 添加元素
        list.add("hello");
        list.add("world");
        list.add("java");

        // void add(int index, E element)：在此集合中的指定位置插入指定的元素
        // list.add(1, "javaee");
        // IndexOutOfBoundsException
        // list.add(11, "javaee");

        // E remove(int index)：删除指定索引处的元素，返回被删除的元素
        // System.out.println(list.remove(1));
        // IndexOutOfBoundsException
        // System.out.println(list.remove(11));

        // E set(int index, E element)：修改指定索引处的元素，返回被修改的元素
        System.out.println(list.set(1, "javaee"));
        // IndexOutOfBoundsException
        System.out.println(list.set(11, "javaee"));

        // E get(int index)：返回指定索引处的元素
        System.out.println(list.get(1));
        // IndexOutOfBoundsException
        System.out.println(list.get(11));

        // 输出集合对象
        System.out.println(list);

        // 遍历集合
        System.out.println(list.get(0));
        System.out.println(list.get(1));
        System.out.println(list.get(2));

        // 用for循环改进遍历
        for(int i = 0; i < list.size(); i++) {
            String s = list.get(i);
            System.out.println(s);
        }
    }
}
```

<br>

<br>

## 1.3 案例：List 集合存储学生对象并遍历

### 1.3.1 案例概述

需求：创建一个存储学生对象的集合，存储三个学生对象，使用程序实现在控制台遍历该集合

思路：

1.  定义学生类
2.  创建List集合对象
3.  创建学生对象
4.  把学生添加到集合
5.  遍历集合(迭代器方式、for 循环方式)

### 1.3.2 代码实现

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
 *      5. 遍历集合(迭代器方式、for循环方式)
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

        // 迭代器方式
        Iterator<Student> it = list.iterator();
        while(it.hasNext()) {
            Student s = it.next();
            System.out.println(s.toString());
        }

        // for循环方式
        for(int i = 0; i < list.size(); i++) {
            Student s = list.get(i);
            System.out.println(s.toString());
        }
    }
}
```

<br>

<br>

## 1.4 并发修改异常

### 1.4.1 产生异常代码分析

```java
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * 需求：
 *  我有一个集合：List<String> list = new Arraylist<String>();
 *  里面有三个元素：list.add("hello"); list.add("world"); list.add("java");
 *  遍历集合，得到每一个元素，看有没有”world“这个元素，我就添加一个”javaee“元素，请写代码实现
 *
 * ConcurrentModificationException：当不允许这样的修改时，就可以通过检测到对象的并发修改的方法来抛出异常
 */
public class ListDemo {
    public static void main(String[] args) {
        // 创建集合对象
        List<String> list = new ArrayList<>();

        // 添加元素
        list.add("hello");
        list.add("world");
        list.add("java");

        // 遍历集合，得到每一个元素，看有没有”world“这个元素，我就添加一个”javaee“元素，请写代码实现
        Iterator<String> it = list.iterator();
        while(it.hasNext()) {
            String s = it.next();
            if(s.equals("world")) {
                list.add("javaee");
            }
        }

        // 通过 for 循环遍历
        for(int i = 0; i < list.size(); i++) {
            if(list.get(i).equals("world")) {
                list.add("javaee");
            }
        } 

        // 输出集合对象
        System.out.println(list);
    }
}
```

### 1.4.2 源码分析

```java
public interface List<E> extends Collection<E> {
    Iterator<E> iterator();
    boolean add(E e);
}

public abstract class AbstractList<E> {
    protected int modCount = 0;
}

public class ArrayList<E> extends AbstractList<E>
        implements List<E>, RandomAccess, Cloneable, java.io.Serializable {
    public boolean add(E e) {
        ensureCapacityInternal(size + 1);  // Increments modCount!! 增加modCount!!
        elementData[size++] = e;
        return true;
    }

    public E get(int index) {
        rangeCheck(index);

        return elementData(index);
    }
    
    public Iterator<E> iterator() {
        return new Itr();
    }

    private class Itr implements Iterator<E> {
        int cursor;       // index of next element to return
        int lastRet = -1; // index of last element returned; -1 if no such
        int expectedModCount = modCount;

        /**
         * modCount：实际修改集合的次数
         * expectedModCount：逾期修改集合次数
         */

        Itr() {
        }

        public boolean hasNext() {
            return cursor != size;
        }

        @SuppressWarnings("unchecked")
        public E next() {
            checkForComodification();
            int i = cursor;
            if (i >= size)
                throw new NoSuchElementException();
            Object[] elementData = ArrayList.this.elementData;
            if (i >= elementData.length)
                throw new ConcurrentModificationException();
            cursor = i + 1;
            return (E) elementData[lastRet = i];
        }

        final void checkForComodification() {
            if (modCount != expectedModCount)
                throw new ConcurrentModificationException();
        }
    }
}
```

### 1.4.3 原因分析

- 并发修改异常：ConcurrentModificationException
  
- 产生原因：迭代器遍历过程中，通过集合对象修改了集合中元素的长度，造成了迭代器获取元素中判断预期修改值和实际修改值不一样
  
- 解决方案：用 for 循环遍历，然后集合对象做对应的操作即可


<br>

<br>

## 1.5 ListIterator 列表迭代器

### 1.5.1 ListIterator 概述

ListIterator：列表迭代器：
- 通过 List 集合的 `listIterator()` 方法得到。所以说他是 List 集合特有的迭代器
- 用于允许程序员沿着任一方向遍历列表的列表迭代器，在迭代期间修改列表，并获取列表中迭代器当前的位置

ListIterator 中的常用方法：
- `E next()`：返回迭代中的下一个元素
- `boolean hasNext()`：如果迭代器具有更多元素，则返回 true
- `E previous()`：返回列表中的上一个元素
- `boolean hasPreviuos()`：如果此列表迭代器在相反方向遍历列表时具有更多元素，则返回 true
- `void add(E e)`：将指定的元素插入列表

### 1.5.2 参考代码

```java
import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;

/**
 * ListIterator：列表迭代器
 *  通过 List 集合的 ListIterator() 方法得到，所以说它是 List 集合特有的迭代器
 *  用于允许程序员沿着任一方向遍历列表的列表迭代器，在迭代期间修改列表，并获得列表中迭代器的当前位置
 *
 * ListIterator 中的常用方法
 *  E next()：返回迭代中的下一个元素
 *
 */
public class ListIteratorDemo {
    public static void main(String[] args) {
        // 创建集合对象
        List<String> list = new ArrayList<>();

        // 添加元素
        list.add("hello");
        list.add("world");
        list.add("java");

        // 通过 List 集合的 listIterator() 方法得到
        ListIterator<String> listIterator = list.listIterator();

        while(listIterator.hasNext()) {
            String s = listIterator.next();
            System.out.println(s);
        }
        System.out.println("-------");

        while(listIterator.hasPrevious()) {
            String s = listIterator.previous();
            System.out.println(s);
        }

        // 获取列表迭代器
        ListIterator<String> lit = list.listIterator();
        while(lit.hasNext()) {
            String s = lit.next();
            if(s.equals("world")) {
                lit.add("javaee");
            }
        }

        System.out.println(list);
    }
}
```

<br>

<br>

## 1.6 ListIterator 与并发修改异常

在 ListIterator 中使用 `add()` 方法时不会触发 [并发修改异常](#_1-4-并发修改异常)，因为在 ListIterator 的 `add()` 方法中会将实际修改值赋值给预期修改值，具体的源码分析如下：

```java
public interface List<E> extends Collection<E> {
    ListIterator<E> listIterator();
}

public abstract class AbstractList<E> {
    protected int modCount = 0;
}

public class ArrayList<E> extends AbstractList<E>
        implements List<E>, RandomAccess, Cloneable, java.io.Serializable {
    public boolean add(E e) {
        ensureCapacityInternal(size + 1);  // Increments modCount!! 增加modCount!!
        elementData[size++] = e;
        return true;
    }

    public E get(int index) {
        rangeCheck(index);

        return elementData(index);
    }

    public ListIterator<E> listIterator() {
        return new ListItr(0);
    }

    private class ListItr extends Itr implements ListIterator<E> {
        ListItr(int index) {
            super();
            cursor = index;
        }

        public boolean hasPrevious() {
            return cursor != 0;
        }

        public int nextIndex() {
            return cursor;
        }

        public int previousIndex() {
            return cursor - 1;
        }

        @SuppressWarnings("unchecked")
        public E previous() {
            checkForComodification();
            int i = cursor - 1;
            if (i < 0)
                throw new NoSuchElementException();
            Object[] elementData = ArrayList.this.elementData;
            if (i >= elementData.length)
                throw new ConcurrentModificationException();
            cursor = i;
            return (E) elementData[lastRet = i];
        }

        public void set(E e) {
            if (lastRet < 0)
                throw new IllegalStateException();
            checkForComodification();

            try {
                ArrayList.this.set(lastRet, e);
            } catch (IndexOutOfBoundsException ex) {
                throw new ConcurrentModificationException();
            }
        }

        public void add(E e) {
            checkForComodification();

            try {
                int i = cursor;
                ArrayList.this.add(i, e);
                cursor = i + 1;
                lastRet = -1;
                expectedModCount = modCount; // 会将实际修改值赋值给预期修改值
            } catch (IndexOutOfBoundsException ex) {
                throw new ConcurrentModificationException();
            }
        }
    }
}
```

## 1.7 增强 for 循环

### 1.7.1 增强 for 循环概述

增强 for 循环：简化数组和 Collection 集合的遍历
- 实现 Iterable 接口的类允许其对象成为增强 for 语句的目标

- 它是 JDK5 之后出现的，其内部原理是一个 Iterator 迭代器

  

增强 for 的格式：

```java
/**
 * 增强 for 格式
 */
for(元素数据类型 变量名 : 数组或 Collection 组合) {
// 在此处使用变量即可，该变量就是元素
}
```

```java
/**
 * 增强 for 范例
 */
int[] arr = {1, 2, 3, 4, 5};
for(int i : arr) {
    System.out.print(i);
}
```

### 1.7.2 参考代码

```java
import java.util.*;

/**
 * 增强 for ：简化数组和 Collection 集合的遍历
 *  实现 Iterable 接口的类允许其成为增强型 for 语句的目标
 *  它是 JDK5 之后出现的， 其内部原理是一个 Iterator 迭代器
 * 格式：
 *  for(元素数字据类型 变量名 : 数组或者 Collection 集合) {
 *      // 此处使用变量即可，该变量就是元素
 *  }
 */
public class ForDemo {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        for(int i : arr) {
            System.out.println(i);
        }

        System.out.println("--------");

        String[] strArray = {"hello", "world", "java"};
        for(String s : strArray) {
            System.out.println(s);
        }
        System.out.println("--------");

        List<String> list = new ArrayList<>();
        list.add("hello");
        list.add("world");
        list.add("java");

        for(String s : list) {
            System.out.println(s);
        }

        // 内部原理是一个 Iterator 迭代器
        for(String s : list) {
            if(s.equals("world")) {
                list.add("javaee");  // ConcurrentModificationException
            }
        }
    }
}
```

<br>

<br>

## 1.8 案例：List 集合存储学生对象用三种方式遍历

### 1.8.1 案例概述

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

### 1.8.2 实现代码

==Student 学生类==

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

==ListDemo 类==

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