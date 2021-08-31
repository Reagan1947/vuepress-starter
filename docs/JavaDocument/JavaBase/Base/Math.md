#### 2.58 Math

##### 2.58.1 Math概述

Math包含执行基本数字运算的方法

没有构造方法，如何使用类中的成员呢？
看类的成员是否都是静态的，如果是，通过类名就可以直接调用

##### 2.58.2 Math类的常用方法

| 方法名                                       | 说明                                           |
| -------------------------------------------- | ---------------------------------------------- |
| public static int abs(int a)                 | 返回参数的绝对值                               |
| public static double ceil(double a)          | 返回大于或等于参数的最小double值，等于一个整数 |
| public static double flloor(double a)        | 返回小于或等于参数的最大double值，等于一个整数 |
| public static int round(float a)             | 按照四舍五入返回最接近参数的int                |
| public static int max(int a, int b)          | 返回两个int值中的较大值                        |
| public static int min(int a, int b)          | 返回两个int值中的较小值                        |
| public static double pow(double a, double b) | 返回a的b次幂的值                               |
| public static double random()                | 返回值为double的正值, [0.0,  1.0)              |

