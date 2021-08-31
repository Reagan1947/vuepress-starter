#### 2.41 static访问特点

```java
public class Student {
    // 非静态成员变量
    private String name = "Linda";

    // 静态成员变量
    private static String university = "SCI";

    // 非静态成员方法
    public void show1() {
        System.out.println(name);
        System.out.println(university);
        show1();
        show3();
    }

    // 非静态成员方法
    public void show2() {

    }

    // 静态成员方法
    public static void show3() {
        // System.out.println(name);
        System.out.println(university);
        // show1();
        show3();
    }

    // 静态成员方法
    public static void show4() {

    }
}
```

**非静的成员方法**

- 能访问静态的成员变量
- 能访问非静态的成员变量
- 能访问静态成员方法
- 能访问非静态成员方法



**静态成员方法**

- 能访问静态的成员变量
- 能访问静态的成员方法

总结一句话就是：静态成员方法只能访问静态成员

