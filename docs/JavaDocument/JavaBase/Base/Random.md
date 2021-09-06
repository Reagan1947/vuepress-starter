# Random

## 1.1 Random的作用和使用步骤

作用：用于产生一个随机数

使用步骤：

1. 导包：

   ```java
   import java.util.Random;
   ```

2. 创建对象：

   ```java
   Random r = new Random();
   ```

3. 获取随机数：

   ```java
   int number = r.nextInt(10); // 获取数据的范围: [0, 10) 包括0，但是不包括10
   ```

## 1.2 参考代码

```java
/**
 * Random
 *
 * 作用：
 *  用于产生一个随机数
 *
 * 使用步骤：
 *  1.导包
 *      import java.util.Random;
 *  2.创建对象
 *      Random r = new Random();
 *  3.获取随机数
 *      int number = r.nextInt(10);
 */

import java.util.Random;

public class RandomDemo {
    public static void main(String[] args) {
        // 创建对象
        Random r = new Random();

        // 用循环获取10个随机数
        for(int i = 0; i < 10; i++) {
            // 获取随机数
            int number = r.nextInt(10);
            System.out.println("number: " + number);
        }

        // 需求：获取一个1-100之间的随机数
        int x = r.nextInt(100) + 1;
        System.out.println(x);
    }
}
```

