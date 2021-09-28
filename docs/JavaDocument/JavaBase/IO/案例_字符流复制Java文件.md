# 案例：字符流复制 Java 文件

## 1.1 案例概述

需求：把模块目录下的 "ConversionStreamDemo.java" 复制到模块目录下的 "Copy.java"

思路：

1. 根据数据源创建字符输入流对象
2. 根据目的地创建字符流输出对象
3. 读写数据，复制文件
4. 释放资源

## 1.2 参考代码

```java
import java.io.*;

/**
 * 需求：把模块目录下的 "ConversionStreamDemo.java" 复制到模块目录下的 "Copy.java"
 *
 * 思路：
 *  1.根据数据源创建字符输入流对象
 *  2.根据目的地创建字符流输出对象
 *  3.读写数据，复制文件
 *  4.释放资源
 */
public class CopyJavaDemo01 {
    public static void main(String[] args) throws IOException {
        // 根据数据源创建字符输入流
        InputStreamReader isr = new InputStreamReader(
                new FileInputStream("src\\study15\\ConversionStreamDemo")
        );

        // 根据目的地创建字节输出流对象
        OutputStreamWriter osw = new OutputStreamWriter(
                new FileOutputStream("src\\study15\\Copy.java")
        );

        // 读写数据，复制文件
        // 一次读写一个字符数据
        // int ch;
        // while((ch = isr.read()) != -1) {
        //     osw.write(ch);
        // }

        // 一次读写一个字符数组数据
        char[] chs = new char[1024];
        int len;
        while((len = isr.read(chs)) != -1) {
            osw.write(chs);
        }

        // 释放资源
        osw.close();
        isr.close();
    }
}
```

