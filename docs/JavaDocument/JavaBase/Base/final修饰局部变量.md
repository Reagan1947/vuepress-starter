#### 2.39 final修饰局部变量

```java
public class FinalDemo {

    public static void main(String[] args) {
        // final修饰基本变量类型
        final int age = 20;
        // age = 100;
        System.out.println(age);
    }
}
```

**final 修饰引用类型**

```java
public class FinalDemo {

    public static void main(String[] args) {
        // final修饰基本变量类型
        final int age = 20;
        // age = 100;
        System.out.println(age);

        // final修饰引用类型变量
        final Student s = new Student();
        s.age = 100;
        System.out.println(s.age);

    }
}
```



