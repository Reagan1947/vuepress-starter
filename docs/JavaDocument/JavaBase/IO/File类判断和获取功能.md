# File 类判断和获取功能

## 1.1 概述

| 方法名                            | 说明                                                     |
| --------------------------------- | -------------------------------------------------------- |
| `public boolean isDirectory()`    | 测试此抽象路径名表示的 File 是否为目录                   |
| `public boolean isFile`           | 测试此抽象路径名表示的 File 是否为文件                   |
| `public boolean exists`           | 测试此抽象路径名表示的 File 是否存在                     |
| `public String getAbsolutePath()` | 返回此抽象路径名的绝对路径名字符串                       |
| `public String getPath()`         | 将此抽象路径名转换为路径名字符串                         |
| `public String getName()`         | 返回由此抽象路径名表示的文件或目录的名称                 |
| `public String[] list()`          | 返回此抽象路径名表示的目录中的文件和目录的名称字符串数组 |
| `public File[] listFiles()`       | 返回由此抽象路径名表示的目录中的文件和目录的File对象数组 |

## 1.2 参考代码

```java
import java.io.File;
import java.io.IOException;

/**
 * File类的判断和获取功能
 *  public boolean isDirectory()：测试此抽象路径名表示的 File 是否为目录
 *  public boolean isFile：测试此抽象路径名表示的 File 是否为文件
 *  public boolean exists：测试此抽象路径名表示的 File 是否存在
 *  public String getAbsolutePath()：返回此抽象路径名的绝对路径名字符串
 *  public String getPath()：将此抽象路径名转换为路径名字符串
 *  public String getName()：返回由此抽象路径名表示的文件或目录的名称
 *  public String[] list()：返回此抽象路径名表示的目录中的文件和目录的名称字符串数组
 *  public File[] listFiles()：返回由此抽象路径名表示的目录中的文件和目录的File对象数组
 */
public class FileDemo04 {
    public static void main(String[] args) throws IOException {
        // 创建一个File对象
        File f = new File("src\\study05\\java.txt");
        System.out.println(f.createNewFile());

        // public boolean isDirectory()：测试此抽象路径名表示的 File 是否为目录
        // public boolean isFile：测试此抽象路径名表示的 File 是否为文件
        // public boolean exists：测试此抽象路径名表示的 File 是否存在

        System.out.println(f.isDirectory());
        System.out.println(f.isFile());
        System.out.println(f.exists());

        // public String getAbsolutePath()：返回此抽象路径名的绝对路径名字符串
        // public String getPath()：将此抽象路径名转换为路径名字符串
        // public String getName()：返回由此抽象路径名表示的文件或目录的名称
        System.out.println(f.getAbsoluteFile());
        System.out.println(f.getPath());
        System.out.println(f.getName());

        // public String[] list()：返回此抽象路径名表示的目录中的文件和目录的名称字符串数组
        // public File[] listFiles()：返回由此抽象路径名表示的目录中的文件和目录的File对象数组
        File f2 = new File("src\\study05");
        String[] fileStringList = f2.list();
        for(String s : fileStringList) {
            System.out.println(s);
        }

        File[] files = f2.listFiles();
        for(File file : files) {
            // System.out.println(file);
            // System.out.println(file.getName());
            if(file.isFile()) {
                System.out.println(file.getName());
            }
        }
    }
}
```

