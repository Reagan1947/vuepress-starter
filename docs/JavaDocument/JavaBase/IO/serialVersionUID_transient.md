# serialVersionUID 与 transient

## 1.1 在对象序列化中遇到的三个问题

1. 用对象序列化流序列化一个对象后，假如我们修改了对象所属的类文件，读取数据会不会出问题呢？

   - 会出问题，抛出 InvalidClassException 异常

2. 如果出问题了，如何解决呢？

   - 给对象所属的类加一个 serialVersionUID

     例如：`private static final long serialVersionUID = 1388004665091468441L;`

3. 如果一个对象中的某个成员变量的值不想被序列化，又该如何实现呢？

   - 给该成员变量添加 `transient` 关键字修饰，该关键字标记的成员变量不参与序列化过程

## 1.2 参考代码

```java
import java.io.*;

/**
 * 1. 用对象序列化流序列化一个对象后，假如我们修改了对象所属的类文件，读取数据会不会出问题呢？
 *    Exception in thread "main" java.io.InvalidClassException
 *    当序列化运行时检测到类中的一下问题之一时抛出：
 *      1. 类的串行版本与流中读取的类描述类型不匹配
 *      2. 该类中含有位置的数据类型
 *      3. 该类没有可访问的无参构造函数
 *    study04.Student; local class incompatible:
 *      stream classdesc serialVersionUID = -8118049177501496497,
 *      local class serialVersionUID = 1388004665091468441
 *
 * 2. 如果出问题了，如何解决呢？
 *    给这个对象所属的类加一个值：private static final long serialVersionUID = 
 * 	 1388004665091468441L;
 *
 * 3. 如果一个对象中的某个成员变量的值不想被序列化，又该如何实现呢？
 *    transient int age;
 *
 */
public class ObjectStreamDemo {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        // write();
        read();
    }

    public static void read() throws IOException, ClassNotFoundException {
        ObjectInputStream ois = new ObjectInputStream(
                new FileInputStream("src\\study04\\oos.txt")
        );
        Object obj = ois.readObject();
        Student s = (Student) obj;
        System.out.println(s.getName() + ", " + s.getAge());
        ois.close();
    }

    public static void write() throws IOException {
        ObjectOutputStream oos = new ObjectOutputStream(
                new FileOutputStream("src\\study04\\oos.txt")
        );
        Student s = new Student("Linda", 30);
        oos.writeObject(s);
        oos.close();
    }
}
```

