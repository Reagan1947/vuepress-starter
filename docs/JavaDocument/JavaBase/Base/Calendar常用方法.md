# Calendar 常用方法

## 1.1 概述

| 方法名                                                 | 说明                                                   |
| ------------------------------------------------------ | ------------------------------------------------------ |
| `public int get(int field)`                            | 返回给定日历字段的值                                   |
| `public abstract void add(int field, int amount)`      | 根据日历的规则，将指定的时间量添加或减去给定的日历字段 |
| `public final void set(int year, int month, int date)` | 设置当前日历的年月日                                   |

## 1.2 参考代码

```java
import java.util.Calendar;

/**
 * public abstract void add(int field, int amount): 根据日历的规则，将指定的时间量添加或减去给定的日历字段
 * public final void set(int year, int month, int date): 设置当前日历的年月日
 */
public class CalenderDemo {
    public static void main(String[] args) {
        // 获取日历类对象
        Calendar c = Calendar.getInstance();

        // public int get(int field)
        // int year = c.get(Calendar.YEAR);
        // int month = c.get(Calendar.MONTH) + 1;
        // int date = c.get(Calendar.DATE);
        // System.out.println(year + "年" + month + "月" + date + "日");

        // public abstract void add(int field, int amount): 根据日历的规则，将指定的时间量添加或减去给定的日历字段
        // 需求1：三年前的今天
        // c.add(Calendar.YEAR, -3);

        // int year = c.get(Calendar.YEAR);
        // int month = c.get(Calendar.MONTH) + 1;
        // int date = c.get(Calendar.DATE);
        // System.out.println(year + "年" + month + "月" + date + "日");

        // 需求2：十年后的五天前
        // c.add(Calendar.YEAR, 10);
        // c.add(Calendar.DATE, -5);

        // int year = c.get(Calendar.YEAR);
        // int month = c.get(Calendar.MONTH) + 1;
        // int date = c.get(Calendar.DATE);
        // System.out.println(year + "年" + month + "月" + date + "日");

        // public final void set(int year, int month, int date): 设置当前日历的年月日
        c.set(2048, 11, 11);

        int year = c.get(Calendar.YEAR);
        int month = c.get(Calendar.MONTH) + 1;
        int date = c.get(Calendar.DATE);
        System.out.println(year + "年" + month + "月" + date + "日");
    }
}
```

\* 注释：例如上述需要设置 `c.set(2048, 11, 11)` 2048 年 12 月 11 日，但因其月份从 0 开始计算，可使用`Calendar.DECEMBER` 设置月份。例如：`c.set(2048, Calendar.DECEMBER, 11)`

