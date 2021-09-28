# 案例：复制 Java 文件 (改进版)

## 1.1 案例概述

需求：把模块目录下的 "ConversionStreamDemo.java" 复制到模块目录下的 “Copy.java”

分析：

1. 转换流的名字比较长，而我们常见的操作都是按照本地默认编码实现的，所以，为了简化书写，转换流提供了对应的子类
2. FileReader: 用于读取字符文件的便捷类
   - `FileReader(String fileName)`
3.  FileWriter: 用于写入字符文件的便捷类
   - `FileWriter(String fileName)`
4. 数据源和目的地分析
   - 数据源：`myCharStream\\\ConversionStreamDemi.java` → 读数据 → `Reader` → `InputStreamReader` → `FileReader`
   - 目的地：`myCharStream\\\Copy.java` → 写数据 → `Writer` → `OutputStreamWriter` → `FileWriter`

思路：

1. 根据数据源创建字符输入流对象
2. 根据目的地创建字符输出流对象
3. 读写数据，复制文件
4. 释放资源

## 1.2 参考代码

```java
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

/**
 * 需求：把模块目录下的 "ConversionStreamDemo.java" 复制到模块目录下的 “Copy.java”
 *
 * 数据源：myCharStream\\ConversionStreamDemi.java → 读数据 → Reader → InputStreamReader → FileReader
 * 目的地：myCharStream\\Copy.java → 写数据 → Writer → OutputStreamWriter → FileWriter
 *
 * 思路：
 *  1. 根据数据源创建字符输入流对象
 *  2. 根据目的地创建字符输出流对象
 *  3. 读写数据，复制文件
 *  4. 释放资源
 */
public class CopyJavaDemo02 {
    public static void main(String[] args) throws IOException {
        // 根据数据源创建字符输入流对象
        FileReader fr = new FileReader("src\\study15\\ConversionStreamDemo.java");

        // 根据目的地创建字符输出流对象
        FileWriter fw = new FileWriter("src\\study15\\Copy.java");

        // 读写数据，复制文件
        // int ch;
        // while((ch = fr.read()) != -1) {
        //     fw.write(ch);
        // }

        char[] chs = new char[1024];
        int len;
        while((len = fr.read()) != -1) {
            fw.write(chs);
        }

        // 释放资源
        fw.close();
        fr.close();
    }
}
```

