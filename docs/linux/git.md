---
title: linux 安装git
---
## linux上安装GIT

- 下载编译工具
  `yum -y groupinstall "Development Tools"`

- 下载依赖包
  `yum -y install zlib-devel perl-ExtUtils-MakeMaker asciidoc xmlto openssl-devel`

- 下载 Git 最新版本的源代码
  `wget https://www.kernel.org/pub/software/scm/git/git-2.21.0.tar.gz`
  登录<https://github.com/git/git/releases>查看git的最新版。不要下载带有-rc的，因为它代表了一个候选发布版本。

- 解压 到指定目录
  `tar -zxvf git-2.21.0.tar.gz -C /usr/local/`

- 进入目录配置

  - cd git-2.21.0
  - ./configure --prefix=/usr/local/git

- 安装
  `make && make install`

- .配置全局路径
  `export PATH="/usr/local/git/bin:$PATH"` 这种方式设置的环境变量是临时的环境变量

  > 永久设置环境变量：需要在`/etc/profile` 这个文件中手动添加
 `export PATH="/usr/local/git/bin:$PATH"` 修改变量之后，需要马上生效变量设置`source /etc/profile`
- 刷新配置文件
  `source /etc/profile`

- 查看git版本
  `git --version`

- 采坑记录

  > 安装完以后发现 通过git clone命令我们会遇到这样的错误:Unable to find remote helper for 'https'
  >
  > 解决办法就是需要安装libcurl-devel
  >
  > `yum install -y libcurl-devel`
  >
  > 接着再次编译git
  >
  > ```
  > cd git-2.21.0
  > ./configure --prefix=/usr/local/git
  > make && make install
  > ```
-  使用 `export PATH="/usr/local/git/bin:$PATH"` 这种方式配置的环境变量是局部环境变量 当关闭shell的时候 环境变量就失效了
- 所以需要在`/etc/profile` 这个文件中手动添加
 `export PATH="/usr/local/git/bin:$PATH"`
 - 修改`/etc/profile`文件，通过vi或vim增加变量。修改变量之后，需要马上生效变量设置`source /etc/profile`
