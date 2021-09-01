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

