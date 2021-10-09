# 案例：复制 Java 文件 (打印流改进版)

## 1.1 概述

需求：把模块目录下的 `PrintStreamDemo.java` 复制到模块目录下的 `Copy.java`

思路：

1. 根据数据源创建字符输入流对象
2. 根据目的地创建字符输出流对象
3. 读写数据，复制文件
4. 释放资源

## 1.2 参考代码

```java
import java.io.*;

/**
 * 需求：把模块目录下的 PrintStreamDemo.java 复制到模块目录下的 Copy.java
 *
 * 思路：
 *  1. 根据数据源创建字符输入流对象
 *  2. 根据目的地创建字符输出流对象
 *  3. 读写数据，复制文件
 *  4. 释放资源
 */
public class CopyJavaDemo {
    public static void main(String[] args) throws IOException {
        /*
        // 根据数据源创建字符输入流对象
        BufferedReader br = new BufferedReader(
                new FileReader("src\\study03\\PrintStreamDemo.java")
        );

        // 创建字符输出流对象
        BufferedWriter bw = new BufferedWriter(
                new FileWriter("src\\study03\\Copy.java")
        );

        // 读写数据，复制文件
        String line;
        while((line = br.readLine()) != null) {
            bw.write(line);
            bw.newLine();
            bw.flush();
        }

        // 释放资源
        bw.close();
        br.close();
        */

        // 根据数据源创建字符输入流对象
        BufferedReader br = new BufferedReader(
                new FileReader("src\\study03\\PrintStreamDemo.java")
        );

        // 根据目的地创建字符输出流对象
        PrintWriter pw = new PrintWriter(
                new FileWriter("src\\study03\\Copy.java"),
                true
        );

        // 读写数据，复制文件
        String line;
        while((line = br.readLine()) != null) {
            pw.println(line);
        }

        // 释放资源
        pw.close();
        br.close();
    }
}
```

`PrintStreamDemo.java` 文件参见字节打印流章节内容