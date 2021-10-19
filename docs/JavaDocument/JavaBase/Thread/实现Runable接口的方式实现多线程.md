# 实现 Runable 接口的方式实现多线程

## 1.1 概述

1. 通过实现 Runnable 接口的方式实现多线程
   - 定义一个类 MyRunnable 实现 Runnable 接口
   - 在 MyRunnable 类中重写 `run()` 方法
   - 创建 Runnable 类的对象
   - 创建 Thread 类的对象，把 MyRunable 对象作为构造方法的参数
   - 启动线程

2. 多线程的实现方案有两种
   - 继承 Thread 类
   - 实现 Runnable 接口

3. 相比继承 Thread 类，实现 Runnable 接口的好处
   - 避免了 Java 单继承的局限性
   - 适合多个相同程序的代码去处理同一个资源的情况，把线程和程序的代码、数据有效分离，较好的体现了面向对象的设计思想。

## 1.2 参考代码

==MyRunnable==

```java
public class MyRunnable implements Runnable{
    @Override
    public void run() {
        for(int i = 0; i < 100; i++) {
            System.out.println(Thread.currentThread().getName() + ":" + i);
        }
    }
}
```

==MyRunnable==

```java
/**
 * 通过实现 Runnable 接口的方式实现多线程
 *  - 定义一个类 MyRunnable 实现 Runnable 接口
 *  - 在 MyRunnable 类中重写 run() 方法
 *  - 创建 Runnable 类的对象
 *  - 创建 Thread 类的对象，把 MyRunnable 对象作为构造方法的参数
 *  - 启动线程
 */
public class MyRunnableDemo {
    public static void main(String[] args) {
        // 创建 Runnable 类的对象
        MyRunnable my = new MyRunnable();

        // 创建 Thread 类的对象，把 MyRunnable 对象作为构造方法的参数
        // Thread(Runnable target)
        // Thread t1 = new Thread(my);
        // Thread t2 = new Thread(my);

        // Thread(Runnable target, String name)
        Thread t1 = new Thread(my, "rename-thread-01");
        Thread t2 = new Thread(my, "rename-thread-02");

        // 启动线程
        t1.start();
        t2.start();
    }
}
```

