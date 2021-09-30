# 案例：复制 Java 文件 (使用字符缓冲流特有功能实现)

## 1.1 概述

需求：把模块目录下的 "ConversionStreamDemo.java" 复制到模块目录下的 "Copy.java"

思路：

1. 根据数据源创建字符缓冲输入流对象
2. 根据目的地创建字符缓冲输出流对象
3. 读写数据，复制文件
   - 使用字符缓冲流特有功能实现
4. 释放资源

## 1.2 参考代码

```java
import java.io.*;

/**
 * 需求：把模块目录下的 "ConversionStreamDemo.java" 复制到模块目录下的 "Copy.java"
 *
 * 思路：
 *  1.根据数据源创建字符缓冲输入流对象
 *  2.根据目的地创建字符缓冲输出流对象
 *  3.读写数据，复制文件
 *      - 使用字符缓冲流特有功能实现
 *  4.释放资源
 */
public class CopyJavaDemo02 {
    public static void main(String[] args) throws IOException {
        // 根据数据源创建字符缓冲输入流对象
        BufferedReader br = new BufferedReader(
                new FileReader("src\\study16\\ConversionStreamDemo.java")
        );

        // 根据目的地创建字符缓冲输出流对象
        BufferedWriter bw = new BufferedWriter(
                new FileWriter("src\\study16\\Copy.java")
        );

        String line;
        while((line = br.readLine()) != null) {
            bw.write(line);
            bw.newLine();
            bw.flush();
        }

        // 释放资源
        bw.close();
        br.close();
    }
}
```

