# IO 流概述和分类

## 1.1 概述

1. IO 流的分类：

   - 按照数据的流向：
     - 输入流：读数据
     - 输出流：写数据

   - 按照数据类型来分：
     - 字节流：字节输入流；字节输出流
     - 字符流：字符输入流；字符输出流

   注：一般来说，我们说 IO 流的分类是按照「数据类型」来分的

2. 那么这两种流都在什么情况下使用呢？

   如果数据通过 Windows 自带的记事本软件打开，我们还可以读懂里面的内容，就使用字符流，否则使用字节流。如果你不知道应该使用哪种类型的流，就是用字节流。

