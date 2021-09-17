# File 类删除功能

## 1.1 概述

| 方法名                    | 说明                               |
| ------------------------- | ---------------------------------- |
| `public boolean delete()` | 删除由此抽象路径名表示的文件或目录 |

1. 绝对路径和相对路径的区别：
   - 绝对路径：「完整的路径名」，不需要任何其他信息就可以定位它锁表示的文件。例如：`E:\\javaFileLearning\\java.txt`
   - 相对路径：必须使用取自其它路径名的信息进行解释，例如：`myFile\\java.txt`

1. 删除目录时的注意事项
   - 如果一个「目录中有内容 (目录或文件)」，其不能被 `delete()` 方法直接删除。应该先删除目录中的内容 (目录或文件)，最后才能删除该目录。

## 1.2 参考代码

```java
import java.io.File;
import java.io.IOException;

/**
 * File类删除功能
 *  public boolean delete(): 删除由此抽象路径名表示的文件或目录
 */
public class FileDemo03 {
    public static void main(String[] args) throws IOException {
        // File f1 = new File("E:\\javaFileLearning\\java.txt");
        // 需求1：在当前模块下创建java.txt
        File f1 = new File("src\\study05\\java.txt");
        System.out.println(f1.createNewFile());

        // 需求2：删除当前模块目录下的java.txt文件
        System.out.println(f1.delete());
        System.out.println("--------");

        // 需求3：在当前模块下创建javaFileLearning目录
        File f2 = new File("src\\study05\\javaFileLearning");
        System.out.println(f2.mkdir());

        // 需求4：删除当前模块目录下的javaFileLearning目录
        System.out.println(f2.delete());

        // 需求5：在当前目录下创建一个javaFileLearning，然后在该目录下创建一个java.txt
        File f3 = new File("src\\study05\\javaFileLearning");
        System.out.println(f3.mkdir());
        File f4 = new File("src\\study05\\javaFileLearning\\java.txt");
        System.out.println(f4.createNewFile());

        // 需求6：删除当前模块下的目录javaFileLearning
        System.out.println(f4.delete());
        System.out.println(f3.delete());
    }
}
```

\* 注释：当前代码运行于包 `study05` 下