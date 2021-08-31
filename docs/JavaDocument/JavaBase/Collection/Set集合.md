#  Set 集合

## 1.1 Set 集合概述和特点

### 1.1.1 概述和特点

- Set 集合特点
  - 不包含重复元素的集合
  - 没有带索引的方法, 所以不能使用普通 for 循环遍历

- Set 集合练习: 存储字符串并遍历

###  1.1.2 参考代码

```java
import java.util.HashSet;
import java.util.Set;

/**
 * HashSet 集合特点
 * 1：底层数据结构是哈希表
 * 2：对集合的迭代顺序不做任何保证，也就是说不保证存储和取出的元素顺序一致
 * 3：没有带索引的方法，所以不能使用普通 for 循环遍历
 * 4：由于是 Set 集合，所以是不包含重复元素的集合
 */
public class HashSetDemo {
    public static void main(String[] args) {
        // 创建集合对象
        Set<String> hashSet = new HashSet<>();

        // 添加元素
        hashSet.add("hello");
        hashSet.add("world");
        hashSet.add("java");

        // 不包含重复元素的集合
        hashSet.add("world");

        // 遍历
        for(String s : hashSet) {
            System.out.println(s);
        }
    }
}
```

## 1.2 哈希值

### 1.2.1 概述

- 哈希值：是 JDK 根据对象的==地址==或者==字符串==或者==数字==算出来的 int 类型的==数值==
- Object 类中有一个方法可以获取==对象的哈希值==
  - `public int hashCode()`：返回对象的哈希值

### 1.2.2 参考代码

==HashDemo==

```java
/**
 * 哈希值：
 *  是 JDK 根据对象的地址或者字符串或者数字算出来的 int 类型的数值
 *
 * Object 类中有一个方法可以获取对象的哈希值
 *  public int hashCode()：返回对象的哈希值
 */
public class HashDemo {
    public static void main(String[] args) {
        // 创建学生对象
        Student s1 = new Student("林青霞", 30);

        // 同一个对象多次调用 hashCode() 方法返回的哈希值是相同的
        System.out.println(s1.hashCode());  // 460141958
        System.out.println(s1.hashCode());  // 460141958

        System.out.println("--------");

        // 默认情况下，不同对象的哈希值是不相同的
        // 通过方法重写，可以实现不同对象的哈希值是相同的
        Student s2 = new Student("林青霞", 30);
        System.out.println(s2.hashCode());  // 1163157884

        System.out.println("--------");

        System.out.println("hello".hashCode());  // 99162322
        System.out.println("world".hashCode());  // 113318802
        System.out.println("java".hashCode());  // 3254818

        System.out.println("--------");

        System.out.println("world".hashCode());  // 113318802

        System.out.println("--------");

        System.out.println("重地".hashCode());  // 1179395
        System.out.println("通话".hashCode());  // 1179395
    }
}
```

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

## 1.3 HashSet 集合概述和特点

### 1.3.1 概述与特点

- HashSet 集合特点
  - 底层数据结构是哈希表
  - 对集合的迭代顺序不做任何保证，也就是说不保证存储和取出的元素顺序一致
  - 没有带索引的方法，所以不能使用普通 for 循环遍历
  - 由于是 Set 集合，所以是不包含重复元素的集合
- HashSet 集合练习：存储字符串并遍历

### 1.3.2 参考代码

```java
import java.util.HashSet;

public class HashSetDemo01 {
    public static void main(String[] args) {
        // 创建集合对象
        HashSet<String> hashSet = new HashSet<>();

        // 添加元素
        hashSet.add("hello");
        hashSet.add("world");
        hashSet.add("java");

        hashSet.add("world");

        // 遍历
        for (String s : hashSet) {
            System.out.println(s);
        }
    }
}
```

## 1.4 HashSet 集合保证元素唯一性源码分析

### 1.4.1 概述

- HashSet 集合存储元素
  - 需要保证元素唯一性，需要重写 `hashCode()` 和 `equals()` 方法

- HashSet 集合添加一个元素的过程(如下图所示)：

  ```mermaid
  graph TB;
  
  A["调用对象的 hashCode() 方法获取 <br> 对象的哈希值"]:::blueStyle
  B["根据对象的哈希值 <br> 计算对象的存储位置"]:::blueStyle
  C{"该位置是否有元素存在"}:::blueStyle
  D["将元素存储到该位置"]:::blueStyle
  E["遍历该位置的所有元素，和新存入的 <br> 元素比较哈希值是否相同"]:::blueStyle
  F{"调用 equals() 方法 <br> 比较两对象内容是否相等"}:::blueStyle
  G["说明元素重复，不存储"]:::blueStyle
  
  A --> B
  B --> C
  
  C --"没有"--> D
  C --"有"-->E
  
  E --"都不相同"--> D
  E --"有相同的"--> F
  
  F --"返回 false"--> D
  F --"返回 true"--> G
  
  classDef blueStyle fill:#bbdefb, stroke:#2196f3;
  ```

### 1.4.2 源码分析

```java
// 创建集合对象
HashSet<String> hashSet = new HashSet<String>();

// 添加元素
hashSet.add("hello");
hashSet.add("world");
hashSet.add("java");

public boolean add(E e) {
    return map.put(e, PRESENT) == null;
}

static final int hash(Object key) {  // key 为元素
    int h;
    return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
}

public V put(K key, V value) {
    return putVal(hash(key), key, value, false, true);
}

// hash 值和元素的 hashCode() 方法有关
final V putVal(int hash, K key, V value, boolean onlyIfAbsent,
               boolean evict) {
    Node<K,V>[] tab; Node<K,V> p; int n, i;
    // 如果哈希表未初始化，就对其进行初始化
    if ((tab = table) == null || (n = tab.length) == 0)
        n = (tab = resize()).length;
    // 根据对象的哈希值计算对象的存储位置，如果该位置没有元素，就存储元素
    if ((p = tab[i = (n - 1) & hash]) == null)
        tab[i] = newNode(hash, key, value, null);
    else {
        Node<K,V> e; K k;
        /**
         * 存入的元素和以前的元素比较哈希值
         * 	└- 如果哈希值不同，会继续执行，把元素添加到集合
         *  └- 如果哈希值相同，会调用对象的 equals() 方法比较
         *	    └- 如果返回 false，会继续向下执行，把元素添加到集合
         *      └- 如果返回 true，说明元素重复，不存储
         */
        if (p.hash == hash &&
            ((k = p.key) == key || (key != null && key.equals(k))))
            e = p;
        else if (p instanceof TreeNode)
            e = ((TreeNode<K,V>)p).putTreeVal(this, tab, hash, key, value);
        else {
            for (int binCount = 0; ; ++binCount) {
                if ((e = p.next) == null) {
                    p.next = newNode(hash, key, value, null);
                    if (binCount >= TREEIFY_THRESHOLD - 1) // -1 for 1st
                        treeifyBin(tab, hash);
                    break;
                }
                if (e.hash == hash &&
                    ((k = e.key) == key || (key != null && key.equals(k))))
                    break;
                p = e;
            }
        }
        if (e != null) { // existing mapping for key
            V oldValue = e.value;
            if (!onlyIfAbsent || oldValue == null)
                e.value = value;
            afterNodeAccess(e);
            return oldValue;
        }
    }
    ++modCount;
    if (++size > threshold)
        resize();
    afterNodeInsertion(evict);
    return null;
}
```

## 1.5 常见数据结构之哈希表

- 哈希表
  - JDK8之前，底层采用==数组+链表==实现，可以说是一个，元素为链表的数组
  - JDK8 以后，在长度比较长的时候，底层时间了优化

![image-20210825124755334](https://research-campus-1256316910.cos.ap-chongqing.myqcloud.com/PicGoimage-20210825124755334.png)

## 1.6 案例：HashSet 集合存储学生对象并遍历

### 1.6.1 案例概述

- 需求：创建一个存储学生对象的集合，存储三个学生对象，使用程序实现在控制台遍历该集合
- 思路：
  1. 定义学生类
  2. 创建HashSet集合对象
  3. 创建学生对象
  4. 把学生添加到集合
  5. 遍历集合(增强 for)
  6. 在学生类中重写两个方法
     - `hashCode()` 和 `equals()`
     - 自动生成即可

### 1.6.2 实现代码

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

==HashSetDemo02==·

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

## 1.7 LinkedHashSet 集合概述和特点

### 1.7.1 概述

- LinkedHashSet 集合特点
  - 由哈希表和链表实现 Set 接口，具有可预测的迭代次序
  - 由链表保证元素有序，也就是说元素的存储和取出顺序是一致的
  - 由哈希表保证元素唯一，也就是说没有重复的元素

- LinkedHashSet 集合练习：存储字符串并遍历

### 1.7.2 代码实现

```java
import java.util.LinkedHashSet;

/**
 * LinkedHashSet 集合特点
 *  1. 哈希表和链表实现的 Set 接口，具有可预测的迭代次序
 *  2. 由链表保证元素有序，也就是说元素的存储和取出顺序是一致的
 *  3. 由哈希表保证元素唯一，也就是说没有重复元素
 */
public class LinkedHashSetDemo {
    public static void main(String[] args) {
        // 创建集合对象
        LinkedHashSet<String> linkedHashSet = new LinkedHashSet<String>();

        // 添加元素
        linkedHashSet.add("hello");
        linkedHashSet.add("world");
        linkedHashSet.add("java");

        linkedHashSet.add("world");

        // 遍历集合
        for(String s: linkedHashSet) {
            System.out.println(s);
        }
    }
}
```

## 1.8 TreeSet 集合概述和特点

### 1.8.1 概述

- TreeSet 集合特点
  - 元素有序，这里的顺序不是指存储和取出的顺序，而是按照一定的规则进行排序具体排序方式取决于构造方法
    - `TreeSet()`：根据其元素的自然排序进行排序
    - `TreeSet(Comparator comparator)`：根据指定的比较器进行排序
  - 没有带索引的方法，所以不能使用普通 for 循环遍历
  - 由于是 Set 集合，所以不包含重复元素的集合

- TreeSet 集合练习：存储整数并遍历

### 1.8.2 参考代码

```java
import java.util.TreeSet;

/**
 * TreeSet 集合特点
 *
 * 1. 元素有序，这里的顺序不是指存储和取出的顺序，而是按照一定的规则进行排序具体排序方式取决于构造方法
 *      TreeSet()：根据其元素的自然排序进行排序
 *      TreeSet(Comparator comparator)：根据指定的比较器进行排序
 * 2. 没有带索引的方法，所以不能使用普通 for 循环遍历
 * 3. 由于是 Set 集合，所以不包含重复元素的集合
 */
public class TreeSetDemo01 {
    public static void main(String[] args) {
        // 创建集合对象
        TreeSet<Integer> treeSet = new TreeSet<>();

        // 添加元素
        treeSet.add(10);
        treeSet.add(40);
        treeSet.add(30);
        treeSet.add(50);
        treeSet.add(20);
        
        treeSet.add(30);

        // 遍历集合
        for(Integer i : treeSet) {
            System.out.println(i);
        }
    }
}
```

### 1.9 自然排序 Comparable 的使用

### 1.9.1 概述

- 存储学生对象并遍历，创建 TreeSet 集合使用==无参构造方法==
- 要求：按照年龄从小到大排序，年龄相同时，按照姓名的字母顺序排序

- 结论
  - 用 TreeSet 集合存储自定义对象，无参构造方法使用的是==自然排序==对元素进行排序的
  - 自然排序，就是让==元素所属类实现 Comparable接口==，重写 `compareTo(T o)` 方法
  - 重写方法时，一定要注意排序顺序必须是按照要求的主要条件和次要条件来写

### 1.9.2 参考代码

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

==TreeSetDemo02==

```java
import java.util.TreeSet;

public class TreeSetDemo02 {
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