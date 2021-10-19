# 继承 Thread 类的方式实现多线程

## 1.1 多线程的实现方式

方式 1 ：继承 Thread 类

- 定义一个类 `MyThread` 继承 `Thread` 类
- 在 `MyThread` 类中重写 `run()` 方法
- 创建 `MyThread` 类的对象
- 启动线程

两个小问题：

1. 为什么要重写 `run()` 方法？

   因为 `run()` 是用来封装被线程执行的代码

2.  `run()` 方法和 `start()` 方法的区别？

    `run()` : 封装线程执行的代码，直接调用，相当于普通方法的调用

   `start()` : 启动线程，然后由 JVM 调用此线程的 `run()` 方法

## 1.2 参考代码

==MyThread==

```java
public class MyThread extends Thread{
    private String tag;

    public MyThread(String tag) {
        this.tag = tag;
    }
    @Override
    public void run() {
        for(int i = 0; i < 100; i++) {
            System.out.println(this.tag + ": " + i);
        }
    }
}
```

==MyThreadDemo==

```java
/**
 * 方式 1 ：继承 Thread 类
 * - 定义一个类 MyThread 继承 Thread 类
 * - 在 MyThread 类中重写 run() 方法
 * - 创建 MyThread 类的对象
 * - 启动线程
 */
public class MyThreadDemo {
    public static void main(String[] args) {
        MyThread my1 = new MyThread("Thread01");
        MyThread my2 = new MyThread("Thread02");

        // my1.run();
        // my2.run();

        // void start() 导致该线程开始执行；Java 虚拟机调用此线程的 run 方法
        my1.start();
        my2.start();
    }
}
```

