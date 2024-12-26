# Git 的基本使用

Git 是一款分布式的代码版本控制工具，Linux 之父 Linus 嫌弃当时主流的中心式的版本控制工具太难用还要花钱，就自己开发出了 Git 用来维护 Linux 的版本。

Git 的设计非常优雅，但初学者通常因为很难理解其内部逻辑因此会觉得非常难用。对 Git 不熟悉的初学者很容易出现因为误用命令将代码给控制版本控制没了的状况（）。但是 Git 仍然是一款非常值得学习的软件，相信我，当你掌握了它，你一定会感叹————“Git真的太强大了！”

## Git的安装

对于不同的平台，Git 的安装方法也不同。

### Windows

进入 [官网](https://git-scm.com/downloads/win) 下载 Git，得到exe安装包之后双击，按照程序的要求继续安装即可。详情可以参考 https://blog.csdn.net/mukes/article/details/115693833

### MacOS

通过 Homebrew 安装：

~~~bash
brew install git
~~~

如果想要安装 git-gui 和 gitk（git 的提交 GUI 和交互式历史记录浏览器），可以使用 Homebrew 进行安装：

~~~bash
brew install git-gui
~~~

### Linux

Linux均可通过包管理器直接安装Git。以Ubuntu为例：

~~~bash
apt-get install git
~~~

## Git 配置

对于初学者来讲，不需要对 Git 进行过多的配置，只需要配置好用户名和邮箱，方便以后pull和push代码即可。

在终端上输入：

~~~bash
git config --global user.name "your name"
git config --global user.email urmail@ur.mail
~~~

---

到此为止你就已经安装并配置好 Git 了，接下来就可以开始简单的学习一下 Git 的基本操作了。

参考教程：[尚硅谷 Git 教程](https://www.bilibili.com/video/BV1vy4y1s7k6)