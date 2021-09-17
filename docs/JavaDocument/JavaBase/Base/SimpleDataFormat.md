# SimpleDateFormat 类概述

## 1.1 概述

SimpleDateFormat是个具体的类，用于以区域设置敏感的方式格式化和解析日期。我们重点学习日期格式化和解析

日期和日期格式由日期和时间模式字符串指定，在日期和时间模式字符串中，从 'A' 到 'Z' 以及从 'a' 到 'z' 引号和字母被解释为日期或时间字符串的组件的模式字母

常用的模式以及字母对应关系如下：

| 模式字母 | 释义 |
| -------- | ---- |
| y        | 年   |
| M        | 月   |
| d        | 日   |
| H        | 时   |
| m        | 分   |
| s        | 秒   |

## 1.2 SimpleDateFormat 的构造方法

| 方法名                                     | 说明                                                     |
| ------------------------------------------ | -------------------------------------------------------- |
| `public SimpleDateFormat()`                | 构造一个SimpleDateFormat，使用默认模式和日期格式         |
| `public SimpleDateFormat(String parttern)` | 构造一个SImpleDateFormat，使用给定的模式和默认的日期格式 |

## 1.3 SimpleDateFormat 格式化和解析日期

1. 格式化 (从 Date 到 String)

   `public final format(Date date)`: 将日期格式化成日期/时间字符串

2. 解析(从 String 到 Date)

   `public Date parse(String source)`: 从给定字符串开始解析文本以生成日期

## 1.4 参考代码

```java
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 构造方法：
 *  public SimpleDateFormat()：构造一个SimpleDateFormat，使用默认模式和日期格式
 *  public SimpleDateFormat(String pattern)：构造一个SimpleDateFormat，使用给定的模式和默认的日期格式
 *
 * 格式化：从 Date 到 String
 *  public final format(Date date): 将日期格式化成日期/时间字符串
 *
 * 解析(从 String 到 Date)
 *  public Date parse(String source): 从给定字符串开始解析文本以生成日期
 */
public class SimpleDateFormatDemo {
    public static void main(String[] args) throws ParseException {
        // 格式化：从 Date 到 String
        Date d = new Date();

        // 创建SimpleDateFormat对象
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy年MM月dd日 HH:mm:ss");
        String s = sdf.format(d);
        System.out.println(s);
        System.out.println("--------");

        // 从 String 到 Date
        String ss = "2048-08-09 11:11:11";
        SimpleDateFormat sdf2 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date dd = sdf2.parse(ss);
        System.out.println(dd);
    }
}
```

