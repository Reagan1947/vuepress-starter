#### 2.63 Integer 类的概述和使用

Integer：包装一个对象中的原始类型int的值

| 方法名                                  | 说明                                  |
| --------------------------------------- | ------------------------------------- |
| public Integer(int value)               | 根据int值创建Integer对象==(过时)==    |
| public Integer(String s)                | 根据String值创建Integer对象==(过时)== |
| public static Integer valueOf(int i)    | 返回表示指定的int值的Integer实例      |
| public static Integer valueOf(String s) | 返回一个保存指定值的Integer对象String |

```java
public class IntegerDemo {
    public static void main(String[] args) {
        // public Integer(int value): 根据int值创建Integer对象(过时)
        Integer i1 = new Integer(100);
        System.out.println(i1);

        // public Integer(String s): 根据String创建Integer对象(过时)
        Integer i2 = new Integer("100");
        // Integer i3 = new Integer("abc");
        // System.out.println(i3); // NumberFormatException
        System.out.println(i2);

        // public static Integer valueOf(int i): 返回表示指定的int值的Integer实例
        Integer i4 = Integer.valueOf(100);
        System.out.println(i4);

        // public static Integer valueOf(String s): 返回一个保存指定值的Integer对象String
        // Integer i5 = Integer.valueOf("abc"); // NumberFormatException
        Integer i6 = Integer.valueOf("100");
        System.out.println(i6);
        
    }
}
```

