---
title: Linux
---

#### 查看 linux 系统版本信息命令

```shell
cat /etc/redhat-release
```

#### centos7 环境下开启指定端口

- 查看已经开放的端口：`firewall-cmd --list-ports`

- 查看端口号是否开启，运行命令：`firewall-cmd --query-port=6379/tcp`

- 开启端口 `firewall-cmd --zone=public --add-port=80/tcp --permanent`

  ```shell
  命令含义：

  –zone #作用域

  –add-port=80/tcp #添加端口，格式为：端口/通讯协议

  –permanent #永久生效，没有此参数重启后失效
  ```

- 重启防火墙

  ```shell
  firewall-cmd --reload #重启firewall
  systemctl stop firewalld.service #停止firewall 防火墙
  systemctl disable firewalld.service #禁止firewall 防火墙开机启动


  firewall-cmd --state #查看默认防火墙状态（关闭后显示notrunning，开启后显示running）
  ```

#### source 命令

> 通常用于重新执行刚修改的初始化文件，使之立即生效，而不必注销并重新登录。例如，当我们修改了/etc/profile 文件，并想让它立刻生效，而不用重新登录，就可以使用 source 命令，如“source /etc/profile”。

```
source /etc/profile

source filename #filename必须是可执行的脚本文件
或者
. filename  #注意“.”号后面还有一个空格

```

安装了多少个软件包 **rpm -qa | wc -l**

安装了那些软件包 **rpm -qa | sort**

查看磁盘剩余空间信息 **df -hl**

```js
df    -h                     查看整台服务器的硬盘使用情况

cd    /                       进入根目录

du   -sh    *              查看每个文件夹的大小
```

`rpm -ql nginx`

rpm 是 linux 的 rpm 包管理工具，-q 代表询问模式，-l 代表返回列表，这样我们就可以找到 nginx 的所有安装位置了。

可以通过查看`Cat /etc/xxx-release` XX 为发行版名称。如 centos-release

#### apache 在 linux 系统上的启动与停止

`service httpd status`查看 httpd 的运行状态

使用`service httpd stop`可以停止 httpd

使用`service httpd start`可以启动 httpd

也可以使用通用的命令

启动`systemctl start httpd.service`

停止`systemctl stop httpd.service`

重启 `systemctl restart httpd.service`

#### linux 用户管理

##### 添加默认用户

`useradd test`

默认会建立用户家目录， 且权限为 700 但是建立好的账号需要设置密码没有密码是不可以登录的

##### 为 test 用户添加密码 如果 passwd 后面不跟参数表现修改当前用户的密码

`passwd test`

passwd 其他的参数

```
passwd [-k] [-l] [-u [-f]] [-d] [-S] [username]

必要参数：

-d 删除密码
-f 强制执行
-k 更新只能发送在过期之后
-l 停止账号使用
-S 显示密码信息
-u 启用已被停止的账户
-x 设置密码的有效期
-g 修改群组密码
-i 过期后停止用户账号
选择参数：

--help 显示帮助信息
--version 显示版本信息
```

##### passwd -l test 表示停止 test 账户使用

#### 删除用户帐号

```
userdel [-r][用户帐号]
```

**参数说明**：

- -r 　删除用户登入目录以及目录中所有文件。

```
userdel -r test  删除test用户
```

### linux 上安装软件的几种方式

#### 源码安装

> 源码安装需要安装编译工具： yum -y install gcc gcc-c++ make

#### 以 Redhat 下安装 apache 为例

- 先网站下载源代码包 httpd-2.2.15.tar.gz
- tar -xvf httpd-2.2.15.tar.gz -C /usr/src 将其解压到 /usr/src/ 目录下
- 到其解压目录 /usr/src/httpd-2.2.15/ 下， ./configure 运行 configure 配置文件,设置安装目录，安装模块等，不设置的话，软件默认安装在 /usr/local/apache2/目录下。如果 ./configure --prefix=/usr/local/https/ ,则是将其安装在/usr/local/https/目录下。此时还并未安装，只是配置安装路径
- make 编译，生成可执行的二进制文件 Makefile
- make install 安装。此时，软件安装在 /usr/local/https/ 目录下

#### 安装完成之后对安装包的清理

- 进入其解压目录 /usr/src/httpd-2.2.15/下 ， make uninstall 或者 make clean 用于清除上一次的编译
- 然后返回到上一级目录，把 httpd-2.2.15 删除
- 如果要卸载软件的话，把 /usr/local/apache2 这个软件删除就可以

#### rpm 包安装：

> RPM (RedHat Package Manager) ：由红帽公司提出，建议统一的数据库文件，详细记录软件包的安装、卸载等变化信息，能够自动分析软件包依赖关系

> RPM 包的命名格式： firefox-17.0.10-1.el6.centos.x86_64.rpm

​ 软件名称 版本号发行次数 硬件平台扩展名

#### rpm 指令管理

##### 针对已安装软件

- rpm -qa：查询所有已安装软件的 rpm 包信息，列出包的版本

- rpm -q httpd： 查看 httpd 是否安装
- rpm -qi httpd：列出 httpd 软件的详细信息
- rpm -qc httpd：查看 httpd 的配置文件目录
- rpm -ql httpd：查看 httpd 所包含的文件
- whereis httpd：查看 httpd 的安装路径和可执行文件路径

#### 根据指令搜索包的名称

- which vim：搜索指令在系统中的路径

- rpm -qf 指令的绝对路径 ： 查看该命令是由哪个 rpm 包所提供 rqm -qf /usr/bin/vim

#### 针对未安装软件(需要把光盘文件挂载，然后进入其 Package 目录下

- rpm -qpl 包.rpm 选项 p 表示 package，后面需要写包的完整路径信息，qpl 表示列出这个包在安装之后生成哪些文件和目录
- rpm -qpi 包.rpm 查询未安装包的详细信息

#### 安装与卸载

- rpm -ivh 包.rpm i 表示安装，v 表示显示安装过程，h 表示以‘#’作为进度，显示安装进度

- rpm -e 包的名称 移除指定的 rpm 包

#### yum 源安装：

> YUM(Yellow dog Updater Modified): 基于 RPM 包构建的软件更新机制，可以自动解决 rpm 包之间的依赖关系，所有软件包由集中的 yum 软件仓库提供

相关文章：[Redhat7 配置 yum 源(本地源和网络源)](https://blog.csdn.net/qq_36119192/article/details/82222175)

##### 一些常见的 yum 命令：

- yum clean all 清空缓存信息
- yum list 列出所有包的信息
- yum list httpd 查看 httpd 是否安装
- yum info httpd 显示 httpd 包的详细具体信息
- yum install httpd -y 安装 httpd 包
- yum remove httpd -y 卸载 httpd 包
- yum search 关键词 根据关键词，在已发现的 repo 源中搜索包含关键词的 rpm 包
- yum provides 命令 根据命令，在已发现的 repo 源中搜索安装指令的 rpm 包

- yum history list/info/undo/redo number history 可以列出，查看，重装，反安装对应的包，但是是以 yum 指令的操作顺序为依据的，所以需要加指定的数字执行
