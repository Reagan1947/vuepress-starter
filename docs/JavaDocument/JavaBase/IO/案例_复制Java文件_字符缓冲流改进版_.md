# 案例：复制 Java 文件 (字符缓冲流改进版)

## 1.1 案例概述

需求：把模块目录下的 “ConversionStreamDemo.java” 复制到模块目录下的 "Copy.java"

思路：

1. 根据数据源创建字符缓冲流输入对象
2. 根据目的地创建字符缓冲流输出对象
3. 读写数据，复制文件

## 1.2 参考代码

```java
import java.io.*;

/**
 * 需求：把模块目录下的 “ConversionStreamDemo.java” 复制到模块目录下的 "Copy.java"
 *
 * 思路：
 *  1.根据数据源创建字符缓冲流输入对象
 *  2.根据目的地创建字符缓冲流输出对象
 *  3.读写数据，复制文件
 */
public class CopyJavaDemo01 {
    public static void main(String[] args) throws IOException {
        // 根据数据源创建字符缓冲流输入对象
        BufferedReader br = new BufferedReader(
                new FileReader("src\\study16\\ConversionStreamDemo.java")
        );

        // 根据目的地创建字符缓冲流输出对象
        BufferedWriter bw = new BufferedWriter(
                new FileWriter("src\\study16\\Copy.java")
        );

        // 读写数据，复制文件

        // 一次读写一个字符数据
        // int ch;
        // while((ch = br.read()) != -1) {
        //    bw.write(ch);
        // }

        // 一次读写一个字符数组数据
        char[] chs = new char[1024];
        int len;
        while((len = br.read()) != -1) {
            bw.write(chs, 0, len);
        }

        // 释放资源
        bw.close();
        br.close();
    }
}
```

