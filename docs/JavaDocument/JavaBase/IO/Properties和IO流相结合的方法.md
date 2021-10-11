# Properties 和 IO 流相结合的方法

## 1.1 概述

Properties和IO流相结合的方法：

| 方法名                                          | 说明                                                         |
| ----------------------------------------------- | ------------------------------------------------------------ |
| `void load(InputStream inStream)`               | 从输入字节流读取属性列表 (键和元素对)                        |
| `void load(Reader reader)`                      | 从输入字符流读取属性列表 (键和对元素)                        |
| `void store(OutputStream out, String comments)` | 将此属性列表 (键和元素对) 写入此 properties 表中，以适合用于使用 load(InputStream) 方法的 |
| `void store(Writer writer, String comments)`    | 将此属性列表 (键和元素对) 写入此 Properties 表中，以适合使用 load(Reader) 方法的格式写入输出字符流 |

## 1.2 参考代码

```java
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Properties;

/**
 * Properties和IO流相结合的方法：
 *  void load(Reader reader): 从输入字符流读取属性列表 (键和对元素)
 *  void store(Writer writer, String comments):
 *      将此属性列表 (键和元素对) 写入此 Properties 表中，以适合使用 load(Reader) 方法的格式写入输出字符流
 */
public class PropertiesDemo03 {
    public static void main(String[] args) throws IOException {
        // 把集合中得数据保存到文件中
        // myStore();

        // 把文件中得数据加载到集合
        myLoad();
    }

    private static void myLoad() throws IOException {
        Properties prop = new Properties();

        // void load(Reader reader)
        FileReader fr = new FileReader("src\\study05\\fw.txt");
        prop.load(fr);

        fr.close();

        System.out.println(prop);
    }

    public static void myStore() throws IOException {
        Properties prop = new Properties();

        prop.setProperty("student01", "Linda");
        prop.setProperty("student02", "Mika");
        prop.setProperty("student03", "John");

        // void store(Writer writer, String comments)
        FileWriter fw = new FileWriter("src\\study05\\fw.txt");
        prop.store(fw, null);
        fw.close();
    }
}
```

