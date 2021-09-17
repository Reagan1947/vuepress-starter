# File 类创建功能

## 1.1 概述

| 方法名                           | 说明                                                         |
| -------------------------------- | ------------------------------------------------------------ |
| `public boolean createNewFile()` | 当具有该名称的文件不存在时，创建一个由该抽象路径名命名的新空文件 |
| `public boolean mkdir()`         | 创建由此抽象路径名命名的目录                                 |
| `public boolean mkdirs()`        | 创建由此抽象路径名命名的目录，包括任何必须但不存在的父目录   |

## 1.2 参考代码

```java
import java.io.File;
import java.io.IOException;

/**
 * File类创建功能：
 *  public boolean createNewFile(): 当具有该名称的文件不存在时，创建一个由该抽象路径名命名的新空文件
 *      - 如果文件不存在，就创建文件，并返回true
 *      - 如果文件存在，就不创建文件，并返回false
 *  public boolean mkdir(): 创建由此抽象路径名命名的目录
 *      - 如果目录不存在，就创建目录，并返回true
 *      - 如果目录存在，就不创建目录，并返回false
 *  public boolean mkdirs(): 创建由此抽象路径名命名的目录，包括任何必须但不存在的父目录
 *      - 如果目录不存在，就创建目录，并返回true
 *      - 如果目录存在，就不创建目录，并返回false
 */
public class FileDemo02 {
    public static void main(String[] args) throws IOException {
        // 需求1：在E:\javaFileLearning目录下创建一个文件java.txt
        File f1 = new File("E:\\javaFileLearning\\java.txt");
        System.out.println(f1.createNewFile());
        System.out.println("--------");

        File f2 = new File("E:\\javaFileLearning\\JavaSE");
        System.out.println(f2.mkdir());

        File f3 = new File("E:\\javaFileLearning\\JavaWeb\\HTML");
        // System.out.println(f3.mkdir());
        System.out.println(f3.mkdirs());
        // 创建多个不存在的目录使用mkdirs()方法

        // 需求4：我要在E:\\javaFileLearning目录下创建一个文件javase.txt
        File f4 = new File("E:\\javaFileLearning\\javase.txt");
        // System.out.println(f4.mkdir());
        System.out.println(f4.createNewFile());
        // 当同目录下有名称相同的文件或目录时会产生冲突
    }
}
```

