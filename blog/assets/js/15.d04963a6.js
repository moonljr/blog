(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{193:function(t,a,e){"use strict";e.r(a);var r=e(0),s=Object(r.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"linux-常用的一些命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-常用的一些命令","aria-hidden":"true"}},[t._v("#")]),t._v(" linux 常用的一些命令")]),t._v(" "),e("h2",{attrs:{id:"linux上安装软件的几种方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux上安装软件的几种方式","aria-hidden":"true"}},[t._v("#")]),t._v(" linux上安装软件的几种方式")]),t._v(" "),e("h3",{attrs:{id:"源码安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#源码安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 源码安装")]),t._v(" "),e("blockquote",[e("p",[t._v("源码安装需要安装编译工具： yum -y install gcc gcc-c++ make")])]),t._v(" "),e("h4",{attrs:{id:"以redhat下安装apache为例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#以redhat下安装apache为例","aria-hidden":"true"}},[t._v("#")]),t._v(" 以Redhat下安装apache为例")]),t._v(" "),e("ul",[e("li",[t._v("先网站下载源代码包 httpd-2.2.15.tar.gz")]),t._v(" "),e("li",[t._v("tar -xvf  httpd-2.2.15.tar.gz  -C   /usr/src   将其解压到 /usr/src/ 目录下")]),t._v(" "),e("li",[t._v("到其解压目录 /usr/src/httpd-2.2.15/ 下， ./configure  运行configure配置文件,设置安装目录，安装模块等，不设置的话，软件默认安装在 /usr/local/apache2/目录下。如果  ./configure  --prefix=/usr/local/https/  ,则是将其安装在/usr/local/https/目录下。此时还并未安装，只是配置安装路径")]),t._v(" "),e("li",[t._v("make 编译，生成可执行的二进制文件Makefile")]),t._v(" "),e("li",[t._v("make  install 安装。此时，软件安装在 /usr/local/https/ 目录下")])]),t._v(" "),e("h4",{attrs:{id:"安装完成之后对安装包的清理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装完成之后对安装包的清理","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装完成之后对安装包的清理")]),t._v(" "),e("ul",[e("li",[t._v("进入其解压目录  /usr/src/httpd-2.2.15/下  ，  make  uninstall   或者   make   clean 用于清除上一次的编译")]),t._v(" "),e("li",[t._v("然后返回到上一级目录，把 httpd-2.2.15 删除")]),t._v(" "),e("li",[t._v("如果要卸载软件的话，把 /usr/local/apache2 这个软件删除就可以")])]),t._v(" "),e("h3",{attrs:{id:"rpm包安装："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rpm包安装：","aria-hidden":"true"}},[t._v("#")]),t._v(" rpm包安装：")]),t._v(" "),e("blockquote",[e("p",[t._v("RPM (RedHat Package Manager) ：由红帽公司提出，建议统一的数据库文件，详细记录软件包的安装、卸载等变化信息，能够自动分析软件包依赖关系")])]),t._v(" "),e("blockquote",[e("p",[t._v("RPM包的命名格式： firefox-17.0.10-1.el6.centos.x86_64.rpm")])]),t._v(" "),e("p",[t._v("​                                          软件名称 版本号发行次数 硬件平台扩展名")]),t._v(" "),e("h4",{attrs:{id:"rpm指令管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rpm指令管理","aria-hidden":"true"}},[t._v("#")]),t._v(" rpm指令管理")]),t._v(" "),e("h5",{attrs:{id:"针对已安装软件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#针对已安装软件","aria-hidden":"true"}},[t._v("#")]),t._v(" 针对已安装软件")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("rpm -qa：查询所有已安装软件的rpm包信息，列出包的版本")])]),t._v(" "),e("li",[e("p",[t._v("rpm  -q httpd： 查看 httpd 是否安装")])]),t._v(" "),e("li",[e("p",[t._v("rpm -qi  httpd：列出 httpd 软件的详细信息")])]),t._v(" "),e("li",[e("p",[t._v("rpm -qc httpd：查看 httpd 的配置文件目录")])]),t._v(" "),e("li",[e("p",[t._v("rpm  -ql  httpd：查看 httpd 所包含的文件")])]),t._v(" "),e("li",[e("p",[t._v("whereis  httpd：查看httpd的安装路径和可执行文件路径")])])]),t._v(" "),e("h4",{attrs:{id:"根据指令搜索包的名称"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#根据指令搜索包的名称","aria-hidden":"true"}},[t._v("#")]),t._v(" 根据指令搜索包的名称")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("which vim：搜索指令在系统中的路径")])]),t._v(" "),e("li",[e("p",[t._v("rpm -qf   指令的绝对路径 ： 查看该命令是由哪个rpm包所提供  rqm -qf  /usr/bin/vim")])])]),t._v(" "),e("h4",{attrs:{id:"针对未安装软件-需要把光盘文件挂载，然后进入其package目录下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#针对未安装软件-需要把光盘文件挂载，然后进入其package目录下","aria-hidden":"true"}},[t._v("#")]),t._v(" 针对未安装软件(需要把光盘文件挂载，然后进入其Package目录下")]),t._v(" "),e("ul",[e("li",[t._v("rpm -qpl 包.rpm  选项p表示package，后面需要写包的完整路径信息，qpl表示列出这个包在安装之后生成哪些文件和目录")]),t._v(" "),e("li",[t._v("rpm -qpi 包.rpm  查询未安装包的详细信息")])]),t._v(" "),e("h4",{attrs:{id:"安装与卸载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装与卸载","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装与卸载")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("rpm  -ivh  包.rpm        i表示安装，v表示显示安装过程，h表示以‘#’作为进度，显示安装进度")])]),t._v(" "),e("li",[e("p",[t._v("rpm  -e  包的名称       移除指定的rpm包")])])]),t._v(" "),e("h3",{attrs:{id:"yum源安装："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yum源安装：","aria-hidden":"true"}},[t._v("#")]),t._v(" yum源安装：")]),t._v(" "),e("blockquote",[e("p",[t._v("YUM(Yellow dog  Updater Modified): 基于RPM包构建的软件更新机制，可以自动解决rpm包之间的依赖关系，所有软件包由集中的yum软件仓库提供")])]),t._v(" "),e("p",[t._v("相关文章："),e("a",{attrs:{href:"https://blog.csdn.net/qq_36119192/article/details/82222175",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redhat7配置yum源(本地源和网络源)"),e("OutboundLink")],1)]),t._v(" "),e("h4",{attrs:{id:"一些常见的yum命令："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一些常见的yum命令：","aria-hidden":"true"}},[t._v("#")]),t._v(" 一些常见的yum命令：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("yum  clean all                           清空缓存信息")])]),t._v(" "),e("li",[e("p",[t._v("yum  list                                   列出所有包的信息")])]),t._v(" "),e("li",[e("p",[t._v("yum  list  httpd                         查看 httpd 是否安装")])]),t._v(" "),e("li",[e("p",[t._v("yum  info httpd                        显示 httpd 包的详细具体信息")])]),t._v(" "),e("li",[e("p",[t._v("yum install httpd   -y               安装 httpd 包")])]),t._v(" "),e("li",[e("p",[t._v("yum remove httpd  -y            卸载 httpd 包")])]),t._v(" "),e("li",[e("p",[t._v("yum search 关键词                 根据关键词，在已发现的repo源中搜索包含关键词的rpm包")])]),t._v(" "),e("li",[e("p",[t._v("yum provides 命令                   根据命令，在已发现的repo源中搜索安装指令的rpm包")])]),t._v(" "),e("li",[e("p",[t._v("yum history  list/info/undo/redo number             history可以列出，查看，重装，反安装对应的包，但是是以yum指令的操作顺序为依据的，所以需要加指定的数字执行")])])]),t._v(" "),e("h2",{attrs:{id:"安装git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装git","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装GIT")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("下载编译工具\n"),e("code",[t._v('yum -y groupinstall "Development Tools"')])])]),t._v(" "),e("li",[e("p",[t._v("下载依赖包\n"),e("code",[t._v("yum -y install zlib-devel perl-ExtUtils-MakeMaker asciidoc xmlto openssl-devel")])])]),t._v(" "),e("li",[e("p",[t._v("下载 Git 最新版本的源代码\n"),e("code",[t._v("wget https://www.kernel.org/pub/software/scm/git/git-2.21.0.tar.gz")]),t._v("\n登录"),e("a",{attrs:{href:"https://github.com/git/git/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/git/git/releases"),e("OutboundLink")],1),t._v("查看git的最新版。不要下载带有-rc的，因为它代表了一个候选发布版本。")])]),t._v(" "),e("li",[e("p",[t._v("解压 到指定目录\n"),e("code",[t._v("tar -zxvf git-2.21.0.tar.gz -C /usr/local/")])])]),t._v(" "),e("li",[e("p",[t._v("进入目录配置")]),t._v(" "),e("ul",[e("li",[t._v("cd git-2.21.0")]),t._v(" "),e("li",[t._v("./configure --prefix=/usr/local/git")])])]),t._v(" "),e("li",[e("p",[t._v("安装\n"),e("code",[t._v("make && make install")])])]),t._v(" "),e("li",[e("p",[t._v(".配置全局路径\n"),e("code",[t._v('export PATH="/usr/local/git/bin:$PATH"')])])]),t._v(" "),e("li",[e("p",[t._v("刷新配置文件\n"),e("code",[t._v("source /etc/profile")])])]),t._v(" "),e("li",[e("p",[t._v("查看git版本\n"),e("code",[t._v("git --version")])])]),t._v(" "),e("li",[e("p",[t._v("采坑记录")]),t._v(" "),e("blockquote",[e("p",[t._v("安装完以后发现 通过git clone命令我们会遇到这样的错误:Unable to find remote helper for 'https'")]),t._v(" "),e("p",[t._v("解决办法就是需要安装libcurl-devel")]),t._v(" "),e("p",[e("code",[t._v("yum install -y libcurl-devel")])]),t._v(" "),e("p",[t._v("接着再次编译git")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("cd git-2.21.0\n./configure --prefix=/usr/local/git\nmake && make install\n")])])])]),t._v(" "),e("h3",{attrs:{id:"查看linux系统版本信息命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看linux系统版本信息命令","aria-hidden":"true"}},[t._v("#")]),t._v(" 查看linux系统版本信息命令")])])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("cat /etc/redhat-release\n")])])]),e("h3",{attrs:{id:"centos7环境下开启指定端口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos7环境下开启指定端口","aria-hidden":"true"}},[t._v("#")]),t._v(" centos7环境下开启指定端口")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("查看已经开放的端口："),e("code",[t._v("firewall-cmd --list-ports")])])]),t._v(" "),e("li",[e("p",[t._v("查看端口号是否开启，运行命令："),e("code",[t._v("firewall-cmd --query-port=6379/tcp")])])]),t._v(" "),e("li",[e("p",[t._v("开启端口 "),e("code",[t._v("firewall-cmd --zone=public --add-port=80/tcp --permanent")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("命令含义：\n\n–zone #作用域\n\n–add-port=80/tcp #添加端口，格式为：端口/通讯协议\n\n–permanent #永久生效，没有此参数重启后失效\n")])])])]),t._v(" "),e("li",[e("p",[t._v("重启防火墙")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("firewall-cmd --reload #重启firewall\nsystemctl stop firewalld.service #停止firewall 防火墙\nsystemctl disable firewalld.service #禁止firewall 防火墙开机启动\n\n\nfirewall-cmd --state #查看默认防火墙状态（关闭后显示notrunning，开启后显示running）\n")])])])])]),t._v(" "),e("h4",{attrs:{id:"source-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#source-命令","aria-hidden":"true"}},[t._v("#")]),t._v(" source 命令")]),t._v(" "),e("blockquote",[e("p",[t._v("通常用于重新执行刚修改的初始化文件，使之立即生效，而不必注销并重新登录。例如，当我们修改了/etc/profile文件，并想让它立刻生效，而不用重新登录，就可以使用source命令，如“source  /etc/profile”。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("source /etc/profile\n\nsource filename #filename必须是可执行的脚本文件\n或者\n. filename  #注意“.”号后面还有一个空格\n\n")])])]),e("p",[t._v("安装了多少个软件包 "),e("strong",[t._v("rpm -qa | wc -l")])]),t._v(" "),e("p",[t._v("安装了那些软件包  "),e("strong",[t._v("rpm -qa | sort")])]),t._v(" "),e("p",[t._v("查看磁盘剩余空间信息 "),e("strong",[t._v("df -hl")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("df    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("h                     查看整台服务器的硬盘使用情况\n\ncd    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("                       进入根目录\n\ndu   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("sh    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("              查看每个文件夹的大小\n")])])]),e("p",[e("code",[t._v("rpm -ql nginx")])]),t._v(" "),e("p",[t._v("rpm 是linux的rpm包管理工具，-q 代表询问模式，-l 代表返回列表，这样我们就可以找到nginx的所有安装位置了。")]),t._v(" "),e("p",[t._v("可以通过查看"),e("code",[t._v("Cat /etc/xxx-release")]),t._v(" XX为发行版名称。如 centos-release")]),t._v(" "),e("h3",{attrs:{id:"apache在linux系统上的启动与停止"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apache在linux系统上的启动与停止","aria-hidden":"true"}},[t._v("#")]),t._v(" apache在linux系统上的启动与停止")]),t._v(" "),e("p",[e("code",[t._v("service httpd status")]),t._v("查看httpd的运行状态")]),t._v(" "),e("p",[t._v("使用"),e("code",[t._v("service httpd stop")]),t._v("可以停止httpd")]),t._v(" "),e("p",[t._v("使用"),e("code",[t._v("service httpd start")]),t._v("可以启动httpd")]),t._v(" "),e("p",[t._v("也可以使用通用的命令")]),t._v(" "),e("p",[t._v("启动"),e("code",[t._v("systemctl start httpd.service")])]),t._v(" "),e("p",[t._v("停止"),e("code",[t._v("systemctl stop httpd.service")])]),t._v(" "),e("p",[t._v("重启 "),e("code",[t._v("systemctl restart httpd.service")])]),t._v(" "),e("h3",{attrs:{id:"linux用户管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux用户管理","aria-hidden":"true"}},[t._v("#")]),t._v(" linux用户管理")]),t._v(" "),e("h4",{attrs:{id:"添加默认用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加默认用户","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加默认用户")]),t._v(" "),e("p",[e("code",[t._v("useradd test")])]),t._v(" "),e("p",[t._v("默认会建立用户家目录， 且权限为700  但是建立好的账号需要设置密码没有密码是不可以登录的")]),t._v(" "),e("h4",{attrs:{id:"为-test-用户添加密码-如果passwd后面不跟参数表现修改当前用户的密码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为-test-用户添加密码-如果passwd后面不跟参数表现修改当前用户的密码","aria-hidden":"true"}},[t._v("#")]),t._v(" 为 test 用户添加密码    如果passwd后面不跟参数表现修改当前用户的密码")]),t._v(" "),e("p",[e("code",[t._v("passwd test")])]),t._v(" "),e("p",[t._v("passwd 其他的参数")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("passwd [-k] [-l] [-u [-f]] [-d] [-S] [username]\n\n必要参数：\n\n-d 删除密码\n-f 强制执行\n-k 更新只能发送在过期之后\n-l 停止账号使用\n-S 显示密码信息\n-u 启用已被停止的账户\n-x 设置密码的有效期\n-g 修改群组密码\n-i 过期后停止用户账号\n选择参数：\n\n--help 显示帮助信息\n--version 显示版本信息\n")])])]),e("h5",{attrs:{id:"passwd-l-test-表示停止test账户使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#passwd-l-test-表示停止test账户使用","aria-hidden":"true"}},[t._v("#")]),t._v(" passwd -l test  表示停止test账户使用")]),t._v(" "),e("h4",{attrs:{id:"删除用户帐号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除用户帐号","aria-hidden":"true"}},[t._v("#")]),t._v(" 删除用户帐号")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("userdel [-r][用户帐号]\n")])])]),e("p",[e("strong",[t._v("参数说明")]),t._v("：")]),t._v(" "),e("ul",[e("li",[t._v("-r 　删除用户登入目录以及目录中所有文件。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("userdel -r test  删除test用户\n")])])])])},[],!1,null,null,null);a.default=s.exports}}]);